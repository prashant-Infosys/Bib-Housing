"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, X, Building, Home, Navigation, LayoutGrid, Compass, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { getProperties, type Property } from "../app/data/properties";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<{ type: string; value: string; label: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allProperties = getProperties();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const matches: { type: string; value: string; label: string }[] = [];

    // --- CASE 1: EMPTY QUERY (Show Default Options) ---
    if (query.length < 1) {
      // 1. Popular Cities
      const cities = Array.from(new Set(allProperties.map((p) => p.location.city))).slice(0, 3);
      cities.forEach(city => matches.push({ type: "Popular City", value: city, label: city }));

      // 2. Property Types
      ["Apartment", "Villa", "Plot/Land"].forEach(type => 
        matches.push({ type: "Property Type", value: type, label: `Search ${type}s` })
      );

      // 3. Common Configurations
      ["2 BHK", "3 BHK"].forEach(bhk => 
        matches.push({ type: "Budget/Config", value: bhk, label: `${bhk} Properties` })
      );

      setSuggestions(matches);
      return;
    }

    // --- CASE 2: SEARCHING (Filtering) ---
    const lowerQuery = query.toLowerCase();

    // Filter Cities
    const uniqueCities = Array.from(new Set(allProperties.map((p) => p.location.city)));
    uniqueCities.forEach((city) => {
      if (city.toLowerCase().includes(lowerQuery)) matches.push({ type: "City", value: city, label: city });
    });

    // Filter Areas
    const uniqueAreas = Array.from(new Set(allProperties.map((p) => p.location.area).filter(Boolean)));
    uniqueAreas.forEach((area) => {
      if (area.toLowerCase().includes(lowerQuery)) matches.push({ type: "Area", value: area, label: area });
    });

    // Filter Projects
    allProperties.forEach((p) => {
      if (p.title.toLowerCase().includes(lowerQuery)) matches.push({ type: "Project", value: p.title, label: p.title });
    });

    // Filter Types
    ["Apartment", "Villa", "Plot/Land", "Office"].forEach(type => {
      if (type.toLowerCase().includes(lowerQuery)) matches.push({ type: "Type", value: type, label: `Search ${type}s` });
    });

    // Filter BHKs
    if (lowerQuery.includes("bhk") || /^\d+$/.test(lowerQuery[0])) {
      [1, 2, 3, 4, 5].forEach(num => {
        if (`${num} BHK`.toLowerCase().includes(lowerQuery)) {
          matches.push({ type: "Config", value: `${num} BHK`, label: `${num} BHK Homes` });
        }
      });
    }

    setSuggestions(matches.slice(0, 8));
  }, [query, allProperties]);

  const handleSelect = (value: string) => {
    setQuery(value);
    setIsOpen(false);
    router.push(`/properties?search=${encodeURIComponent(value)}`);
  };

  return (
    <div className="relative z-50 mx-auto max-w-4xl px-4 -mt-10" ref={dropdownRef}>
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSelect(query); }}
        className={`flex flex-col md:flex-row items-center gap-2 p-2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-2 transition-all ${isOpen ? 'border-primary' : 'border-transparent'}`}
      >
        <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full">
          <MapPin className={`h-5 w-5 shrink-0 ${isOpen ? 'text-primary' : 'text-slate-400'}`} />
          <input
            type="text"
            placeholder="Search City, Area, Project or BHK..."
            className="w-full outline-none text-slate-700 bg-transparent font-medium text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)} // Opens immediately on click
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} className="p-1 hover:bg-slate-100 rounded-full">
              <X className="h-4 w-4 text-slate-400" />
            </button>
          )}
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-xl font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
        >
          <Search className="h-5 w-5" />
          Search
        </button>
      </form>

      {/* Suggestion Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-2 border-b border-slate-50 mb-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              {query.length > 0 ? <Search className="h-3 w-3" /> : <TrendingUp className="h-3 w-3" />}
              {query.length > 0 ? "Matching Results" : "Trending & Quick Filters"}
            </p>
          </div>
          
          <div className="max-h-[60vh] overflow-y-auto px-2">
            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelect(item.value)}
                className="w-full flex items-center gap-4 px-4 py-3 hover:bg-slate-50 rounded-xl transition-all text-left group"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {(item.type === "City" || item.type === "Popular City") && <Navigation className="h-4 w-4" />}
                  {(item.type === "Area" || item.type === "Locality") && <Compass className="h-4 w-4" />}
                  {item.type === "Project" && <Building className="h-4 w-4" />}
                  {(item.type === "Type" || item.type === "Property Type") && <Home className="h-4 w-4" />}
                  {(item.type === "Config" || item.type === "Budget/Config") && <LayoutGrid className="h-4 w-4" />}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800 group-hover:text-primary">{item.label}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{item.type}</span>
                </div>
              </button>
            ))}
          </div>

          {query.length === 0 && (
            <div className="mt-2 px-5 py-3 bg-slate-50/50 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 text-center font-medium">
                Start typing to see specific projects, areas, or builders
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}