"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Property } from "@/app/data/dummy_15";
import PropertyCard from "@/components/PropertyCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
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
import { getProperties } from "@/app/data/properties";
import { motion, AnimatePresence } from "framer-motion";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";

/* ---------------------------
   Types and helpers
   --------------------------- */
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

/* ---------------------------
   Cities (for location checkbox list)
   --------------------------- */
const cities = [
  { city: "Mumbai", state: "Maharashtra", pincode: "400076" },
  { city: "Bangalore", state: "Karnataka", pincode: "560066" },
  { city: "Hyderabad", state: "Telangana", pincode: "500032" },
  { city: "Delhi", state: "Delhi", pincode: "110001" },
  { city: "Pune", state: "Maharashtra", pincode: "411014" },
  { city: "Chennai", state: "Tamil Nadu", pincode: "600002" },
  { city: "Kolkata", state: "West Bengal", pincode: "700001" },
  { city: "Gurgaon", state: "Haryana", pincode: "122001" },
];

/* ---------------------------
   Component
   --------------------------- */
export default function PropertiesPage() {
  // UI state
  const [tab, setTab] = useState<TabKey>("all");
  const [minBeds, setMinBeds] = useState<number | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("newest");

  // city multi-select
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  // sheets for location / sort / filters
  const [openLocationSheet, setOpenLocationSheet] = useState(false);
  const [openSortSheet, setOpenSortSheet] = useState(false);
  const [openFilterSheet, setOpenFilterSheet] = useState(false);

  // pagination
  const [page, setPage] = useState(1);
  const pageSize = 9;

  // data
  const allProperties = useMemo<Property[]>(() => getProperties() ?? [], []);

  // reset page when filters change (wrapped in microtask to satisfy ESLint)
  useEffect(() => {
    Promise.resolve().then(() => setPage(1));
  }, [tab, minBeds, sortKey, selectedCities]);

  const toggleCity = (cityName: string) => {
    setSelectedCities((prev) =>
      prev.includes(cityName)
        ? prev.filter((c) => c !== cityName)
        : [...prev, cityName]
    );
  };

  const filteredByTab = useMemo<Property[]>(
    () =>
      allProperties.filter((p) => {
        if (tab === "completed") return isCompleted(p);
        if (tab === "upcoming") return isUpcoming(p);
        return true;
      }),
    [allProperties, tab]
  );

  const filtered = useMemo<Property[]>(
    () =>
      filteredByTab.filter((p) => {
        // filter by selected cities
        if (selectedCities.length > 0) {
          const city = p.location?.city;
          if (!city || !selectedCities.includes(city)) return false;
        }

        // min beds
        if (minBeds !== null) {
          if (!p.bhk || p.bhk < minBeds) return false;
        }

        return true;
      }),
    [filteredByTab, selectedCities, minBeds]
  );

  const sorted = useMemo<Property[]>(() => {
    const arr = [...filtered];
    switch (sortKey) {
      case "price_asc":
        return arr.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      case "price_desc":
        return arr.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      case "rent_asc":
        return arr.sort((a, b) => (a.rent ?? 0) - (b.rent ?? 0));
      case "rent_desc":
        return arr.sort((a, b) => (b.rent ?? 0) - (a.rent ?? 0));
      case "newest":
      default:
        return arr.sort(
          (a, b) =>
            new Date(b.postedAt ?? 0).getTime() -
            new Date(a.postedAt ?? 0).getTime()
        );
    }
  }, [filtered, sortKey]);

  const total = sorted.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);

  const hasActiveFilters = selectedCities.length > 0 || minBeds !== null;

  return (
    <>
      {/* <BreadcrumbBanner
        title="Properties"
        description="Find premium & RERA-approved project with ease."
        items={[{ label: "Properties", href: "/properties" }]}
        // ctaLabel="Book a Visit"
        // ctaHref="/book-visit"
      /> */}
      <main className="container mx-auto px-4 py-8 pb-24">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* <div>
              <h1 className="text-2xl font-semibold">Properties</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Browse curated properties for sale & rent.
              </p>

              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-muted px-3 py-1">
                  {total} results
                </span>
                {selectedCities.length > 0 && (
                  <span className="rounded-full bg-muted px-3 py-1">
                    Cities: {selectedCities.join(", ")}
                  </span>
                )}
                {minBeds !== null && (
                  <span className="rounded-full bg-muted px-3 py-1">
                    {minBeds}+ BHK
                  </span>
                )}
              </div>
            </div> */}

            {/* Tabs + (desktop) filter buttons */}
            <nav className="inline-flex rounded-md bg-muted/60 p-1">
              <Button
                size="sm"
                variant={tab === "all" ? "default" : "ghost"}
                className="rounded-md"
                onClick={() => setTab("all")}
              >
                All
              </Button>
              <Button
                size="sm"
                variant={tab === "completed" ? "default" : "ghost"}
                className="rounded-md"
                onClick={() => setTab("completed")}
              >
                Completed
              </Button>
              <Button
                size="sm"
                variant={tab === "upcoming" ? "default" : "ghost"}
                className="rounded-md"
                onClick={() => setTab("upcoming")}
              >
                Upcoming
              </Button>
            </nav>
            
            <div className="flex flex-col items-stretch gap-3 sm:items-end">
              {/* desktop filter buttons (reuse same sheets) */}
              <div className="hidden gap-2 sm:flex">
                <Sheet
                  open={openLocationSheet}
                  onOpenChange={setOpenLocationSheet}
                >
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      Location
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="z-50 p-8">
                    <SheetHeader className="p-0">
                      <SheetTitle className="text-lg font-semibold">
                        Select cities
                      </SheetTitle>
                    </SheetHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {cities.map((c) => (
                          <label
                            key={c.city}
                            className="flex items-center gap-2"
                          >
                            <Checkbox
                              checked={selectedCities.includes(c.city)}
                              onCheckedChange={() => toggleCity(c.city)}
                            />
                            <div className="text-sm">{c.city}</div>
                          </label>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => setOpenLocationSheet(false)}>
                          Apply
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setSelectedCities([]);
                            setOpenLocationSheet(false);
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <Sheet open={openSortSheet} onOpenChange={setOpenSortSheet}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      Sort
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="z-50 p-8">
                    <SheetHeader className="p-0">
                      <SheetTitle className="text-lg font-semibold">
                        Sort
                      </SheetTitle>
                    </SheetHeader>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <Button
                          variant={sortKey === "newest" ? "default" : "ghost"}
                          onClick={() => setSortKey("newest")}
                        >
                          Newest
                        </Button>
                        <Button
                          variant={
                            sortKey === "price_asc" ? "default" : "ghost"
                          }
                          onClick={() => setSortKey("price_asc")}
                        >
                          Price: Low to High
                        </Button>
                        <Button
                          variant={
                            sortKey === "price_desc" ? "default" : "ghost"
                          }
                          onClick={() => setSortKey("price_desc")}
                        >
                          Price: High to Low
                        </Button>
                        <Button
                          variant={sortKey === "rent_asc" ? "default" : "ghost"}
                          onClick={() => setSortKey("rent_asc")}
                        >
                          Rent: Low to High
                        </Button>
                        <Button
                          variant={
                            sortKey === "rent_desc" ? "default" : "ghost"
                          }
                          onClick={() => setSortKey("rent_desc")}
                        >
                          Rent: High to Low
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => setOpenSortSheet(false)}>
                          Apply
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setSortKey("newest");
                            setOpenSortSheet(false);
                          }}
                        >
                          Reset
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <Sheet open={openFilterSheet} onOpenChange={setOpenFilterSheet}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      Filter
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="z-50 p-8">
                    <SheetHeader className="p-0">
                      <SheetTitle className="text-lg font-semibold">
                        Filters
                      </SheetTitle>
                      <SheetDescription className="text-sm text-muted-foreground">
                        Minimum BHK
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-4">
                      <div>
                        <Select
                          onValueChange={(v) =>
                            setMinBeds(v === "any" ? null : Number(v))
                          }
                          value={minBeds !== null ? String(minBeds) : "any"}
                        >
                          <SelectTrigger className="mt-2 w-full">
                            <SelectValue placeholder="Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any</SelectItem>
                            <SelectItem value="1">1+</SelectItem>
                            <SelectItem value="2">2+</SelectItem>
                            <SelectItem value="3">3+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={() => setOpenFilterSheet(false)}>
                          Apply
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setMinBeds(null);
                            setOpenFilterSheet(false);
                          }}
                        >
                          Reset
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>

          {/* grid */}
          <section>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {paginated.length === 0 ? (
                  <Card className="col-span-full">
                    <CardContent className="text-center text-muted-foreground">
                      No properties found for the selected filters.
                    </CardContent>
                  </Card>
                ) : (
                  paginated.map((p) => (
                    <motion.div
                      key={p.id}
                      variants={itemVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      layout
                    >
                      <PropertyCard property={p} />
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* pagination */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {Math.min((page - 1) * pageSize + 1, total)}–
              {Math.min(page * pageSize, total)} of {total}
              {hasActiveFilters && " (filtered)"}
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Prev
              </Button>
              <Button
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
                disabled={page === pages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>

        {/* shared bottom bar for mobile (same sheets, different triggers) */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 backdrop-blur-sm sm:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
            <Sheet open={openLocationSheet} onOpenChange={setOpenLocationSheet}>
              <SheetTrigger asChild>
                <Button className="flex-1" variant="outline">
                  Location
                </Button>
              </SheetTrigger>
            </Sheet>

            <Sheet open={openSortSheet} onOpenChange={setOpenSortSheet}>
              <SheetTrigger asChild>
                <Button className="flex-1" variant="outline">
                  Sort
                </Button>
              </SheetTrigger>
            </Sheet>

            <Sheet open={openFilterSheet} onOpenChange={setOpenFilterSheet}>
              <SheetTrigger asChild>
                <Button className="flex-1" variant="outline">
                  Filter
                </Button>
              </SheetTrigger>
            </Sheet>
          </div>
        </div>
      </main>
    </>
  );
}
