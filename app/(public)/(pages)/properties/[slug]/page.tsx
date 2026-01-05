// app/properties/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Download,
  FileText,
} from "lucide-react";
import {
  Home,
  Tag,
  Calendar,
  Info,
  Maximize,
  Building2,
  Layers,
} from "lucide-react";
import { getPropertyBySlug } from "@/app/data/properties";
import type { NearbyLocation, Property } from "@/app/data/dummy_15";

import WishlistButton from "@/components/WishlistButton";
import ImageGallery from "./_components/ImageGallery";
import HeroClient from "./_components/HeroClient";
import BuilderInfo from "./_components/BuilderInfo";
import AmenitiesInfo from "./_components/AmenitiesInfo";
import ExpandableDescription from "./_components/ExpandableDescription";
import NearbyCard from "./_components/NearbyCard";
import { BUILDERS } from "@/app/data/builder";

type Props = {
  params: { slug: string };
  amenities?: string[];
};

function formatPrice(value?: number | null) {
  if (value === null || value === undefined) return "Contact for price";
  if (value >= 10_000_000) return `₹ ${(value / 10_000_000).toFixed(2)} Cr`;
  if (value >= 100_000) return `₹ ${(value / 100_000).toFixed(2)} L`;
  return `₹ ${value.toLocaleString()}`;
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) return notFound();

  const {
    title,
    price,
    rent,
    coverImage,
    priceRange,
    listingType,
    propertyType,
    totalTowers,
    totalUnits,
    status,
    verified,
    location,
    images,
    bhk,
    bathrooms,
    builtUpArea,
    description,
    reraId,
    id,
    startDate,
    possessionDate,
  } = property as Property;

  // price label logic (same as your previous)
  let priceLabel = "";
  if (priceRange)
    priceLabel = `${formatPrice(priceRange.min)} - ${formatPrice(
      priceRange.max
    )}`;
  else if (listingType === "Rent")
    priceLabel = rent ? `${formatPrice(rent)}` : "Contact for rent";
  else priceLabel = formatPrice(price);

  const renderLocationLine = () => {
    if (!location) return "Location not available";
    const parts: string[] = [];
    if (location.address) parts.push(location.address);
    if (location.city) parts.push(location.city);
    if (location.state) parts.push(location.state);
    if (location.pincode) parts.push(location.pincode);
    return parts.join(", ");
  };

  const heroImage = coverImage ? coverImage : images[0];

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Return original if invalid

    return new Intl.DateTimeFormat("en-US", {
      month: "short", // "Feb"
      year: "numeric", // "2025"
    }).format(date);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mt-0 grid grid-cols-12 gap-6">
        {/* Left column: gallery, description, features */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Gallery preview and full gallery */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <ImageGallery
                images={images}
                alt={title ?? "property"}
                height="h-[500px]"
              />
            </CardContent>
          </Card>
          {/* Only render the Unit Configuration section if units exist and have items */}
          {property.units && property.units.length > 0 && (
            <Card className="mb-8 overflow-hidden border-slate-200 shadow-sm">
              <CardContent className="pt-0">
                {/* Header with Watermark Icon */}
                <div className="relative mb-1">
                  <Layers className="absolute -left-4 -top-6 h-16 w-16 text-slate-100 -z-10 rotate-12 opacity-50" />
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 relative">
                    Unit Configuration
                    <span className="text-[#ff4466] ml-1">.</span>
                  </h3>
                </div> 

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {property.units.map((item, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-none shadow-sm"
                    >
                      {/* Header */}
                      <div
                        className="py-1.5 text-center text-white font-bold text-xl tracking-wide"
                        style={{ backgroundColor: "#ff4466" }}
                      >
                        {item.bhk} {item.detail ? `+ ${item.detail}` : ""}
                      </div>

                      <CardContent className="p-0 bg-slate-50/50">
                        {/* Area Section */}
                        <div className="flex flex-col items-center p-3 pb-1 text-center">
                          <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">
                            Area (sq.ft)
                          </span>
                          <span className="text-lg font-black text-slate-900 leading-tight">
                            {item.area}
                          </span>
                        </div>

                        {/* Price Section - Hidden if null */}
                        {item.price !== null && item.price !== undefined && (
                          <div className="flex flex-col items-center px-3 py-2 bg-white/50 border-y border-slate-100 text-center">
                            <span className="text-[9px] uppercase tracking-wider text-primary font-bold">
                              Price
                            </span>
                            <span className="text-lg font-black text-slate-900 leading-tight">
                              {item.price}
                            </span>
                          </div>
                        )}

                        {/* Footer Options - Hidden if null */}
                        {item.options !== null &&
                          item.options !== undefined && (
                            <div className="py-2 text-center">
                              <span className="text-[10px] text-[#ff4466] font-bold uppercase">
                                {item.options}
                              </span>
                            </div>
                          )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent className="pt-0">
              {/* Header Section with RERA ID on the right */}
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
                {/* Header with Background Icon */}
                <div className="relative">
                  {/* The Background Watermark Icon */}
                  <Building2 className="absolute -left-4 -top-6 h-16 w-16 text-slate-100 -z-10 rotate-12 opacity-50" />

                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 relative">
                    Property Details
                    {/* Decorative accent dot */}
                    <span className="text-[#FF4466] ml-1">.</span>
                  </h2>
                  <p className="text-sm text-muted-foreground font-medium">
                    Key information about this project
                  </p>
                </div>

                {reraId && (
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      RERA ID:
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {reraId}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-6">
                {[
                  {
                    label: "Property type",
                    value: propertyType,
                    icon: <Home className="h-7 w-7" />,
                  },
                  {
                    label: "Listing",
                    value: listingType,
                    icon: <Tag className="h-7 w-7" />,
                  },
                  {
                    label: "Started On",
                    value: formatDate(startDate),
                    icon: <Calendar className="h-7 w-7" />,
                  },
                  {
                    label: "Possession In",
                    value: formatDate(possessionDate),
                    icon: <Calendar className="h-7 w-7" />,
                  },
                  {
                    label: "Status",
                    value: status,
                    icon: <Info className="h-7 w-7" />,
                  },
                  {
                    label: "Project Area",
                    value: builtUpArea,
                    icon: <Maximize className="h-7 w-7" />,
                  },
                  {
                    label: "Total Units",
                    value: totalUnits,
                    icon: <Building2 className="h-7 w-7" />,
                  },
                  {
                    label: "Towers",
                    value: totalTowers,
                    icon: <Layers className="h-7 w-7" />,
                  },
                ].map(
                  (item, index) =>
                    item.value && (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 text-slate-400">{item.icon}</div>
                        <div className="space-y-1">
                          <h4 className="text-sm text-muted-foreground leading-none">
                            {item.label}
                          </h4>
                          <div className="font-medium text-[#FF4466]">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Amenities & Nearby */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* 1. Dynamic Amenities Section */}
            {property.amenities && property.amenities.length > 0 && (
              <Card className="mt-0 border-none shadow-sm bg-slate-50/50">
                <CardContent className="pt-0.5">
                  <AmenitiesInfo amenities={property.amenities} />
                </CardContent>
              </Card>
            )}

            {/* 2. Dynamic Nearby Locations Section */}
            {property.nearbyLocations &&
              property.nearbyLocations.length > 0 && (
                <NearbyCard
                  // Change propertyId to propertyName
                  propertyName={property.title}
                  nearbyLocations={property.nearbyLocations.map((loc) => ({
                    ...loc,
                    // Convert null to undefined for TS compatibility
                    distanceKm:
                      loc.distanceKm === null ? undefined : loc.distanceKm,
                  }))}
                />
              )}
            {property.owner?.name &&
              (() => {
                const matchedBuilder = BUILDERS.find(
                  (b) =>
                    b.name.toLowerCase() === property.owner.name.toLowerCase()
                );

                return (
                  <Link
                    href={`/builders/${matchedBuilder?.id || "#"}`}
                    className="group block relative rounded-2xl bg-white border border-slate-100 p-6 transition-all duration-300 hover:ring-2 hover:ring-rose-500/20 hover:shadow-xl"
                  >
                    <BuilderInfo
                      builder={{
                        name: matchedBuilder?.name || property.owner.name,
                        description:
                          matchedBuilder?.about ||
                          property.builderDetails?.description,
                        logo: matchedBuilder?.logoUrl || property.logo,
                      }}
                    />

                    {/* This will appear only when the user hovers over any part of the card */}
                    <div className="mt-4 pt-4 border-t border-slate-50 flex justify-end">
                      <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                        View Developer Profile →
                      </span>
                    </div>
                  </Link>
                );
              })()}
          </div>
        </div>

        {/* Right column: sticky contact/summary */}
        <aside className="col-span-12 lg:col-span-4 ro">
          <div className="sticky top-20 space-y-4">
            <Card className="">
              <CardContent>
                <div className="flex flex-col gap-3">
                  <div>
                    <h1 className="text-lg font-semibold leading-tight">
                      {title}
                    </h1>
                    <ExpandableDescription text={description} />
                    <div className="mt-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div className="text-sm text-muted-foreground">
                        {renderLocationLine()}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {priceLabel}
                    </div>
                    <div className="mt-2 flex gap-2">
                      {status && (
                        <Badge className="bg-muted text-muted-foreground">
                          {status}
                        </Badge>
                      )}
                      {verified && (
                        <Badge className="bg-primary text-primary-foreground">
                          Verified
                        </Badge>
                      )}
                      <WishlistButton propertyId={id} />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {typeof bhk === "number" && (
                      <div className="flex items-center gap-2 rounded-md bg-sidebar px-3 py-1 text-black text-sm">
                        <BedDouble className="h-4 w-4" /> {bhk} BHK
                      </div>
                    )}
                    {typeof bathrooms === "number" && (
                      <div className="flex items-center gap-2 rounded-md bg-sidebar px-3 py-1 text-black text-sm">
                        <Bath className="h-4 w-4" /> {bathrooms} Baths
                      </div>
                    )}
                    {/* {typeof builtUpArea === "number" && (
                      <div className="flex items-center gap-2 rounded-md bg-sidebar px-3 py-1 text-black text-sm">
                        <Ruler className="h-4 w-4" /> {builtUpArea} sqft
                      </div>
                    )} */}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-[#FF4466] text-white">
              <CardContent className="flex flex-col items-center text-center p-0 space-y-1">
                <p className="text-lg font-semibold leading-relaxed max-w-xl">
                  Interested in this or similar properties?
                  <br />
                  Get{" "}
                  <span className="text-xl font-bold ">
                    FREE EXPERT ASSISTANCE <br />
                  </span>{" "}
                  over a call or right at your doorstep.
                </p>

                <Button
                  className="
                    relative bg-white text-primary font-bold px-8 py-2
                    transition-all duration-300
                    hover:bg-slate-900
                    group
                  "
                >
                  <span className="block group-hover:hidden">Connect Now</span>
                  <span className="hidden group-hover:block text-white">
                    Connect Now ❤︎
                  </span>
                </Button>
              </CardContent>
            </Card>

            {property.why && property.why.length > 0 && (
              <Card className="gap-y-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold tracking-tight uppercase">
                    WHY {property.title} ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 -mt-4">
                  <ul className="text-sm list-disc list-outside ml-5 text-muted-foreground">
                    {property.why.map((point, index) => (
                      <li
                        key={index}
                        className={`
        pl-2 
        ${index === 0 ? "" : "mt-2"} 
        marker:text-[#ff4466] marker:font-bold
      `}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Dynamic Brochure Section */}
                  {property.brochureUrl && (
                    <div className="mt-6">
                      <a
                        href={property.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF4466] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#e63e5c] hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                      >
                        <Download className="h-5 w-5" />
                        DOWNLOAD BROCHURE
                      </a>

                      <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-muted-foreground font-semibold uppercase tracking-widest text-center">
                        <FileText className="h-3.5 w-3.5 text-[#FF4466]" />
                        {property.title} Property Brochure
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </aside>
      </div>

      <div className="mt-8">
        <Link href="/properties">
          <Button variant="outline">Back to Listings</Button>
        </Link>
      </div>
    </main>
  );
}
