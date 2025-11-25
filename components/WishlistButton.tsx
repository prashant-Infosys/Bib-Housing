// components/WishlistButton.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";

type Props = {
  propertyId: string;
  className?: string;
};

export default function WishlistButton({ propertyId, className = "" }: Props) {
  const { has, toggle } = useWishlist();

  // State to track if we are running on the client (mounted)
  const [isClient, setIsClient] = useState(false);
  // State for the actual saved status, defaults to false for SSR
  const [isSaved, setIsSaved] = useState(false);

  // 1. Initialize isClient and isSaved after the first render
  useEffect(() => {
    // This runs once after the component mounts on the client
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    setIsSaved(has(propertyId));
  }, [propertyId, has]); // Dependencies ensure logic updates if propertyId changes

  // 2. Handler to toggle state and update local state immediately
  const handleToggle = () => {
    toggle(propertyId);
    // Manually flip the local state instantly for better UX
    setIsSaved((prev) => !prev);
  };

  // 3. Conditional Render: Show a consistent default state during SSR/Initial Hydration
  if (!isClient) {
    // This state MUST match what the server renders (which is usually unsaved)
    return (
      <Button
        variant="outline"
        className={`flex items-center justify-center gap-2 ${className}`}
        disabled
      >
        <Heart className="h-4 w-4" />
        <span className="text-sm">Save</span>
      </Button>
    );
  }

  // 4. Client Render: Use the actual client state (isSaved)
  return (
    <Button
      onClick={handleToggle}
      variant={isSaved ? "default" : "outline"}
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-pressed={isSaved}
      aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
      title={isSaved ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart className="h-4 w-4" fill={isSaved ? "white" : "none"} />
      <span className="text-sm">{isSaved ? "Saved" : "Saved"}</span>
    </Button>
  );
}
