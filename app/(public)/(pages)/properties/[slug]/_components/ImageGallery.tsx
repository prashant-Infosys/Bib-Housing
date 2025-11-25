// ImageGallery.tsx
"use client";

import React, { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import IKImage from "@/components/IKImage"; // Your custom ImageKit component

type ImageGalleryProps = {
  images: string[];
  alt?: string;
};

export default function ImageGallery({
  images = [],
  alt = "Property image",
}: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // 1. CORRECTED FILTER: Now accepts ImageKit paths (e.g., "bib/palm-hills/A.png")
  const validImages = useMemo(() => {
    if (!Array.isArray(images)) return [];

    return images.filter((img) => {
      // The only checks needed now are ensuring it's a non-empty string.
      // The IKImage component handles the construction of the final URL.
      return typeof img === "string" && img.trim() !== "";
    });
  }, [images]);

  if (validImages.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100 text-sm text-muted-foreground flex-col gap-2">
        <ImageIcon className="h-8 w-8 opacity-50" />
        <span>No images available</span>
      </div>
    );
  }

  const visible = validImages.slice(0, 3);
  const extra = validImages.length - visible.length;

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const next = () => setIndex((p) => (p + 1) % validImages.length);
  const prev = () =>
    setIndex((p) => (p - 1 + validImages.length) % validImages.length);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Large Primary Preview */}
        <div className="sm:col-span-2">
          <button
            onClick={() => openAt(0)}
            className="relative block w-full h-64 sm:h-80 rounded-lg overflow-hidden cursor-pointer bg-gray-100"
            aria-label="Open gallery"
          >
            <IKImage
              path={validImages[0]}
              alt={`${alt} 1`}
              fill={true} // Use fill for cover behavior
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </button>
        </div>

        {/* Side Thumbnails */}
        <div className="flex flex-col gap-3 h-64 sm:h-80">
          {visible.slice(1).map((src, i) => {
            const realIndex = i + 1;
            const isLastVisible = i === visible.slice(1).length - 1;
            const showCountOverlay = isLastVisible && extra > 0;

            return (
              <button
                key={realIndex}
                onClick={() => openAt(realIndex)}
                className="relative flex-1 rounded-lg overflow-hidden cursor-pointer bg-gray-100"
                aria-label={`Open image ${realIndex + 1}`}
              >
                <IKImage
                  path={src}
                  alt={`${alt} ${realIndex + 1}`}
                  fill={true} // Use fill for thumbnails
                  className={`object-cover ${
                    showCountOverlay ? "filter blur-[2px]" : ""
                  }`}
                />

                {showCountOverlay && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold hover:bg-black/50 transition-colors">
                    +{extra}
                  </div>
                )}
              </button>
            );
          })}

          {/* Fallback if only 1 image exists to fill space */}
          {visible.length < 2 && (
            <div className="flex-1 rounded-lg bg-gray-50 border border-dashed flex items-center justify-center text-muted-foreground text-xs">
              More photos coming soon
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        {/* Visually hidden title for accessibility */}
        <DialogHeader className="sr-only">
          <DialogTitle>Image Gallery</DialogTitle>
        </DialogHeader>

        <DialogContent className="bg-black/95 border-none p-0 text-white max-w-[100vw] h-screen sm:h-auto sm:max-w-5xl">
          <div className="relative flex h-full sm:h-[85vh] w-full items-center justify-center">
            {/* Prev Button */}
            {validImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 z-50 rounded-full bg-white/10 p-2 hover:bg-white/20 backdrop-blur-sm transition-all"
                aria-label="Previous image"
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
                  fill={true} // Use fill for the lightbox main image
                />
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            {validImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 z-50 rounded-full bg-white/10 p-2 hover:bg-white/20 backdrop-blur-sm transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md">
              {index + 1} / {validImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
