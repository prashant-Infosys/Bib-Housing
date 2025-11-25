import BookAppointment from "@/components/BookAppointment";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import AssistanceForm from "@/components/RequestAssist";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { handleBookAppointment } from "@/lib/utils";
import {
  BadgeCheck,
  Bell,
  Building2,
  Handshake,
  SearchCheck,
  ShieldCheck,
  Timer,
  UserCheck,
  Wallet,
} from "lucide-react";

export interface AssistancePoint {
  title: string;
  description: string;
  color: string;
}

const FEATURES: AssistancePoint[] = [
  {
    title: "Handpicked Property Suggestions",
    description:
      "Curated matches based on your preferred location, budget and needs.",
    color: "#FFB347",
  },
  {
    title: "Verified & RERA-approved Listings",
    description: "We only surface trusted, verified projects — no time wasted.",
    color: "#6EC6FF",
  },
  {
    title: "Real-time Availability Updates",
    description: "Latest inventory and offers directly from builders.",
    color: "#A5D6A7",
  },
  {
    title: "Expert Guidance",
    description:
      "Compare projects, pricing, amenities and future value with an expert.",
    color: "#FFD54F",
  },
  {
    title: "Zero Brokerage, Zero Cost",
    description: "Our service to buyers is always free.",
    color: "#CE93D8",
  },
  {
    title: "End-to-End Support",
    description: "Assistance from shortlisting to paperwork and handover.",
    color: "#90CAF9",
  },
  {
    title: "Faster Decision Making",
    description:
      "Clear options and personalized recommendations for quicker decisions.",
    color: "#FF8A65",
  },
  {
    title: "Trusted by Builders",
    description: "Priority access to new launches and exclusive offers.",
    color: "#81C784",
  },
];

export default function GetFreeAssistancePage() {
  return (
    <>
      <BreadcrumbBanner
        title="Personal Assistance"
        description="Tell us a bit about what you're looking for — we'll take care of the rest."
        items={[{ label: "Assistance", href: "/assistance" }]}
      />

      <section className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left content: Value Proposition */}
          <div className="col-span-12 lg:col-span-7 space-y-6 pr-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Why finding a property with Bib Housing is easier
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              Searching for property can be exhausting — endless listings,
              low-quality leads, and confusing paperwork. We provide personal
              assistance so you can focus on what matters: choosing the right
              home.
            </p>

            <div className="rounded-lg bg-white/80 p-6 shadow-lg border border-white/10 sm:pb-10">
              <h3 className="text-lg font-semibold mb-2">What we do for you</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 sm:mt-7 sm:gap-y-10">
                <li className="flex items-start gap-3">
                  <span
                    className="p-2 rounded-md flex items-center justify-center text-white"
                    style={{ backgroundColor: "#2e415d" }}
                  >
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium">Personal shortlists</div>
                    <div className="text-sm text-muted-foreground">
                      Handpicked properties that match your brief.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="p-2 rounded-md flex items-center justify-center text-white"
                    style={{ backgroundColor: "#2e415d" }}
                  >
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium">Site visits & negotiation</div>
                    <div className="text-sm text-muted-foreground">
                      We coordinate visits and negotiate on your behalf.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="p-2 rounded-md flex items-center justify-center text-white"
                    style={{ backgroundColor: "#2e415d" }}
                  >
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium">Verified listings</div>
                    <div className="text-sm text-muted-foreground">
                      Only RERA-tracked and vetted options are shown.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="p-2 rounded-md flex items-center justify-center text-white"
                    style={{ backgroundColor: "#2e415d" }}
                  >
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium">Document support</div>
                    <div className="text-sm text-muted-foreground">
                      End-to-end paperwork assistance for a smooth closing.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right sidebar: Form */}
          <aside className="col-span-12 lg:col-span-5 space-y-6">
            {/* We pass the Server Action here as a prop */}
            <AssistanceForm />
          </aside>
        </div>
      </section>

      {/* How it works Banner */}
      <div className="flex justify-around items-center relative py-10">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#fff5f7] via-white to-[#ffe9ee]" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">How it works</h3>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
              <li>Share your requirements (location, budget, must-haves)</li>
              <li>We shortlist RERA-verified projects & contacts</li>
              <li>Book visits — we assist with scheduling & negotiation</li>
              <li>We support paperwork until handover</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <BookAppointment />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="mt-10 mb-20 relative p-8">
        <div className="container mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Our Services
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Everything you need on your home-buying journey — guided by
              trusted experts at no extra cost.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, idx) => {
              const icons = [
                SearchCheck,
                ShieldCheck,
                Bell,
                UserCheck,
                Wallet,
                Timer,
                Handshake,
                Building2,
              ];

              const Icon = icons[idx % icons.length];

              return (
                <Card
                  key={f.title}
                  className="group p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur"
                >
                  <CardHeader className="p-0">
                    <div className="flex items-start gap-4">
                      {/* Icon Bubble */}
                      <div
                        className="p-2.5 rounded-xl text-white shadow-md transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: f.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Title + Description */}
                      <div>
                        <CardTitle className="text-base font-semibold leading-snug">
                          {f.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1 text-muted-foreground leading-relaxed">
                          {f.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3">
            <BookAppointment className="bg-[#2e415d] text-white px-10 py-7 text-base font-semibold rounded-xl shadow-md hover:bg-[#24364c] transition-all" />
            <p className="text-center text-xs text-muted-foreground">
              * This will redirect you to our WhatsApp Business Account.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
