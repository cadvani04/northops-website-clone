"use client";

import { useEffect, useRef, useState } from "react";

const MIN_VISIBLE_MS = 750;
const FADE_OUT_MS = 550;
const FADE_OUT_REDUCED_MS = 160;
/** Safety if `load` never fires (blocked asset, extension, etc.) */
const FALLBACK_MS = 4000;

/**
 * Full-viewport branded splash shown until `window.load` (+ minimum dwell time),
 * then fades out. Initial `visible` is true so the first SSR HTML includes the overlay.
 */
export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const ran = useRef(false);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    const minMs = reduced ? 0 : MIN_VISIBLE_MS;
    const fadeMs = reduced ? FADE_OUT_REDUCED_MS : FADE_OUT_MS;

    const start = performance.now();
    let fallbackId: number | undefined;

    const scheduleHide = () => {
      if (ran.current) return;
      ran.current = true;
      if (fallbackId !== undefined) window.clearTimeout(fallbackId);

      const elapsed = performance.now() - start;
      const waitExtra = Math.max(0, minMs - elapsed);
      window.setTimeout(() => {
        setLeaving(true);
        window.setTimeout(() => setVisible(false), fadeMs);
      }, waitExtra);
    };

    if (document.readyState === "complete") {
      scheduleHide();
    } else {
      window.addEventListener("load", scheduleHide, { once: true });
      fallbackId = window.setTimeout(scheduleHide, FALLBACK_MS);
    }

    return () => {
      if (fallbackId !== undefined) window.clearTimeout(fallbackId);
      window.removeEventListener("load", scheduleHide);
    };
  }, []);

  return (
    <>
      {children}
      {visible && (
        <div
          className={`splash-screen fixed inset-0 z-[200] flex items-center justify-center bg-cream ${
            leaving ? "splash-screen--out" : ""
          }`}
          aria-hidden="true"
        >
          <div className="splash-logo-wrap">
            <img
              src="/northops-logo.png"
              alt=""
              width={707}
              height={353}
              className="h-16 w-auto object-contain md:h-[4.5rem]"
              decoding="async"
            />
          </div>
        </div>
      )}
    </>
  );
}
