"use client";

import React, { useRef } from "react";
import { getFeaturedProperties } from "@/app/data/properties";
import PropertyCard from "./PropertyCard";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedProperties() {
  const allProperties = getFeaturedProperties();
  
  // We pair properties: [Prop1, Prop2] becomes Column 1, [Prop3, Prop4] becomes Column 2
  const pairs = [];
  for (let i = 0; i < allProperties.length; i += 2) {
    pairs.push(allProperties.slice(i, i + 2));
  }

  const plugin = useRef(
    Autoplay({ 
      delay: 1800, 
      stopOnInteraction: false, 
      playOnInit: false 
    })
  );

  return (
    <section 
      className="py-16 bg-rose-50/50"
      onMouseEnter={() => plugin.current.play()}
      onMouseLeave={() => plugin.current.stop()}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground">Featured Properties</h2>
          <p className="mt-2 text-muted-foreground">Premium homes curated for BiBHousing users.</p>
        </div>

        <Carousel 
          opts={{ 
            align: "start", 
            loop: true,
            duration: 50, // This makes the transition very smooth and quick
          }} 
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-5"> {/* Matches your gap-5 */}
            {pairs.map((pair, index) => (
              <CarouselItem 
                key={index} 
                className="pl-5 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                {/* This vertical stack creates the 2 rows per column */}
                <div className="flex flex-col gap-5">
                  {pair.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}