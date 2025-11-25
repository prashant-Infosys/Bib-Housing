"use client";

import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbBannerProps {
  title: string;
  description?: string;
  items: BreadcrumbItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function BreadcrumbBanner({
  title,
  description,
  items,
  ctaLabel,
  ctaHref,
}: BreadcrumbBannerProps) {
  return (
    <section className="relative py-12 px-4 text-white bg-linear-to-br from-[#ff4466] to-[#862436]">
      {/* Soft noise overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/80 flex-wrap">
          <Link href="/" className="flex items-center gap-1 hover:text-white">
            <Home className="h-4 w-4" />
            Home
          </Link>

          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-white/60" />
              {item.href ? (
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Title + Description */}
        <div className="max-w-3xl space-y-2 pt-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-white/90 text-sm md:text-base">{description}</p>
          )}
        </div>

        {/* Optional CTA */}
        {ctaLabel && ctaHref && (
          <div className="pt-4">
            <Link
              href={ctaHref}
              className={buttonVariants({
                className: "bg-white text-black hover:bg-white/90 shadow-sm",
              })}
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
