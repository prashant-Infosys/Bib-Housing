// components/FAQSection.tsx
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";


const HERO_IMG = "/faq.jpg";

type Faq = {
  id: string;
  q: string;
  a: string;
  category: "buying" | "renting" | "assistance" | "listing" | "general";
};

const FAQS: Faq[] = [
  {
    id: "f1",
    q: "How does Bib Housing keep buyer costs low?",
    a: "We connect buyers directly to RERA-verified developers and builders, eliminating buyer brokerage. Our services (like personalised assistance) are free for buyers.",
    category: "general",
  },
  {
    id: "f2",
    q: "Are the properties listed on Bib Housing verified?",
    a: "Yes. We show only curated, RERA-verified projects and vetted listings — and our team performs additional verification before highlighting any property.",
    category: "general",
  },
  {
    id: "f3",
    q: "How do I book a site visit with Bib Housing?",
    a: "Use 'Get Free Assistance' on the property page or the Book Appointment button. We'll arrange site visits, negotiate with the builder, and support paperwork end-to-end.",
    category: "assistance",
  },
  {
    id: "f4",
    q: "What support does Bib Housing offer for home loans & paperwork?",
    a: "We guide you through loan pre-approval options, documentation, and closing formalities — or refer you to trusted partners who can help fast-track approvals.",
    category: "assistance",
  },
  {
    id: "f5",
    q: "Can owners/listings advertise or list directly?",
    a: "Yes — owners and builders can list their property through 'List Your Property'. Listed projects are screened for quality and RERA compliance before promotion.",
    category: "listing",
  },
  {
    id: "f6",
    q: "How is rent different from sale listings on the platform?",
    a: "Rent listings include monthly rent and typical security deposits; sale listings show sale price, price range (if available), and payment terms. Use the Rent filter to restrict search to rental options.",
    category: "renting",
  },
  {
    id: "f7",
    q: "What is the response time for assistance requests?",
    a: "Most assistance requests receive an initial response within 24 hours. For urgent requests (site visits / negotiations), mention urgency in the form and we'll prioritise them.",
    category: "assistance",
  },
  {
    id: "f8",
    q: "Can I save properties to a wishlist?",
    a: "Yes — use the heart/wishlist button on property cards or the listing page. Saved items are available in your Wishlist area for easy comparison.",
    category: "general",
  },
];

const CATEGORIES: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "buying", label: "Buying" },
  { key: "renting", label: "Renting" },
  { key: "assistance", label: "Assistance" },
  { key: "listing", label: "Listing" },
];

export default function FAQSection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | undefined>(undefined);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      if (category !== "all" && f.category !== category) return false;
      if (!q) return true;
      return f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
    });
  }, [query, category]);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-start">
        {/* Left — heading + controls */}
        <div className="md:col-span-5 space-y-6">
          <Card className="bg-white/95 shadow-lg border border-slate-100">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-semibold">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Quick answers to common queries about buying, renting, listing
                and using our assistance service.
              </p>

              {/* Search */}
              <div className="mt-4">
                <label htmlFor="faq-search" className="sr-only">
                  Search FAQs
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="faq-search"
                    placeholder="Search questions, e.g. 'site visit'..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mt-4 flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setCategory(c.key)}
                    className={`px-3 py-1 rounded-full text-sm transition ${
                      category === c.key
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/10 text-muted-foreground"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
                <div className="ml-auto" />
              </div>
            </CardContent>
          </Card>

          <div className="mt-4">
            <Image
              src={HERO_IMG}
              alt="FAQ illustration"
              width={720}
              height={420}
              className="rounded-lg object-cover shadow-md h-70"
            />
          </div>
        </div>

        {/* Right — accordion list */}
        <div className="md:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${query}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length === 0 ? (
                <Card className="p-6">
                  <CardContent>
                    <p className="text-center text-muted-foreground">
                      No matching FAQs found. Try another search or select
                      another category.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Accordion
                  type="single"
                  collapsible
                  value={openId}
                  onValueChange={(v) => setOpenId(v ?? undefined)}
                >
                  {filtered.map((f) => (
                    <AccordionItem key={f.id} value={f.id} className="mb-3">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium">{f.q}</span>
                          <span className="text-xs text-muted-foreground capitalize">
                            {f.category}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {f.a}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Helpful CTA */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm">
                {"Didn't"} find what you needed?{" "}
                <strong>Reach out — {"we're"} happy to help.</strong>
              </p>
              <p className="text-xs text-muted-foreground">
                Our team typically responds within 24 hours.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                asChild
                // if you want to link to contact page:
                // wrap with Link component where used
              >
                <a href="/contact" className="inline-flex items-center">
                  Contact Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
