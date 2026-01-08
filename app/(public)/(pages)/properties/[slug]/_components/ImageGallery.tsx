"use client";

import React, { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ImageIcon, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import IKImage from "@/components/IKImage";

type ImageGalleryProps = {
  images: string[];
  alt?: string;
  height?: string; // height now defaults to something substantial for the grid
};

export default function ImageGallery({
  images = [],
  alt = "Property image",
  height = "h-[500px]",
}: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const validImages = useMemo(() => {
    if (!Array.isArray(images)) return [];
    return images.filter((img) => typeof img === "string" && img.trim() !== "");
  }, [images]);

  if (validImages.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100 text-sm text-muted-foreground flex-col gap-2">
        <ImageIcon className="h-8 w-8 opacity-50" />
        <span>No images available</span>
      </div>
    );
  }

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const next = () => setIndex((p) => (p + 1) % validImages.length);
  const prev = () => setIndex((p) => (p - 1 + validImages.length) % validImages.length);

  // We show up to 5 images in the Bento Grid
  const remainingCount = validImages.length - 5;

  return (
    <>
      <div className={`relative group w-full ${height} overflow-hidden rounded-xl`}>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-full">
          
          {/* 1. Main Large Image (Spans 2 rows, 2 columns) */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-gray-100">
            <button onClick={() => openAt(0)} className="w-full h-full relative block">
              <IKImage
                path={validImages[0]}
                alt={`${alt} 1`}
                fill={true}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </button>
          </div>

          {/* 2. Top Right Slots */}
          <div className="hidden md:block relative overflow-hidden bg-gray-100">
            <button onClick={() => openAt(1)} className="w-full h-full relative block">
              <IKImage
                path={validImages[1] || validImages[0]}
                alt={`${alt} 2`}
                fill={true}
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </button>
          </div>

          <div className="hidden md:block relative overflow-hidden bg-gray-100">
            <button onClick={() => openAt(2)} className="w-full h-full relative block">
              <IKImage
                path={validImages[2] || validImages[0]}
                alt={`${alt} 3`}
                fill={true}
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </button>
          </div>

          {/* 3. Bottom Right Slots */}
          <div className="hidden md:block relative overflow-hidden bg-gray-100">
            <button onClick={() => openAt(3)} className="w-full h-full relative block">
              <IKImage
                path={validImages[3] || validImages[0]}
                alt={`${alt} 4`}
                fill={true}
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </button>
          </div>

          {/* 4. The Overlay Slot (5th Image) */}
          <div className="hidden md:block relative overflow-hidden bg-gray-100">
            <button onClick={() => openAt(4)} className="w-full h-full relative block group/last">
              <IKImage
                path={validImages[4] || validImages[0]}
                alt={`${alt} 5`}
                fill={true}
                className={`object-cover transition-transform duration-500 group-hover/last:scale-110 ${remainingCount > 0 ? "blur-[1px] brightness-75" : ""}`}
              />
              {remainingCount > 0 && (
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white pointer-events-none">
                  <span className="text-xl font-bold">+{remainingCount}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Photos</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Floating "View All" Button */}
        <button 
          onClick={() => openAt(0)}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur shadow-sm border border-slate-200 text-slate-900 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#ff6b00] hover:text-white transition-all"
        >
          <Maximize2 className="h-4 w-4" />
          View Gallery
        </button>
      </div>

      {/* --- Lightbox Dialog (Keep your existing one) --- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader className="sr-only">
          <DialogTitle>Image Gallery</DialogTitle>
        </DialogHeader>

        <DialogContent className="bg-black/95 border-none p-0 text-white max-w-[100vw] h-screen sm:h-auto sm:max-w-5xl">
          <div className="relative flex h-full sm:h-[85vh] w-full items-center justify-center">
            {validImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 z-50 rounded-full bg-white/10 p-2 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full p-4 md:p-10"
              >
                <IKImage
                  path={validImages[index]}
                  alt={`${alt} ${index + 1}`}
                  className="object-contain"
                  fill={true}
                />
              </motion.div>
            </AnimatePresence>

            {validImages.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 z-50 rounded-full bg-white/10 p-2 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            )}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md">
              {index + 1} / {validImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}