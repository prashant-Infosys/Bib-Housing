// app/properties/[slug]/_components/HeroClient.tsx
"use client";

import { motion } from "framer-motion";
import { BedDouble, Bath, Ruler } from "lucide-react";
import IKImage from "@/components/IKImage";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  priceLabel?: string;
  listingType?: string;
  bhk?: number;
  bathrooms?: number;
  builtUpArea?: number;
  ownerName?: string;
};

export default function HeroClient({
  title,
  subtitle,
  image,
  priceLabel,
  listingType,
  bhk,
  bathrooms,
  builtUpArea,
  ownerName
}: Props) {

  return (
    <section className="relative">
      <div className="rounded-lg overflow-hidden">
        <motion.div
          initial={{ scale: 1.03, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative h-64 sm:h-96 w-full"
        >
          <IKImage path={image} alt="back" w={1900} h={600} />
          {/* <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          /> */}
          <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/10 to-transparent" />
          {/* Title */}
          <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-lg text-white">
            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight drop-shadow-lg">
              {title}
            </h1>
            {ownerName && <p>by {ownerName}</p>}
            {subtitle && (
              <div className="mt-2 text-sm sm:text-base text-rose-100/90">
                {subtitle}
              </div>
            )}

            {/* small meta chips */}
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              {typeof bhk === "number" && (
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                  <BedDouble className="h-4 w-4" /> {bhk} BHK
                </div>
              )}
              {typeof bathrooms === "number" && (
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                  <Bath className="h-4 w-4" /> {bathrooms} Baths
                </div>
              )}
              {typeof builtUpArea === "number" && (
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                  <Ruler className="h-4 w-4" /> {builtUpArea} Sq. Ft.
                </div>
              )}
            </div>
          </div>

          {/* price badge bottom-right */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute right-6 bottom-6 rounded-lg bg-white/95 px-4 py-3 shadow"
          >
            <div className="text-xs text-muted-foreground">
              For {listingType}
            </div>
            <div className="mt-1 font-semibold text-lg text-rose-700">
              {priceLabel}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
