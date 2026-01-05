import nodemailer from "nodemailer";

// We use fallback empty strings to prevent the build from failing 
// when these variables are not present in the build environment.
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "", 
    pass: process.env.EMAIL_PASS || "",
  },
});