import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handleBookAppointment = () => {
  // 1. Get number from Env
  const businessNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();

  if (!businessNumber) {
    console.error("WhatsApp number is missing");
    return;
  }

  // 2. Generic Message (since we don't have user details yet)
  const message =
    "Hi, I am interested in booking an appointment for property assistance. Please let me know the available slots.";

  // 3. Construct URL
  const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(
    message
  )}`;

  // 4. Open WhatsApp
  window.open(whatsappUrl, "_blank");
};