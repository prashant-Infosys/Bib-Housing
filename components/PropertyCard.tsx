// components/PropertyCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, BedDouble, Bath, Ruler } from "lucide-react";
import type { Property } from "@/app/data/dummy_15";
import IKImage from "./IKImage";

function formatPrice(v?: number | null) {
  if (v == null) return "Contact";
  if (v >= 1e7) return `₹ ${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹ ${(v / 1e5).toFixed(2)} L`;
  return `₹ ${v.toLocaleString()}`;
}

export default function PropertyCard({ property }: { property: Property }) {
  const {
    title,
    slug,
    images,
    verified,
    location,
    bhk,
    bathrooms,
    builtUpArea,
    price,
    rent,
    priceRange,
    listingType,
    id,
    category,
  } = property;

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
    <Link href={`/properties/${slug ?? id}`} className="block">
      <Card className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 h-full py-0">
        <div className="flex flex-col h-full">
          {/* Image Section (Fixed Height) */}
          <div className="relative h-56 w-full overflow-hidden">
            <IKImage
              path={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute top-3 left-3 flex gap-2">
              {verified && (
                <Badge className="bg-primary text-white text-xs px-2 py-1">
                  Verified
                </Badge>
              )}
              {category === "upcoming" && (
                <Badge className="bg-amber-100 text-amber-700 text-xs px-2 py-1">
                  Upcoming
                </Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <CardContent className="flex flex-col justify-between p-4 flex-1">
            <div>
              <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>

              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span className="line-clamp-1">{locationLabel}</span>
              </div>

              {/* Icons Row */}
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                {bhk && (
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4" />
                    {bhk} Beds
                  </div>
                )}

                {bathrooms && (
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {bathrooms} Baths
                  </div>
                )}

                {builtUpArea && (
                  <div className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    {builtUpArea} Sq.Ft.
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t flex items-center justify-between">
              <span className="text-xs uppercase text-muted-foreground">
                {listingType === "Sale" ? "For Sale" : "For Rent"}
              </span>

              <span className="bg-[#E8FAF6] text-primary px-3 py-1.5 rounded-full font-semibold text-sm">
                {priceLabel}
              </span>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
