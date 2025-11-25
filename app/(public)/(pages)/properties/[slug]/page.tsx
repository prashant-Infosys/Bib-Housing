// app/properties/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, BedDouble, Bath, Ruler, Phone } from "lucide-react";
import { getPropertyBySlug } from "@/app/data/properties";
import type { NearbyLocation, Property } from "@/app/data/dummy_15";

import WishlistButton from "@/components/WishlistButton";
import ImageGallery from "./_components/ImageGallery";
import HeroClient from "./_components/HeroClient";

type Props = {
  params: { slug: string };
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
    negotiable,
    priceSuffix,
    listingType,
    propertyType,
    status,
    verified,
    location,
    images,
    bhk,
    bathrooms,
    builtUpArea,
    amenities,
    owner,
    postedAt,
    description,
    securityDeposit,
    nearbyLocations,
    id,
    why,
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

  if (priceSuffix) priceLabel = `${priceLabel}`;

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

  return (
    <main className="container mx-auto px-4 py-8">
      {/* HERO (client) - large image + title + small meta */}
      <HeroClient
        title={title}
        subtitle={renderLocationLine()}
        image={heroImage}
        priceLabel={priceLabel}
        listingType={listingType}
        bhk={bhk}
        bathrooms={bathrooms}
        builtUpArea={builtUpArea}
        ownerName={owner.name}
      />

      <div className="mt-8 grid grid-cols-12 gap-6">
        {/* Left column: gallery, description, features */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Gallery preview and full gallery */}
          <Card>
            <CardContent>
              <ImageGallery images={images} alt={title ?? "property"} />
            </CardContent>
          </Card>

          {/* About / Description */}
          <Card>
            <CardContent>
              <h2 className="mb-3 text-2xl font-semibold">Property details</h2>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm text-muted-foreground">
                    Property type
                  </h4>
                  <div className="font-medium">{propertyType}</div>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Listing</h4>
                  <div className="font-medium">{listingType}</div>
                </div>
                {/* <div>
                  <h4 className="text-sm text-muted-foreground">Posted</h4>
                  <div className="font-medium">
                    {postedAt ? new Date(postedAt).toLocaleDateString() : "—"}
                  </div>
                </div> */}
                <div>
                  <h4 className="text-sm text-muted-foreground">Status</h4>
                  <div className="font-medium">{status ?? "-"}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Amenities & Nearby */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <h3 className="mb-3 text-lg font-semibold">Amenities</h3>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {amenities?.map((a) => (
                    <li key={a} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/80" />
                      <span>{a}</span>
                    </li>
                  )) || (
                    <li className="text-sm text-muted-foreground">
                      No amenities listed
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="mb-3 text-lg font-semibold">Unit Configuration</h3>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary/80" />
                    <span>1 bhk + 1Ts | 530 - 545 | 3 options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary/80" />
                    <span>2 bhk + 2Ts | 1070 - 1125 | 6 options </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary/80" />
                    <span>3 bhk + 2/3Ts | 1250 - 2080 | 20+ option </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary/80" />
                    <span>4 bhk + 4Ts | 2425 - 2870 | 4 options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="mb-3 text-lg font-semibold">Nearby</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {nearbyLocations?.map((n: NearbyLocation, idx: number) => (
                    <li key={idx} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{n.name}</div>
                        {n.type && (
                          <div className="text-xs text-muted-foreground">
                            {n.type}
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {n.distanceKm ? `${n.distanceKm} min` : ""}
                      </div>
                    </li>
                  )) || <li>No nearby info</li>}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Map placeholder */}
          {/* <Card>
            <CardContent>
              <h3 className="mb-3 text-lg font-semibold">Location</h3>
              <div className="text-sm text-muted-foreground mb-3">
                {renderLocationLine()}
              </div>
              <div className="flex h-56 w-full items-center justify-center rounded bg-gray-100 text-sm text-muted-foreground">
                Map placeholder — integrate a map component here (Leaflet /
                Google Maps)
              </div>
            </CardContent>
          </Card> */}
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
                    {typeof builtUpArea === "number" && (
                      <div className="flex items-center gap-2 rounded-md bg-sidebar px-3 py-1 text-black text-sm">
                        <Ruler className="h-4 w-4" /> {builtUpArea} sqft
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <WishlistButton propertyId={id} />
                    <Button className="flex-1">
                      <Phone className="mr-2" /> Get Free Assistance
                    </Button>

                    <Link href={"/contact"} className="w-full">
                      <Button variant="outline" className="w-full">
                        Site Visit
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            {why && why.length > 0 && (
              <Card className="gap-y-0">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold tracking-tight">
                    WHY PALM HILLS ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 -mt-4">
                  <ul className="text-sm">
                    <li className="">
                      — Perfectly Placed—Away From the Noise, Close to
                      Everything.
                    </li>
                    <li className="mt-2">— Loaded with modern amenities.</li>
                    <li className="mt-2">
                      — Crafted by trusted builders known for quality,
                      transparency, and timely delivery.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Amenities cards small (if any) */}
            {/* {amenities && amenities.length > 0 && (
              <Card>
                <CardContent>
                  <h4 className="mb-2 text-lg font-semibold">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {amenities.slice(0, 6).map((a) => (
                      <Badge key={a} className="bg-muted text-muted-foreground">
                        {a}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )} */}
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
