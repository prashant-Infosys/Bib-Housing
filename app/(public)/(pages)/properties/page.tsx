"use client";

import React, { useEffect, useMemo, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Property } from "@/app/data/dummy_15";
import PropertyCard from "@/components/PropertyCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
// Add ShieldCheck and ArrowRight to your existing list
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getProperties, properties } from "@/app/data/properties";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck,ArrowRight } from "lucide-react";
import { BUILDERS } from "@/app/data/builder";

type TabKey = "all" | "completed" | "upcoming";
type SortKey = "newest" | "price_asc" | "price_desc" | "rent_asc" | "rent_desc";


const isCompleted = (p: Property) =>
  (p.status ?? "").toLowerCase().includes("ready") || p.status === "Completed";

const isUpcoming = (p: Property) =>
  (p.status ?? "").toLowerCase().includes("new") || p.status === "New Project";

const itemVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

function PropertiesListContent() {
  const [openTrustedSheet, setOpenTrustedSheet] = useState(false);
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<TabKey>("all");
  const [minBeds, setMinBeds] = useState<number | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [openLocationSheet, setOpenLocationSheet] = useState(false);
  const [openSortSheet, setOpenSortSheet] = useState(false);
  const [openFilterSheet, setOpenFilterSheet] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const pageSize = 9;
  const [cols, setCols] = useState<1 | 3 | 4>(4);
  const [displayLimit, setDisplayLimit] = useState(9);
  const increment = 6;
  const trustedBuilderNames = useMemo(() => 
  BUILDERS.filter(b => b.trusted).map(b => b.name.toLowerCase().trim()), 
[]);

const clearAllFilters = () => {
  setSearchQuery("");
  setSelectedCities([]);
  setSelectedAreas([]);
  setMinBeds(null);
  setTab("all");
};
  // 1. Get list of trusted builder names

// 2. Identify properties belonging to these builders
const trustedProperties = properties.filter(p => trustedBuilderNames.includes(p.owner.name));

// Select a few to showcase (e.g., the first 3)
const featuredTrusted = trustedProperties.slice(0, 3);

  // Sync Search Query from URL
  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") setIsSearchFocused(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    if (isSearchFocused) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchFocused]);

  const allProperties = useMemo<Property[]>(() => getProperties() ?? [], []);
  const trustedPropsForCarousel = useMemo(() => 
  allProperties.filter(p => {
    const name = p.owner?.name?.toLowerCase().trim();
    return name && trustedBuilderNames.includes(name);
  }), 
[allProperties, trustedBuilderNames]);


  useEffect(() => {
    setPage(1);
    setDisplayLimit(9);
  }, [tab, minBeds, sortKey, selectedCities, searchQuery, selectedAreas]);

  const toggleCity = (cityName: string) => {
    setSelectedCities((prev) =>
      prev.includes(cityName) ? prev.filter((c) => c !== cityName) : [...prev, cityName]
    );
  };

  const allAreas = useMemo(() => {
    const areas = allProperties.map((p) => p.location?.area).filter((area): area is string => !!area);
    return Array.from(new Set(areas));
  }, [allProperties]);

  const filteredByTab = useMemo<Property[]>(() =>
    allProperties.filter((p) => {
      if (tab === "completed") return isCompleted(p);
      if (tab === "upcoming") return isUpcoming(p);
      return true;
    }),
    [allProperties, tab]
  );

  const allCities = useMemo(() => {
    const cities = filteredByTab.map((p) => p.location?.city).filter(Boolean);
    return [...new Set(cities as string[])];
  }, [filteredByTab]);

  const filtered = useMemo<Property[]>(() =>
    filteredByTab.filter((p) => {
      const areaName = (p.location?.area || "").toLowerCase();
      const cityName = (p.location?.city || "").toLowerCase();
      const propertyTitle = (p.title || "").toLowerCase();
      const propertyType = (p.propertyType || "").toLowerCase();
      const availableBhkTypes = p.units?.map((u) => (u.bhk || "").toLowerCase()) || [];
      const ownerName = (p.owner?.name || "").toLowerCase();

      if (searchQuery.trim() !== "") {
        const searchLower = searchQuery.toLowerCase().trim();
        
        // Advanced Match Logic
        const matchesText = areaName.includes(searchLower) || 
                            cityName.includes(searchLower) || 
                            propertyTitle.includes(searchLower) ||
                            propertyType.includes(searchLower) ||
                            p.owner?.name.toLowerCase().includes(searchLower);

        // Check if searching for specific BHK (e.g., "2 BHK")
        const bhkMatch = availableBhkTypes.some(b => b.includes(searchLower));

        if (!matchesText && !bhkMatch) return false;
      }

      if (selectedAreas.length > 0 && !selectedAreas.includes(p.location?.area || "")) return false;
      if (selectedCities.length > 0 && !selectedCities.includes(p.location?.city || "")) return false;
      
      if (minBeds !== null) {
        const hasSpecificBhk = availableBhkTypes.some((type) => type.replace(/\s+/g, "").includes(`${minBeds}bhk`));
        if (!hasSpecificBhk) return false;
      }
      return true;
    }),
    [filteredByTab, selectedCities, minBeds, searchQuery, selectedAreas]
  );

  const sorted = useMemo<Property[]>(() => {
    const arr = [...filtered];
    switch (sortKey) {
      case "price_asc": return arr.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      case "price_desc": return arr.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      case "newest": default: return arr.sort((a, b) => new Date(b.postedAt ?? 0).getTime() - new Date(a.postedAt ?? 0).getTime());
    }
  }, [filtered, sortKey]);

  const total = sorted.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const hasActiveFilters = selectedCities.length > 0 || minBeds !== null || searchQuery !== "";
  const hasMore = displayLimit < sorted.length;
  const paginated = sorted.slice(0, displayLimit);

  const handleLoadMore = () => { if (hasMore) setDisplayLimit((prev) => prev + increment); };

  return (
    <main className="container mx-auto px-4">
      {/* THE STICKY SUB-HEADER ROW */}
      <div className="sticky top-[50px] z-40 w-full bg-white border-b border-slate-100 py-4 shadow-none">
        <div className="max-w-7xl mx-auto flex flex-row items-center gap-4 w-full">
          <div className="flex items-center gap-4 shrink-0">
            <button 
  onClick={() => {
    if (searchQuery || selectedCities.length > 0 || selectedAreas.length > 0 || minBeds !== null) {
      // If filters are active, just clear them to show all properties again
      clearAllFilters();
    } else {
      // If no filters are active, then actually go back to the previous page
      window.history.back();
    }
  }} 
  className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mr-2"
>
  <span className="text-xl">‹</span> Back
</button>
            <nav className="flex items-center rounded-lg bg-slate-100 p-1">
              <Button size="sm" variant={tab === "all" ? "default" : "ghost"} className={`px-4 h-8 rounded-md text-xs font-bold transition-all ${tab === "all" ? "bg-[#ff4466] text-white shadow-md hover:bg-[#ff4466]/90" : "text-slate-600"}`} onClick={() => setTab("all")}>All</Button>
              <Button size="sm" variant={tab === "completed" ? "default" : "ghost"} className="px-4 h-8 rounded-md text-xs font-bold text-slate-600" onClick={() => setTab("completed")}>Completed</Button>
              <Button size="sm" variant={tab === "upcoming" ? "default" : "ghost"} className="px-4 h-8 rounded-md text-xs font-bold text-slate-600" onClick={() => setTab("upcoming")}>Upcoming</Button>
            </nav>
          </div>

          <div className="flex-1 relative" ref={searchContainerRef} onKeyDown={handleKeyDown}>
            <div className="relative">
              <input type="text" placeholder="Search or select areas..." value={searchQuery} onFocus={() => setIsSearchFocused(true)} onChange={(e) => setSearchQuery(e.target.value)} className="w-full h-10 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-slate-300 transition-all" />
              {(isSearchFocused || searchQuery || selectedAreas.length > 0) && (
                <button onClick={() => { setIsSearchFocused(false); setSelectedAreas([]); setSearchQuery(""); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 font-bold transition-colors">✕</button>
              )}
              {isSearchFocused && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] mt-3 bg-white border rounded-xl shadow-2xl z-50 p-6 overflow-hidden">
                  <div className="grid grid-cols-[0.8fr_2fr_0.8fr] gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Cities</span>
                        <button onClick={() => setSelectedCities([])} className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">✕</button>
                      </div>
                      <div className="flex flex-col gap-1 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                        {allCities.map((city) => (
                          <label key={city} className="flex items-center gap-2 p-1.5 hover:bg-slate-50 rounded cursor-pointer group">
                            <input type="checkbox" checked={selectedCities.includes(city)} onChange={() => toggleCity(city)} className="h-3.5 w-3.5 rounded border-gray-300 text-primary" />
                            <span className={`text-xs ${selectedCities.includes(city) ? "font-semibold text-primary" : "text-slate-600"}`}>{city}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 border-x px-6">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Available Areas</span>
                        <button onClick={() => setSelectedAreas([])} className="text-sm font-bold text-slate-400 hover:text-red-500">✕</button>
                      </div>
                      <div className="grid grid-cols-3 gap-x-2 gap-y-1 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                        {allAreas.filter((area) => area.toLowerCase().includes(searchQuery.toLowerCase())).map((area) => (
                          <label key={area} className="flex items-center gap-2 p-1.5 hover:bg-slate-50 rounded cursor-pointer group">
                            <input type="checkbox" checked={selectedAreas.includes(area)} onChange={() => setSelectedAreas(prev => prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area])} className="h-3.5 w-3.5 rounded border-gray-300 text-primary" />
                            <span className="text-[11px] text-slate-600 truncate" title={area}>{area}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">BHK Type</span>
                        <button onClick={() => setMinBeds(null)} className="text-sm font-bold text-slate-400 hover:text-red-500">✕</button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((num) => (
                          <button key={num} onClick={() => setMinBeds(minBeds === num ? null : num)} className={`py-2 rounded border text-[11px] font-medium transition-all ${minBeds === num ? "bg-primary text-white border-primary shadow-md" : "bg-white text-slate-600 border-slate-200 hover:border-primary/50"}`}>{num} BHK</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden items-center gap-1 rounded-md border bg-muted/50 p-1 lg:flex">
            <Button variant={cols === 1 ? "secondary" : "ghost"} size="icon" className="h-8 w-8" onClick={() => setCols(1)}><div className="flex flex-col gap-0.5"><div className="h-1 w-4 bg-current rounded-full" /><div className="h-1 w-4 bg-current rounded-full" /></div></Button>
            <Button variant={cols === 3 ? "secondary" : "ghost"} size="icon" className="h-8 w-8" onClick={() => setCols(3)}><div className="grid grid-cols-2 gap-0.5"><div className="h-1.5 w-1.5 bg-current rounded-sm" /><div className="h-1.5 w-1.5 bg-current rounded-sm" /><div className="h-1.5 w-1.5 bg-current rounded-sm" /><div className="h-1.5 w-1.5 bg-current rounded-sm" /></div></Button>
            <Button variant={cols === 4 ? "secondary" : "ghost"} size="icon" className="h-8 w-8" onClick={() => setCols(4)}><div className="grid grid-cols-3 gap-0.5"><div className="h-1 w-1 bg-current rounded-sm" /><div className="h-1 w-1 bg-current rounded-sm" /><div className="h-1 w-1 bg-current rounded-sm" /><div className="h-1 w-1 bg-current rounded-sm" /><div className="h-1 w-1 bg-current rounded-sm" /><div className="h-1 w-1 bg-current rounded-sm" /></div></Button>
          </div>

          <div className="hidden gap-2 sm:flex">
            <Button variant="outline" size="sm" onClick={() => setOpenLocationSheet(true)}>Location</Button>
            <Button variant="outline" size="sm" onClick={() => setOpenSortSheet(true)}>Sort</Button>
            <Button variant="outline" size="sm" onClick={() => setOpenFilterSheet(true)}>Filter</Button>
          </div>
        </div>
      </div>

      <section className="mt-6">
        {paginated.length === 0 ? (
          <Card className="col-span-full py-12"><CardContent className="text-center text-muted-foreground">No properties found for "{searchQuery}". Try a different term or clear filters.</CardContent></Card>
        ) : (
          <div className={`grid gap-6 transition-all duration-300 ${cols === 1 ? "grid-cols-1" : cols === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}>
            <AnimatePresence mode="popLayout">
              {paginated.map((p, index) => (
                <React.Fragment key={p.id}>
                  <motion.div layout variants={itemVariants} initial="initial" animate="animate" exit="exit">
                    <PropertyCard property={p} variant={cols === 1 ? "list" : "grid"} />
                  </motion.div>
                  {index === 7 && (
                    <motion.div variants={itemVariants} initial="initial" animate="animate" className="col-span-full">
                      <Card className="overflow-hidden border-none bg-[#ff4466] text-black relative h-full min-h-[200px]">
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                        </div>
                        <CardContent className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                          <div className="space-y-2 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Need help finding the right property?</h3>
                            <p className="text-black max-w-xl">Get dedicated, personalized assistance to shortlist the best projects based on your budget, preferred location, and specific requirements. Our service is 100% free—just tap the button to connect instantly.</p>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-black">Chat on WhatsApp</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                  {index === 19 && trustedPropsForCarousel.length > 0 && (
  <motion.div variants={itemVariants} className="col-span-full py-4">
    <Card className="overflow-hidden border-none bg-slate-900 text-white shadow-2xl">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          
          {/* Left Sidebar Info */}
          <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-slate-800 to-slate-900 border-r border-white/5">
            <div className="flex items-center gap-2 text-[#ff4466] font-bold text-xs uppercase tracking-widest mb-3">
              <ShieldCheck className="h-4 w-4" /> Trusted Partners
            </div>
            <h3 className="text-2xl font-black mb-4 leading-tight">Elite Builder Collection</h3>
            <p className="text-sm text-slate-400 mb-6">
              Handpicked projects from developers with a 100% delivery track record.
            </p>
           <Button 
  variant="outline" 
  size="sm" 
  onClick={() => setOpenTrustedSheet(true)} // Add this trigger
  className="w-fit border-white/20 text-black hover:bg-white hover:text-black transition-all"
>
  View Verified Builders
</Button>
          </div>

          {/* Right Side: Scrolling Carousel */}
          <div className="lg:col-span-3 p-6 overflow-hidden relative">
            <motion.div 
              className="flex gap-6"
              animate={{ x: [0, -1200] }} // Adjust based on number of items
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }} // Pause on hover
            >
              {/* Duplicate the array to create a seamless infinite loop */}
              {[...trustedPropsForCarousel, ...trustedPropsForCarousel].map((prop, i) => (
                <div key={`${prop.id}-${i}`} className="min-w-[280px] group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                    <img 
                      src={prop.images?.[0] || "/placeholder.jpg"} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                      alt={prop.title} 
                    />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-md rounded text-[10px] font-bold text-slate-900 flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3 text-blue-600" /> {prop.owner.name}
                    </div>
                  </div>
                  <h4 className="font-bold text-sm truncate group-hover:text-[#ff4466] transition-colors">{prop.title}</h4>
                  <p className="text-xs text-slate-500">{prop.location?.area}, {prop.location?.city}</p>
                </div>
              ))}
            </motion.div>
            
            {/* Fade effect on sides */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
          </div>
          
        </div>
      </CardContent>
    </Card>
  </motion.div>
)}
                  
                </React.Fragment>
              ))}
            </AnimatePresence>
          </div>
        )}

        {hasMore && (
          <div className="mt-12 flex justify-center py-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} onViewportEnter={handleLoadMore}>
              <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                <p className="text-sm text-muted-foreground">Loading more properties...</p>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      <div className="flex items-center justify-between mt-12 mb-20">
        <div className="text-sm text-muted-foreground">Showing {Math.min((page - 1) * pageSize + 1, total)}–{Math.min(page * pageSize, total)} of {total} {hasActiveFilters && "(filtered)"}</div>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</Button>
          <Button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page === pages}>Next</Button>
        </div>
      </div>
      {/* Location Sheet */}
      <Sheet open={openLocationSheet} onOpenChange={setOpenLocationSheet}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Filter by Location</SheetTitle>
            <SheetDescription>Select the cities you are interested in.</SheetDescription>
          </SheetHeader>
          <div className="py-6 space-y-4">
            {allCities.map((city) => (
              <div key={city} className="flex items-center space-x-2">
                <Checkbox 
                  id={`city-${city}`} 
                  checked={selectedCities.includes(city)} 
                  onCheckedChange={() => toggleCity(city)} 
                />
                <label htmlFor={`city-${city}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {city}
                </label>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4" onClick={() => setOpenLocationSheet(false)}>Done</Button>
        </SheetContent>
      </Sheet>

      {/* Sort Sheet */}
      <Sheet open={openSortSheet} onOpenChange={setOpenSortSheet}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Sort Properties</SheetTitle>
          </SheetHeader>
          <div className="py-6">
            <Select value={sortKey} onValueChange={(value: SortKey) => setSortKey(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full mt-4" onClick={() => setOpenSortSheet(false)}>Apply Sort</Button>
        </SheetContent>
      </Sheet>

      {/* Filter Sheet (BHK) */}
      <Sheet open={openFilterSheet} onOpenChange={setOpenFilterSheet}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Advanced Filters</SheetTitle>
          </SheetHeader>
          <div className="py-6 space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold">BHK Type</h4>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <Button 
                    key={num} 
                    variant={minBeds === num ? "default" : "outline"}
                    className={minBeds === num ? "bg-[#ff4466] hover:bg-[#ff4466]/90" : ""}
                    onClick={() => setMinBeds(minBeds === num ? null : num)}
                  >
                    {num} BHK
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <Button className="w-full mt-4" onClick={() => setOpenFilterSheet(false)}>Show Results</Button>
        </SheetContent>
      </Sheet>
      <Sheet open={openTrustedSheet} onOpenChange={setOpenTrustedSheet}>
  {/* We add h-full and flex-col to make the sheet fill the screen and allow children to stack */}
  <SheetContent side="right" className="sm:max-w-md flex flex-col h-full">
    <SheetHeader className="shrink-0"> {/* shrink-0 keeps the header from squishing */}
      <SheetTitle className="flex items-center gap-2">
        <ShieldCheck className="text-emerald-500" />
        Verified Builders
      </SheetTitle>
      <SheetDescription>
        Developers with a 100% track record of quality and delivery.
      </SheetDescription>
    </SheetHeader>
    
    {/* --- SCROLLABLE AREA START --- */}
    <div className="flex-1 overflow-y-auto mt-8 pr-2 custom-scrollbar">
      <div className="space-y-4 pb-8"> {/* pb-8 adds space at the bottom for better scrolling feel */}
        {BUILDERS.filter(b => b.trusted).map((builder) => (
          <div 
            key={builder.name}
            className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-[#ff4466] hover:bg-slate-50 transition-all cursor-pointer"
            onClick={() => {
              setSearchQuery(builder.name);
              setOpenTrustedSheet(false);
            }}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-400 overflow-hidden">
                 {builder.logoUrl ? (
                   <img src={builder.logoUrl} alt={builder.name} className="h-full w-full object-contain p-2" />
                 ) : builder.name[0]}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-[#ff4466]">{builder.name}</h4>
                <p className="text-xs text-slate-500">Verified Partner</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-[#ff4466] group-hover:translate-x-1 transition-all" />
          </div>
        ))}
      </div>
    </div>
    {/* --- SCROLLABLE AREA END --- */}
    
  </SheetContent>
</Sheet>
    </main>
  );
}

// Wrapper to satisfy Next.js Suspense requirements for useSearchParams
export default function PropertiesPage() {
  return (
    <Suspense fallback={<div>Loading Properties...</div>}>
      <PropertiesListContent />
    </Suspense>
  );
}