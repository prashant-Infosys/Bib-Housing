"use client";
import { Button } from "./ui/button";
import { handleBookAppointment } from "@/lib/utils";

// 1. Define the props type
interface BookAppointmentProps {
  className?: string;
}

const BookAppointment = ({ className }: BookAppointmentProps) => {
  return (
    <Button
      className={`text-sm ${className || ""}`}
      onClick={() => handleBookAppointment()}
    >
      Book Appointment
    </Button>
  );
};

export default BookAppointment;
