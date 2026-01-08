"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[] | undefined;
  alt?: string;
  className?: string;
};

export default function ImageGallery({
  images = [],
  alt = "property",
  className = "",
}: Props) {
  if (!images || images.length === 0) {
    return (
      <div className={`w-full ${className}`}>
        <div className="relative h-[450px] w-full bg-slate-50 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-slate-200">
          <Camera className="h-12 w-12 text-slate-300 mb-3" />
          <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">No Photos Available</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Mosaic Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[500px]">
        
        {/* Main Large Featured Image */}
        <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg border border-slate-100">
          <Image
            src={images[0]}
            alt={`${alt} - Main`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all" />
        </div>

        {/* Smaller Side Images */}
        {images.slice(1, 5).map((src, i) => (
          <div 
            key={i} 
            className="hidden md:block relative group cursor-pointer overflow-hidden rounded-2xl shadow-md border-2 border-white"
          >
            <Image
              src={src}
              alt={`${alt} view ${i + 2}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay for the last image if there are more than 5 total */}
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center text-white">
                <Maximize2 className="h-6 w-6 mb-1" />
                <span className="text-sm font-black">+{images.length - 5} More</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all" />
          </div>
        ))}
      </div>

      {/* Mobile/Thumbnail Scroller */}
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 h-20 w-32 rounded-xl overflow-hidden cursor-pointer snap-start border-2 border-transparent hover:border-[#ff6b00] transition-all"
          >
            <Image src={src} alt="thumb" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}