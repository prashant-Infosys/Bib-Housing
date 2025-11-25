// components/TrustedBuildersSection.tsx
"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Building2, ShieldCheck, MapPin, Star } from "lucide-react";

type Builder = {
  id: string;
  name: string;
  city: string;
  projects: number;
  years: number;
  reraId: string;
  rating: number;
  tag?: string;
};

const BUILDERS: Builder[] = [
  {
    id: "nkcpl",
    name: "NKCPL Group",
    city: "Bangalore",
    projects: 18,
    years: 12,
    reraId: "PRM/KA/RERA/1251/309/AG/180524/000123",
    rating: 4.7,
    tag: "Featured",
  },
  {
    id: "srs-builders",
    name: "SRS Builders",
    city: "Mumbai",
    projects: 24,
    years: 15,
    reraId: "P51800012345",
    rating: 4.5,
    tag: "Trusted Partner",
  },
  {
    id: "urban-nest",
    name: "Urban Nest Developers",
    city: "Hyderabad",
    projects: 10,
    years: 9,
    reraId: "P02200056789",
    rating: 4.6,
  },
];

export default function TrustedBuildersSection() {
  return (
    <section className="relative py-16 px-4">
      {/* subtle tinted background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#fff5f7] via-white to-[#ffe9ee]" />

      <div className="mx-auto max-w-6xl space-y-8">
        {/* header */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
              Trusted by top developers
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Work only with{" "}
              <span className="text-primary">trusted builders</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              All builders we work with are RERA-registered and vetted for
              delivery track record, transparency and construction quality.
            </p>
          </div>

          {/* <Link
            href="/builders"
            className={buttonVariants({
              variant: "outline",
              className: "text-sm",
            })}
          >
            View all builders
          </Link> */}
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {BUILDERS.map((builder) => (
            <Card
              key={builder.id}
              className="group flex h-full flex-col border border-primary/5 bg-white/95 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-400" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {builder.rating.toFixed(1)}/5
                    </span>
                  </div>
                </div>

                <CardTitle className="text-lg font-semibold">
                  {builder.name}
                </CardTitle>

                <CardDescription className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {builder.city}
                </CardDescription>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 border-primary/20 text-xs text-primary"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    RERA Verified
                  </Badge>
                  {builder.tag && (
                    <Badge className="bg-primary/10 text-primary border-none text-xs">
                      {builder.tag}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-3 text-sm">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Projects delivered</span>
                  <span className="font-medium text-foreground">
                    {builder.projects}+ completed
                  </span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Experience</span>
                  <span className="font-medium text-foreground">
                    {builder.years}+ years
                  </span>
                </div>
                <div className="mt-2 rounded-md bg-muted/40 px-3 py-2 text-[11px] leading-snug text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    RERA ID:{" "}
                  </span>
                  {builder.reraId}
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <Link
                  href={`/builders/${builder.id}`}
                  className={buttonVariants({
                    variant: "ghost",
                    className:
                      "group/button w-full justify-between text-xs font-medium text-primary hover:bg-primary/5",
                  })}
                >
                  View projects from {builder.name.split(" ")[0]}
                  <span className="transition-transform duration-150 group-hover/button:translate-x-0.5">
                    →
                  </span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
