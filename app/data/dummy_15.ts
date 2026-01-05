// magicbricks_dummy_15.ts
// TypeScript: generates 15 MagicBricks-style dummy property listings
// Images are from https://picsum.photos using deterministic seeds so each property has unique images.

export type ListingType = "Sale" | "Rent";
export type PropertyType = "Apartment" | "Villa" | "Plot" | "Studio" | "Office";
import { properties as allProperties } from "./dummy_15"; 

// 2. Define your search function using a unique name for the internal logic
export const getPropertiesByBuilderName = (builderName: string) => {
  // Use the aliased 'allProperties' to avoid the naming conflict
  return allProperties.filter((p) => 
    p.owner.name.toLowerCase().trim() === builderName.toLowerCase().trim()
  );
};

export interface UnitConfig {
  bhk: string;
  detail: string; // e.g., "2Ts"
  area: string;   // e.g., "1070 - 1125"
  price: string | null;  // e.g., "₹ 60 L - 75 L"
  options: string | null; // e.g., "6 options"
}


export interface Owner {
  ownerType: "Owner" | "Broker" | "Builder";
  name: string;
  phone?: string;
  brokerage?: string;
}

export interface UnitConfig {
  bhk: string;
  detail: string;
  area: string;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

// export interface Coordinates {
//   lat: number;
//   lng: number;
// }

export interface BuilderDetails {
  description: string;
  experience: string;
  projectCount: string;
}

export type PriceRange = { min: number; max: number };

export interface NearbyLocation {
  name: string;
  distanceKm: number | null; // null if unknown
  type?: string; // optional hint: school, mall, metro, hospital
}

export interface Property {
  securityDeposit?: number;
  id: string;
  title: string;
  slug: string;
  description: string;
  projectArea?: string;
  coverImage?:  string;
  propertyType: PropertyType;
  listingType: ListingType;
  price?: number; // for Sale
  rent?: number; // for Rent
  // optional fields to support price ranges & UI hints
  priceRange?: PriceRange | null;
  negotiable?: boolean;
  priceSuffix?: string;
  priceUnit?: string; // e.g. INR
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
  status?: string; // e.g. "Upcoming", "Completed", "Under Construction", etc.
  startDate?: string; 
  possessionDate?: string;
  reraApproved?: boolean;
  reraId?: string | null;
  amenities?: string[];
  location: Location;
  images: string[]; 
  logo: string; // picsum.photos images
  owner: Owner;
  postedAt: string; // ISO date
  verified?: boolean;
  nearbyLocations?: NearbyLocation[];
  units?: UnitConfig[];
 builderDetails?: BuilderDetails;
 brochureUrl?: string;
 totalUnits?: number;
 totalTowers?: number;


  // NEW: when listing is an upcoming project, builders often give price ranges per unit type
  // e.g. { "1 BHK": {min, max}, "2 BHK": {min, max} }
  unitPriceRanges?: Record<string, PriceRange>;
  // optional category for easier UI grouping (Sale / Rent / Upcoming)
  category?: "sale" | "rent" | "upcoming";

  why?: string[]; // Added for upcoming projects
}

// Small deterministic helper to pick values by index
const pick = <T>(arr: T[], idx: number) => arr[idx % arr.length];
const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

// slug helper
function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function picsum(seed: string, w = 1200, h = 800) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

const cities = [
  {
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    coords: { lat: 19.1197, lng: 72.9053 },
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560066",
    coords: { lat: 12.9698, lng: 77.75 },
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500032",
    coords: { lat: 17.4401, lng: 78.3489 },
  },
  {
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
    coords: { lat: 28.7041, lng: 77.1025 },
  },
  {
    city: "Pune",
    state: "Maharashtra",
    pincode: "411014",
    coords: { lat: 18.5204, lng: 73.8567 },
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600002",
    coords: { lat: 13.0827, lng: 80.2707 },
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700001",
    coords: { lat: 22.5726, lng: 88.3639 },
  },
  {
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122001",
    coords: { lat: 28.4595, lng: 77.0266 },
  },
];

const propertyTypes: PropertyType[] = [
  "Apartment",
  "Villa",
  "Studio",
  "Office",
  "Plot",
];
const listingTypes: ListingType[] = ["Sale", "Rent"];
const furnishings = ["Unfurnished", "Semi-Furnished", "Fully Furnished"];
const facings = ["East", "West", "North", "South"];
const amenitiesPool = [
  "Swimming Pool",
  "Gym",
  "Lift",
  "Power Backup",
  "Club House",
  "Kids Play Area",
  "CCTV",
  "24x7 Security",
  "Parking",
  "Garden",
  "Tennis Court",
];

function buildAmenities(idx: number) {
  const count = 3 + (idx % 5);
  return Array.from({ length: count }, (_, i) => pick(amenitiesPool, idx + i));
}

/**
 * When a project is "Upcoming" we want unit-level ranges,
 * e.g. 1 BHK: 35L - 45L, 2 BHK: 55L - 75L, 3 BHK: 85L - 1.2Cr
 * We'll generate them deterministically based on base price.
 */
function buildUnitPriceRanges(basePrice: number) {
  // basePrice is an approximate starting point for 1 BHK
  // We'll produce 1/2/3 BHK ranges relative to basePrice.
  const oneMin = Math.round(basePrice * 0.9);
  const oneMax = Math.round(basePrice * 1.15);

  const twoMin = Math.round(basePrice * 1.6);
  const twoMax = Math.round(basePrice * 2.0);

  const threeMin = Math.round(basePrice * 2.4);
  const threeMax = Math.round(basePrice * 3.0);

  return {
    "1 BHK": { min: oneMin, max: oneMax },
    "2 BHK": { min: twoMin, max: twoMax },
    "3 BHK": { min: threeMin, max: threeMax },
  } as Record<string, PriceRange>;
}

/**
 * Specific recreation of the MagicBricks listing:
 * "2 BHK · 1321 Sq-ft · Gopalan Florenza, Banashankari Stage 6, Bangalore"
 */
function makeBanashankariProperty(): Property {
  const id = "mb_banashankari_4d4238";
  const title =
    "2 BHK Multistorey Apartment for Sale in Banashankari Stage 6, Bangalore";
  const slug = `${slugify("2-bhk-gopalan-florenza-banashankari")}-${id}`;
  const builtUpArea = 1321;
  const price = 14700000; // ~ ₹1.47 Cr
  const images = [
    picsum(`${slug}-1`),
    picsum(`${slug}-2`),
    picsum(`${slug}-3`),
    picsum(`${slug}-4`),
  ];

  const property: Property = {
    id,
    title,
    slug,
    logo: "bib/palm-hills/nkcpl.png",
    description:
      "2 BHK multistorey apartment in Gopalan Florenza, Banashankari Stage 6. Ready to move, spacious layout and good locality connectivity. Suitable for families and investors.",
    propertyType: "Apartment",
    listingType: "Sale",
    price,
    priceUnit: "INR",
    priceRange: { min: Math.round(price * 0.9), max: Math.round(price * 1.1) },
    negotiable: true,
    priceSuffix: "Negotiable",
    maintenance: 4500,
    builtUpArea,
    carpetArea: 900,
    areaUnit: "sqft",
    bhk: 2,
    bathrooms: 2,
    balconies: 1,
    floor: 6,
    totalFloors: 12,
    furnishing: "Semi-Furnished",
    facing: "East",
    status: "Completed",
    possessionDate: undefined,
    reraApproved: true,
    reraId: "RERA12345",
    amenities: [
      "Swimming Pool",
      "Gym",
      "Lift",
      "Power Backup",
      "24x7 Security",
      "Reserved Parking",
    ],
    location: {
      address: "Gopalan Florenza, Banashankari Stage 6",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560050",
      landmark: "Near Banashankari Bus Stop",
    },
    images,
    owner: {
      ownerType: "Broker",
      name: "Gopalan Sales",
      phone: "+91-9900001122",
      brokerage: "Standard",
    },
    postedAt: new Date().toISOString(),
    verified: true,
    nearbyLocations: [
      { name: "Banashankari Temple", distanceKm: 1.2, type: "Temple" },
      { name: "Banashankari Bus Stop", distanceKm: 0.5, type: "Transport" },
      { name: "Gopalan Innovation Mall", distanceKm: 0.8, type: "Mall" },
      { name: "Metro Station (proposed)", distanceKm: 2.1, type: "Metro" },
      { name: "Jnanabharathi Hospital", distanceKm: 1.9, type: "Hospital" },
      { name: "ABC International School", distanceKm: 0.9, type: "School" },
    ],
    category: "sale",
  };

  return property;
}

function makeProperty(i: number): Property {
  const index = i + 1;
  const cityObj = pick(cities, i);
  const propertyType = pick(propertyTypes, i);
  const listingType = pick(listingTypes, i % 2 === 0 ? 0 : 1);
  const bhk =
    propertyType === "Apartment" || propertyType === "Villa"
      ? 1 + (i % 4) // values 1..4
      : undefined;
  const bathrooms = bhk
    ? Math.max(1, Math.min(4, Math.floor((bhk + 1) / 1)))
    : undefined;
  const title = `${
    bhk ? bhk + " BHK " : ""
  }${propertyType} for ${listingType} in ${cityObj.city}`.trim();
  const id = `prop_${1000 + index}`;
  const slug = `${slugify(title)}-${id}`;

  const priceBase = 25_00_000 + i * 12_50_000; // base sale price
  const rentBase = 12000 + i * 2000;

  const images = [
    picsum(`${slug}-1`),
    picsum(`${slug}-2`),
    picsum(`${slug}-3`),
  ];

  const now = new Date();
  now.setDate(now.getDate() - i);

  // Status decision
  let statusValue = pick(
    ["Ready to Move", "Under Construction", "New Project"],
    i
  );
  if (i % 6 === 0) statusValue = "Upcoming";
  if (i % 3 === 0) statusValue = "Completed";

  const location: Location = {
    address: `${index} ${pick(
      ["Main Road", "Sector", "MG Road", "Station Road", "Lake View"],
      i
    )}, ${pick(
      ["Near Park", "Opposite Mall", "Near IT Park", "Near Metro"],
      i
    )}`,
    city: cityObj.city,
    state: cityObj.state,
    pincode: cityObj.pincode,
    landmark: pick(
      ["Near D-Mart", "Near School", "Near Temple", "Near Bus Stop"],
      i
    ),
  };

  const base: Partial<Property> = {
    id,
    title,
    slug,
    description: `Well-maintained ${
      bhk ? bhk + " BHK" : propertyType
    } located in ${
      cityObj.city
    }. Good connectivity and modern amenities. Ideal for ${
      listingType === "Rent" ? "professionals" : "families"
    }.`,
    propertyType,
    listingType,
    priceUnit: "INR",
    maintenance: 2000 + (i % 5) * 500,
    builtUpArea: 800 + (i % 6) * 250,
    carpetArea: 600 + (i % 6) * 200,
    areaUnit: "sqft",
    bhk,
    bathrooms,
    balconies: bhk ? Math.max(1, Math.min(3, bhk - 1)) : undefined,
    floor: propertyType === "Apartment" ? 1 + (i % 14) : undefined,
    totalFloors: propertyType === "Apartment" ? 10 + (i % 12) : undefined,
    furnishing: pick(furnishings, i),
    facing: pick(facings, i),
    status: statusValue,
    reraApproved: i % 3 === 0,
    reraId: i % 3 === 0 ? `RERA${pad(200 + i)}` : undefined,
    amenities: buildAmenities(i),
    location,
    images,
    owner: {
      ownerType: pick(["Owner", "Broker", "Builder"], i),
      name: pick(
        [
          "Amit Verma",
          "Suresh Realty",
          "Prestige Developers",
          "Anita K",
          "Rohan Kapoor",
        ],
        i
      ),
      phone: `+91-9${(800000000 + i).toString().slice(1)}`,
      brokerage: i % 2 === 0 ? "One month rent" : undefined,
    },
    postedAt: now.toISOString(),
    verified: i % 4 === 0,
    nearbyLocations: [
      {
        name: `${pick(
          ["Central Park", "City Mall", "Metro Station", "Hospital"],
          i
        )}`,
        distanceKm: +(0.5 + (i % 5) * 0.6).toFixed(1),
      },
      {
        name: `${pick(["School", "College", "Temple", "Bus Stop"], i)}`,
        distanceKm: +(0.3 + (i % 3) * 0.4).toFixed(1),
      },
    ],
  };

  // Now set price / rent / ranges or upcoming unit ranges
  if (statusValue === "Upcoming") {
    // upcoming projects usually are Sale category with unit-based price ranges
    // use priceBase as a 1BHK baseline and generate ranges for 1/2/3 BHK (if bhk present)
    const baseline = priceBase + (i % 5) * 500000;
    (base as Property).category = "upcoming";
    // Make unit price ranges and set a general approximate priceRange for display
    (base as Property).unitPriceRanges = buildUnitPriceRanges(baseline);
    // also provide a general priceRange combining min of 1BHK and max of 3BHK for UI summary
    const upr = (base as Property).unitPriceRanges!;
    const mins = Object.values(upr).map((r) => r.min);
    const maxs = Object.values(upr).map((r) => r.max);
    (base as Property).priceRange = {
      min: Math.min(...mins),
      max: Math.max(...maxs),
    };
    (base as Property).negotiable = false;
    (base as Property).priceSuffix = "Indicative";
  } else if (listingType === "Sale") {
    const price = priceBase + (i % 5) * 500000;
    (base as Property).price = price;
    if (i % 5 === 0) {
      const min = Math.max(100000, Math.floor((price * 0.85) / 1000) * 1000);
      const max = Math.ceil((price * 1.15) / 1000) * 1000;
      (base as Property).priceRange = { min, max };
      (base as Property).negotiable = i % 2 === 0;
      (base as Property).priceSuffix = i % 2 === 0 ? "Starting" : undefined;
    } else {
      (base as Property).priceRange = null;
      (base as Property).negotiable = i % 3 === 0;
    }
    (base as Property).category = "sale";
  } else {
    // Rent
    const rent = rentBase + (i % 6) * 1500;
    (base as Property).rent = rent;
    (base as Property).securityDeposit = rent * 3;
    if (i % 6 === 0) {
      const min = Math.max(5000, Math.floor(rent * 0.9));
      const max = Math.ceil(rent * 1.2);
      (base as Property).priceRange = { min, max };
      (base as Property).negotiable = true;
      (base as Property).priceSuffix = "/mo";
    } else {
      (base as Property).priceRange = null;
      (base as Property).negotiable = i % 4 === 0;
      (base as Property).priceSuffix = "/mo";
    }
    (base as Property).category = "rent";
  }

  return base as Property;
}

// Build the final list: first one is Banashankari, then generated ones
export const properties: Property[] = [
  makeBanashankariProperty(),
  ...Array.from({ length: 14 }, (_, i) => makeProperty(i)),
];

export default properties;
