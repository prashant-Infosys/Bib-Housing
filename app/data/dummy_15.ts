// magicbricks_dummy_15.ts
// TypeScript: generates 15 MagicBricks-style dummy property listings

export type ListingType = "Sale" | "Rent";
export type PropertyType = "Apartment" | "Villa" | "Plot/Land" | "Studio" | "Office" | "Residential" | "Commercial";

// --- INTERFACES ---

export interface UnitConfig {
  bhk: string;
  detail: string;
  area: string;
  price?: string | null;
  options?: string | null;
}

export interface Owner {
  ownerType: "Owner" | "Broker" | "Builder";
  name: string;
  phone?: string;
  brokerage?: string;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  area: string; // This is the field the search bar looks for
}

export interface BuilderDetails {
  description: string;
  experience: string;
  projectCount: string;
}

export type PriceRange = { min: number; max: number };

export interface NearbyLocation {
  name: string;
  distanceKm: number | null;
  type?: string;
}

export interface Property {
  securityDeposit?: number;
  id: string;
  title: string;
  slug: string;
  description: string;
  projectArea?: string;
  coverImage?: string;
  propertyType: PropertyType;
  listingType: ListingType;
  price?: number;
  rent?: number;
  priceRange?: PriceRange | null;
  negotiable?: boolean;
  priceSuffix?: string;
  priceUnit?: string;
  maintenance?: number;
  builtUpArea?: number;
  carpetArea?: number;
  areaUnit?: string;
  bhk?: number;
  bathrooms?: number;
  balconies?: number;
  floor?: number;
  totalFloors?: number;
  furnishing?: string;
  facing?: string;
  status?: string;
  startDate?: string;
  possessionDate?: string;
  reraApproved?: boolean;
  reraId?: string | null;
  amenities?: string[];
  location: Location;
  images: string[];
  logo: string;
  owner: Owner;
  postedAt: string;
  verified?: boolean;
  nearbyLocations?: NearbyLocation[];
  units?: UnitConfig[];
  builderDetails?: BuilderDetails;
  brochureUrl?: string;
  totalUnits?: number;
  totalTowers?: number;
  unitPriceRanges?: Record<string, PriceRange>;
  category?: "sale" | "rent" | "upcoming";
  why?: string[];
}

// --- HELPERS ---

const pick = <T>(arr: T[], idx: number) => arr[idx % arr.length];
const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function picsum(seed: string, w = 1200, h = 800) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

// --- DATA POOLS ---

const cities = [
  { city: "Mumbai", state: "Maharashtra", pincode: "400076", areas: ["Powai", "Andheri", "Bandra"] },
  { city: "Bangalore", state: "Karnataka", pincode: "560066", areas: ["Whitefield", "HSR Layout", "Indiranagar"] },
  { city: "Hyderabad", state: "Telangana", pincode: "500032", areas: ["Gachibowli", "HITEC City", "Kukatpally"] },
  { city: "Delhi", state: "Delhi", pincode: "110001", areas: ["Dwarka", "Saket", "Rohini"] },
  { city: "Pune", state: "Maharashtra", pincode: "411014", areas: ["Hinjewadi", "Baner", "Viman Nagar"] },
];

const propertyTypes: PropertyType[] = ["Apartment", "Villa", "Studio", "Office", "Plot/Land"];
const listingTypes: ListingType[] = ["Sale", "Rent"];
const furnishings = ["Unfurnished", "Semi-Furnished", "Fully Furnished"];
const facings = ["East", "West", "North", "South"];
const amenitiesPool = ["Swimming Pool", "Gym", "Lift", "Power Backup", "Club House", "CCTV", "Parking"];

function buildAmenities(idx: number) {
  const count = 3 + (idx % 4);
  return Array.from({ length: count }, (_, i) => pick(amenitiesPool, idx + i));
}

function buildUnitPriceRanges(basePrice: number) {
  return {
    "1 BHK": { min: Math.round(basePrice * 0.9), max: Math.round(basePrice * 1.1) },
    "2 BHK": { min: Math.round(basePrice * 1.6), max: Math.round(basePrice * 1.9) },
    "3 BHK": { min: Math.round(basePrice * 2.4), max: Math.round(basePrice * 2.8) },
  };
}

// --- GENERATORS ---

function makeBanashankariProperty(): Property {
  const id = "mb_banashankari_4d4238";
  const slug = slugify("2 BHK Gopalan Florenza Banashankari");
  return {
    id,
    title: "2 BHK Multistorey Apartment for Sale in Banashankari Stage 6, Bangalore",
    slug: `${slug}-${id}`,
    logo: "https://picsum.photos/seed/logo1/200/200",
    description: "Ready to move, spacious layout in a prime Bangalore locality.",
    propertyType: "Apartment",
    listingType: "Sale",
    price: 14700000,
    priceUnit: "INR",
    bhk: 2,
    location: {
      address: "Gopalan Florenza, Banashankari Stage 6",
      area: "Banashankari",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560050",
    },
    images: [picsum(id + "1"), picsum(id + "2")],
    owner: { ownerType: "Builder", name: "Gopalan Developers" },
    postedAt: new Date().toISOString(),
    category: "sale",
  };
}

function makeProperty(i: number): Property {
  const index = i + 1;
  const cityData = pick(cities, i);
  const propType = pick(propertyTypes, i);
  const listType = pick(listingTypes, i);
  const areaName = pick(cityData.areas, i); // This replaces the missing areaObj reference

  const bhk = (propType === "Apartment" || propType === "Villa") ? 1 + (i % 4) : undefined;
  const title = `${bhk ? bhk + " BHK " : ""}${propType} in ${areaName}, ${cityData.city}`;
  const id = `prop_${1000 + index}`;

  const priceBase = 4500000 + (i * 1000000);

  const base: Property = {
    id,
    title,
    slug: `${slugify(title)}-${id}`,
    description: `Beautiful ${propType} located in the heart of ${areaName}.`,
    propertyType: propType,
    listingType: listType,
    price: listType === "Sale" ? priceBase : undefined,
    rent: listType === "Rent" ? 15000 + (i * 2000) : undefined,
    bhk,
    location: {
      address: `${index} Main Road, ${areaName}`,
      area: areaName,
      city: cityData.city,
      state: cityData.state,
      pincode: cityData.pincode,
    },
    images: [picsum(id + "1"), picsum(id + "2")],
    logo: "https://picsum.photos/seed/builder/200/200",
    owner: { ownerType: "Broker", name: "Modern Realty" },
    postedAt: new Date().toISOString(),
    amenities: buildAmenities(i),
    status: i % 3 === 0 ? "Upcoming" : "Ready to Move",
    category: listType === "Sale" ? "sale" : "rent",
  };

  if (base.status === "Upcoming") {
    base.unitPriceRanges = buildUnitPriceRanges(priceBase);
    base.category = "upcoming";
  }

  return base;
}

// --- EXPORTS ---

export const properties: Property[] = [
  makeBanashankariProperty(),
  ...Array.from({ length: 14 }, (_, i) => makeProperty(i)),
];

export const getPropertiesByBuilderName = (builderName: string) => {
  return properties.filter((p) => 
    p.owner.name.toLowerCase().trim() === builderName.toLowerCase().trim()
  );
};

export default properties;