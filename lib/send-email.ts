import { transporter } from "@/lib/nodemailer";
import { ContactType } from "@/lib/types";

export async function sendContactEmail(data: ContactType) {
  const { name, phone, message } = data;

  // Runtime validation: Only checks when the function is actually called
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
    console.error("Email credentials missing in environment variables.");
    return { success: false, error: "Server configuration error." };
  }

  const whatsappLink = phone
    ? `https://wa.me/${phone.replace(/[^0-9]/g, "")}`
    : null;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #ff4466;">New Inquiry from BiBHousing</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          ${whatsappLink ? `<p><a href="${whatsappLink}" style="color: #25D366;">Chat on WhatsApp</a></p>` : ""}
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return { success: false, error: "Failed to send email." };
  }
}