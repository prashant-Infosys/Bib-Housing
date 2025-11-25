import type { Metadata } from "next";
import { Roboto, Poppins, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { WishlistProvider } from "./context/WishlistContext";
import { Toaster } from "sonner";

// Load fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Bib Housing",
  description: "Buy verified properties with zero brokerage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${spaceGrotesk.variable} antialiased`}
      >
        <Toaster />
        <WishlistProvider>
          {children}
        </WishlistProvider>
      </body>
    </html>
  );
}
