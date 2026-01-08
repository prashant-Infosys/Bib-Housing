"use client";

import FooterSection from "@/components/Navbar/Footer";
import PagesHeader from "@/components/Navbar/PagesHeader";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();


  // Hide the back button if the user is on the home page
  const isHomePage = pathname === "/";
  const isPropertiesPage = pathname === '/properties';

  return (
    <>
      <PagesHeader />

      {!isHomePage || isPropertiesPage && (
        <div className="container mx-auto px-4 pt-4">
          <div className="max-w-7xl mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="gap-2 text-muted-foreground hover:text-foreground transition-colors -ml-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
        </div>
      )}

      {children}
      <FooterSection />
    </>
  );
};

export default PagesLayout;