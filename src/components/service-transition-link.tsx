"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, type ReactNode, useState } from "react";

type ServiceTransitionLinkProps = {
  href: string;
  accent: "yellow" | "coral" | "blue";
  className?: string;
  children: ReactNode;
  label: string;
};

export function ServiceTransitionLink({
  href,
  accent,
  className,
  children,
  label,
}: ServiceTransitionLinkProps) {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    event.preventDefault();
    setLeaving(true);
    window.setTimeout(() => router.push(href), 620);
  }

  return (
    <>
      <Link className={className} href={href} onClick={navigate} aria-label={label}>
        {children}
      </Link>
      <div className={`route-wipe route-wipe-${accent} ${leaving ? "is-active" : ""}`} aria-hidden="true">
        <span />
        <strong>{label}</strong>
      </div>
    </>
  );
}

