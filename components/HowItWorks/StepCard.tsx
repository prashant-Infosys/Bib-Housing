import { Card } from "../ui/card";

interface StepCardProps {
  icon: React.ReactNode; // Pass a shadcn/lucide icon
  title: string;
  description: string;
}

export default function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <Card className="flex flex-col gap-3 items-center text-center rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}
