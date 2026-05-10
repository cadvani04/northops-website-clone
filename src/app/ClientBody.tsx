"use client";
import PageLoader from "@/components/PageLoader";
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
      <PageLoader>{children}</PageLoader>
    </div>
  );
}