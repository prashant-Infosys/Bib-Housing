"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/app/context/WishlistContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useWishlist();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky z-50 -mt-20 ${
        scrolled ? "top-0 bg-primary" : "top-0 md:top-1"
      }`}
    >
      <div
        className={`mx-auto flex h-14 items-center justify-between px-4 sm:px-8 max-w-7xl transition-all duration-300 overflow-hidden rounded-full ${
          scrolled ? "bg-primary" : "bg-white/30  backdrop-blur-sm shadow-xl"
        } `}
      >
        <div className="flex items-center gap-4">
          <Logo />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link href={"/"} className="font-semibold">
            Home
          </Link>
          <Link href={"/properties"} className="font-semibold">
            Browse Properties
          </Link>
          <Link href={"/assistance"} className="font-semibold">
            Assistance
          </Link>
          <Link href={"/contact"} className="font-semibold">
            Contact
          </Link>

          <Link href="/wishlist" className="relative inline-flex items-center">
            <Heart className={`h-5 w-5 text-white`} />
            <Badge className="absolute -top-3 -right-4 bg-secondary text-black">
              <span suppressHydrationWarning>{count}</span>
            </Badge>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-lg transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <Logo />
          <button className="p-2" onClick={() => setOpen(false)}>
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        <nav className="p-4 space-y-3 flex flex-col">
          <Link
            href={"/"}
            onClick={() => setOpen(false)}
            className="font-semibold"
          >
            Home
          </Link>
          <Link
            href={"/properties"}
            onClick={() => setOpen(false)}
            className="font-semibold"
          >
            Browse Properties
          </Link>
          <Link href={"/assistance"} className="font-semibold">
            Assistance
          </Link>
          <Link
            href={"/contact"}
            onClick={() => setOpen(false)}
            className="font-semibold"
          >
            Contact
          </Link>

          <Link
            href="/wishlist"
            className="flex items-center justify-between rounded px-3 py-2 text-sm hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              Wishlist
            </div>
            <Badge>
              <span suppressHydrationWarning>{count}</span>
            </Badge>
          </Link>
        </nav>
      </aside>
    </header>
  );
}
