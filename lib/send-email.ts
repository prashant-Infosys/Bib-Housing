import { transporter } from "@/lib/nodemailer";
import { ContactType } from "@/lib/types";

export async function sendContactEmail(data: ContactType) {
  const { name, phone, message } = data;

  const whatsappLink = phone
    ? `https://wa.me/${phone.replace(/[^0-9]/g, "")}`
    : null;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>WhatsApp:</strong> ${whatsappLink || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <blockquote>${message}</blockquote>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
