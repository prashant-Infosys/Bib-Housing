// context/WishlistContext.tsx
"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const WISHLIST_KEY = "mb_wishlist_v1";

export type WishlistContextValue = {
  ids: string[]; // saved property ids
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  has: (id: string) => boolean;
  count: number;
};

const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined
);

function readLocal(): string[] {
  try {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem(WISHLIST_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

function writeLocal(ids: string[]) {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
  } catch {}
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  // lazy init from localStorage (client-only)
  const [ids, setIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return readLocal();
  });

  // add — stable (doesn't depend on `ids`)
  const add = useCallback((id: string) => {
    setIds((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      writeLocal(next);
      return next;
    });
  }, []);

  // remove — stable
  const remove = useCallback((id: string) => {
    setIds((prev) => {
      if (!prev.includes(id)) return prev;
      const next = prev.filter((x) => x !== id);
      writeLocal(next);
      return next;
    });
  }, []);

  // toggle — stable
  const toggle = useCallback((id: string) => {
    setIds((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((x) => x !== id) : [...prev, id];
      writeLocal(next);
      return next;
    });
  }, []);

  // has depends on ids -> memoize with ids in deps
  const has = useCallback((id: string) => ids.includes(id), [ids]);

  // memoize the context value with correct deps (ids + stable callbacks + has)
  const value = useMemo(
    () => ({
      ids,
      add,
      remove,
      toggle,
      has,
      count: ids.length,
    }),
    [ids, add, remove, toggle, has]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return ctx;
}
