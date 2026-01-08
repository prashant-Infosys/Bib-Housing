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
  Home,
  Tag,
  Calendar,
  Info,
  Maximize,
  Building2,
  Layers,
} from "lucide-react";
import { getFeaturedProperties, getPropertyBySlug } from "@/app/data/properties";
import type { NearbyLocation, Property } from "@/app/data/dummy_15";

import WishlistButton from "@/components/WishlistButton";
import ImageGallery from "./_components/ImageGallery";
import HeroClient from "./_components/HeroClient";
import BuilderInfo from "./_components/BuilderInfo";
import AmenitiesInfo from "./_components/AmenitiesInfo";
import ExpandableDescription from "./_components/ExpandableDescription";
import NearbyCard from "./_components/NearbyCard";
import { BUILDERS } from "@/app/data/builder";
import PropertyCard from "@/components/PropertyCard";

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

  let priceLabel = "";
  if (priceRange)
    priceLabel = `${formatPrice(priceRange.min)} - ${formatPrice(priceRange.max)}`;
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

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const allProperties = getFeaturedProperties();
  const builderProperties = allProperties.filter(
    (p) => p.owner?.name === property.owner?.name && p.id !== property.id
  );

  const trustedBuilderNames = BUILDERS.filter((b) => b.trusted).map((b) => b.name.toLowerCase());

  const trustedProperties = allProperties.filter((p) => {
    const isTrustedBuilder = trustedBuilderNames.includes(p.owner?.name?.toLowerCase());
    const isNotCurrentProperty = p.id !== property.id;
    const isNotAlreadyInBuilderList = !builderProperties.find((bp) => bp.id === p.id);
    return isTrustedBuilder && isNotCurrentProperty && isNotAlreadyInBuilderList;
  });

  return (
    <main className="container -mt-3 mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <Link 
          href="/properties" // Or use a Client Component button for window.history.back()
          className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors group"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">‹</span> 
          Back to Listings
        </Link>
        
        {/* Optional: Add breadcrumbs or status badge here if needed */}
      </div>
      {/* --- TOP SECTION: FULL WIDTH IMAGE GALLERY --- */}
      <div className="w-screen -ml-[50vw] left-1/2 relative mb-6">
  <div className="relative group">
    <Card className="overflow-hidden border-none shadow-none rounded-none">
      <CardContent className="p-0">
        <ImageGallery
          images={images}
          alt={title ?? "property"}
          height="h-[250px] md:h-[450px]"
        />
      </CardContent>
    </Card>

    {/* Floating Category Navigation */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/20 opacity-90 hover:opacity-100 transition-opacity overflow-x-auto no-scrollbar max-w-[90vw]">
      {["All Photos", "Bedrooms", "Kitchen", "Living", "Exterior"].map((tab) => (
        <button
          key={tab}
          className="px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all whitespace-nowrap"
        >
          {tab}
        </button>
      ))}
    </div>
    
    {/* Image Count Badge (Optional) */}
    <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold">
      1 / {images.length}
    </div>
  </div>
</div>

      {/* --- BOTTOM SECTION: CONTENT GRID --- */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left column: description, features, units */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Unit Configuration */}
          {property.units && property.units.length > 0 && (
            <Card className="mb-8 overflow-hidden border-slate-200 shadow-sm">
              <CardContent className="pt-0">
                <div className="relative mb-1">
                  <Layers className="absolute -left-4 -top-6 h-16 w-16 text-slate-100 -z-10 rotate-12 opacity-50" />
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 relative">
                    Unit Configuration
                    <span className="text-[#ff4466] ml-1">.</span>
                  </h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {property.units.map((item, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-sm">
                      <div
                        className="py-1.5 text-center text-white font-bold text-xl tracking-wide"
                        style={{ backgroundColor: "#ff4466" }}
                      >
                        {item.bhk} {item.detail ? `+ ${item.detail}` : ""}
                      </div>
                      <CardContent className="p-0 bg-slate-50/50">
                        <div className="flex flex-col items-center p-3 pb-1 text-center">
                          <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold">
                            Area (sq.ft)
                          </span>
                          <span className="text-lg font-black text-slate-900 leading-tight">
                            {item.area}
                          </span>
                        </div>
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
                        {item.options !== null && item.options !== undefined && (
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

          {/* Property Details */}
          <Card>
            <CardContent className="pt-0">
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
                <div className="relative">
                  <Building2 className="absolute -left-4 -top-6 h-16 w-16 text-slate-100 -z-10 rotate-12 opacity-50" />
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 relative">
                    Property Details
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
                    <span className="text-sm font-semibold text-slate-700">{reraId}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-6">
                {[
                  { label: "Property type", value: propertyType, icon: <Home className="h-7 w-7" /> },
                  { label: "Listing", value: listingType, icon: <Tag className="h-7 w-7" /> },
                  { label: "Started On", value: formatDate(startDate), icon: <Calendar className="h-7 w-7" /> },
                  { label: "Possession In", value: formatDate(possessionDate), icon: <Calendar className="h-7 w-7" /> },
                  { label: "Status", value: status, icon: <Info className="h-7 w-7" /> },
                  { label: "Project Area", value: builtUpArea, icon: <Maximize className="h-7 w-7" /> },
                  { label: "Total Units", value: totalUnits, icon: <Building2 className="h-7 w-7" /> },
                  { label: "Towers", value: totalTowers, icon: <Layers className="h-7 w-7" /> },
                ].map(
                  (item, index) =>
                    item.value && (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 text-slate-400">{item.icon}</div>
                        <div className="space-y-1">
                          <h4 className="text-sm text-muted-foreground leading-none">{item.label}</h4>
                          <div className="font-medium text-[#FF4466]">{item.value}</div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Amenities & Nearby */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {property.amenities && property.amenities.length > 0 && (
              <Card className="mt-0 border-none shadow-sm bg-slate-50/50">
                <CardContent className="pt-0.5">
                  <AmenitiesInfo amenities={property.amenities} />
                </CardContent>
              </Card>
            )}

            {property.nearbyLocations && property.nearbyLocations.length > 0 && (
              <NearbyCard
                propertyName={property.title}
                nearbyLocations={property.nearbyLocations.map((loc) => ({
                  ...loc,
                  distanceKm: loc.distanceKm === null ? undefined : loc.distanceKm,
                }))}
              />
            )}
            {property.owner?.name &&
              (() => {
                const matchedBuilder = BUILDERS.find(
                  (b) => b.name.toLowerCase() === property.owner.name.toLowerCase()
                );
                return (
                  <Link
                    href={`/builders/${matchedBuilder?.id || "#"}`}
                    className="group block relative rounded-2xl bg-white border border-slate-100 p-6 transition-all duration-300 hover:ring-2 hover:ring-rose-500/20 hover:shadow-xl"
                  >
                    <BuilderInfo
                      builder={{
                        name: matchedBuilder?.name || property.owner.name,
                        description: matchedBuilder?.about || property.builderDetails?.description,
                        logo: matchedBuilder?.logoUrl || property.logo,
                      }}
                    />
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
        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-20 space-y-4">
            <Card>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <div>
                    <h1 className="text-lg font-semibold leading-tight">{title}</h1>
                    <ExpandableDescription text={description} />
                    <div className="mt-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div className="text-sm text-muted-foreground">{renderLocationLine()}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold text-primary">{priceLabel}</div>
                    <div className="mt-2 flex gap-2">
                      {status && (
                        <Badge className="bg-muted text-muted-foreground">{status}</Badge>
                      )}
                      {verified && (
                        <Badge className="bg-primary text-primary-foreground">Verified</Badge>
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
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-[#FF4466] text-white">
              <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                <p className="text-lg font-semibold leading-relaxed">
                  Interested in this or similar properties?
                  <br />
                  Get <span className="text-xl font-bold">FREE EXPERT ASSISTANCE</span> over a call.
                </p>
                <Button className="bg-white text-primary font-bold px-8 py-2 transition-all duration-300 hover:bg-slate-900 hover:text-white group">
                  Connect Now
                </Button>
              </CardContent>
            </Card>

            {property.why && property.why.length > 0 && (
              <Card>
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
                        className={`pl-2 ${index === 0 ? "" : "mt-2"} marker:text-[#ff4466] marker:font-bold`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  {property.brochureUrl && (
                    <div className="mt-6">
                      <a
                        href={property.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF4466] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#e63e5c] hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <Download className="h-5 w-5" />
                        DOWNLOAD BROCHURE
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </aside>
      </div>

      {/* --- RECOMMENDATIONS --- */}
      {builderProperties.length > 0 && (
        <section className="mt-16 pt-8 border-t">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              More from <span className="text-[#FF4466]">{property.owner.name}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {builderProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      )}

      {trustedProperties.length > 0 && (
        <section className="mt-16 pt-8 border-t">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Projects by <span className="text-[#FF4466]">Trusted Developers</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustedProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}