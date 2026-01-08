"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Heart, Menu, X, Home, Building2, Headset, Mail } from "lucide-react";
import Logo from "./Logo";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/app/context/WishlistContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useWishlist();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Properties", href: "/properties", icon: <Building2 className="h-4 w-4" /> },
    { name: "Assistance", href: "/assistance", icon: <Headset className="h-4 w-4" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 px-4 md:px-8 ${
          scrolled ? "top-0.5" : "top-3"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl flex h-16 items-center justify-between px-6 md:px-12 transition-all duration-500 rounded-full border border-white/20 ${
            scrolled 
              ? "bg-slate-900/90 backdrop-blur-md shadow-2xl" 
              : "bg-white/10 backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center hover:scale-105 transition-transform duration-300">
            <Logo />
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold tracking-wide text-white/90 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div className="border-l border-white/20 pl-6 ml-2">
              <Link 
                href="/wishlist" 
                className="relative flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all group"
              >
                <Heart className={`h-5 w-5 transition-colors ${count > 0 ? "fill-red-500 text-red-500" : "text-white"}`} />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-[8px] h-4 w-4 flex items-center justify-center rounded-full text-white border border-slate-900 font-bold">
                    {count}
                  </span>
                )}
              </Link>
            </div>
          </nav>

          <button
            className="md:hidden p-2 rounded-full text-white hover:bg-white/20 transition-all"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between border-b bg-slate-50">
            <Logo />
            <button className="p-2 rounded-full hover:bg-slate-200" onClick={() => setOpen(false)}>
              <X className="h-6 w-6 text-slate-800" />
            </button>
          </div>

          <nav className="p-8 space-y-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 text-lg font-bold text-slate-800 hover:text-primary transition-colors"
              >
                <span className="p-2 rounded-lg bg-slate-100 text-slate-500">{link.icon}</span>
                {link.name}
              </Link>
            ))}

            <hr className="border-slate-100" />

            <Link
              href="/wishlist"
              className="flex items-center justify-between rounded-xl bg-red-50 p-4 text-red-700 hover:bg-red-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center gap-3 font-bold">
                <Heart className="h-5 w-5 fill-red-600" /> Wishlist
              </div>
              <Badge className="bg-red-600 text-white h-6 w-6 flex items-center justify-center">{count}</Badge>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}