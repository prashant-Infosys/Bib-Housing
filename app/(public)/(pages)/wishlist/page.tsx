// app/wishlist/page.tsx
"use client";

import React, { useMemo, useCallback, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash, HeartCrack, ArrowLeft } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import { getProperties } from "@/app/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/app/data/dummy_15";

/**
 * Wishlist page
 * - shows items saved in WishlistContext
 * - allows removing single item and clearing all
 * - shows empty state with call to action
 */

const itemVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.18 } },
};

export default function WishlistPage() {
  const { ids, remove, count } = useWishlist();
  const [clearing, setClearing] = useState(false);

  // All properties (in-memory dataset)
  const all = useMemo(() => getProperties(), []);

  // Map saved ids to actual property objects, preserve order of ids
  const items: Property[] = useMemo(() => {
    const map = new Map(all.map((p) => [p.id, p]));
    return ids.map((id) => map.get(id)).filter(Boolean) as Property[];
  }, [all, ids]);

  const handleRemove = useCallback(
    (id: string) => {
      remove(id);
    },
    [remove]
  );

  const handleClearAll = useCallback(() => {
    if (ids.length === 0) return;
    // confirm then remove each
    if (!confirm("Clear all items from your wishlist?")) return;
    setClearing(true);
    // remove sequentially (small list) — keeps localStorage in sync through your provider
    ids.forEach((id) => remove(id));
    setTimeout(() => setClearing(false), 300);
  }, [ids, remove]);

  return (
    <main className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Your Wishlist</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {count > 0
              ? `You have ${count} saved ${
                  count === 1 ? "property" : "properties"
                }.`
              : "No saved properties yet."}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/properties" className="inline-flex items-center">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Browse listings
            </Button>
          </Link>

          <Button
            variant="destructive"
            onClick={handleClearAll}
            disabled={ids.length === 0 || clearing}
            className="flex items-center gap-2"
          >
            <Trash className="h-4 w-4" />
            Clear all
          </Button>
        </div>
      </div>

      {/* Empty state */}
      {items.length === 0 ? (
        <Card>
          <CardContent className="text-center py-16">
            <div className="mx-auto max-w-lg space-y-4">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-gray-200 p-3 ">
                  <HeartCrack className="h-10 w-10  text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold">No saved properties</h3>
              <p className="text-sm text-muted-foreground">
                Save properties you like and {"we'll"} keep them here so you can
                find them later.
              </p>
              <div className="flex justify-center mt-4 gap-3">
                <Link href="/properties">
                  <Button>Browse Properties</Button>
                </Link>
                <Link href="/assitance">
                  <Button variant="outline">Get Assistance</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Grid of saved items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {items.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={itemVariants}
                >
                  <div className="relative">
                    {/* Property card (re-usable) */}
                    <PropertyCard property={p} />

                    {/* Small overlay actions: remove + toggle */}
                    <div className="absolute right-3 top-3 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemove(p.id)}
                        aria-label={`Remove ${p.title}`}
                      >
                        Remove
                      </Button>
                      {/* <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggle(p.id)}
                        aria-label="Toggle wishlist"
                        className="border"
                      >
                        Remove
                      </Button> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Footer actions */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              {items.length} saved{" "}
              {items.length === 1 ? "property" : "properties"}
            </div>

            <div className="flex gap-2">
              <Link href="/properties">
                <Button variant="outline">Continue browsing</Button>
              </Link>

              <Button
                variant="destructive"
                onClick={handleClearAll}
                disabled={ids.length === 0 || clearing}
                className="flex items-center gap-2"
              >
                <Trash className="h-4 w-4" /> Clear wishlist
              </Button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
