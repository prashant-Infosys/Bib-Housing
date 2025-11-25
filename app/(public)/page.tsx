import HeroSection from "@/components/hero-section";
import FeaturedProperties from "@/components/FeaturedProjects";
import {  buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  DoorClosed,
  Home,
  Sparkles,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TrustedBuildersSection from "@/components/TrustedBuildersSection";
import FAQSection from "@/components/FAQSection";
import Header from "@/components/Navbar/Header";
import FooterSection from "@/components/Navbar/Footer";
import BookAppointment from "@/components/BookAppointment";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <section className="relative py-16 px-4">
        {/* soft tinted background */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#fff5f7] via-white to-[#ffe9ee]" />

        <div className="mx-auto max-w-6xl">
          {/* header */}
          <div className="mb-8 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
                How we help
              </p>
              <h2 className="mt-1 text-2xl md:text-3xl font-semibold">
                Choose how you want to find your next home
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-xl">
                Get guided assistance, search yourself with powerful filters, or
                list your property to reach motivated buyers — all with verified
                projects.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                href="/assistance"
                className={buttonVariants({
                  className: "text-sm",
                })}
              >
                Get Free Assistance
              </Link>
            </div>
          </div>

          {/* cards grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Assistance card */}
            <Card className="group flex flex-col h-full border border-primary/5 bg-white/95 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </div>

                  {/* <Badge className="bg-primary/10 text-primary">Free</Badge> */}
                </div>

                <CardTitle className="text-lg font-semibold">
                  Personal Assistance
                </CardTitle>

                <CardDescription className="text-xs text-muted-foreground">
                  Hand-held help to shortlist, visit & negotiate — free of
                  charge.
                </CardDescription>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-xs px-2 py-1 rounded bg-muted/40 text-muted-foreground">
                    RERA-verified projects
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-muted/40 text-muted-foreground">
                    Site visits
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-3 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <User className="h-4 w-4" />
                    </span>
                    Dedicated expert to guide you
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Home className="h-4 w-4" />
                    </span>
                    Curated, genuine listings
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <DoorClosed className="h-4 w-4" />
                    </span>
                    Help with visits, negotiation & paperwork
                  </li>
                </ul>
              </CardContent>

              <CardFooter className="pt-2">
                <BookAppointment />
              </CardFooter>
            </Card>

            {/* Search card */}
            <Card className="group flex flex-col h-full border border-primary/5 bg-white/95 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Home className="h-5 w-5" />
                  </div>

                  {/* <Badge className="bg-primary/10 text-primary">
                    Self-serve
                  </Badge> */}
                </div>

                <CardTitle className="text-lg font-semibold">
                  Search Yourself
                </CardTitle>

                <CardDescription className="text-xs text-muted-foreground">
                  Powerful filters, saved searches and map-based results.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col items-center text-sm">
                <div className="relative mb-3 h-24 w-24">
                  {/* developer image path (local) — your infra will map /mnt/data/... to a url */}
                  <Image
                    src="/search.svg"
                    alt="search illustration"
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-center text-sm text-muted-foreground max-w-xs">
                  Browse curated listings with smart sorting and neighbourhood
                  filters.
                </p>
              </CardContent>

              <CardFooter className="pt-2">
                <Link
                  href="/properties"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full text-sm",
                  })}
                >
                  Browse Properties
                </Link>
              </CardFooter>
            </Card>

            {/* List property card */}
            <Card className="group flex flex-col h-full border border-primary/5 bg-white/95 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" />
                  </div>

                  {/* <Badge className="bg-primary/10 text-primary">
                    Owners / Builders
                  </Badge> */}
                </div>

                <CardTitle className="text-lg font-semibold">
                  List Your Property
                </CardTitle>

                <CardDescription className="text-xs text-muted-foreground">
                  Reach verified, assistance-ready buyers without random
                  inquiries.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-3 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    Get matched with high-intent buyers
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Building2 className="h-4 w-4" />
                    </span>
                    Better visibility for RERA-approved projects
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Home className="h-4 w-4" />
                    </span>
                    Support for visits & closing
                  </li>
                </ul>
              </CardContent>

              <CardFooter className="pt-2">
                <Link
                  href="/list-your-property"
                  className={buttonVariants({ className: "w-full text-sm" })}
                >
                  List Your Property
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <FeaturedProperties />
      <TrustedBuildersSection />
      <FAQSection />

      <FooterSection />
    </>
  );
}
