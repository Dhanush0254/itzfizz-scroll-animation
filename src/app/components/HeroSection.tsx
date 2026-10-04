"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatCard {
  value: string;
  label: string;
  colorClass: string;
  posClass: string;
}

const stats: StatCard[] = [
  {
    value: "23%",
    label: "Decreased in customer phone calls",
    colorClass: "stat-card--blue",
    posClass: "stat-pos-1", // bottom-left (1st from left)
  },
  {
    value: "58%",
    label: "Increase in pick up point use",
    colorClass: "stat-card--yellow",
    posClass: "stat-pos-2", // top-left (2nd from left)
  },
  {
    value: "40%",
    label: "Decreased in customer phone calls",
    colorClass: "stat-card--orange",
    posClass: "stat-pos-3", // bottom-right (3rd from left)
  },
  {
    value: "27%",
    label: "Increase in pick up point use",
    colorClass: "stat-card--dark",
    posClass: "stat-pos-4", // top-right (4th from left)
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // =========================================
      // PHASE 1: INTRO LOAD ANIMATION
      // =========================================
      const introTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Headline fade in with slight upward motion
      introTl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 }
      );

      // Subtext staggered fade in
      introTl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

      // After intro plays, fade out overlay to reveal the track
      introTl.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            if (overlayRef.current) {
              overlayRef.current.style.pointerEvents = "none";
              overlayRef.current.style.display = "none";
            }
          },
        },
        "+=1.2"
      );

      // =========================================
      // PHASE 2: SCROLL-DRIVEN CAR ANIMATION
      // =========================================
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          // markers: true, // Uncomment for debugging
        },
      });

      // Car moves from left (-5%) to right (85%) of the road
      scrollTl.fromTo(
        carRef.current,
        { left: "-5%" },
        { left: "85%", ease: "none", duration: 0.8 },
        0
      );

      // Extra scroll: Car drives off the screen
      scrollTl.to(
        carRef.current,
        { left: "150%", ease: "power2.in", duration: 0.2 },
        0.8
      );

      // Trail grows from 0 to full width behind the car
      scrollTl.fromTo(
        trailRef.current,
        { width: "0%" },
        { width: "100%", ease: "none", duration: 0.8 },
        0
      );

      // Stat cards fade in sequentially as car passes them (left to right)
      const fadeInPoints = [0.30, 0.45, 0.60, 0.75];
      statRefs.current.forEach((ref, i) => {
        if (ref) {
          scrollTl.fromTo(
            ref,
            {
              opacity: 0,
              y: i % 2 === 0 ? 30 : -30, // Bottom stats (even indices) slide up, Top stats (odd indices) slide down
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            },
            fadeInPoints[i]
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-wrapper">
      {/* ===== HERO SCROLL SECTION ===== */}
      <section ref={sectionRef} className="hero-section" id="hero">
        <div className="hero-sticky">
          {/* Intro Overlay */}
          <div ref={overlayRef} className="intro-overlay">
            <h1 ref={headlineRef} className="intro-headline">
              WELCOME ITZFIZZ
            </h1>
            <p ref={subtextRef} className="intro-subtext">
              Scroll to explore
            </p>
          </div>

          {/* Track Area */}
          <div className="track-container">
            {/* Stat Cards */}
            {stats.map((stat, i) => (
              <div
                key={i}
                ref={(el) => { statRefs.current[i] = el; }}
                className={`stat-card ${stat.colorClass} ${stat.posClass}`}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}

            {/* Road */}
            <div ref={roadRef} className="road">
              {/* Green Trail */}
              <div ref={trailRef} className="trail">
                <span className="trail-text">WELCOME ITZFIZZ</span>
              </div>

              {/* Car */}
              <div ref={carRef} className="car-element">
                <img
                  src="/itzfizz-scroll-animation/car.png"
                  alt="Orange sports car top view"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
