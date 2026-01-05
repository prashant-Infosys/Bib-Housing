import { notFound } from "next/navigation";
import { Property } from "./dummy_15";
// app/data/properties.ts
// properties.ts

// Change this function:
export const getPropertiesByBuilderName = (builderName: string) => {
  // Ensure we are accessing the properties array correctly
  return properties.filter((p) => 
    p.owner.name.trim() === builderName.trim()
  );
};
const properties: Property[] = [
  {
    id: "upcoming_001",
    title: "Assotech Hills",
    slug: "assotech-hills-upcoming-001",
    description:
      "Assotech Hills in Morabadi, Ranchi, is a large, integrated, PMAY-linked residential project offering 1, 2, 2.5, & 3 BHK affordable yet premium homes with modern amenities like pools, clubhouses, gyms, and sports courts, located conveniently near essential city infrastructure, making it a strong choice for those seeking quality, secure, and well-connected living in a rapidly developing area of Ranchi.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Situated in Morabadi, providing easy access to colleges, hospitals, shopping, and business hubs, away from congestion.",
    "Modern Amenities: Offers a complete lifestyle with internal amenities and a commercial plaza for daily needs.",
    "Modern Architecture: Combines premium finishes, thoughtful designs, and modern architecture with affordability under the PMAY scheme."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/6wb1fwotgyq34kxppetw7/Assotech-Hills.pdf?rlkey=am6s520otht3vkhu5v9w5py7p&st=0ox6afu3&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/50/2021_R",
	  startDate: "2023-12-01",
      possessionDate: "2028-12-01",
      builtUpArea: 4.65,
      totalTowers: 4,
      totalUnits: 788,
	

    location: {
      address: "Bank Colony Rd, Chiraundi, Morabadi",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834005",
    },
    builderDetails: {
    description: "Assotech Group, established in 1987, is reckoned as the foremost and one of the most renowned developer in the Real Estate Industry. The Group's successes span an incredible track record of delivering over 40,000 homes across several prestigious projects in Delhi NCR, Odisha, Uttarakhand and Madhya Pradesh. Its innovative projects are symbols of Reliability with High Standard Quality undertaken with extensive research-led engineering, design and construction experiences with strong observance to ethical business practices.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(1).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(2).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(4).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(5).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(6).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(7).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(11).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(12).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(13).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(14).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(15).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/a%20(16).png",

    ],

     logo: "https://ik.imagekit.io/rrmbppkq8/bib/assotech-hills/assotech.png",

    owner: {
      ownerType: "Builder",
      name: "Assotech Group",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

   amenities: [
  "Temple / Prayer Area",
  "Community Hall",
  "Multipurpose Hall",
  "Yoga & Meditation Zone",
  "Jogging Track",
  "Swimming Pool",
  "Gymnasium",
  "Kids' Play Area",
  "Toddlers' Zone",
  "Outdoor Games",
  "Indoor Games",
  "Half Basketball Court",
  "Skating Rink",
  "Cricket Practice Pitch",
  "Badminton Court",
  "Club House",
  "Lounge / Seating Area",
  "Multipurpose Room",
  "Landscaped Gardens",
  "Central Lawn",
  "Open Sitting Areas",
  "Parks",
  "Parking",
  "Visitors Parking",
  "Lifts",
  "Power Backup",
  "Entrance Lobby",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Intercom Facility",
  "Rainwater Harvesting",
  "Sewage Treatment Plant (STP)",
  "Waste Management System",
  "Commercial Plaza",
  "Boulevard"
],

    nearbyLocations: [
  { name: "Petrol Pump", distanceKm: 0.5 },
  { name: "Tagore Hill", distanceKm: 1.5 },
  { name: "Morabadi", distanceKm: 2.6 },
  { name: "Firayalal Chowk", distanceKm: 4.7 },
  { name: "Railway Station", distanceKm: 7.8 },
  { name: "Ring Road", distanceKm: 2 },
  { name: "School", distanceKm: 0.5 },
],

    units: [
      { bhk: "2.5 BHK", detail: "2Ts", area: "975", price: "₹ 56.6 - 57.6 Lacs", options: "3 Options" },
      { bhk: "3 BHK", detail: "3Ts", area: "1470", price: "₹ 83.8 - 85.3 Lacs", options: "3 Options" }
    ],

    priceRange: {
      min: 5660000,
      max: 8530000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },{
    id: "upcoming_002",
    title: "Palm Hills",
    slug: "palm-hills-residency-upcoming-002",
    description:
      "Palm Hills Residency is an upcoming gated township designed for premium living. Offering multiple unit types with spacious layouts, lush green surroundings, and world-class amenities. Located in a rapidly developing corridor with excellent connectivity.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Perfectly Placed—Away From the Noise, Close to Everything.",
    "Modern Amenities: Loaded with modern amenities like swimming pool, gymnasium etc",
    "Trusted: Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/14xaisvlftrtsmidyarom/Palm-Hills.pdf?rlkey=xr9ulwc0l83xv58c4hll1mu7f&st=aluje62e&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "RERA-KA-2025-PLMHLS",
	      startDate: "2023-01-01",
      possessionDate: "2027-12-01",
      builtUpArea: 3.20,
      totalTowers: 4,
      totalUnits: 220,
	

    location: {
      address: "Itki Road, Kathal More",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
    builderDetails: {
    description: "With over 20 years of excellence, Palm Hills Group is renowned for creating luxury landmarks. They focus on sustainable architecture and timely delivery, having successfully completed over 50+ residential projects across the region.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/A.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/B.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/C.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/D.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/E.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/F.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/G.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/H.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/I.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/J.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/K.png",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/img16.jpg",
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/nkcpl.png",
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/palm-hills/nkcpl.png",

    owner: {
      ownerType: "Builder",
      name: "NKCPL Group",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Indoor Sports Arena",
      "Jogging Track",
      "24x7 Security",
      "Kids Play Area",
      "Club House",
      "Community Hall",
      "Business Center",
    ],

    nearbyLocations: [
      { name: "Argora Chowk", distanceKm: 8, },
      { name: "Hatia Station", distanceKm: 18,  },
      { name: "Airport", distanceKm: 22, },
      { name: "Ring Road", distanceKm: 6, },
      { name: "Main road", distanceKm: 12, },
      { name: "Mall of Ranchi ", distanceKm: 12, },
      { name: "Ratu Road Expressway", distanceKm: 5,},
      {
        name: "Ranchi Railway Station",
        distanceKm: 18,
      },
    ],

    units: [
      { bhk: "1 BHK", detail: "1Ts", area: "530 - 545", price: "₹ 32 L - 38 L", options: "3 options" },
      { bhk: "2 BHK", detail: "2Ts", area: "1070 - 1125", price: "₹ 52 L - 68 L", options: "6 options" },
      { bhk: "3 BHK", detail: "3Ts", area: "1250 - 2080", price: "₹ 78 L - 98 L", options: "20+ options" }
    ],

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_039",
    title: "Aakriti Vaishnavi Hills",
    slug: "aakriti-vaishnavi-hills-upcoming-039",
    description:
      "Vaishanvi Hills is a well-planned residential project by Aakriti Infrastructure in Booty More, Ranchi. The project comprises four towers featuring spacious 2, 3, and 4 BHK flats designed with modern interiors and earthquake-resistant structures.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Strategic Location: Situated in Booty More with excellent connectivity to city hubs.",
    "Ready to Move: This is a completed project offering immediate possession for buyers.",
    "Modern Amenities: Features EV charging, children's play area, and lush green parks."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/olshet9wv3449huslkoh3/Vaishnavi-Hills.pdf?rlkey=rsn002c2fqdlvgl3x6mxb2cea&st=0e9y0wzp&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/181/2023",
	      startDate: "2022-01-01",
      possessionDate: "2025-12-01",
      builtUpArea: 2.40,
      totalTowers: 3,
      totalUnits: 180,

	

    location: {
      address: "Waxpol Road, Behind Gumla Petrol Pump, Booty Ranchi",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834005",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "M/s Akriti Infrastructure & Projects: Based in Dhanbad with a strong Ranchi presence, they developed Aakriti Vaishnavi Hills in Booty More. They specialize in prestigious yet affordable luxury, emphasizing meticulous planning, superior materials, and functional urban architecture.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/vaishnavi-hills/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vaishnavi-hills/a%20(2).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/aakriti-infrastructure.png",

    owner: {
      ownerType: "Builder",
      name: "M/s Akriti Infrastruce & Projects Pvt Ltd",
      phone: "+91-9876543210",
    },

    

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Parking",
	  "Lifts",
	  "Power Backup",
	  "Intercom Facilities"
    ],

    nearbyLocations: [

    ],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_003",
    title: "Advaya Enclave",
    slug: "advaya-enclave-upcoming-003",
    description:
      "Nestled in Ranchi’s elite Bariatu, Sankalp Advaya is a visionary masterpiece by the renowned Sanjay Puri Architects. This under-construction, IGBC Platinum-rated sanctuary artfully blends high-end opulence with sustainable design. Offering an avant-garde lifestyle, it redefines premium living through its seamless fusion of architectural excellence and eco-conscious luxury.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Luxirious Living: Spacious and flexible floor plans with modern kitchens and ample storage",
    "Modern Amenities: Premium lifestyle amenities including a fitness center, pool, and rooftop terrace",
    "Peaceful Environment: Ideal for professionals, families, and senior residents alike"
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/zk0dsz58ca5f0838b8ohl/Advaya-Enclave.pdf?rlkey=t4ru4g3addn92jt07za9yek6r&st=6ec10i5n&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/192/2024",
	      startDate: "2024-05-01",
      possessionDate: "2029-05-01",
      builtUpArea: 0.85,
      totalTowers: 2,
      totalUnits: 66,

    location: {
      address: "Birla Bagaan Cheshire Home Road Bariatu Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Sankalp Realtors is an emerging real estate developer in Ranchi, recognized for focusing on luxury residential projects that integrate modern technology with sustainable building practices. The company is currently developing its flagship project, Sankalp Advaya, which aims to set a new standard for premium living in the city.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(15).jpg",	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(16).jpg",	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(17).jpg",	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(18).jpg",	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(19).jpg",	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(20).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(21).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(23).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(24).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(25).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(26).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(27).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(28).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(29).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/advaya-residence/a%20(30).jpg",
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/sankalp-realtors.jpg",

    owner: {
      ownerType: "Builder",
      name: "Sankalp Realtors",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple/ Prayer Area",
	  "Banquet Hall",
	  "Indoor Threater",
	  "Meditation Zone",
	  "Jogging Track",
	  "Swimming Pool",
	  "Lounge / Seating Area",
	  "Landscape Gardens",
	  "Parking",
	  "Lifts",
	  "Power Backup",
	  "Staff Quater",
	  "EV Charging",
	  "Visitor Parking",
	  "CCTV Surveillance",
	  "Gated Entry",
	  "Intercom Facility",
	  "Cafeteria",
      "Commercial Space"
    ],

    nearbyLocations: [
  { name: "Airport", distanceKm: 13.5 },
  { name: "Ranchi Gymkhana Club", distanceKm: 3.0 },
  { name: "Golf Course", distanceKm: 4.5 },
  { name: "Medica Hospital", distanceKm: 4.0 },
  { name: "Khelgaon", distanceKm: 3.4 },
  { name: "Mesra Railway Station", distanceKm: 8.3 },
  { name: "Ranchi Railway Station", distanceKm: 6.7 },
  { name: "Surendranath Centenary School", distanceKm: 1.8 },
  { name: "RIMS", distanceKm: 2.4 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_004",
    title: "Aprajita Sports City",
    slug: "aprajita-sports-city-upcoming-004",
    description:
      "Aparajita Sports City in Hotwar, Ranchi, offers 1-3 BHK apartments in a gated community focusing on healthy, active living with extensive open spaces, modern amenities like a pool/gym/clubhouse/sports courts, and a strategic location in a growth corridor, making it appealing for lifestyle buyers and investors due to its planned development, connectivity, and future value potential in a developing area. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Situated in the burgeoning Khelgaon-Hotwar belt, poised for strong appreciation under the Ranchi Masterplan 2037.",
    "Designed for luxurious, active living with abundant open spaces and sports-oriented amenities.",
    "Investment: Strong long-term value due to its location in a major future growth corridor."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/yqd19j2r4bmwuat2idwdm/Aprajita-Sports-City.pdf?rlkey=5c77illwduhzrqkrcj37f5ayu&st=y9vo7ew2&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/100/2022",
	      startDate: "2022-01-01",
      possessionDate: "2024-08-01",
      builtUpArea: 2.50,
      totalTowers: 8,
      totalUnits: 240,

    location: {
      address: "Hotwar",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "ABHISHEK SINGH RATHAUR CONSTRUCTION PVT.LTD.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(17).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(18).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(19).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(20).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(21).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(22).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(23).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(24).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(25).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(26).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(27).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(28).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aparajita-sports-city/a%20(29).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/abhishek-singh-rathaur-construction.jpg",

    owner: {
      ownerType: "Builder",
      name: "ABHISHEK SINGH RATHAUR CONSTRUCTION PVT.LTD.",
      phone: "+91-9876543210",
    },

    

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
    ],

    nearbyLocations: [
  { name: "RIMS", distanceKm: 7.6 },
  { name: "Medica Hospital", distanceKm: 5.0 },
  { name: "Samford Hospital", distanceKm: 5.6 },
  { name: "Army Public School", distanceKm: 3.3 },
  { name: "Surendranath Public School", distanceKm: 4.6 },
  { name: "Booty More Bus Stand", distanceKm: 5.0 },
  { name: "Kantatoli Bus Stand", distanceKm: 8.4 },
  { name: "Ranchi Railway Station", distanceKm: 9.9 },
  { name: "Tatisilwi Railway Station", distanceKm: 6.3 },
  { name: "Ranchi Airport", distanceKm: 16.0 },
  { name: "Hotwar Sports Complex", distanceKm: 1.2 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },

  {
    id: "upcoming_005",
    title: "Aryan Enclave",
    slug: "aryan-enclave-upcoming-005",
    description:
      "Aryan Enclave in Tupudana, Ranchi offers modern 2 & 3 BHK apartments with amenities like a gym, clubhouse, park, and 24/7 power/water backup, focusing on comfort and convenience in a well-connected, serene locality near schools and hospitals, making it appealing for families seeking a blend of urban living and peaceful surroundings. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Essential Amenities: Offers a mix of comfort with modern amenities for an indulgent lifestyle.",
    "Convenient Vicinity: Walking distance to essential services like banks, schools, and markets, with good connectivity.",
    "Security: Provides enhanced security with electronic surveillance, CCTV, and 24/7 security."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/iz5a07xsg4o80pzd1avsr/Aryan-Enclave.pdf?rlkey=zkhg9fcn7isa25wq2gdce0q1i&st=3fw1zcwg&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/74/2024",
	     startDate: "2021-10-01",
      possessionDate: "2025-12-01",
      builtUpArea: 1.10,
      totalTowers: 3,
      totalUnits: 96,
	

    location: {
      address: "Ram Mandir Road, Beside Heritage Hospital, Bhawanipur Street, Tupudana",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Aryan Group: A fast-growing firm active in the Tupudana area with projects like Aryan Enclave and Aryan Achyut Enclave. They focus on providing value-for-money residential apartments that maintain high construction standards and emphasize absolute customer satisfaction through timely delivery.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/aryan-enclave/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aryan-enclave/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aryan-enclave/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/aryan-enclave/a%20(4).jpg",
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/aryan-group.jpg",

    owner: {
      ownerType: "Builder",
      name: "Aryan Group",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Community Hall",
	  "Parking",
	  "CCTV Surveillance",
    ],

    nearbyLocations: [
  { name: "Heritage Hospital", distanceKm: null },
  { name: "Bridgeford School", distanceKm: null },
  { name: "Ring Road", distanceKm: null },
  { name: "Tupudana Chowk", distanceKm: null },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_006",
    title: "Capital Garden",
    slug: "capital-garden-upcoming-006",
    description:
      "Capital Garden in Pundag, Ranchi, offers 2 & 3 BHK flats with modern amenities like gyms, clubhouses, play areas, and green spaces, aiming for a peaceful, convenient lifestyle with good connectivity, security, and power backup, blending luxury with nature, making it a desirable investment for families seeking comfort and community in a developing area.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Conveniently located in Pundag with improving infrastructure and transport links",
    "Modern Amenities: Features a clubhouse, gym, jogging track, and children's play area for a holistic lifestyle.",
    "Spacious Living: Provides ample green spaces, landscaped gardens, and a peaceful environment away from city chaos"
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/cvcus63epavx89te9keql/Capital-Garden.pdf?rlkey=zzgyi2qwmnna7np87aow8xtal&st=nyy5lb2q&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/41/2023",
	      startDate: "2023-03-01",
      possessionDate: "2026-01-01",
      builtUpArea: 1.50,
      totalTowers: 2,
      totalUnits: 120,
	

    location: {
      address: "Argora Kathal More Near IOC Petrol Pump Pundag",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Lucky Construction is a trusted provider of end-to-end contracting and building services, specializing in delivering high-quality solutions for builder-led projects. With a team of experienced professionals, the company ensures every project—regardless of scale—is executed with precision, reliability, and excellence. Driven by a passion for quality and long-term value, Lucky Construction is committed to exceeding client expectations by transforming visions into durable, functional, and aesthetically appealing spaces. By combining expertise, efficient execution, and a strong focus on customer satisfaction, the company consistently delivers projects that are sustainable and built to stand the test of time.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/capital-garden/a%20(12).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/lucky-group.jpg",

    owner: {
      ownerType: "Builder",
      name: "Lucky Group",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple / Prayer Area",
	  "Indoor Threater",
	  "Yoga & Meditation Zone",
	  "Jogging Track",
	  "Gymnasium",
	  "Kids Play Area",
	  "Club House",
	  "Parking",
	  "Lifts",
	  "Power Backup",
	  "Guest Room",
	  "Departmentsal Store",
      
    ],

    nearbyLocations: [
  { name: "Argora Chowk", distanceKm: 3 },
  { name: "Hatia Station", distanceKm: 3.5 },
  { name: "Birsa Munda Airport", distanceKm: 6.5 },
  { name: "Vidhansabha", distanceKm: 2 },
  { name: "State Bank of India", distanceKm: null },
  { name: "ISM Pundag", distanceKm: null },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_007",
    title: "Amoda Green",
    slug: "amode-green-upcoming-007",
    description:
      "Amoda Greens by Devika Construction in Ranchi offers luxury living with extensive greenery (60%), premium amenities like a clubhouse, pool, spa, gym, cricket pitch, and banquet hall, focusing on a tranquil, secure, and comfortable lifestyle in areas like Bariatu and Birla Bagan, ideal for those seeking a serene, amenity-rich, gated community with modern facilities and spacious homes in Ranchi. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Spacious Living: Significant green cover (60%) and serene surroundings promote a peaceful lifestyle.",
    "World Class Amenities: Clubhouse with gym, spa, coffee shop, adult & kids' pools, yoga areas, banquet hall, creche/daycare, cricket net, indoor games, EV charging.",
    "Modern Architecture: Designed for modern living with lifts, 24/7 water, and close proximity to essential facilities."
  ],
  brochureUrl: "https://www.dropbox.com/...",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/30/2025",
	      startDate: "2025-01-01",
      possessionDate: "2029-05-01",
      builtUpArea: 1.25,
      totalTowers: 2,
      totalUnits: 141,

    location: {
      address: "Birla Bagaan Cheshire Home Road Bariatu Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Devika Construction & Developers: Known for their luxury project Devika Amoda Greens in Bariatu. They focus on spacious 3 and 4 BHK configurations with modern elevations. Their projects often cater to high-end buyers looking for premium locations with advanced lifestyle amenities.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(17).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(18).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(19).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(20).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(21).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(22).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(23).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(24).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(25).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(26).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(27).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(28).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(29).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/amoda-greens/a%20(30).jpg",

    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/devika-construction.jpg",

    owner: {
      ownerType: "Builder",
      name: "Devika Construction & Developers",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Community Hall",
	  "Jogging Track",
	  "Swimming Pool",
	  "Kids Play Area",
	  "Indoor Games",
	  "Library",
	  "Open Seating Area",
	  "Parking",
	  "Lift",
	  "Power Backup",
	  "EV Charging",
	  "Visitor Parking",
	  "CCTV Surveillance",
	  "Gated Entry",
	  "Cafeteria",
	  
      
    ],

    nearbyLocations: [
  { name: "Balpan Children Hospital", distanceKm: 2.7 },
  { name: "Station Headquarters", distanceKm: 1.6 },
  { name: "Birla House", distanceKm: 0.55 },
  { name: "The Assembly of God Church School", distanceKm: 0.65 },
  { name: "Birsa Munda Bus Terminal", distanceKm: 4.3 },
  { name: "Birsa Munda Airport", distanceKm: 12 },
  { name: "Ranchi Junction", distanceKm: 5.6 },
  { name: "Surendranath Centenary School", distanceKm: 0.7 },
  { name: "The Curesta Hospital", distanceKm: 0.9 },
  { name: "Govind Market", distanceKm: 2.8 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_008",
    title: "Diamond City",
    slug: "diamond-city-upcoming-008",
    description:
      "Diamond City in Oyna, Ranchi, offers modern 2 & 3 BHK flats in a large township with amenities like pools, gyms, and green spaces, strategically located near hospitals (Medanta), schools (BIT), Ring Road, and NH-33 for convenient connectivity, making it ideal for those seeking a peaceful, well-connected, and equipped lifestyle.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Close to NH-33, Ring Road, Medanta Hospital, BIT, & upcoming IT Park.",
    "Modern Amenities: Features a clubhouse, pool, gym, kids' play area, commercial spaces, & strong security.",
    "Spacious Living: Large property with 5 acres of green spaces and landscaped gardens."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/vt4ri6tg3cmzccodo9mla/Diamond-City.pdf?rlkey=gj8gpdgq0mhfw4pnvbpi4dw3d&st=k9790hmb&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/76/2018",
	      startDate: "2022-07-01",
      possessionDate: "2027-12-01",
      builtUpArea: 40.0,
      totalTowers: 14,
      totalUnits: 756,

    location: {
      address: "Near Birsa Chowk",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Eastern Estate Construction Developers: Established in 2007, they manage a diverse portfolio including Diamond City. They operate across multiple states but have a strong local presence in Ranchi, offering residential flats and duplexes designed with urban planning and sustainable growth in mind.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/diamond-city/a%20(16).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/eastern-estates.png",

    owner: {
      ownerType: "Builder",
      name: "Eastern Estate Construction Developers",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Indoor Sports Arena",
      "Jogging Track",
      "Temple",
	  "Community Hall",
	  "Multipurpose Hall",
	  "Voga & Meditation Zone",
	  "Outdoor Games",
	  "Indoor Games",
	  "Landscape Garden",
	  "Terrace Garden",
	  "Parking",
	  "Lift",
	  "Power Backup",
	  "CCTV Surveillance",
	  "Gated Entry",
	  "Departmental Store",
	  "ATM",
	  "Restuarent",
	  "Mart",
    ],

   nearbyLocations: [
  { name: "Nursing Hostel", distanceKm: 0.2 },
  { name: "Nursing Training Center", distanceKm: 0.5 },
  { name: "Government Declared IT Park (Proposed)", distanceKm: 0.5 },
  { name: "Ring Road", distanceKm: 1 },
  { name: "Kairali Public School", distanceKm: 1.5 },
  { name: "Hundur Railway Station", distanceKm: 2 },
  { name: "Medanta Hospital", distanceKm: 3 },
  { name: "NH-33", distanceKm: 3 },
  { name: "Vikas Vidhyalaya", distanceKm: 4 },
  { name: "BIT Railway Station", distanceKm: 5 },
  { name: "Booty More", distanceKm: 9 },
  { name: "Morabadi", distanceKm: 12 },
  { name: "Karam Toli Chowk", distanceKm: 13 },
  { name: "Kanke Road", distanceKm: 15 },
  { name: "Kutchery Chowk", distanceKm: 16 },
  { name: "Firayalal Chowk", distanceKm: 17 },
  { name: "Ranchi Railway Station", distanceKm: 19 },
  { name: "Airport", distanceKm: 24 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_009",
    title: "Emerald Heights",
    slug: "emerald-heights-upcoming-009",
    description:
      "Emerald Heights is a premium G+13 residential project by Varalika Developers located on Argora-Kathal More Road in Pundag, Ranchi. Scheduled for possession in March 2027, the RERA-approved society offers exclusive 3BHK and 4BHK apartments with over 80% open space. Residents enjoy high-end amenities, including a clubhouse, gymnasium, and a dedicated 3-level security system for a modern, secure lifestyle.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Spacious Living: Massive 80% open area ensures a healthy, green environment.",
    "Prime Location: Situated on Argora-Kathal More Road near major urban landmarks",
    "Spacious Layout: Offers massive 3-side open balconies for maximum ventilation and views."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/c1cydk3qzgt43jtmrxoe9/Emerald-Heights.pdf?rlkey=pf7pwo5ang3ha2qwqk1zlp49l&st=u0ct2no6&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/168/2024",
	      startDate: "2023-03-01",
      possessionDate: "2027-03-01",
      builtUpArea: 1.05,
      totalTowers: 1,
      totalUnits: 48,

    location: {
      address: "Argora Kathal More Opp HDFC Bank Pundag",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Varalika Developers is a fast-growing construction company based in Ranchi, Jharkhand, playing an active role in shaping modern urban landscapes across India through the use of advanced construction technologies and strict quality standards. Renowned for delivering high-quality residential and commercial projects, the company stands out for its focus on thoughtful architecture, meticulous planning, transparency, and a customer-first approach. With a diverse portfolio that includes luxury apartments, flats, clubhouses, and commercial complexes, Varalika Developers blends modern amenities with eco-friendly and sustainable design to create spaces that are comfortable, functional, and visually appealing. Guided by a vision to build communities that inspire, promote well-being, and respect the environment, and a mission to foster lasting relationships built on trust and customer satisfaction, the company is committed to delivering durable, innovative, and meaningful spaces where people can truly thrive.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/emerald-heights/a%20(16).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/varalika.jpg",

    owner: {
      ownerType: "Builder",
      name: "Varalika Developers",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple",
      "Jogging Track",
      "Outdoor Games",
	  "Indoor Games",
      "Kids Play Area",
      "Club House",
      "Community Hall",
      "Lounge",
	  "Seating Area",
	  "CCTV Surveillance",
	  "Gated Entry",
	  "Intercom Facility",
    ],

   nearbyLocations: [
  { name: "ARGORA CHOWK", distanceKm: 3.6 },
  { name: "RANCHI AIRPORT", distanceKm: 10.3 },
  { name: "RANCHI RLY. STN.", distanceKm: 7.4 },
  { name: "KATHAL MORE", distanceKm: 1.7 },
  { name: "RING ROAD", distanceKm: 3.8 },
  { name: "DPS SCHOOL", distanceKm: 5.7 },
  { name: "NEW IIM RANCHI", distanceKm: 4.6 },
  { name: "NEW PASSPORT OFFICE", distanceKm: 2 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_010",
    title: "FAII Residency",
    slug: "faii-residency-upcoming-010",
    description:
      "FAII Residency by R K Builder and Developers offers 1-4 BHK apartments and commercial spaces on Kanke Road, Ranchi. It features amenities like a gym and swimming pool, with possessions available from December 2025 onwards.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Situated on Kanke Road, a well-developed and connected area of Ranchi.",
    "Multiple Options: Offers a range of 1 to 4 BHK apartments and commercial spaces to suit various needs.",
    "Essential Amenities: Includes facilities like a swimming pool, gym, and children's play area."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/p91k96g35ol9mhp1kffbk/FAII-Residency.pdf?rlkey=0s7emtmha32mikuv3gdx1ub9v&st=piefx3mt&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/34/2023",
	      startDate: "2021-06-01",
      possessionDate: "2025-12-01",
      builtUpArea: 1.72,
      totalTowers: 4,
      totalUnits: 120,
	

    location: {
      address: "Kanke Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Welcome to Faquiha Group, a trusted name in construction and building solutions. With a strong legacy of excellence, innovation, and commitment, the group has consistently delivered high-quality projects that reflect superior craftsmanship and precision. Driven by a mission to set new benchmarks in the construction industry, Faquiha Group focuses on quality, innovation, and complete client satisfaction. Whether you are a homebuyer, seller, investor, or seeking expert real estate guidance, Faquiha Group stands as a reliable partner, dedicated to transforming real estate aspirations into lasting value and secure investments.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/faii-residency/a%20(8).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/faquiha.png",

    owner: {
      ownerType: "Builder",
      name: "Faquiha Group",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Center Lawn",
      "Jogging Track",
      "Community Hall",
	  "Parking",
	  "Lift",
	  "Commercial Space",
      
    ],

    nearbyLocations: [
  { name: "JD Memorial Inter College", distanceKm: null },
  { name: "Holiday Home", distanceKm: null },
  { name: "Syndicate Bank", distanceKm: null },
  { name: "Rohini-Mohini Hospital", distanceKm: null },
  { name: "Hot Lips Restaurant", distanceKm: null },
  { name: "Chandni Chowk", distanceKm: null },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_011",
    title: "Ganpati Solitaire",
    slug: "ganpati-solitaire-upcoming-011",
    description:
      "Shri Ganpati Solitaire is a high-rise residential project in Bariatu, Ranchi, by Shri Ganpati Estate. It offers luxurious 3 BHK and 4 BHK apartments with modern amenities, including a swimming pool and gymnasium. The project spans approximately 1.73 acres and is expected to be delivered by March 2027.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Strategically situated in Bariatu, a rapidly developing area with good accessibility.",
    "Luxurious Living: Offers spacious apartments with modern aesthetics and high-end finishes.",
    "Extensive Amenities: Features a clubhouse, swimming pool, gym, and park."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/gvof7c03osmamvpizk6bp/Ganpati-Solitaire.pdf?rlkey=4ahg7zmwxyn9g3krp7rpxbkhe&st=cje5x6ni&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/128/2022",
	      startDate: "2023-11-01",
      possessionDate: "2027-03-01",
      builtUpArea: 0.90,
      totalTowers: 2,
      totalUnits: 84,

    location: {
      address: "Birla Bagaan Cheshire Home Road Bariatu Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Shri Ganpati Estate: Known for Ganpati Solitaire in Bariatu, they specialize in luxury communities. Their projects often feature masterpiece elevations, American sanitary wares, and smart home switches, aiming to blend comfort with high-end modern functionality.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ganpati-solitaire/a%20(11).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/shri-ganpati-estate.png",

    owner: {
      ownerType: "Builder",
      name: "Shri Ganpati Estates",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Indoor Games",
      "Jogging Track",
      "Party Zone",
      "Landscape Garden",
      "Club House",
      "Community Hall",
      "CCTV Survilance",
	  "Gated Entry",
    ],

    nearbyLocations: [
  { name: "Surendranath Centenary School", distanceKm: 2 },
  { name: "Domino's", distanceKm: 2 },
  { name: "Rajendra Institute of Medical Science", distanceKm: 2.5 },
  { name: "Samford Hospital", distanceKm: 3 },
  { name: "Ranchi Gymkhana Club", distanceKm: 3.4 },
  { name: "Kanta Toli Bus Stand", distanceKm: 4.5 },
  { name: "Ranchi Railway Station", distanceKm: 8.5 },
  { name: "Ring Road", distanceKm: 10 },
  { name: "Airport", distanceKm: 12 },
  { name: "Birsa Munda Zoo", distanceKm: 17 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_012",
    title: "Golden View",
    slug: "golden-view-upcoming-012",
    description:
      "Golden View is a RERA-approved residential project by Goldenvalley Homes located in Kanke, Ranchi. It offers 1, 2, 3, and 4 BHK apartments and villas with amenities like a gym and swimming pool, slated for possession by February 2029. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Strategically located in Kanke, a well-connected and green area.",
    "Variety of Options: Offers a wide range of flat sizes and configurations.",
    "Modern Amenities: Includes a clubhouse, gym, swimming pool, and children's play area."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/4n9eo2raw6e88vxoa0ep8/Golden-View.pdf?rlkey=qigtg0ro6tkioksj4el8pkxbw&st=823f1i1c&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/101/2024",
      startDate: "2024-02-01",
      possessionDate: "2029-02-01",
      builtUpArea: 1.20,
      totalTowers: 2,
      totalUnits: 91,
	  
    location: {
      address: "Ring Road, Kanke",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Golden Valley Homes: Known for Golden View in Kanke, offering a mix of apartments and villas. Their projects are RERA-approved and feature earthquake-resistant structures, Vastu compliance, and sustainable practices, set in serene locations away from the city’s core noise.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
   images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/golden-view/img16.jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/golden-view/img23.jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/golden-view/img26.jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/golden-view/img29.jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/golden-view/img32.jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/golden-valley.png",

    owner: {
      ownerType: "Builder",
      name: "Golden Valley Homes",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Temple",
      "Jogging Track",
      "Kids Play Area",
      "Club House",
      "Community Hall",
      "Party",
	  "Outdoor Games",
	  "Indoor Games",
	  "Landscape Garden",
	  "Open Seating Area",
	  "CCTV Surveillance",
	  "Gated Entry",
    ],

    nearbyLocations: [
      { name: "Argora Chowk", distanceKm: 8, },
      { name: "Hatia Station", distanceKm: 18,  },
      { name: "Airport", distanceKm: 22, },
      { name: "Ring Road", distanceKm: 6, },
      { name: "Main road", distanceKm: 12, },
      { name: "Mall of Ranchi ", distanceKm: 12, },
      { name: "Ratu Road Expressway", distanceKm: 5,},
      {
        name: "Ranchi Railway Station",
        distanceKm: 18,
      },
    ],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_013",
    title: "Haider City",
    slug: "haider-city-upcoming-013",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/x5bd9lpriw13fnguq1377/Haider-City.pdf?rlkey=sh0r59npihsj9736q1lamndwn&st=omjpqumb&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: null,
	      startDate: "2019-08-01",
      possessionDate: "2024-04-01",
      builtUpArea: 1.00,
      totalTowers: 7,
      totalUnits: 100,

    location: {
      address: "Kantatoli Road, Near RMCH Hospital",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Haider Construction: A developer with a footprint in Bariatu, best known for Haider City. Their projects focus on 'Ready to Move' solutions with comprehensive amenities including basketball courts, rooftop lounges, and gymnasiums, catering to young professionals and families.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/haider-city/a%20(12).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/haider-construction.jpg",

    owner: {
      ownerType: "Builder",
      name: "Haider Constructions",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Indoor Sports Arena",
      "Jogging Track",
      "Landscape Garden",
      "Kids Play Area",
      "Temple",
      "Community Hall",
    ],

    nearbyLocations: [
  { name: "RANCHI RAILWAY STATION", distanceKm: 6.5 },
  { name: "BUS STAND", distanceKm: 4.5 },
  { name: "FIRAYALAL CHOWK", distanceKm: 3.4 },
  { name: "RIMS", distanceKm: 0.5 },
  { name: "BOOTY MORE", distanceKm: 2.5 },
  { name: "MEDICA", distanceKm: 2 },
  { name: "SURENDRA NATH", distanceKm: 2 },
  { name: "DAV BARIATU", distanceKm: 2 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_014",
    title: "IVY Towers",
    slug: "ivy-towers-upcoming-014",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/v54d69dgm0apf3mvqc2mk/IVY-TOWERS.pdf?rlkey=wg0sfzpxydlrp5ep9vboxbtni&st=3mf790mh&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/211/2024",
      startDate: "2024-09-01",
      possessionDate: "2028-11-01",
      builtUpArea: 0.80,
      totalTowers: 1,
      totalUnits: 54,
	  
    location: {
      address: "Besdie DAV Nandraj Public School Bariatu Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "DKD Infotech: A developer focused on ultra-luxury living in Bariatu. Their project IVY Towers is notable for featuring Ranchi’s first rooftop cricket turf and first-floor swimming pools. They emphasize modern design, high open-area ratios (over 60%), and sophisticated architectural aesthetics.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/ivy-towers/a%20(12).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/dkd-infotech.jpg",

    owner: {
      ownerType: "Builder",
      name: "DKD Infotech",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Indoor Games",
      "Parking",
      "Party Zone",
      "Community Hall",
	  "Lounge",
	  "Seating Area",
	  "Landscape Garden",
	  "Terrace Garden",
	  "Power Backup",
	  "Departmental Store",
      
    ],

    nearbyLocations: [
  { name: "Ranchi Gymkhana Club", distanceKm: null },
  { name: "Dav Nandraj Public School", distanceKm: null },
  { name: "Medica Hospital", distanceKm: null },
  { name: "Ranchi Sports Academy", distanceKm: null },
  { name: "RIMS Hospital", distanceKm: null },
  { name: "Health Point Hospital", distanceKm: null },
  { name: "State Museum", distanceKm: null },
  { name: "Samford Hospital", distanceKm: null },
  { name: "Surendranath Centenary School", distanceKm: null },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_015",
    title: "Jagannath Garden",
    slug: "jagannath-garden-upcoming-015",
    description:
      "Discover your dream home at Aryan Jagannath Gardens in Pundag, Ranchi. Enjoy ready-to-move 2/3 BHK apartments or shops, modern amenities like a gym, and award-winning eco-friendly living.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Strategically situated in Pundag, with excellent road connectivity to key areas of Ranchi.",
    "Variety of Options: Offers a range of 2 and 3 BHK apartments along with commercial spaces to suit various needs.",
    "Eco-Friendly Design: Recognized as the Best Eco-Friendly Sustainable Project by Times Business 2024."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/10gu7vpc75ml6o0chkuk2/Jagannath-Garden.pdf?rlkey=fmv7ols7lx7q285a73ify1ubn&st=rf7phcl9&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/65/2025",
      startDate: "2022-01-01",
      possessionDate: "2026-12-01",
      builtUpArea: 1.70,
      totalTowers: 2,
      totalUnits: 144,
	  
    location: {
      address: "Near Pundag T.O.P, New Gutwa, Ranchi",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Aryan Ashashree Construction: Known for Ashashree Heights in Morabadi, this group focuses on quality 2 and 3 BHK apartment complexes. They prioritize Vastu-compliant designs and functional amenities like meditation areas and reflexology parks to ensure a balanced living environment for residents.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/jagannath-gardens/a%20(12).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/aryan-ashashree.jpg",

    owner: {
      ownerType: "Builder",
      name: "Aryan Ashashree Constructions",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Kids Playing Area",
      "Jogging Track",
      "Temple",
	  "Community Hall",
	  "Yoga Meditation",
	  "Landscape Garden",
	  "Parking",
	  "Lift",
	  "Guest Room",
	  "CCTV Survilance",
	  "Commercial Space",
	  
    ],

    nearbyLocations: [
  { name: "Argora Chowk", distanceKm: 2 },
  { name: "Ring Road", distanceKm: 3.5 },
  { name: "Ranchi Rly. Stn.", distanceKm: 5 },
  { name: "Hatia Rly. Stn.", distanceKm: 5 },
  { name: "Main Road", distanceKm: 5 },
  { name: "Ranchi Airport", distanceKm: 6 },
  { name: "Piska More", distanceKm: 6.5 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_016",
    title: "Kailasa",
    slug: "kailasa-upcoming-016",
    description:
      "Secure your spacious 3 or 4 BHK apartment at Kailasa, a RERA-approved project in Pandra, Ranchi. Enjoy a modern, secure lifestyle in a gated community by Pawansut Buildcon, with possession expected by October 2026. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Spacious Living: Offers generous super built-up areas starting from 2,070 sq. ft..",
    "Modern Amenities: Includes a gymnasium and indoor games area for recreation.",
    "Prime Location: Strategically located in the popular residential area of Pandra."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/560yl8lxfc4tojtbcmwbm/Kailasha.pdf?rlkey=01trh3zr1mkx3po1p4k82m6yw&st=1w23n8o1&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/51/2024",
      startDate: "2022-09-01",
      possessionDate: "2028-08-01",
      builtUpArea: 1.40,
      totalTowers: 1,
      totalUnits: 108,
	  
    location: {
      address: "Beside Prasad Petrol Pump Near Ravi Steel Pandra",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Pawansut Buildcon Pvt Ltd: Currently developing the landmark Kailasa project in Pandra. Their focus is on high-standard construction quality and expansive living spaces, offering 3 and 4 BHK apartments with modern security, indoor games, and yoga facilities.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/kailasa/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/kailasa/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/kailasa/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/kailasa/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/kailasa/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/kailasa/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/kailasa/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/kailasa/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/kailasa/a%20(11).jpg",
	 
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/pawansut-buildcon.jpg",

    owner: {
      ownerType: "Builder",
      name: "Pawansut Buildcon Pvt Ltd",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Multipurpose Hall",
	  "Yoga Meditation Zone",
	  "Gymnasium",
	  "Indoor Games",
	  "Commercial Space",
    ],

    nearbyLocations: [
  { name: "Petrol Pump", distanceKm: 0.06 },
  { name: "Hospital", distanceKm: 1 },
  { name: "Railway Station", distanceKm: 11 },
  { name: "Airport", distanceKm: 14 },
  { name: "Police Station", distanceKm: 0.7 },
  { name: "Ring Road Kamre", distanceKm: 3 },
  { name: "Piska more", distanceKm: 2.5 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_017",
    title: "Mangalam Tower",
    slug: "mangalam-tower-upcoming-017",
    description:
      "Secure your ideal living or commercial space at Global Mangalam Tower in Pundag, Ranchi, by Global Buildcon. This project, scheduled for possession in January 2028, offers apartments and commercial options with robust security and amenities. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Prime Location: Situated in Pundag, close to schools, medical facilities, and the airport/railway station.",
    "Modern Architecture: Features a contemporary façade designed to maximize natural light and ventilation.",
    "Ready Access to Services: The area is well-served by public transport, ATMs, banks, and daily necessities."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/rzyrlnb1mrtu7h0g7p66y/Mangalam-Tower.pdf?rlkey=pyzk9dbdex5sqvlgx7imnfaj8&st=qnm1rzq1&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/50/2025",
      startDate: "2024-01-01",
      possessionDate: "2028-01-01",
      builtUpArea: 0.50,
      totalTowers: 1,
      totalUnits: 34,
	  
    location: {
      address: "Beside Ankur Nursery Near Daladali Chowk, Kathal More Road Pundag",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Global Buildcon is one of the leading real estate companies in Ranchi, Jharkhand. The company places strong emphasis on quality, commitment, and ensuring that every project adheres to perfect Vastu principles and carries a clear title. Global Buildcon has successfully completed and handed over 20 residential and commercial projects to its esteemed clients. Today, the name Global Buildcon is synonymous with prestige and trust. Operating as an independent entity, the company is supported by a dedicated team of accomplished professionals who strive to ensure complete customer satisfaction. Global Buildcon continues to develop premium residential as well as commercial projects, delivering high standards of quality in every endeavor.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/mangalam-tower/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/mangalam-tower/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/mangalam-tower/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/mangalam-tower/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/mangalam-tower/a%20(5).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/global-buildcon.png",

    owner: {
      ownerType: "Builder",
      name: "Global Buildcon",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Lounge Seating Area",
	  "Terrace Garden",
	  "Parking",
	  "Power Backup",
	  "CCTV Surveillance",
	  "FireFighting System",
	  "Rainwater Harvesting",
    ],

    nearbyLocations: [
  { name: "BANK", distanceKm: 0.3 },
  { name: "SCHOOL", distanceKm: 1 },
  { name: "HOSPITAL", distanceKm: 1 },
  { name: "POLICE STATION", distanceKm: 3 },
  { name: "PASSPORT OFFICE", distanceKm: 3 },
  { name: "IIM", distanceKm: 3 },
  { name: "VIDHAN SABHA", distanceKm: 5 },
  { name: "RANCHI AIRPORT", distanceKm: 5 },
  { name: "RANCHI RLY. STN.", distanceKm: 5 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_018",
    title: "Narayan Enclave",
    slug: "narayan-enclave-upcoming-018",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/pmogqqh9kwk5fyjo9pa92/NARAYAN-ENCLAVE.pdf?rlkey=c2jgm7ealzu6y0rn39jdohnz2&st=gklil6od&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: null,
      startDate: "2024-01-01",
      possessionDate: "2028-01-01",
      builtUpArea: 0.50,
      totalTowers: 1,
      totalUnits: 34,
	  
    location: {
      address: "Kusum Vihar Morabadi",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Pratistha Buildcon is built on expertise and trust, guiding clients confidently through every stage of their real estate journey. Whether it’s understanding affordability, credit, legal matters, or income requirements, the team provides quick, reliable support to ensure informed decision-making. Specializing in commercial, residential, and rental properties, Pratistha Buildcon caters to all needs—from compact homes to luxury residences—offering the right property at the right price. With a constantly updated portfolio and a commitment to seamless buying and selling experiences, the company ensures real estate is done right, delivering clarity, confidence, and exceptional service at every step.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/narayan-enclave/a%20(14).jpg",

	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/pratistha-buildcon.jpg",

    owner: {
      ownerType: "Builder",
      name: "Pratistha Buildcon",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
	"Open Seating Area",
	"Power Backup",
	"CCTV Surveillance",
	"Rainwater",
	
    ],

    nearbyLocations: [
  { name: "Tagore Hill", distanceKm: null },
  { name: "Moradabadi", distanceKm: null },
  { name: "Ranchi Science Center", distanceKm: null },
  { name: "RIMS Hospital", distanceKm: null },
  { name: "Hill View Hospital", distanceKm: null },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_019",
    title: "Pearl The Central Park",
    slug: "pearl-the-central-park-upcoming-019",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/kmvt8weofzpqov6io27vt/Pearl-The-Central-Park.pdf?rlkey=2tzfu9uunsyzpsj33bo8yrbj8&st=nq0h6kgi&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/238/2023",
      startDate: "2024-02-01",
      possessionDate: "2028-12-01",
      builtUpArea: 2.25,
      totalTowers: 3,
      totalUnits: 140,
	  
    location: {
      address: "Near Moti Fuel Centre Argora Pundag",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "WMoti Infraheights is a prominent real estate company based in Ranchi, India, specializing in the development of residential and commercial properties. Known for its commitment to quality and timely project delivery, the company consistently delivers well-planned developments within budget. Driven by an innovative and passionate approach, Moti Infraheights focuses on modern design, professional service, and complete customer satisfaction, ensuring every project reflects excellence, reliability, and long-term value.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
   images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/pearl-the-central-park/a%20(14).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/moti-infraheights.png",

    owner: {
      ownerType: "Builder",
      name: "Moti Infraheights",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple / Prayer Area",
  "Banquet Hall",
  "Yoga & Meditation Zone",
  "Swimming Pool",
  "Kids Swimming Pool",
  "Kids' Play Area",
  "Outdoor Games",
  "Indoor Games",
  "Basketball Court",
  "Lawn Tennis Court",
  "Badminton Court",
  "Club House",
  "Landscaped Gardens",
  "Central Lawn",
  "Open Sitting Areas",
  "Senior Citizen Zone",
  "Parking",
  "Lifts",
  "Power Backup",
  "CCTV Surveillance",
  "Gated Entry",
  "Commercial Space"
    ],

   nearbyLocations: [
  { name: "Argora Chowk", distanceKm: 1.1 },
  { name: "Railway Station", distanceKm: 5.1 },
  { name: "Hatia Station", distanceKm: 6.5 },
  { name: "Airport", distanceKm: 8 },
  { name: "DPS School", distanceKm: 3.4 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_020",
    title: "Nexus Homes",
    slug: "nexus-homes-upcoming-020",
    description:
      "Secure your ultra-luxury 3 or 4 BHK apartment at Nexus Homes, a RERA-approved project in Gandhi Nagar Colony, Kanke Road, Ranchi. Enjoy a peaceful, high-status, and hygienic environment in a gated community with modern amenities like a home theater and terrace garden. The project, developed by Arthika Buildcon, has units that are ready to move into, allowing for immediate occupancy. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Luxurious Amenities: Offers a swimming pool, gym, clubhouse, home theater, and terrace garden for leisure.",
    "Ready for Occupancy: Many units are ready to move into, making the process of settling in seamless.",
    "Prime Location: Situated in a clean, high-status residential area with excellent connectivity to Kanke Road and Ring Road."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/fktb9wj0hicvwp28iuvv2/Nexus-Homes.pdf?rlkey=tk9rcjbosqmszn92w9jvvif30&st=gpvwq6t2&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/44/2024",
      startDate: "2020-01-01",
      possessionDate: "Ready-to-Move",
      builtUpArea: 0.60,
      totalTowers: 2,
      totalUnits: 20,
	  
    location: {
      address: "Opp Recreational Club Gandhinagar Colony Kanke Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Arthika Buildcon: Specializes in luxury housing, prominently known for Arthika Nexus Homes in Gandhi Nagar Colony. Their developments feature high-end 3 and 4 BHK units with premium finishes, rooftop gardens, and smart home specifications, targeting Ranchi's upscale residential market.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/nexus-homes/a%20(11).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/arthika-buildcon.png",

    owner: {
      ownerType: "Builder",
      name: "Arthika Buildcon",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Community Hall",
  "Indoor Theatre",
  "Jogging Track",
  "Swimming Pool",
  "Gymnasium",
  "Kids' Play Area",
  "Outdoor Games",
  "Table Tennis",
  "Card Room",
  "Club House",
  "Terrace Garden",
  "Parking",
  "Lifts",
  "Power Backup",
  "Guests Room"
    ],

    nearbyLocations: [
  { name: "Gandhi Nagar Recreational Club", distanceKm: null },
  { name: "Kanke Patratu Road", distanceKm: null },
  { name: "SBI Bank", distanceKm: null },
  { name: "Big Bazaar", distanceKm: null },
  { name: "DAV Public School", distanceKm: null },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_021",
    title: "Oak Forest",
    slug: "oak-forest-upcoming-021",
    description:
      "Step into your spacious, dream 2, 3, or 4 BHK home at NK Oak Forest, a RERA-approved, secure gated community in Argora, Ranchi. Developed by NK Constructions, this project offers modern amenities like a swimming pool and gym, with many units ready to move into immediately. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Ready to Occupy: Choose from many units that are ready for immediate possession.",
    "Convenient Vicinity: Close proximity to schools, hospitals, markets, and public transport ensures convenience. ",
    "Modern Amenities: Enjoy a swimming pool, gymnasium, children's play area, and clubhouse."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/q689xjnq247pwph5buirk/Oak-Forest.pdf?rlkey=689jyz8w001x30o578k50tkrq&st=nyl8wjxl&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/1/2024",
      startDate: "2022-01-01",
      possessionDate: "2025-02-01",
      builtUpArea: 1.20,
      totalTowers: 2,
      totalUnits: 96,
	  
    location: {
      address: "Argora Purana Chowk",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "NK Construction Pvt. Ltd. has been contributing to Jharkhand’s development since the state’s formation in 2000, beginning with government infrastructure projects and entering the real estate sector in 2001 after gaining extensive development expertise. Driven by strong core values, the company has achieved steady growth while delivering high-quality residential and commercial spaces that offer a superior standard of living. Led by experienced professionals and supported by skilled architects and engineers, NK Construction focuses on sustainable, eco-friendly, and innovative construction using modern technology and premium materials. With a diverse portfolio including residential complexes, private homes, cottages, and commercial structures, the company is committed to hassle-free operations, total customer satisfaction, timely service, and the delivery of state-of-the-art projects that meet global standards, while striving to be a trusted and innovative leader in the real estate industry.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/oak-forest/a%20(17).jpg",

    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/nkcpl.png",

    owner: {
      ownerType: "Builder",
      name: "NKCPL Group",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
	"Yoga & Meditation Zone",
  "Jogging Track",
  "Swimming Pool",
  "Gymnasium",
  "Kids’ Play Area",
  "Club House",
  "Central Lawn",
  "Parking",
  "Lifts",
  "Power Backup",
  "Staff Quarter",
  "Car Washing Area",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Rainwater Harvesting",
  "Waste Management System"
    ],

    nearbyLocations: [
  { name: "Hatia Station", distanceKm: 3 },
  { name: "Birsa Munda Airport", distanceKm: 4.5 },
  { name: "Ranchi Station", distanceKm: 3.5 },
  { name: "Governor House", distanceKm: 4 },
  { name: "Ring Road", distanceKm: 5 },
  { name: "Main Road, Ranchi", distanceKm: 3 },
  { name: "Project Building", distanceKm: 4 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_022",
    title: "ONE Residency",
    slug: "one-residency-upcoming-022",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/rbjhf5s8612yrp9iuuhah/ONE-RESIDENCES.pdf?rlkey=h7ed74nuwijw8nmgfjf9fk8eu&st=xehare9s&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/124/2024",
      startDate: "2023-10-01",
      possessionDate: "2026-12-01",
      builtUpArea: 1.15,
      totalTowers: 1,
      totalUnits: 80,
	  
    location: {
      address: "Kanke Boreya Chowk",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Pratistha Buildcon is built on expertise and trust, guiding clients confidently through every stage of their real estate journey. Whether it’s understanding affordability, credit, legal matters, or income requirements, the team provides quick, reliable support to ensure informed decision-making. Specializing in commercial, residential, and rental properties, Pratistha Buildcon caters to all needs—from compact homes to luxury residences—offering the right property at the right price. With a constantly updated portfolio and a commitment to seamless buying and selling experiences, the company ensures real estate is done right, delivering clarity, confidence, and exceptional service at every step.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
   images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(17).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(18).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(19).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(20).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(21).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(22).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(23).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(24).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(25).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(26).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-residencies/a%20(27).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/pratistha-buildcon.jpg",

    owner: {
      ownerType: "Builder",
      name: "Pratistha Buildcon",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple / Prayer Area",
  "Yoga & Meditation Zone",
  "Swimming Pool",
  "Gymnasium",
  "Kids’ Play Area",
  "Indoor Games",
  "Badminton Court",
  "Lounge / Seating Area",
  "Library / Reading Room",
  "Landscaped Gardens",
  "Open Sitting Areas",
  "Terrace Garden",
  "Parking",
  "Lifts",
  "Power Backup",
  "EV Charging Facility",
  "Visitors Parking",
  "Car Washing Area",
  "Departmental Store",
  "Commercial Space"
    ],

    nearbyLocations: [
  { name: "Boreya Chowk", distanceKm: null },
  { name: "PNB Bank", distanceKm: null },
  { name: "Ranchi Birsa Agriculture College", distanceKm: null },
  { name: "HP Petrol Pump", distanceKm: null },
  { name: "Ranchi Science Center", distanceKm: null },
  { name: "Ring Road", distanceKm: null },
  { name: "Morabadi", distanceKm: null },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_023",
    title: "ONE Square",
    slug: "one-square-upcoming-007",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/ykkkbbq1q2yt9rvnvi5v6/ONE-SQUARE.pdf?rlkey=fip1t65vl57apu7zzmgb1llcf&st=bxm6ev92&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/124/2024",
      startDate: "2024-06-01",
      possessionDate: "2028-12-01",
      builtUpArea: 2.10,
      totalTowers: 3,
      totalUnits: 160,
	  
    location: {
      address: "Kanke Boreya Chowk Ranchi",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Pratistha Buildcon is built on expertise and trust, guiding clients confidently through every stage of their real estate journey. Whether it’s understanding affordability, credit, legal matters, or income requirements, the team provides quick, reliable support to ensure informed decision-making. Specializing in commercial, residential, and rental properties, Pratistha Buildcon caters to all needs—from compact homes to luxury residences—offering the right property at the right price. With a constantly updated portfolio and a commitment to seamless buying and selling experiences, the company ensures real estate is done right, delivering clarity, confidence, and exceptional service at every step.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/one-square/a%20(13).jpg",	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/pratistha-buildcon.jpg",

    owner: {
      ownerType: "Builder",
      name: "Pratistha Buildcon",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      
    ],

    nearbyLocations: [
      
    ],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_024",
    title: "Palm Arin Gardens",
    slug: "palm-arin-gardens-upcoming-024",
    description:
      "Discover peaceful living at Nisith Palm Arin Garden in Pundag, Ranchi. This RERA-approved project by Nisith Keshari Construction offers a range of 1, 2, and 3 BHK apartments designed for comfort, with possession expected by May 2029. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
    why: [
    "Peaceful Location: Situated in a calm area of Pundag for a tranquil lifestyle.",
    "Convenient Vicinity: Close to hospitals, schools, and the Argora railway station. ",
    "Essential Amenities: Includes a gym, car parking, power backup, and a community hall."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/mrrpi5ykyqd6k6cqyic6j/Palm-Arin-Gardens.pdf?rlkey=s42ksu1l3v58dzu0kheee20hi&st=drgc4mdi&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/28/2025",
      startDate: "2023-01-01",
      possessionDate: "2027-12-01",
      builtUpArea: 3.20,
      totalTowers: 4,
      totalUnits: 220,
	  
    location: {
      address: "Near Tashil, Kutchery, Pundag",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "NK Construction Pvt. Ltd. has been contributing to Jharkhand’s development since the state’s formation in 2000, beginning with government infrastructure projects and entering the real estate sector in 2001 after gaining extensive development expertise. Driven by strong core values, the company has achieved steady growth while delivering high-quality residential and commercial spaces that offer a superior standard of living. Led by experienced professionals and supported by skilled architects and engineers, NK Construction focuses on sustainable, eco-friendly, and innovative construction using modern technology and premium materials. With a diverse portfolio including residential complexes, private homes, cottages, and commercial structures, the company is committed to hassle-free operations, total customer satisfaction, timely service, and the delivery of state-of-the-art projects that meet global standards, while striving to be a trusted and innovative leader in the real estate industry.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/palm-arin-gardens/a%20(12).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/nkcpl.png",

    owner: {
      ownerType: "Builder",
      name: "NKCPL Group",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      
    ],

     nearbyLocations: [
  { name: "Argora Chowk", distanceKm: null },
  { name: "Hatia Railway Station", distanceKm: null },
  { name: "Birsa Munda Airport", distanceKm: null },
  { name: "Ranchi Railway Station", distanceKm: null },
  { name: "Ring Road / Main Road", distanceKm: null },
  { name: "Kathal More", distanceKm: null },
],
    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_025",
    title: "Park Side",
    slug: "park-side-upcoming-025",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/mlveo9e7gnpks2m22zpzr/PARK-SIDE.pdf?rlkey=s1lj6v7sjsouql0z44xuyjm5v&st=lewn7wuv&dl=1",

    status: "Upcoming",

    reraApproved: true,
    reraId: null,
      startDate: "2024-03-01",
      possessionDate: "2028-06-01",
      builtUpArea: 1.45,
      totalTowers: 2,
      totalUnits: 110,	

    location: {
      address: "Harihar Singh Road Morabadi",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Pratistha Buildcon is built on expertise and trust, guiding clients confidently through every stage of their real estate journey. Whether it’s understanding affordability, credit, legal matters, or income requirements, the team provides quick, reliable support to ensure informed decision-making. Specializing in commercial, residential, and rental properties, Pratistha Buildcon caters to all needs—from compact homes to luxury residences—offering the right property at the right price. With a constantly updated portfolio and a commitment to seamless buying and selling experiences, the company ensures real estate is done right, delivering clarity, confidence, and exceptional service at every step.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/park-side/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/park-side/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/park-side/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/park-side/a%20(4).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/pratistha-buildcon.jpg",

    owner: {
      ownerType: "Builder",
      name: "Pratistha Buildcon",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      
    ],

    nearbyLocations: [
  { name: "Bus Stop", distanceKm: 0.1 },
  { name: "ATM", distanceKm: 0.2 },
  { name: "Karamtoli Chowk", distanceKm: 0.5 },
  { name: "Petrol Pump", distanceKm: 1.3 },
  { name: "RIMS", distanceKm: 1.8 },
  { name: "Firayalal Chowk", distanceKm: 2.7 },
  { name: "DAV Bariatu School", distanceKm: 3.1 },
  { name: "Inner Ring Road", distanceKm: 3.5 },
  { name: "Medico Hospital", distanceKm: 5.1 },
  { name: "Railway Station", distanceKm: 5.8 },
  { name: "Outer Ring Road", distanceKm: 7.7 },
  { name: "Airport", distanceKm: 10 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_026",
    title: "Prahlad Pinnacle",
    slug: "prahlad-pinnacle-upcoming-026",
    description:
      "Prahlad Pinnalce is a premium residential development by Prahlad Builders located near Kathal More, Ranchi. This RERA-approved project features 11-floor twin towers offering 1, 2, 3, and 4 BHK flats. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Prime Location: Situated near Kathal More with excellent NH and Ring Road connectivity.",
    "Modern Amenities: Includes a swimming pool, gym, kids' play area, and clubhouse.",
    "Robust Construction: Features earthquake-resistant RCC structures and high-quality premium interior finishes."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/2ctqv3e9uypb1vmoiem8l/Prahlad-Pinnacle.pdf?rlkey=yhdmvwh9g7izcw4knd8s9krrs&st=pelgvlfo&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/144/2024",
      startDate: "2023-08-01",
      possessionDate: "2027-12-01",
      builtUpArea: 0.95,
      totalTowers: 1,
      totalUnits: 64,
	  
    location: {
      address: "Pundag T.O.P. Lal Gutwa",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Prahlad Builders & Associates Pvt. Ltd. (Closed Down), based in Upper Bazar, Ranchi, was a trusted provider of comprehensive contracting and building services, known for delivering high-quality solutions across projects of varying scale. Backed by a team of experienced professionals, the company consistently executed projects with precision, reliability, and excellence, transforming client visions into well-planned realities through efficient and dependable services. Driven by a passion for quality and long-term value, Prahlad Builders focused on exceeding client expectations by maintaining the highest standards of construction, ensuring complete customer satisfaction, and creating spaces that were functional, aesthetically appealing, and sustainable.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(17).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(18).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(19).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(20).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(21).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(22).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(23).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(24).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(25).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(26).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(27).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(28).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(29).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prahlad-pinnacle/a%20(30).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/prahlad.png",

    owner: {
      ownerType: "Builder",
      name: "Prahlad Builders & Associate Pvt Ltd",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple / Prayer Area",
  "Community Hall",
  "Jogging Track",
  "Swimming Pool",
  "Gymnasium",
  "Kids’ Play Area",
  "Landscaped Gardens",
  "Open Sitting Areas",
  "Parking",
  "Lifts",
  "Power Backup",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry"
    ],

    nearbyLocations: [
  { name: "Pundag T.O.P.", distanceKm: 0.4 },
  { name: "Kathal More", distanceKm: 1 },
  { name: "Rinchi Hospital", distanceKm: 1 },
  { name: "DAV Pundag", distanceKm: 1.2 },
  { name: "Ring Road", distanceKm: 3 },
  { name: "Argora Chowk", distanceKm: 4 },
  { name: "High Court", distanceKm: 6 },
  { name: "Birsa Munda Airport", distanceKm: 9 },
  { name: "Ranchi Railway Station", distanceKm: 9 },
  { name: "Hatia Railway Station", distanceKm: 10 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_027",
    title: "Prana By Nilaya",
    slug: "prana-by-nilaya-upcoming-027",
    description:
      "Prana By Nilaya is a nature-integrated residential project on BIT Mesra Road, Ranchi. This 1.15-acre development offers 111 luxury 2 and 3 BHK flats featuring 73% open green spaces and 36+ lifestyle amenities. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Wellness Amenities: Features 36+ lifestyle facilities including a jacuzzi, yoga, and gym.",
    "Strategic Location: Situated on BIT Mesra Road, minutes from Medanta and highways.",
    "Nature-Centric Living: Sprawling landscapes with 73% open areas and century-old guardian trees."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/7u8ah71s2m613bv9msx64/Prana-By-Nilaya.pdf?rlkey=xmcm9l3zwv6gy3sqbhhkcyfew&st=y08h45m7&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/113/2025",
      startDate: "2023-11-01",
      possessionDate: "2027-12-01",
      builtUpArea: 1.80,
      totalTowers: 2,
      totalUnits: 112,
	  
    location: {
      address: "BIT Mesra Road Near Navoday Vidyalaya",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Nilaya Eco Homes believes a home is more than concrete and steel—it is a sanctuary where nature, thoughtful design, and community coexist in harmony. Founded by a team of young visionaries and experienced builders united by shared values, Nilaya was created with one clear belief: homes should nurture well-being, connection, and growth. Guided by a philosophy where luxury means openness, balance, and belonging, every Nilaya community is designed with expansive green spaces, preserved natural ecosystems, and a seamless balance of the five elements—earth, water, fire, air, and space. With timeless architecture, modern amenities, and a strong focus on sustainability, Nilaya Eco Homes creates self-sustaining communities where wellness is woven into everyday living. These are not just residences, but eco-homes—sanctuaries built for today and designed to thrive for generations.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(17).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(18).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(19).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(20).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(21).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(22).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(23).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(24).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(25).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(26).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(27).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(28).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(29).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(30).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(31).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prana/a%20(32).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/nilaya.jpg",

    owner: {
      ownerType: "Builder",
      name: "Nilaya",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
"Temple / Prayer Area",
  "Community Hall",
  "Open Air Theatre",
  "Yoga & Meditation Zone",
  "Jogging Track",
  "Gymnasium",
  "Kids’ Play Area",
  "Outdoor Games",
  "Indoor Games",
  "Landscaped Gardens",
  "Central Lawn",
  "Parking",
  "Lifts",
  "Power Backup",
  "Guests Room",
  "Entrance Lobby",
  "Firefighting System",
  "Gated Entry"
    ],

    nearbyLocations: [
  { name: "Navodaya Vidyalaya", distanceKm: 0.6 },
  { name: "Mesra Hospital", distanceKm: 1.9 },
  { name: "DPS Ranchi", distanceKm: 2 },
  { name: "Vikas Vidyalaya", distanceKm: 2.2 },
  { name: "BIT Mesra", distanceKm: 2.3 },
  { name: "Medanta Hospital", distanceKm: 2.5 },
  { name: "Mesra Railway Station", distanceKm: 2.7 },
  { name: "Booty More Bus Stand", distanceKm: 3 },
  { name: "Ranchi Gymkhana Club", distanceKm: 7.3 },
  { name: "RIMS", distanceKm: 9.3 },
  { name: "Khelgaon Sports Complex", distanceKm: 10 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_028",
    title: "Prarthna Solitaire",
    slug: "prarthna-soltaire-upcoming-028",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/2ugnbqoeik518vmldm917/Prathna-Solitaire.pdf?rlkey=gql462zrirx5yual7kr32hyfs&st=najb1gsx&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/6/2025",
      startDate: "2024-01-01",
      possessionDate: "2029-04-01",
      builtUpArea: 1.10,
      totalTowers: 1,
      totalUnits: 75,
	  
    location: {
      address: "Near Dhoni Farm House Simaliya",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Prarthana Group has built a strong reputation for delivering high-quality, sustainable construction projects in Ranchi and its surrounding areas. Backed by a dedicated team of proactive construction professionals, the company ensures efficient project execution through strong project management skills and integrated cost and project management systems, enabling timely and budget-conscious delivery. Prarthana Group maintains an excellent track record of quality construction by partnering with reliable subcontractors and suppliers and placing quality management at the core of its operations. Committed to assured service standards, the company extends its quality principles to all consultants and suppliers, while continuously improving its processes to deliver cost-effective, environmentally responsible, and eco-friendly buildings.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(4).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(5).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(6).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(7).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(8).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(9).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(10).png",
	  "https://ik.imagekit.io/rrmbppkq8/bib/prarthana-solitaire/a%20(11).png",

    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/prarthana-group.jpg",

    owner: {
      ownerType: "Builder",
      name: "Prarthana Group",
      phone: "+91-9876543210",
    },
    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Community Hall",
  "Gymnasium",
  "Kids’ Play Area",
  "Outdoor Games",
  "Badminton Court",
  "Parking",
  "Lifts",
  "Power Backup",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Commercial Space"
    ],

    nearbyLocations: [
  { name: "Airport", distanceKm: 17 },
  { name: "Railway Station", distanceKm: 16 },
  { name: "High Court", distanceKm: 11 },
  { name: "Vidhan Sabha", distanceKm: 10 },
  { name: "JSCA Stadium", distanceKm: 11 },
  { name: "IIM Ranchi", distanceKm: 6 },
  { name: "Central University", distanceKm: 12 },
  { name: "Rinchi Hospital", distanceKm: null },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_029",
    title: "Prarthana Uma Exotic",
    slug: "prarthana-uma-exotic-upcoming-029",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/xdt6pqyrf27msgzb2afkt/Prathna-Uma-Exotic.pdf?rlkey=21omj5l3iaa1uv0n4l4u1ptiv&st=0mvz5ziy&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/192/2023",
      startDate: "2022-01-01",
      possessionDate: "2026-08-01",
      builtUpArea: 1.60,
      totalTowers: 2,
      totalUnits: 110,
	  
    location: {
      address: "Chesire Home Road, Bariatu, Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Prarthana Group has built a strong reputation for delivering high-quality, sustainable construction projects in Ranchi and its surrounding areas. Backed by a dedicated team of proactive construction professionals, the company ensures efficient project execution through strong project management skills and integrated cost and project management systems, enabling timely and budget-conscious delivery. Prarthana Group maintains an excellent track record of quality construction by partnering with reliable subcontractors and suppliers and placing quality management at the core of its operations. Committed to assured service standards, the company extends its quality principles to all consultants and suppliers, while continuously improving its processes to deliver cost-effective, environmentally responsible, and eco-friendly buildings.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/uma-exotica/a%20(12).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/prarthana-group.jpg",

    owner: {
      ownerType: "Builder",
      name: "Prarthana Group",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple / Prayer Area",
  "Community Hall",
  "Swimming Pool",
  "Gymnasium",
  "Kids’ Play Area",
  "Indoor Games",
  "Sports Bar",
  "Landscaped Gardens",
  "Parking",
  "Lifts",
  "Power Backup",
  "EV Charging Facility",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Rainwater Harvesting",
  "Sewage Treatment Plant (STP)",
  "Solar Lighting",
  "Waste Management System"
    ],

    nearbyLocations: [
  { name: "Samford Hospital", distanceKm: 3 },
  { name: "Surendranath Centenary School", distanceKm: 2 },
  { name: "RIMS Hospital", distanceKm: 5 },
  { name: "Ranchi Railway Station", distanceKm: 8.5 },
  { name: "Airport", distanceKm: 12 },
  { name: "Ranchi ITI Bus Stand", distanceKm: 17.7 },
  { name: "Ring Road", distanceKm: 21 },
  { name: "Rajendra Institute of Medical Sciences", distanceKm: 2.8 },
  { name: "Domino's", distanceKm: 2 },
  { name: "Ranchi Gymkhana Club", distanceKm: 3.4 },
  { name: "SBI Bank, Ranchi", distanceKm: 3.4 },
  { name: "Rock Garden", distanceKm: 11.4 },
  { name: "Birsa Munda Biological Park", distanceKm: 21 },
  { name: "Army Parade Ground", distanceKm: 9.8 },
  { name: "Khelgaon", distanceKm: 6 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_030",
    title: "Sharda Green",
    slug: "sharda-green-upcoming-030",
    description:
      "Sharda Green is an ultra-premium gated community in Bariatu, Ranchi, by Sharda Shelters. Spread over 2 acres, the 4-tower (B+G+10) project offers 143 luxurious 3, 4, and 5 BHK units and penthouses with 19+ lifestyle amenities. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Extensive Open Space: Dedicated 70% of total area to lush greenery and landscapes.",
    "Modern Sustainable Features: Includes EV charging stations, solar panels, and water management systems.",
    "Premium Lifestyle Amenities: Features a mini theatre, swimming pool, jacuzzi, and sports center."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/7gyst2g4hs18o4wwcfoev/Sharda-Green.pdf?rlkey=lv3n3uzusigo2tebl3yml1z1s&st=qqw6n1hd&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/34/2024",
      startDate: "2024-01-01",
      possessionDate: "2028-08-01",
      builtUpArea: 1.50,
      totalTowers: 2,
      totalUnits: 120,
	  
    location: {
      address: "Birla Bagaan Joda Talab Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Sharda Shelters Pvt Ltd is a prominent real estate developer based in Ranchi, Jharkhand. It serves as the flagship real estate arm of the Sharda Group of Companies, a diversified conglomerate with interests in steel, energy, minerals, and agriculture.Incorporated in 2014, the company has established a reputation for developing premium residential and commercial projects across Jharkhand and neighboring states like Bihar, Odisha, and West Bengal.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(17).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(18).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(19).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(20).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(21).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(22).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/sharda-green/a%20(23).jpg",

    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/sharda-shelters.png",

    owner: {
      ownerType: "Builder",
      name: "Sharda Shelters Pvt Ltd",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple / Prayer Area",
  "Community Hall",
  "Indoor Theatre",
  "Yoga & Meditation Zone",
  "Jogging Track",
  "Swimming Pool",
  "Gymnasium",
  "Kids’ Play Area",
  "Outdoor Games",
  "Indoor Games",
  "Landscaped Gardens",
  "Open Sitting Areas",
  "Senior Citizen Zone",
  "Parking",
  "Lifts",
  "Power Backup",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Intercom Facility",
  "Rainwater Harvesting",
  "Sewage Treatment Plant (STP)",
  "Solar Lighting",
  "Waste Management System",
  "Cafeteria",
  "Departmental Store",
  "Commercial Space"
    ],

    nearbyLocations: [
  { name: "Titan Eyeplus", distanceKm: 2.4 },
  { name: "Lenskart", distanceKm: 2.4 },
  { name: "Nucleus Mall", distanceKm: 3 },
  { name: "Medica Hospital", distanceKm: 2.4 },
  { name: "Rajendra Institute Of Medical Science", distanceKm: 2.8 },
  { name: "Samford Hospital", distanceKm: 3 },
  { name: "Fortis Hospital", distanceKm: 3.2 },
  { name: "Freya Fertility Hospital", distanceKm: 2.1 },
  { name: "Bharat Petroleum", distanceKm: 2 },
  { name: "Indian Oil Petrol Pump", distanceKm: 2.1 },
  { name: "Birsa Munda Airport", distanceKm: 13.2 },
  { name: "Ranchi Railway Station", distanceKm: 7.2 },
  { name: "Hatia Railway Station", distanceKm: 15.9 },
  { name: "Dominos", distanceKm: 2 },
  { name: "Pizzahut", distanceKm: 2.3 },
  { name: "Subway", distanceKm: 2.4 },
  { name: "Radisson Hotel", distanceKm: 6 },
  { name: "DAV Bariatu School", distanceKm: 25 },
  { name: "Surendranath Centenary School", distanceKm: 1.4 },
  { name: "Kidzee", distanceKm: 0.5 },
  { name: "DPS", distanceKm: 11.7 },
  { name: "Maruti Showroom", distanceKm: 2 },
  { name: "KIA Showroom", distanceKm: 2 },
  { name: "Royal Enfield Showroom", distanceKm: 3.1 },
  { name: "HDFC Bank", distanceKm: 2.1 },
  { name: "ICICI Bank", distanceKm: 2.1 },
  { name: "SBI Bank", distanceKm: 2.5 },
  { name: "BD Bank", distanceKm: 2.5 },
  { name: "Ranchi University", distanceKm: 3.5 },
  { name: "Sarla Biria University", distanceKm: 141 },
  { name: "Usha Martin University", distanceKm: 2046 },
  { name: "Hanuman Mandir", distanceKm: 5 },
  { name: "Ring Road", distanceKm: 10 },
  { name: "High Court", distanceKm: 14.3 }
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_031",
    title: "Signature Homes",
    slug: "signature-homes-upcoming-031",
    description:
      "Signature Homes is an elite residential project by Minu Enhance Developers in Bariatu, Ranchi. This RERA-approved (JHARERA/PROJECT/126/2023) B+G+16 tower offers premium 3 and 4 BHK luxury apartments with 75% green space. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "is an elite residential project by Minu Enhance Developers in Bariatu, Ranchi. This RERA-approved (JHARERA/PROJECT/126/2023) B+G+16 tower offers premium 3 and 4 BHK luxury apartments with 75% green space. ",
    "Modern Lifestyle: Includes a private theatre, swimming pool, and sports facilities.",
    "Spacious Layouts: High floor-to-floor heights (11ft) ensure superior ventilation and luxury. "
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/5rqhlyqhgbev54jr01ghs/Signature-Homes.pdf?rlkey=hbzqcax67cqe6hggogpo4r9a0&st=avqv7ix9&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/126/2023",
      startDate: "2023-06-01",
      possessionDate: "2027-03-01",
      builtUpArea: 0.85,
      totalTowers: 1,
      totalUnits: 45,
	  
    location: {
      address: "Chesire Home Road, Bariatu, Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Minu Enhance Developers is a prominent real estate joint venture based in Ranchi, Jharkhand. Formed in 2021, the company combines the resources of two established business houses: the Minu Group (active since 1987 in retail, FMCG, and logistics) and the Enhance Group (active since the 1980s in government contracting and infrastructure).The developer is particularly known for high-end residential projects that emphasize modern luxury, sustainable features, and smart home technology.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(17).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(18).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/signature-homes/a%20(19).jpg",

    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/minu-enhance.jpg",

    owner: {
      ownerType: "Builder",
      name: "Minu Enhance Developers",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
"Temple / Prayer Area",
  "Community Hall",
  "Indoor Theatre",
  "Yoga & Meditation Zone",
  "Jogging Track",
  "Swimming Pool",
  "Kids Swimming Pool",
  "Gymnasium",
  "Outdoor Games",
  "Indoor Games",
  "Badminton Court",
  "Club House",
  "Landscaped Gardens",
  "Central Lawn",
  "Open Sitting Areas",
  "Parking",
  "Lifts",
  "Power Backup",
  "Visitors Parking",
  "Guests Room",
  "Car Washing Area",
  "Entrance Lobby",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Cafeteria"
    ],

    nearbyLocations: [
      
    ],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_032",
    title: "Status",
    slug: "status-upcoming-032",
    description:
      "Status is a boutique luxury residential project by Anandi Estates in Tupudana, Ranchi. This single-tower development features 23 exclusive 3 BHK units across 8 floors with modern architecture. ",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Prime Accessibility: Strategically located 200m from Tupudana Chowk near Smart City.",
    "Exclusive Privacy: Limited to just 23 units ensuring a peaceful environment.",
    "Lifestyle Terrace: Features a designer terrace garden with yoga and meditation areas."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/bon5thkohy6lagzykpar3/Status.pdf?rlkey=gjpivkj3kc03zaj96jakgvtxh&st=0bii23s9&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/66/2025",
      startDate: "01-03-2022",
      possessionDate: "2027-12-01",
      builtUpArea: 1.15,
      totalTowers: 1,
      totalUnits: 80,
	  
    location: {
      address: "Near Tupudana Chowk, Tupudana,",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Anandi Estates: A developer focusing on modern residential growth, currently launching Anandi Status in Tupudana. Their projects emphasize lifestyle convenience with amenities like terrace gardens, EV charging stations, and gated security. They aim to provide contemporary living spaces in developing urban pockets.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/status/a%20(11).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/anandi-estates.jpg",

    owner: {
      ownerType: "Builder",
      name: "Anandi Estates",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Community Hall",
  "Yoga & Meditation Zone",
  "Kids’ Play Area",
  "Landscaped Gardens",
  "Parking",
  "Lifts",
  "Power Backup",
  "Entrance Lobby",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Intercom Facility",
  "Rainwater Harvesting"
    ],

    nearbyLocations: [
  { name: "Tupudana Chawk", distanceKm: 0.2 },
  { name: "Tender Heart School", distanceKm: 0.5 },
  { name: "Birsa Chowk", distanceKm: 2 },
  { name: "Smart City", distanceKm: 6 },
  { name: "Hatia Railway Station", distanceKm: 8 },
  { name: "Ranchi Airport", distanceKm: 10 },
  { name: "Kantatoli Bus Stand", distanceKm: 12 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_033",
    title: "The Prestige",
    slug: "the-prestige-upcoming-033",
    description:
      "The Prestige  is an under-construction single-tower residential project in Getlatu/Booty More, Ranchi, by Pravujagdish Realtors. It offers 2 and 3 BHK flats,",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Safety Assured: Features earthquake-resistant structure and 24/7 CCTV security.",
    "Modern Conveniences: Offers amenities like high-speed lifts and power backup.",
    "Ample Parking: Provides dedicated and covered car parking for residents."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/y56crsovx72hd83mpl4cx/The-Prestige.pdf?rlkey=zgdrs3gu4vx0orfo52aeoonal&st=hl9nbuyo&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/149/2025",
      startDate: "2024-08-01",
      possessionDate: "2028-12-01",
      builtUpArea: 1.25,
      totalTowers: 2,
      totalUnits: 90,
    location: {
      address: "Near Gautam Green City, Booty More Chowk,",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Pravujagdish Realtors Pvt Ltd: Noted for The Prestige in Booty More, this developer focuses on superlative safety and high-quality building materials. Their projects are strategically located to offer quick access to the airport, railway station, and major hospitals like RIMS.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/the-prestige/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/the-prestige/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/the-prestige/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/the-prestige/a%20(4).jpg",

    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/pravujagdish-realtors.png",

    owner: {
      ownerType: "Builder",
      name: "Samay's Milestones",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Parking",
  "Lifts",
  "Visitors Parking",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Rainwater Harvesting"
    ],

    nearbyLocations: [
  { name: "Gautam Green City", distanceKm: 0.2 },
  { name: "Manan Vidya School", distanceKm: 0.4 },
  { name: "Booty More Chowk", distanceKm: 2 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_034",
    title: "Urban Homes",
    slug: "urban-homes-upcoming-034",
    description:
      "Urban Homes is an under-construction residential project by S S Buildcon in Morabadi, Ranchi. The project features two towers (G+4) with a total of 60 units, offering 2 and 3 BHK apartments.",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Prime Morabadi Location: Strategically located at Boreya with excellent city connectivity.",
    "Modern Amenities: Includes a swimming pool, gymnasium, and landscape garden.",
    "Sustainable Features: Equipped with EV charging stations and rainwater harvesting systems."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/koely0n2gxevtaumvq85z/Urban-Homes.pdf?rlkey=2pk95v0y96s9t250x8xkgobqj&st=1wmo45mk&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/76/2025",
      startDate: "2023-05-01",
      possessionDate: "2026-12-01",
      builtUpArea: 0.70,
      totalTowers: 1,
      totalUnits: 40,
	  
    location: {
      address: "NEAR ASHIRVAD BANQUET HALL, BOREYA, MORABADI",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Lucky Construction is a trusted provider of end-to-end contracting and building services, specializing in delivering high-quality solutions for builder-led projects. With a team of experienced professionals, the company ensures every project—regardless of scale—is executed with precision, reliability, and excellence. Driven by a passion for quality and long-term value, Lucky Construction is committed to exceeding client expectations by transforming visions into durable, functional, and aesthetically appealing spaces. By combining expertise, efficient execution, and a strong focus on customer satisfaction, the company consistently delivers projects that are sustainable and built to stand the test of time.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
   images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/img132.jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/img154.jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/urban-homes/img159.jpg",

    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/lucky-group.jpg",

    owner: {
      ownerType: "Builder",
      name: "Lucky Group",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple / Prayer Area",
  "Community Hall",
  "Yoga & Meditation Zone",
  "Kids Swimming Pool",
  "Gymnasium",
  "Landscaped Gardens",
  "Parking",
  "Lifts",
  "Power Backup",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry"
    ],

    nearbyLocations: [
  { name: "Morhabadi Maidan", distanceKm: 2 },
  { name: "Karamtoli Chowk", distanceKm: 3 },
  { name: "Firayalal Chowk", distanceKm: 6 },
  { name: "Ranchi Railway Station", distanceKm: 8 },
  { name: "Ranchi Ring Road", distanceKm: 6 },
  { name: "Birsa Munda Airport", distanceKm: 13 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_035",
    title: "Utopian Heights",
    slug: "utopian-heights-upcoming-035",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/rfcwzrjyyl7af3tsrcexj/UTOPIAN-HEIGHTS-W.pdf?rlkey=79gce0dm1og5mb0182y352aj6&st=2cu4d4tk&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/149/2021",
      startDate: "2024-03-01",
      possessionDate: "2028-12-01",
      builtUpArea: 1.90,
      totalTowers: 2,
      totalUnits: 130,
	  
    location: {
      address: "Towards Lajpat Colony, Towards Kathal More",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "AHDPL is a leading infrastructure and real estate company dedicated to transforming aspirations into thoughtfully developed residential, commercial, and industrial spaces. With a strong focus on quality and innovation, the company follows an integrated approach that combines forward-thinking planning, smart design, efficient management, and robust construction practices. Backed by a team of skilled professionals, architects, engineers, and designers, AHDPL consistently delivers projects that create long-term value and exceptional experiences for customers, investors, and stakeholders.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
   images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utopian-heights/a%20(11).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/ahdpl.png",

    owner: {
      ownerType: "Builder",
      name: "AHDPL Group",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
     "Temple / Prayer Area",
  "Community Hall",
  "Yoga & Meditation Zone",
  "Jogging Track",
  "Swimming Pool",
  "Kids Swimming Pool",
  "Gymnasium",
  "Kids' Play Area",
  "Indoor Games",
  "Club House",
  "Library / Reading Room",
  "Landscaped Gardens",
  "Central Lawn",
  "Open Sitting Areas",
  "Senior Citizen Zone",
  "Terrace Garden",
  "Parking",
  "Lifts",
  "Power Backup",
  "Car Washing Area",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Rainwater Harvesting",
  "Sewage Treatment Plant (STP)",
  "Waste Management System",
  "Departmental Store"
    ],

    nearbyLocations: [
  { name: "Argora Chowk", distanceKm: null },
  { name: "Main Road (M.G. Marg)", distanceKm: null },
  { name: "Super Speciality Hospital", distanceKm: null },
  { name: "Shopping Malls", distanceKm: null },
  { name: "Banks and ATM", distanceKm: null },
  { name: "Birsa Munda Airport", distanceKm: null },
  { name: "Hatia Railway Station", distanceKm: null },
  { name: "Ranchi Railway Station", distanceKm: null },
  { name: "Ring Road", distanceKm: null },
  { name: "IIM Ranchi", distanceKm: null },
  { name: "Vidhan Sabha", distanceKm: null },
  { name: "JSCA", distanceKm: null },
  { name: "Passport Office and Other Government of India Offices", distanceKm: null },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_036",
    title: "Utsav Trinayan",
    slug: "utsav-trinayan-upcoming-036",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/q8k6p0xpsjbs49uxepynd/Utsav-Trinayan.pdf?rlkey=77zztw6x2crk9itpnw4xnkbqn&st=xpo4gh8j&dl=1",
    status: "Upcoming",
 

    reraApproved: true,
    reraId: "JHARERA/PROJECT/95/2024",
      startDate: "2024-01-01",
      possessionDate: "2027-12-01",
      builtUpArea: 1.10,
      totalTowers: 1,
      totalUnits: 85,
	  
    location: {
      address: "Behind Vidya Vikas Public School, Morabadi Road",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Trinayan believes in giving life to walls. Rather than merely completing projects, the company focuses on creating homes that homeowners can truly take pride in as their most valuable possession. Trinayan is driven by the vision of building a lasting legacy of high-quality dwellings, consistently striving to exceed expectations and remain attentive to customer needs. Every feature incorporated into its projects is carefully selected to offer maximum comfort, peace of mind, and enduring value, ensuring a refined and satisfying living experience.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
   images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/utsav-homes/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utsav-homes/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utsav-homes/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utsav-homes/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utsav-homes/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utsav-homes/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/utsav-homes/a%20(7).jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/trinayan.jpg",

    owner: {
      ownerType: "Builder",
      name: "Trinayan HOmes Pvt Ltd",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Temple / Prayer Area",
  "Community Hall",
  "Banquet Hall",
  "Yoga & Meditation Zone",
  "Swimming Pool",
  "Gymnasium",
  "Club House",
  "Lounge / Seating Area",
  "Parking",
  "Lifts",
  "Power Backup",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Departmental Store"
    ],

    nearbyLocations: [
  { name: "Vidya Vikas Public School", distanceKm: 1 },
  { name: "HP Petrol Pump", distanceKm: 1 },
  { name: "Morabadi", distanceKm: 2.5 },
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_037",
    title: "Vicint Marqius",
    slug: "vicint-marqius-upcoming-037",
    description:
      "Vicint Maqruis is a mixed-use development by Vicint Homes on Morabadi Road/Hehal, Ranchi. This RERA-registered project (JHARERA/PROJECT/99/2024) features residential towers with 3, 4 BHK, studio apartments, and duplexes, above a commercial mini-mall complex",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Mixed-Use Project: Combines premium housing with commercial retail and a mini-mall.",
    "Extensive Amenities: Offers a swimming pool, gym, mini-theatre, and sports facilities.",
    "Variety of Options: Wide selection of unit sizes from studio to 4BHK duplexes."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/l5seey9ts5ii8rkilcvny/Vicint-brochure.pdf?rlkey=as9e64nu0uz5ypvbd7fe67ymj&st=j6knz161&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/99/2024",
      startDate: "2023-10-01",
      possessionDate: "2027-12-01",
      builtUpArea: 1.35,
      totalTowers: 2,
      totalUnits: 92,
	  
    location: {
      address: "Near Geetanjali Banquet, Opp. Bharat Petrol Pump, Boriya Road, Morabadi",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Vicint Marquis is an iconic destination for luxury living emerging in Ranchi, Jharkhand, crafted exclusively for those who appreciate the finest things in life. Designed for discerning individuals at the pinnacle of contemporary living, it represents aspiration, elegance, and refined taste. Blending striking architectural design with modern-day amenities, Vicint Marquis offers a timeless living experience that celebrates comfort, exclusivity, and tranquillity. Inspired by a sophisticated lifestyle, every detail reflects opulence, quality, and aesthetics with a distinct sense of style. Set amidst a fresh, green environment, it brings together imagination, innovation, and luxury to inspire active and fulfilling living, offering an exclusive lifestyle where refined comfort and thoughtful design come together seamlessly for those who seek more.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(15).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(16).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(17).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(18).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(19).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(20).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(21).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(22).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(23).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(24).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(25).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(26).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/vicint-marquis/a%20(27).jpg",

    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/vicint.jpg",

    owner: {
      ownerType: "Builder",
      name: "Devika Construction & Developers",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
      "Community Hall",
  "Banquet Hall",
  "Indoor Theatre",
  "Open Air Theatre",
  "Yoga & Meditation Zone",
  "Jogging Track",
  "Swimming Pool",
  "Gymnasium",
  "Kids’ Play Area",
  "Outdoor Games",
  "Indoor Games",
  "Skate Park",
  "Badminton Court",
  "Club House",
  "Landscaped Gardens",
  "Open Sitting Areas",
  "Parks",
  "Parking",
  "Lifts",
  "Power Backup",
  "Entrance Lobby",
  "CCTV Surveillance",
  "Firefighting System",
  "Gated Entry",
  "Departmental Store",
  "Commercial Space",
  "Restaurant"
    ],

    nearbyLocations: [
  { "name": "Airport", "distanceKm": 12 },
  { "name": "Ranchi Railway Station", "distanceKm": 7.5 },
  { "name": "Sadar Medical College and Hospital", "distanceKm": 6.6 },
  { "name": "Rajendra Institute of Medical Sciences", "distanceKm": 4.3 },
  { "name": "Central Institute of Psychiatry, Kanke", "distanceKm": 4.4 },
  { "name": "Ranchi Institute of Neuropsychiatry and Allied Sciences", "distanceKm": 5.6 }
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_038",
    title: "Vinayak Garden Valley",
    slug: "vinayak-garden-valley-upcoming-038",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/8xmbyj747jovu7ui70ax0/Vinayak-Garden-Valley.pdf?rlkey=0cs3xp3cz1ie6f4aibmfp6mnv&st=fg6ri24g&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: "JHARERA/PROJECT/261/2023",
      startDate: "2020-10-01",
      possessionDate: "2028-08-01",
      builtUpArea: 5.00,
      totalTowers: 5,
      totalUnits: 462,
	  
    location: {
      address: "Hesag, Near Don Bosco School,",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Vinayak Developers & Associates (often referred to as Vinayak Developers) is a well-established real estate developer in Ranchi, known for its focus on premium gated communities and large-scale residential projects. They have a legacy of over 23 years in the industry, emphasizing innovation, modern design, and timely delivery. Their most significant ongoing footprint is in the Hesag (Hatia) and Pandra areas, where they are developing expansive housing societies with modern urban amenities.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(1).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(2).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(3).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(4).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(5).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(6).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(7).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(8).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(9).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(10).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(11).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(12).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(13).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(14).jpg",
	  "https://ik.imagekit.io/rrmbppkq8/bib/garden-valley/a%20(15).jpg",

    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/vinayak-developers.png",

    owner: {
      ownerType: "Builder",
      name: "Vinayak Developers & Associate",
      phone: "+91-9876543210",
    },


    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
     "Temple / Prayer Area",
  "Open Air Theatre",
  "Yoga & Meditation Zone",
  "Jogging Track",
  "Swimming Pool",
  "Kids Swimming Pool",
  "Gymnasium",
  "Kids’ Play Area",
  "Outdoor Games",
  "Indoor Games",
  "Volleyball Court",
  "Club House",
  "Landscaped Gardens",
  "Central Lawn",
  "Open Sitting Areas",
  "Parks",
  "Parking",
  "Lifts",
  "Power Backup",
  "Staff Quarter",
  "Entrance Lobby"
    ],

    nearbyLocations: [
  { "name": "Paras Hospital", "distanceKm": null },
  { "name": "Ranchi Smart City", "distanceKm": null },
  { "name": "DPS School", "distanceKm": null },
  { "name": "HEC", "distanceKm": null },
  { "name": "Secretariat", "distanceKm": null },
  { "name": "Tupudana Ring Road", "distanceKm": null },
  { "name": "Springcity Mall", "distanceKm": null },
  { "name": "Airport", "distanceKm": null },
  { "name": "Vidhan Sabha", "distanceKm": null },
  { "name": "High Court", "distanceKm": null },
  { "name": "JSCA", "distanceKm": null },
  { "name": "Jagannath Temple", "distanceKm": null },
  { "name": "Hatia Railway Station", "distanceKm": null }
],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  },
  {
    id: "upcoming_40",
    title: "Yuvraj Vatika",
    slug: "yuvraj-vatika-upcoming-040",
    description:
      "",
    propertyType: "Apartment",
    listingType: "Sale",
    category: "upcoming",
        why: [
    "Perfectly Placed—Away From the Noise, Close to Everything.",
    "Loaded with modern amenities.",
    "Crafted by trusted builders known for quality and transparency."
  ],
  brochureUrl: "https://www.dropbox.com/scl/fi/1vcwpmwamygyvnz3c9dck/Yuvraj-Vatika.pdf?rlkey=uwfekv8bjrp2xy3tkvq7douxn&st=o2dpfzff&dl=1",
    status: "Upcoming",

    reraApproved: true,
    reraId: null,
      startDate: "2024-02-01",
      possessionDate: "2028-06-01",
      builtUpArea: 1.05,
      totalTowers: 1,
      totalUnits: 60,
	  
    location: {
      address: "Ormanjhi",
      city: "Ranchi",
      state: "Jharkhand",
      pincode: "834001",
      // landmark: "Near Tech Park Phase 2",
    },
	builderDetails: {
    description: "Ashirwad Properties: A long-standing player in Ranchi’s real estate scene for over a decade. They are particularly active in the BIT Mesra and Pundag belts, offering both residential land and developed apartments like Ashirwad Residential Land, focusing on accessibility and comfort.",
    experience: "20+ Yrs Exp",
    projectCount: "50+ Projects"
  },
    coverImage: "bib/palm-hills/Z.jpg",
    images: [
      "https://ik.imagekit.io/rrmbppkq8/bib/yuvraj-vatika/img25.jpg",
	  
    ],

    logo: "https://ik.imagekit.io/rrmbppkq8/bib/extras/builder-logos/ashirwad-properties.jpg",

    owner: {
      ownerType: "Builder",
      name: "Ashirwad Properties",
      phone: "+91-9876543210",
    },

    verified: true,
    postedAt: "2025-02-01T10:30:00Z",

    amenities: [
     
    ],

    nearbyLocations: [
      { name: "Argora Chowk", distanceKm: 8, },
      { name: "Hatia Station", distanceKm: 18,  },
      { name: "Airport", distanceKm: 22, },
      { name: "Ring Road", distanceKm: 6, },
      { name: "Main road", distanceKm: 12, },
      { name: "Mall of Ranchi ", distanceKm: 12, },
      { name: "Ratu Road Expressway", distanceKm: 5,},
      {
        name: "Ranchi Railway Station",
        distanceKm: 18,
      },
    ],

    unitPriceRanges: {
      "1 BHK": { min: 3200000, max: 3800000 },
      "2 BHK": { min: 5200000, max: 6800000 },
      "3 BHK": { min: 7800000, max: 9800000 },
    },

    priceRange: {
      min: 5700000,
      max: 15400000,
    },

    priceSuffix: "Indicative",
    negotiable: false,
  }
];

export const getFeaturedProperties = () => {
  return properties;
};

export const getProperties = () => {
  return properties;
};

export const getPropertyBySlug = (slug: string) => {
  const property = properties.find((p: Property) => p.slug === slug);
  if (property) {
    return property;
  }
  return notFound();
};
