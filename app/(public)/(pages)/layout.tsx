import FooterSection from "@/components/Navbar/Footer";
import PagesHeader from "@/components/Navbar/PagesHeader";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PagesHeader />
      {children}
      <FooterSection />
    </>
  );
};

export default PagesLayout;
