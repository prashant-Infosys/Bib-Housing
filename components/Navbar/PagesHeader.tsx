"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Menu, X, Home, Building2, Headset, Mail } from "lucide-react";
import Logo from "./Logo";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/app/context/WishlistContext";

export default function PagesHeader() {
  const [open, setOpen] = useState(false);
  const { count } = useWishlist();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        className={`fixed w-full z-50 transition-all duration-300 top-0.5 left-0 ${
          scrolled ? "top-0.5" : "top-1"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl h-16 flex items-center justify-between px-6 md:px-12 transition-all rounded-full duration-500 border-b ${
            scrolled 
              ? "bg-[#ff4466]/90 backdrop-blur-md border-white/10" 
              : "bg-slate-900/90 border-white/5" 
          }`}
        >
          {/* Logo Section */}
          <div className="flex items-center hover:scale-105 transition-transform duration-300">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold tracking-wide text-white/90 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-slate-100 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* --- WISHLIST ONLY BUTTON --- */}
            <div className="border-l border-white/10 pl-6 ml-2">
              <Link 
                href="/wishlist"
                className="flex items-center gap-2 p-2 px-4 rounded-full bg-white text-slate-900 hover:bg-white/90 transition-all shadow-xl group"
              >
                <div className="relative">
                  <Heart className={`h-5 w-5 transition-colors ${count > 0 ? "fill-red-500 text-red-500" : "text-slate-600"}`} />
                  {count > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-primary text-[8px] h-4 w-4 flex items-center justify-center rounded-full text-white border border-white font-bold">
                      {count}
                    </span>
                  )}
                </div>
                <span className="text-xs font-black uppercase tracking-wider">Wishlist</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>
      
      <div className="h-15 w-full" aria-hidden="true" />

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between border-b bg-slate-50">
            <Logo />
            <button 
              className="p-2 rounded-full hover:bg-slate-200 transition-colors" 
              onClick={() => setOpen(false)}
            >
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
                <span className="p-2 rounded-lg bg-slate-100 text-slate-500">
                  {link.icon}
                </span>
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
                <Heart className="h-5 w-5 fill-red-600" />
                Wishlist
              </div>
              <Badge className="bg-red-600 text-white px-3">
                <span suppressHydrationWarning>{count}</span>
              </Badge>
            </Link>
          </nav>
          
          <div className="mt-auto p-8 bg-slate-50 text-center">
            <p className="text-xs text-slate-400 font-medium tracking-widest uppercase mb-2">Need Help?</p>
            <p className="text-sm font-bold text-slate-900">+91 99000 01122</p>
          </div>
        </div>
      </aside>
    </>
  );
}