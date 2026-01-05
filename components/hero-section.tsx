"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

/* -----------------------------
   Projects (card + background)
   ----------------------------- */
const PROJECTS = [
  {
    id: "assotech-hills-upcoming-001",
    name: "Assotech Hills",
    developer: "Assotech Group",
    priceRange: "₹50.6L – ₹1Cr",
    heroBg: "/palm-hill-bg.jpg",
    coverImage: "/palm-hill.jpg",
  },
  {
    id: "faii-residency-upcoming-010",
    name: "Faii Residency",
    developer: "Faquiha Group",
    priceRange: "₹50.6L – ₹1Cr",
    heroBg: "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(1).jpg",
    coverImage: "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(1).jpg",
  },
  {
    id: "one-residency-upcoming-022",
    name: "One Residency",
    developer: "Pratistha Buildcon",
    priceRange: "₹50.6L – ₹1Cr",
    heroBg: "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(1).jpg",
    coverImage: "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(1).jpg",
  },
  {
    id: "oak-forest-upcoming-021",
    name: "Oak Forest",
    developer: "NKCPL Group",
    priceRange: "₹50.6L – ₹1Cr",
    heroBg: "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(1).jpg",
    coverImage: "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(1).jpg",
  },{
    id: "utopian-heights-upcoming-035",
    name: "Utopian Heights",
    developer: "AHDLP Group",
    priceRange: "₹50.6L – ₹1Cr",
    heroBg: "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(1).jpg",
    coverImage: "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(1).jpg",
  },{
    id: "vicint-marqius-upcoming-037",
    name: "Vicint Marqius",
    developer: "Vicint Homes Pvt Ltd",
    priceRange: "₹50.6L – ₹1Cr",
    heroBg: "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(1).jpg",
    coverImage: "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(1).jpg",
  }
];

const AUTO_PLAY_MS = 5000;

/* -----------------------------
   Fibonacci-style cluster thumbs
   ----------------------------- */
type ClusterThumb = {
  src: string;
  size: number; // px
  className: string; // positioning + z-index
};

const CLUSTER_THUMBS: ClusterThumb[] = [
  // main large card (focus)
  {
    src: "/bib-1.jpg",
    size: 120,
    className: "top-5 right-16 translate-x-3 rotate-[2deg] z-40 shadow-xl",
  },
  // slightly smaller, overlapping bottom-right
  {
    src: "/bib-2.jpg",
    size: 120,
    className: "bottom-12 right-15 rotate-[-3deg] z-30 shadow-lg",
  },
  // left bottom card
  {
    src: "/bib-3.jpg",
    size: 110,
    className: "bottom-10 left-5 -translate-x-4 rotate-[1deg] z-20 shadow-md",
  },
  // mid-left, slightly above
  {
    src: "/bib-4.jpg",
    size: 90,
    className: "top-16 -left-3 rotate-[-2deg] z-30 shadow-md",
  },
  // near center, small accent
  {
    src: "/bib-5.jpg",
    size: 72,
    className: "top-10 left-20 rotate-[1deg] z-40 shadow-lg",
  },
  // tiny overlap near main card
  {
    src: "/bib-6.jpg",
    size: 90,
    className: "top-30 right-35 rotate-[-4deg] z-40 shadow-xl",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % PROJECTS.length),
      AUTO_PLAY_MS
    );
    return () => clearInterval(id);
  }, []);

  const active = PROJECTS[activeIndex];

  return (
    <section className="relative overflow-hidden text-white ">
      {/* base color so we never see white flash */}
      <div className="absolute inset-0 -z-20 bg-black/40 min-h-[90dvh]" />

      {/* BACKGROUND that changes with the active card */}
      <div className="absolute inset-0 -z-10 min-h-[90dvh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0.9, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.8, scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 min-h-[90dvh]"
          >
            <Image
              src={active.heroBg}
              alt=""
              fill
              priority
              className="object-cover"
            />
            {/* tint overlay to match your brand color */}
            <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24  min-h-[90dvh]">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide backdrop-blur-sm">
              Zero-brokerage • RERA-verified
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Find your new home.
              <br />
              Experience Reinvented
              <br /> by Bib Housing.
            </h1>

            <p className="text-sm sm:text-base text-rose-50/90 max-w-md mt-6">
              {/* Bib Housing connects you directly with curated, RERA-verified
              projects—no buyer commission, no hidden fees, just better deals. */}
              Your home journey matters deeply to us, which is why we stay —
              transparent, dedicated, and completely free.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/assistance"
                className={buttonVariants({
                  className:
                    "text-sm bg-white text-rose-900 hover:bg-rose-50 font-medium",
                })}
              >
                Get free assistance
              </Link>
              <Link
                href="/properties"
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "text-sm border-white/60 text-black hover:text-black hover:bg-white/10",
                })}
              >
                Browse properties
              </Link>
            </div>

            <p className="text-xs text-rose-100/80">
              ✓ Shortlisted projects • ✓ Site visits &amp; negotiations • ✓
              End-to-end paperwork support
            </p>
          </motion.div>

          {/* RIGHT: overlapping Fibonacci-style cluster + sliding card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex flex-col items-center md:items-end gap-6"
          >
            <div className="relative h-80 w-80 hidden md:block">
              {CLUSTER_THUMBS.map((thumb, idx) => (
                <motion.div
                  key={thumb.src}
                  initial={{ opacity: 0, scale: 0.6, y: 30 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.15,
                    ease: "easeOut",
                  }}
                  className={`absolute ${thumb.className} rounded-2xl`}
                >
                  {/* Floating Motion (starts AFTER pop-in) */}
                  <motion.div
                    animate={{
                      y: [0, -10, 5, -6, 0],
                      x: [0, 4, -4, 2, 0],
                    }}
                    transition={{
                      delay: 0.8 + idx * 0.2, // starts floating *after* pop-in
                      duration: 6 + idx,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    className="relative overflow-hidden rounded-xl"
                    style={{ height: thumb.size, width: thumb.size }}
                  >
                    <Image
                      src={thumb.src}
                      alt={`Featured home ${idx + 1}`}
                      fill
                      className="object-cover border-3 border-white rounded-xl"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Sliding card, synced with background */}
            <div className="w-full max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Clickable Card linking to /properties/[slug] */}
                  <Link
                    href={`/properties/${active.id}`}
                    className="flex items-center gap-4 rounded-xl bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-sm hover:bg-white transition-all group cursor-pointer border border-transparent hover:border-rose-100"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Featured Project
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900 truncate group-hover:text-rose-700 transition-colors">
                        {active.name}
                      </h3>
                      <p className="text-sm text-slate-500 truncate">
                        {active.developer}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {active.priceRange}
                      </p>
                    </div>
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl">
                      <Image
                        src={active.coverImage}
                        alt={active.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Dots control (Independent of the Link) */}
              <div className="mt-3 flex justify-end gap-2">
                {PROJECTS.map((project, idx) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 w-5 rounded-full transition-all ${
                      idx === activeIndex
                        ? "bg-rose-700"
                        : "bg-rose-200/70 hover:bg-rose-300"
                    }`}
                    aria-label={project.name}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
