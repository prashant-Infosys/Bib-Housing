import { getFeaturedProperties } from "@/app/data/properties";
import PropertyCard from "./PropertyCard";




export default async function FeaturedProperties() {
  const featuredProperties = await getFeaturedProperties();
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Featured Properties
          </h2>
          <p className="text-muted-foreground">
            Premium homes curated for BiBHousing users.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
