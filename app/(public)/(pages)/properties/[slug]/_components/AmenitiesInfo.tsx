"use client";

import { useState } from "react";
import {
  Dumbbell,
  ShieldCheck,
  Baby,
  Trophy,
  Home,
  Leaf,
  Recycle,
  ShoppingCart,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  amenities: string[] | undefined;
}

const CATEGORY_MAP: Record<string, { keywords: string[]; icon: any }> = {
  "Community & Cultural Zone": {
    keywords: [
      "Temple",
      "Prayer",
      "Community Hall",
      "Multipurpose Hall",
      "Banquet Hall",
      "Indoor Theatre",
      "Open Air Theatre",
      "Party Zone",
    ],
    icon: <Users className="h-4 w-4 text-purple-500" />,
  },

  "Wellness & Recreation Zone": {
    keywords: [
      "Yoga",
      "Meditation",
      "Jogging",
      "Swimming Pool",
      "Kids Swimming Pool",
      "Gym",
      "Gymnasium",
    ],
    icon: <Dumbbell className="h-4 w-4 text-rose-500" />,
  },

  "Kids & Family Zone": {
    keywords: [
      "Kids' Play Area",
      "Kids Play Area",
      "Toddlers' Zone",
      "Toddlers Zone",
      "Senior Citizen Zone",
    ],
    icon: <Baby className="h-4 w-4 text-pink-500" />,
  },

  "Sports Facility": {
    keywords: [
      "Outdoor Games",
      "Indoor Games",
      "Badminton",
      "Basketball",
      "Half Basket",
      "Skating",
      "Cricket",
      "Net Cricket",
      "Volleyball",
      "Table Tennis",
      "Lawn Tennis",
      "Skate Park",
      "Sports Bar",
    ],
    icon: <Trophy className="h-4 w-4 text-orange-500" />,
  },

  "Clubhouse & Indoor Lifestyle": {
    keywords: [
      "Club House",
      "Clubhouse",
      "Lounge",
      "Seating Area",
      "Library",
      "Reading Room",
      "Multipurpose Room",
      "Card Room",
    ],
    icon: <Home className="h-4 w-4 text-indigo-500" />,
  },

  "Green & Open Spaces": {
    keywords: [
      "Garden",
      "Landscaped",
      "Central Lawn",
      "Terrace Garden",
      "Open Sitting",
      "Parks",
    ],
    icon: <Leaf className="h-4 w-4 text-green-500" />,
  },

  "Infrastructure & Convenience": {
    keywords: [
      "Parking",
      "Visitor Parking",
      "Lifts",
      "Power Backup",
      "Entrance Lobby",
      "Guests Room",
      "Staff Quarter",
      "EV Charging",
      "Car Washing Area",
    ],
    icon: <Zap className="h-4 w-4 text-amber-500" />,
  },

  "Security & Safety Systems": {
    keywords: [
      "CCTV",
      "Surveillance",
      "Firefighting",
      "Fire Fighting",
      "Gated Entry",
      "Intercom",
      "Security",
    ],
    icon: <ShieldCheck className="h-4 w-4 text-blue-500" />,
  },

  "Utilities & Sustainability": {
    keywords: [
      "Rainwater Harvesting",
      "Sewage Treatment Plant",
      "STP",
      "Waste Management",
      "Solar Lighting",
    ],
    icon: <Recycle className="h-4 w-4 text-teal-500" />,
  },

  "Retail & Daily Convenience": {
    keywords: [
      "Commercial Space",
      "Commercial Plaza",
      "Departmental Store",
      "Mart",
      "ATM",
      "Restaurant",
      "Cafeteria",
      "Boulevard",
    ],
    icon: <ShoppingCart className="h-4 w-4 text-fuchsia-500" />,
  },
};

// ... (imports and CATEGORY_MAP remain the same)

export default function AmenitiesInfo({ amenities }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ITEM_LIMIT_PER_CAT = 2; // Show 2 items per category
  const CATEGORY_LIMIT = 3; // ONLY SHOW 3 CATEGORIES TOTAL

  if (!amenities || amenities.length === 0) return null;

  // Grouping logic remains the same
  const grouped = amenities.reduce((acc, item) => {
    const categoryName =
      Object.keys(CATEGORY_MAP).find((cat) =>
        CATEGORY_MAP[cat].keywords.some((key) =>
          item.toLowerCase().includes(key.toLowerCase())
        )
      ) || "Other Facilities";

    if (!acc[categoryName]) acc[categoryName] = [];
    acc[categoryName].push(item);
    return acc;
  }, {} as Record<string, string[]>);

  // Get the keys of the groups we actually found, limited to the first 3
  const previewCategories = Object.keys(grouped).slice(0, CATEGORY_LIMIT);

  const RenderList = ({
    items,
    limit,
  }: {
    items: string[];
    limit?: number;
  }) => {
    const displayItems = limit ? items.slice(0, limit) : items;
    return (
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        {displayItems.map((item) => (
          <div
            key={item}
            className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100"
          >
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span className="text-xs text-slate-600 whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4 p-0">
      <div className="flex items-center">
        <h3 className="text-lg font-bold tracking-tight text-slate-900">
          Key Amenities
        </h3>
      </div>

      {/* Preview Area: Limited to 3 Categories */}
      <div className="grid gap-y-5">
        {previewCategories.map((category) => (
          <div key={category} className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-[10px] text-slate-400 uppercase tracking-widest">
              {CATEGORY_MAP[category]?.icon || (
                <Home className="h-4 w-4 text-slate-400" />
              )}
              {category}
            </div>
            <RenderList items={grouped[category]} limit={ITEM_LIMIT_PER_CAT} />
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className="pt-2 flex justify-center border-t border-slate-100 mt-4">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-700 uppercase tracking-wider py-2 px-4 transition-all">
              {/* This goes back to showing the true total count */}
              See All {amenities.length} Amenities
              <ChevronDown className="h-3 w-3" />
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>All Property Amenities</DialogTitle>
            </DialogHeader>
            <div className="grid gap-8 mt-6">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <div className="flex items-center gap-2 font-semibold text-xs text-slate-400 uppercase border-b pb-1">
                    {CATEGORY_MAP[category]?.icon}
                    {category}
                  </div>
                  <RenderList items={items} />
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
