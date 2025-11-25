"use client";

import React, { useState } from "react";
import Image from "next/image";

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
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className={`w-full ${className}`}>
        <div className="relative h-[420px] w-full bg-gray-100 flex items-center justify-center">
          <span className="text-muted-foreground">No image</span>
        </div>
      </div>
    );
  }

  const main = images[index] ?? images[0];

  return (
    <div className={className}>
      <div className="relative h-[420px] w-full rounded-lg overflow-hidden shadow">
        <Image
          src={main}
          alt={`${alt} - ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-3 gap-3 mt-3">
        {images.slice(0, 6).map((src, i) => {
          const isActive = i === index;
          return (
            <button
              key={src + i}
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative h-28 rounded overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-primary ${
                isActive ? "ring-2 ring-offset-1 ring-primary" : ""
              }`}
              type="button"
            >
              <Image
                src={src}
                alt={`${alt} - ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
