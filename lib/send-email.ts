import { transporter } from "@/lib/nodemailer";
import { ContactType } from "@/lib/types";

export async function sendContactEmail(data: ContactType) {
  // We extract name, phone, message. We ignore 'email' from 'data' 
  // because we are hardcoding the sender/receiver below.
  const { name, phone, message } = data;

  const whatsappLink = phone
    ? `https://wa.me/${phone.replace(/[^0-9]/g, "")}`
    : null;

  try {
    await transporter.sendMail({
      // SENDER: Your requested sender
      from: "skprashant25@gmail.com", 
      // RECEIVER: Your requested receiver
      to: "thebib97@gmail.com", 
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #ea580c;">New Property Listing Inquiry</h2>
          <p><strong>Owner Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          ${whatsappLink ? `<p><a href="${whatsappLink}" style="color: #25D366; font-weight: bold;">Click to Chat on WhatsApp</a></p>` : ""}
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Property Details:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.5;">${message}</div>
          <p style="font-size: 10px; color: #999; margin-top: 20px;">Sent via BiBHousing Lead System</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return { success: false, error: "Failed to send email." };
  }
}