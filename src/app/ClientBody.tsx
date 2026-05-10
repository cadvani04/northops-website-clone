"use client";
import PageLoader from "@/components/PageLoader";
import CalendlyScheduleBridge from "@/components/CalendlyScheduleBridge";
import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased font-sans";
  }, []);

  return (
    <div className="antialiased">
      <CalendlyScheduleBridge />
      <PageLoader>{children}</PageLoader>
    </div>
  );
}