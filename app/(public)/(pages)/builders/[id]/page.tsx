import React from "react";
import { BUILDERS } from "@/app/data/builder";
import { getPropertiesByBuilderName } from "@/app/data/properties";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Home,
  IndianRupee,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import HeroClient from "@/app/(public)/(pages)/properties/[slug]/_components/HeroClient";

export default async function BuilderProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const builder = BUILDERS.find((b) => b.id === id);
  

  if (!builder) return notFound();

  // Pick up the dynamic brand color or fallback to pink
  const brandColor = builder.color || "#FF4466";
  const builderProjects = getPropertiesByBuilderName(builder.name);

  const formatPrice = (value: number) => {
    if (value >= 10_000_000) return `₹ ${(value / 10_000_000).toFixed(2)} Cr`;
    if (value >= 100_000) return `₹ ${(value / 100_000).toFixed(2)} L`;
    return `₹ ${value.toLocaleString()}`;
  };

  return (
    <main className="top-6 min-h-screen bg-slate-50/30">
      {/* --- HERO SECTION --- */}
      <div className="relative -top-15">
        <div className="absolute right-6 mt-12 z-40 md:right-12 md:top-12">
          <div className="group flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur-md transition-all duration-500 hover:bg-white md:h-32 md:w-32">
            {builder.logoUrl ? (
              <img
                src={builder.logoUrl}
                alt={`${builder.name} logo`}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="flex flex-col items-center text-slate-400">
                <Briefcase size={32} />
                <span className="mt-1 text-[8px] font-bold uppercase">
                  Builder
                </span>
              </div>
            )}
          </div>
        </div>

        <HeroClient
          title={builder.name.toUpperCase()}
          description={builder.about || ""}
          brandColor={brandColor}
          titleClassName="font-serif tracking-tighter"
          titleStyle={{ color: brandColor }}
          subtitle={`${builder.city}`}
          image={builderProjects[0]?.images?.[0] || "/api/placeholder/1200/600"}
          regId={builder.regId ? `Reg No: ${builder.regId}` : ""}
          listingType={""}
          priceLabel={""}
        />
        {/* --- NEW BIGGER TRUSTED PARTNER BADGE (Bottom Right) --- */}
        {builder.trusted && (
          <div className="absolute bottom-8 right-8 z-40 md:bottom-12 md:right-12">
            <div
              className="flex items-center gap-3 rounded-full px-6 py-3 shadow-2xl backdrop-blur-md border border-white/30 transition-transform hover:scale-105"
              style={{
                backgroundColor: `${brandColor}CC`, // Brand color with 80% opacity
                boxShadow: `0 10px 30px -10px ${brandColor}66`,
              }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-inner">
                <CheckCircle
                  size={20}
                  style={{ color: brandColor }}
                  fill="currentColor"
                  className="fill-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 leading-none">
                  Official
                </span>
                <span className="text-sm font-bold text-white md:text-base">
                  Trusted Partner
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        {/* QUICK STATS BAR */}
        <div className="relative z-10 -mt-20 mb-12">
          <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Experience Card with Brand Color */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl transition-all hover:shadow-2xl">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${brandColor}15`,
                  color: brandColor,
                }}
              >
                <Award size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Experience
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {builder.years}+ Years
                </p>
              </div>
            </div>

            {/* Projects Card with Brand Color */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-xl transition-all hover:shadow-2xl">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${brandColor}15`,
                  color: brandColor,
                }}
              >
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Projects
                </p>
                <p className="text-lg font-bold text-slate-900">
                  {builderProjects.length} Total
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mb-8 text-2xl font-bold text-slate-800">
          Featured Projects by{" "}
          <span style={{ color: brandColor }}>{builder.name}</span>
        </h2>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {builderProjects.length > 0 ? (
            builderProjects.map((project) => (
              <Link
                key={project.id}
                href={`/properties/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={
                  {
                    // Dynamic border color on hover can be tricky with inline styles,
                    // so we handle the static parts here
                  }
                }
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.images?.[0] || "/api/placeholder/400/250"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-sm"
                      style={{ color: brandColor }}
                    >
                      {project.propertyType}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Dynamic Project Title Color on Hover logic is best handled via standard CSS or classes, 
                      but we apply the brand color to the icon below */}
                  <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-slate-700">
                    {project.title}
                  </h3>

                  <p className="mb-4 flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin size={14} style={{ color: brandColor }} />
                    {project.location.address}, {project.location.city}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Starting from
                      </span>
                      <span className="flex items-center text-xl font-black text-slate-900">
                        <IndianRupee size={16} />
                        {project.priceRange?.min
                          ? formatPrice(project.priceRange.min)
                          : "On Request"}
                      </span>
                    </div>

                    {/* DYNAMIC GLOW BUTTON */}
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:text-white"
                      style={{
                        backgroundColor: "var(--bg-color)",
                      }}
                      // We use a small CSS trick here or just apply background on hover in a real stylesheet
                    >
                      <Home size={20} className="group-hover:text-rose-600" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 py-24 text-center">
              <p className="text-lg font-medium text-slate-400">
                No active listings for this builder.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
