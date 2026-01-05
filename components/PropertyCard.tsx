// components/PropertyCard.tsx
import React from "react";
import Link from "next/link";
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

// components/PropertyCard.tsx
export default function PropertyCard({ property }: { property: Property }) {
  const { title, slug, images, verified, location, bhk, bathrooms, builtUpArea, price, rent, priceRange, listingType, id, category } = property;

  const imageSrc = images?.[0] || "/property-sample.jpg";
  const locationLabel = `${location?.address || ""}${location?.city ? `, ${location.city}` : ""}`.trim();
  
  const priceLabel = priceRange
    ? `${formatPrice(priceRange.min)} - ${formatPrice(priceRange.max)}`
    : listingType === "Rent" ? (rent ? `${formatPrice(rent)} /mo` : "Contact") : formatPrice(price);

  return (
    <Link href={`/properties/${slug ?? id}`} className="block">
      <Card className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 h-full py-0">
        <div className="flex flex-col h-full">
          {/* Image Section - Back to your original h-56 */}
          <div className="relative h-56 w-full overflow-hidden">
            <IKImage
              path={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute top-2.5 left-2.5 flex flex-row items-center gap-2 max-w-[95%]">
              {verified && (
                <Badge className="bg-white/20 backdrop-blur-md border border-white/40 text-black font-semibold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="drop-shadow-[0_0_5px_rgba(52,211,153,0.6)] whitespace-nowrap">Verified</span>
                </Badge>
              )}

              {category === "upcoming" && (
                <Badge className="bg-white/20 backdrop-blur-md border border-white/30 text-black font-semibold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <span className="text-xs leading-none opacity-90">✧</span>
                  <span className="drop-shadow-[0_0_5px_rgba(251,191,36,0.6)] whitespace-nowrap">Upcoming</span>
                </Badge>
              )}
            </div>
          </div>

          {/* Content - Original spacing and design */}
          <CardContent className="flex flex-col justify-between p-4 flex-1">
            <div>
              <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span className="line-clamp-1">{locationLabel}</span>
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                {bhk && <div className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{bhk} Beds</div>}
                {bathrooms && <div className="flex items-center gap-1"><Bath className="h-4 w-4" />{bathrooms} Baths</div>}
                {builtUpArea && <div className="flex items-center gap-1"><Ruler className="h-4 w-4" />{builtUpArea} Sq.Ft.</div>}
              </div>
            </div>

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
