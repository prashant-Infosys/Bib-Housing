// lib/nodemailer.ts
import nodemailer from "nodemailer";

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

if (!emailUser || !emailPass) {
  throw new Error("Missing EMAIL_USER or EMAIL_PASS environment variables");
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

export const mailOptions = {
  from: emailUser,
};