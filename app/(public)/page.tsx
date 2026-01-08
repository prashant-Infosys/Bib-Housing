import React from "react";
import Link from "next/link";
import { 
  Building2, 
  DoorClosed, 
  Home, 
  User, 
  Search, 
  ArrowRight, 
  CircleCheckBig,
  Sparkles,
  SearchCode,
  LayoutDashboard
} from "lucide-react";

import HeroSection from "@/components/hero-section";
import SearchBar from "@/components/search-bar"; // Added this
import FeaturedProperties from "@/components/FeaturedProjects";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TrustedBuildersSection from "@/components/TrustedBuildersSection";
import FAQSection from "@/components/FAQSection";
import Header from "@/components/Navbar/Header";
import FooterSection from "@/components/Navbar/Footer";
import BookAppointment from "@/components/BookAppointment";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      
      {/* Search Bar Integration */}
      <SearchBar />

      <section className="relative py-16 px-4 bg-[#fcfcfd]">
        <div className="mx-auto max-w-6xl">
          {/* Refined Section Header */}
          <div className="mb-5 flex flex-col items-center text-center md:items-start md:text-left gap-4">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-6 bg-primary rounded-full"></span>
              <p className="text-primary text-2xl font-black uppercase tracking-[0.2em]">
                How it works 
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Your property journey, <span className="text-primary">simplified.</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            {/* Card 1: Personal Assistance */}
            <Card className="group relative flex flex-col h-full border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-primary/50 overflow-hidden">
              <CardHeader className="p-6 pb-4 space-y-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">Personal Assistance</CardTitle>
                  <CardDescription className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                    Hand-held Guidance
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="px-6 py-0 flex-1">
                <ul className="space-y-3">
  {[
    { icon: <Sparkles />, text: "Dedicated Expert Guide" },
    { icon: <Home />, text: "Verified Site Visits" },
    { icon: <DoorClosed />, text: "Guidance on call or at your doorstep" }
  ].map((item, i) => (
    <li key={i} className="flex items-center gap-3 text-[14px] font-extrabold text-slate-700">
      <span className="text-primary transition-transform group-hover:scale-110">
        {/* The fix is the 'as React.ReactElement' casting below */}
        {React.cloneElement(item.icon as React.ReactElement<any>, { 
          className: "h-4 w-4" 
        })}
      </span>
      {item.text}
    </li>
  ))}
</ul>
              </CardContent>

              <CardFooter className="p-6 pt-6">
                <Link
                  href="/properties"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full h-11 font-bold text-white border-2 bg-primary border-primary hover:border-primary hover:text-primary transition-all shadow-sm",
                  })}
                >
                  Browse Properties
                </Link>
              </CardFooter> 
            </Card>

            {/* Card 2: Search Yourself */}
            <Card className="group relative flex flex-col h-full border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-blue-500 overflow-hidden">
              <CardHeader className="p-6 pb-4 space-y-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <Search className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">Search Yourself</CardTitle>
                  <CardDescription className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                    Self-Serve Platform
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="px-6 py-0 flex-1 flex flex-col items-center justify-center">
                <div className="w-full h-24 bg-slate-50 rounded-xl border border-slate-200 p-3 flex flex-col gap-2 group-hover:border-blue-200 group-hover:bg-blue-50/30 transition-all">
                  <div className="h-7 w-full bg-white rounded-lg border border-slate-200 flex items-center px-2 gap-2 shadow-sm">
                    <Search className="h-3 w-3 text-blue-500" />
                    <div className="h-1.5 w-20 bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 bg-white rounded-lg border border-slate-100 flex items-center justify-center shadow-sm">
                       <LayoutDashboard className="h-3 w-3 text-blue-400 mr-2" />
                       <div className="h-1 w-8 bg-slate-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-6">
                <Link
                  href="/properties"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full h-11 font-bold text-white border-2 bg-blue-600 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm",
                  })}
                >
                  Browse Properties
                </Link>
              </CardFooter>
            </Card>

            {/* Card 3: List Property */}
            <Card className="group relative flex flex-col h-full border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-orange-500 overflow-hidden">
              <CardHeader className="p-6 pb-4 space-y-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">List Your Property</CardTitle>
                  <CardDescription className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                    Owner & Builder Hub
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="px-6 py-0 flex-1">
                <ul className="space-y-3">
                  {[
                    "Verified Buyer Matches",
                    "Premium Listing Visibility",
                    "End-to-End Closing Help"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] font-extrabold text-slate-700">
                      <CircleCheckBig className="h-5 w-5 text-orange-500 fill-orange-50 transition-transform group-hover:scale-110" />
                      {text}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-6">
                <Link
                  href="/list-your-property"
                  className={buttonVariants({ 
                    variant: "outline",
                    className: "w-full h-11 font-bold text-white border-2 bg-orange-500 border-slate-200 hover:border-orange-600 hover:text-orange-600 transition-all shadow-sm" 
                  })}
                >
                  Start Listing
                </Link>
              </CardFooter>
            </Card>

          </div>
        </div>
      </section>

      <FeaturedProperties />
      <TrustedBuildersSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}