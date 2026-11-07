"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ease = "expo.out";

// All motion on the page, told in the manifest's own mechanics:
// the bill feeds in like tractor paper, cargo lines print under a moving head,
// the closing line is sprayed through a stencil, and the seal swings on its cable.
// Everything renders finished by default; motion only ever plays from that state.
export function Shipment({ children, className }: { children: React.ReactNode; className?: string }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // A tab opened in the background would stall on the first frame; show it finished instead.
        if (document.visibilityState === "visible") {
          // Pages carry different parts of the bill; only the parts present join the sequence
          const has = (selector: string) => Boolean(scope.current?.querySelector(selector));
          const load = gsap.timeline({ delay: 0.15 });
          // Three feed ticks, one hole pitch each.
          // Scroll triggers measured mid-feed would sit 72px low; measure again once the paper stops.
          if (has("[data-sheet]"))
            load.from("[data-sheet]", { y: 72, duration: 0.36, ease: "steps(3)", onComplete: () => ScrollTrigger.refresh() }, 0);
          if (has("[data-route-line]"))
            load
              .from("[data-route-line]", { scaleX: 0, transformOrigin: "left center", duration: 1.1, ease }, 0)
              .from("[data-route-head]", { xPercent: -60, opacity: 0, duration: 0.5, ease }, "-=0.45")
              .from("[data-route-end]", { opacity: 0.15, filter: "blur(6px)", duration: 0.6, ease }, "<");
          if (has("[data-stamp-none]"))
            load.from(
              "[data-stamp-none]",
              { scale: 1.9, opacity: 0, rotate: -14, filter: "blur(3px)", duration: 0.42, ease: "power4.in" },
              "+=0.05",
            );
          if (has("[data-seal]"))
            load.from("[data-seal]", { rotate: -24, y: -10, transformOrigin: "12% 50%", duration: 1.2, ease }, "-=0.1");
        }

        // Each cargo line is printed once, left to right, as a dot-matrix head passes over it
        gsap.utils.toArray<HTMLElement>("[data-print-line]").forEach((line) => {
          const head = line.querySelector("[data-print-head]");
          gsap
            .timeline({ scrollTrigger: { trigger: line, start: "top bottom", once: true } })
            .set(head, { opacity: 1 })
            .from(line, { clipPath: "inset(0 100% 0 0)", duration: 0.75, ease: "steps(32)" }, 0)
            .fromTo(head, { x: 0 }, { x: () => line.clientWidth, duration: 0.75, ease: "steps(32)" }, 0)
            .to(head, { opacity: 0, duration: 0.15 });
        });

        // Paint sprayed through the stencil: a soft edge travels across the lettering
        gsap.utils.toArray<HTMLElement>("[data-spray]").forEach((el) => {
          gsap.fromTo(
            el,
            {
              maskImage: "linear-gradient(90deg, black 40%, transparent 60%)",
              maskSize: "260% 100%",
              maskPosition: "100% 0%",
              opacity: 0.35,
            },
            {
              maskPosition: "0% 0%",
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              clearProps: "maskImage,maskSize,maskPosition,opacity",
              scrollTrigger: { trigger: el, start: "top 80%", once: true },
            },
          );
        });

        // The seal swings on its cable when pointed at, and settles back.
        // GSAP folds the tab's CSS rotate (-4deg) into its transform, so these angles are absolute.
        const seal = scope.current?.querySelector<HTMLElement>("[data-seal-tab]");
        if (seal && contextSafe) {
          const swing = contextSafe(() => {
            gsap
              .timeline({ overwrite: true })
              .to(seal, { rotate: -9, duration: 0.18, ease: "sine.out" })
              .to(seal, { rotate: 1, duration: 0.32, ease: "sine.inOut" })
              .to(seal, { rotate: -6, duration: 0.3, ease: "sine.inOut" })
              .to(seal, { rotate: -4, duration: 0.4, ease: "sine.out" });
          });
          seal.addEventListener("pointerenter", swing);
          return () => seal.removeEventListener("pointerenter", swing);
        }
      });

      // Reduced motion: the page is the finished bill, already printed and painted.
      // State feedback (hover colours, the Copied label) still changes, just without travel.

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <main ref={scope} id="bill" className={className}>
      {children}
    </main>
  );
}
