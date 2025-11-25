import z from "zod";

export type ContactType = {
  name: string;
  email?: string;
  phone?: string;
  message: string;
};

export const formSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),

    // Handle optional email: accepts valid email OR empty string
    email: z
      .string()
      .email({ message: "Please enter a valid email address" })
      .optional()
      .or(z.literal("")),

    // Handle optional phone: accepts string OR empty string
    phone: z
      .string()
      .min(10, { message: "Phone number must be valid" }) // Optional: Min length check
      .optional()
      .or(z.literal("")),

    message: z
      .string()
      .min(5, { message: "Message must be at least 5 characters" }),
  })
  // Optional: Add this refinement to ensure at least one contact method is given
  .refine((data) => data.email || data.phone, {
    message: "Please provide contact detail.",
    path: ["email"], 
  });

export type FormSchemaType = z.infer<typeof formSchema>;
