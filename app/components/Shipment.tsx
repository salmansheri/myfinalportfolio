"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// The one authored moment: the route draws from schema to screen,
// the "no transshipment" stamp lands, and the seal tag settles on its cable.
export function Shipment({ children, className }: { children: React.ReactNode; className?: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // A tab opened in the background would stall on the first frame; show it finished instead.
      if (document.visibilityState !== "visible") return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ease = "expo.out";
        gsap
          .timeline({ delay: 0.15 })
          .from("[data-route-line]", { scaleX: 0, transformOrigin: "left center", duration: 1.1, ease })
          .from("[data-route-head]", { xPercent: -60, opacity: 0, duration: 0.5, ease }, "-=0.45")
          .from(
            "[data-route-end]",
            { opacity: 0.15, filter: "blur(6px)", duration: 0.6, ease },
            "<",
          )
          .from(
            "[data-stamp-none]",
            { scale: 1.9, opacity: 0, rotate: -14, filter: "blur(3px)", duration: 0.42, ease: "power4.in" },
            "+=0.05",
          )
          .from("[data-seal]", { rotate: -24, y: -10, transformOrigin: "12% 50%", duration: 1.2, ease }, "-=0.1");
      });
      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
