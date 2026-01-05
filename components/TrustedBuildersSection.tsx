"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // Ensure this is installed
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
  // 1. Setup Autoplay with faster speed (2s) and playOnInit: false
  const autoplay = Autoplay({
    delay: 1800,
    stopOnInteraction: false,
    playOnInit: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true, // Loop must be true for infinite auto-scroll
      slidesToScroll: 1,
      containScroll: false,
    },
    [autoplay]
  );

  // 2. Hover handlers to trigger the carousel
  const handleMouseEnter = useCallback(() => {
    emblaApi?.plugins().autoplay.play();
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    emblaApi?.plugins().autoplay.stop();
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
    <section
      className="bg-amber-50 relative py-16 px-4 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Badge
            variant="secondary"
            className="bg-rose-50 text-rose-600 border-rose-100 px-4 py-1 font-bold text-[10px] uppercase tracking-widest"
          >
            Verified Partners
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Work only with{" "}
            <span className="text-rose-600">trusted builders</span>
          </h2>
          <p className="text-slate-500 max-w-xl text-base">
           
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel px-2 lg:px-4">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-slate-200 bg-white shadow-md hover:bg-rose-600 hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 hidden lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* 1. Added containScroll: false to the hook in your component top for smoother looping */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* 2. Changed 'gap-5' to '-ml-5' (Negative margin) */}
            <div className="flex -ml-5">
              {trustedBuilders.map((builder) => (
                <div
                  key={builder.id}
                  /* 3. Added 'pl-5' (Padding Left) to act as the gap. 
             This ensures Embla treats the space as part of the slide, 
             preventing the cards from touching during the loop jump. */
                  className="flex-[0_0_85%] md:flex-[0_0_48%] lg:flex-[0_0_23.8%] min-w-0 pl-5"
                >
                  <Link
                    href={`/builders/${builder.id}`}
                    className="group block h-full py-4"
                  >
                    <div className="relative flex flex-col h-full bg-white border border-slate-200/60 rounded-3xl shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-500 hover:-translate-y-1.5">
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
                          <CardTitle className="text-lg font-bold text-slate-900 line-clamp-1">
                            {builder.name}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1 text-slate-500 text-xs">
                            <MapPin className="h-3.5 w-3.5" /> {builder.city}
                          </CardDescription>
                        </div>

                        {/* RESTORED: DYNAMIC BADGES */}
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
                            <p className="font-bold text-slate-800 text-lg">
                              {builder.projects}+
                            </p>
                          </div>
                          <div className="space-y-0.5 border-l border-slate-50 pl-4">
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                              Experience
                            </p>
                            <p className="font-bold text-slate-800 text-lg">
                              {builder.years}Y
                            </p>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="p-6 pt-0 mt-auto">
                        <div className="w-full flex items-center justify-between text-xs font-bold text-rose-600 uppercase tracking-widest">
                          <span>Portfolio</span>
                          <div className="h-8 w-8 rounded-full border border-rose-100 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
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
