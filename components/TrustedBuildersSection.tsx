"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  ShieldCheck,
  MapPin,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BUILDERS } from "@/app/data/builder";

export default function TrustedBuildersSection() {
  // 1. Setup Autoplay to stop on mouse enter
  const autoplayOptions = {
    delay: 1800,
    stopOnInteraction: false,
    stopOnMouseEnter: true, // Stops carousel when hovering over any card
    playOnInit: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
      containScroll: false,
    },
    [Autoplay(autoplayOptions)]
  );

  // 2. Restart Logic: When component mounts (e.g., clicking 'back'), 
  // wait 2 seconds then start the carousel.
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    // Stop immediately on mount to ensure the 2s delay logic
    autoplay.stop();

    const timer = setTimeout(() => {
      autoplay.play();
    }, 2000);

    return () => {
      clearTimeout(timer);
      autoplay.stop();
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const trustedBuilders = BUILDERS.filter(
    (builder) => builder.trusted === true
  );

  return (
    <section className="bg-[#ffffff] relative py-3 px-0 mt-0 overflow-hidden">
      <div className="mx-auto max-w-7xl px-0 py-0">
        <div className="relative overflow-hidden rounded-3xl bg-[#EBE9D7] border border-[#eae3dd] px-6 py-2 md:px-12">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-rose-100/50 blur-3xl" />
          
          <div className="relative flex flex-col items-center text-center space-y-0">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Work only with 
                <span className="text-primary relative ml-3 inline-block">
                  TRUSTED BUILDERS
                  <svg 
                    className="absolute -bottom-5 left-0 w-full h-5 text-rose-400" 
                    viewBox="0 0 100 20" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M5 2 Q 50 18 95 2" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      fill="transparent" 
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <p className="text-slate-600 max-w-2xl text-base md:text-lg leading-relaxed pt-2">
              We partner exclusively with RERA-approved developers with a proven track record.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel px-2 lg:px-4">
          <button
            onClick={scrollPrev}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-slate-200 bg-white shadow-md hover:bg-rose-600 hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 hidden lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-5">
              {trustedBuilders.map((builder) => (
                <div
                  key={builder.id}
                  className="flex-[0_0_85%] md:flex-[0_0_48%] lg:flex-[0_0_23.8%] min-w-0 pl-5"
                >
                  <Link
                    href={`/builders/${builder.id}`}
                    className="group block h-full py-4"
                  >
                    {/* SOLID BACKGROUND CARD */}
                    <div 
                      style={{ '--builder-color': builder.color || '#e11d48' } as React.CSSProperties}
                      className="relative flex flex-col h-full bg-white border border-slate-200/60 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--builder-color)]"
                    >
                      <CardHeader className="p-6 pb-0 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 overflow-hidden relative">
                            {builder.logoUrl ? (
                              <img
                                src={builder.logoUrl}
                                alt={builder.name}
                                className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                              />
                            ) : (
                              <Building2 className="h-7 w-7 text-slate-300" />
                            )}
                          </div>
                          <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                            <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                            <span className="text-xs font-bold text-amber-700">
                              {builder.rating}
                            </span>
                          </div>
                        </div>

                        <div>
                          <CardTitle className="text-lg font-bold text-slate-900 line-clamp-1 transition-colors duration-300 group-hover:text-[var(--builder-color)]">
                            {builder.name}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1 text-slate-500 text-xs">
                            <MapPin className="h-3.5 w-3.5" /> {builder.city}
                          </CardDescription>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {builder.trusted && (
                            <Badge
                              variant="outline"
                              className="text-[10px] py-0.5 px-2 border-emerald-100 bg-emerald-50/50 text-emerald-700 font-bold uppercase tracking-wider"
                            >
                              <ShieldCheck className="mr-1 h-3 w-3" /> RERA
                            </Badge>
                          )}
                          {builder.tag && (
                            <Badge className="text-[10px] py-0.5 px-2 bg-rose-100 text-rose-700 border-none font-bold uppercase tracking-wider">
                              {builder.tag}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="p-6 pt-5">
                        <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-5">
                          <div className="space-y-0.5">
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                              Projects
                            </p>
                            <p className="font-bold text-slate-800 text-lg transition-colors duration-300 group-hover:text-[var(--builder-color)]">
                              {builder.projects}+
                            </p>
                          </div>
                          <div className="space-y-0.5 border-l border-slate-50 pl-4">
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                              Experience
                            </p>
                            <p className="font-bold text-slate-800 text-lg transition-colors duration-300 group-hover:text-[var(--builder-color)]">
                              {builder.years}Y
                            </p>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="p-6 pt-0 mt-auto">
                        <div className="w-full flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-widest transition-colors duration-300 group-hover:text-[var(--builder-color)]">
                          <span>Portfolio</span>
                          <div className="h-8 w-8 rounded-full border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--builder-color)] group-hover:border-[var(--builder-color)] group-hover:text-white">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </CardFooter>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-slate-200 bg-white shadow-md hover:bg-rose-600 hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 hidden lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}