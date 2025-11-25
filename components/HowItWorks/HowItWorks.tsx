import StepCard from "./StepCard";
import { Search, Home, FileText } from "lucide-react"; // Example icons

const steps = [
  {
    icon: <Search size={32} />,
    title: "Find Your Property",
    description:
      "Search and browse properties that match your needs and budget.",
  },
  {
    icon: <Home size={32} />,
    title: "Visit & Inspect",
    description:
      "Schedule visits to explore properties in person or virtually.",
  },
  {
    icon: <FileText size={32} />,
    title: "Close the Deal",
    description: "Complete the paperwork and make the property yours.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <StepCard key={idx} {...step} />
        ))}
      </div>
    </section>
  );
}
