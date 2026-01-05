"use client";

import { motion } from "framer-motion";
import { BedDouble, Bath, ShieldCheck, MapPin, Info, Shield } from "lucide-react";
import IKImage from "@/components/IKImage";

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  description?: string; // Added Description prop
  priceLabel?: string;
  listingType?: string;
  bhk?: number;
  bathrooms?: number;
  ownerName?: string;
  titleStyle?: React.CSSProperties;
  titleClassName?: string;
  regId?: string;
  brandColor?: string;
};

export default function HeroClient({
  title,
  subtitle,
  image,
  description,
  priceLabel,
  listingType,
  ownerName,
  titleStyle,
  titleClassName,
  regId,
  brandColor
}: Props) {
  // Animation Variants
  const hoverReveal = {
    initial: { opacity: 0, y: 10, height: 0 },
    hover: { opacity: 0.9, y: 0, height: "auto" },
  };

  const badgeReveal = {
    initial: { opacity: 0, x: -10 },
    hover: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative group">
      <div className="rounded-lg overflow-hidden">
        <motion.div
          initial="initial"
          whileHover="hover" // Triggers children animations
          className="relative h-64 sm:h-[500px] w-full cursor-default"
        >
          <IKImage path={image} alt="back" w={1900} h={600} />

          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

          {/* Title Area */}
          <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-xl text-white">
            <h1
              className={`font-black uppercase leading-[0.9] tracking-tighter text-5xl md:text-7xl ${
                titleClassName || ""
              }`}
              style={titleStyle}
            >
              {title}
            </h1>

            {ownerName && (
              <p className="mt-2 font-medium text-white/80">by {ownerName}</p>
            )}

            {/* DESCRIPTION: Updated to show full text on hover */}
            <motion.div
  variants={hoverReveal}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  className="overflow-hidden"
>
  {description && (
    <div 
      className="mt-4 p-4 rounded-xl backdrop-blur-md border border-white/20 shadow-lg"
      style={{ 
        /* brandColor with roughly 80% opacity */
        backgroundColor: `${brandColor}CC`, 
      }}
    >
      <p className="text-sm md:text-base text-white font-medium leading-relaxed">
        {description}
      </p>
    </div>
  )}
</motion.div>

            <div className="mt-4 flex flex-wrap gap-2 items-center">
              {/* Location Badge (Always Visible) */}
              {subtitle && (
                <div className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold backdrop-blur-md border border-white/30">
                  <MapPin size={14} className="text-rose-400" />
                  {subtitle}
                </div>
              )}

              {/* Reg ID: Only appears on Hover */}
              {regId && (
                <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold backdrop-blur-md border border-emerald-500/30">
                  <ShieldCheck size={14} className="text-green-500" />
                  <span className="text-emerald-50"> {regId}</span>
                </div>
              )}
            </div>
          </div>

          {/* price badge bottom-right */}
          {(priceLabel || listingType) && (
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute right-6 bottom-6 rounded-lg bg-white/95 px-4 py-3 shadow-lg"
            >
              {listingType && (
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  For {listingType}
                </div>
              )}
              <div className="mt-1 font-bold text-xl text-rose-700">
                {priceLabel}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
