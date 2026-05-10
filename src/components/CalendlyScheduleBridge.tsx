"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Calendly inline iframe emits postMessage events to the parent window. */
const CALENDLY_ORIGINS = new Set([
  "https://calendly.com",
  "https://www.calendly.com",
]);

function isScheduledEvent(payload: unknown): boolean {
  if (typeof payload !== "object" || payload === null) return false;
  return (payload as { event?: string }).event === "calendly.event_scheduled";
}

export default function CalendlyScheduleBridge() {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!CALENDLY_ORIGINS.has(e.origin)) return;
      if (!isScheduledEvent(e.data)) return;

      const eventId = crypto.randomUUID();

      window.fbq?.("track", "Schedule", {}, { eventID: eventId });

      void fetch("/api/meta-schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId,
          pageUrl: window.location.href,
        }),
      });
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
