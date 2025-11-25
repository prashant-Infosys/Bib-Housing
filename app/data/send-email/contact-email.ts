"use server";

import { sendContactEmail } from "@/lib/send-email";
import { ContactType } from "@/lib/types";

export async function submitContactForm(data: ContactType) {
  const { name, email, phone, message } = data;
  // 1. Validation: Name and Message are mandatory
  if (!name || !message) {
    return { success: false, message: "Name and Message are required." };
  }

  // 2. Validation: Ensure at least ONE contact method is provided
  if (!email && !phone) {
    return {
      success: false,
      message: "Please provide your contact details.",
    };
  }

  // 3. Call DAL
  const result = await sendContactEmail({ name, email, phone, message });

  if (!result.success) {
    return { success: false, message: "System error. Please try again later." };
  }

  //   revalidatePath("/contact");
  return { success: true, message: "We have received your details!" };
}
