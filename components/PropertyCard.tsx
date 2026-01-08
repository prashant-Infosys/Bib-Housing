"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Ruler, Heart } from "lucide-react";
import type { Property } from "@/app/data/dummy_15";
import IKImage from "./IKImage";
import { useWishlist } from "@/app/context/WishlistContext";

function formatPrice(v?: number | null) {
  if (v == null) return "Contact";
  if (v >= 1e7) return `₹ ${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹ ${(v / 1e5).toFixed(2)} L`;
  return `₹ ${v.toLocaleString()}`;
}

interface PropertyCardProps {
  property: Property;
  variant?: "grid" | "list";
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { has, toggle } = useWishlist();
  const [isMounted, setIsMounted] = useState(false);

  const {
    title,
    slug,
    owner,
    images,
    verified,
    location,
    units,
    price,
    rent,
    priceRange,
    listingType,
    id,
    category,
    possessionDate,
    builtUpArea,
    propertyType
  } = property;

  // Hydration fix to match your context logic
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isSaved = isMounted ? has(id) : false;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    toggle(id);
  };

  const imageSrc = images?.[0] || "/property-sample.jpg";
  const locationLabel = `${location?.address || ""}${
    location?.city ? `, ${location.city}` : ""
  }`.trim();

  const priceLabel = priceRange
    ? `${formatPrice(priceRange.min)} - ${formatPrice(priceRange.max)}`
    : listingType === "Rent"
    ? rent
      ? `${formatPrice(rent)} /mo`
      : "Contact"
    : formatPrice(price);

  return (
    <Link href={`/properties/${slug ?? id}`} className="block h-full">
      <Card className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 h-full py-0 group relative">
        <div className="flex flex-col h-full">
          {/* Image Section */}
          <div className="relative h-56 w-full overflow-hidden">
            <IKImage
              path={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Top Left Badges */}
            <div className="absolute top-2.5 left-2.5 flex flex-row items-center gap-2 max-w-[70%] z-10">
              {verified && (
                <Badge className="bg-white/20 backdrop-blur-md border border-white/40 text-black font-semibold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="drop-shadow-[0_0_5px_rgba(52,211,153,0.6)]">Verified</span>
                </Badge>
              )}

              {category === "upcoming" && (
                <Badge className="bg-white/20 backdrop-blur-md border border-white/30 text-black font-semibold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <span className="text-xs leading-none opacity-90">✧</span>
                  <span>Upcoming</span>
                </Badge>
              )}
            </div>

            {/* Wishlist Icon Integration */}
            <button
              onClick={handleWishlistToggle}
              className="absolute top-3 right-3 z-20 p-1.5 transition-all duration-300 active:scale-75"
              aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart 
                className={`h-6 w-6 transition-all duration-300 drop-shadow-md ${
                  isSaved 
                    ? "fill-[#ff4466] text-[#ff4466]" 
                    : "text-white/90 hover:text-white"
                }`} 
              />
            </button>

            {/* Gradient overlay for icon visibility */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Content Section */}
          <CardContent className="flex flex-col justify-between p-4 flex-1">
            <div>
              <h3 className="text-lg font-semibold line-clamp-1">{title} </h3>
              <h3 className="text-sm line-clamp-1 text-muted-foreground">By {owner.name}</h3>

              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span className="line-clamp-1">{locationLabel}</span>
              </div>
              
              {units && units.length > 0 && (
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(units.map((u) => u.bhk))].map((unitLabel) => {
                      const isPlot = propertyType === "Plot/Land" || unitLabel.toLowerCase().includes("plot");
                      const displayLabel = isPlot 
                        ? unitLabel 
                        : unitLabel.toLowerCase().includes("bhk") 
                          ? unitLabel 
                          : `${unitLabel.split(" ")[0]} BHK`;

                      return (
                        <span
                          key={unitLabel}
                          className="px-2 py-0.5 bg-secondary/50 border border-border rounded text-[14px] font-medium text-foreground whitespace-nowrap"
                        >
                          {displayLabel}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-2 flex items-center justify-between gap-2">
              {possessionDate && (
                <div className="flex items-center gap-1 px-1.5 py-1 bg-blue-50/50 border border-blue-100 rounded text-[10px] font-medium text-blue-700 shrink-0">
                  <span className="uppercase opacity-70">Pos:</span>
                  <span className="whitespace-nowrap">
                    {new Date(possessionDate).toLocaleDateString("en-IN", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}

              {builtUpArea && (
                <div className="flex items-center gap-1 px-1.5 py-1 bg-amber-50/50 border border-amber-100 rounded text-[10px] font-medium text-amber-700 shrink-0">
                  <Ruler className="h-3 w-3 opacity-70" />
                  <span className="whitespace-nowrap">{builtUpArea} Acres</span>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t flex items-center justify-between">
              <span className="text-xs uppercase text-muted-foreground">
                {propertyType}
              </span>
              <span className="bg-[#ff4466] text-white px-3 py-1.5 font-bold text-sm">
                {priceLabel}
              </span>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}