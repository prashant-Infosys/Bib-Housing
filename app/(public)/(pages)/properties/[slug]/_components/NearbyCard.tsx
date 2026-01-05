"use client";

import React from "react";
import { Navigation, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PROPERTY_MAPS } from "@/app/data/map"; 

interface NearbyLocation {
  name: string;
  type?: string;
  distanceKm?: number;
}

interface Props {
  propertyName: string; // This will receive property.title
  nearbyLocations: NearbyLocation[] | undefined;
}

export default function NearbyCard({ propertyName, nearbyLocations }: Props) {
  
  const handleOpenMap = () => {
    /**
     * PERMANENT FIX LOGIC:
     * 1. Convert "Assotech Hills" to "assotechhills"
     * 2. Convert "assotech-hills" from map.ts to "assotechhills"
     * 3. Compare them.
     */
    const normalize = (str: string) => str.toLowerCase().replace(/[\s-_]/g, '');
    
    const searchName = normalize(propertyName);
    const mapEntries = Object.entries(PROPERTY_MAPS);
    
    const match = mapEntries.find(([key]) => normalize(key) === searchName);

    if (match) {
      window.open(match[1], "_blank", "noopener,noreferrer");
    } else {
      // Fallback if still not found
      alert(`Map location for "${propertyName}" is being updated!`);
      console.log("No match found for normalized name:", searchName);
    }
  };

  return (
    <Card className="overflow-hidden border-slate-200 shadow-sm">
      <CardContent className="px-4 pt-0 pb-1 space-y-2">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-none pt-1">
          Nearby
        </h3>

        <ul className="space-y-0">
          {nearbyLocations?.map((n: NearbyLocation, idx: number) => (
            <li key={idx} className="flex items-center justify-between py-0.5">
              <span className="text-[14px] font-semibold text-slate-600">
                {n.name}
              </span>
              <div className="text-[12px] font-bold text-slate-400 bg-slate-50/50 border border-slate-100 px-2.5 py-1 rounded shadow-sm min-w-[65px] text-center">
                {n.distanceKm} km
              </div>
            </li>
          )) || <li className="text-slate-400 italic text-sm">No info available</li>}
        </ul>

        <div className="pt-2.5">
          <Button 
            onClick={handleOpenMap}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
          >
            <Navigation className="h-4 w-4 fill-current" />
            SEE ON MAP
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}