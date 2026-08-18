import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const fontSerif = Cormorant_Garamond({
  variable: "--font-primary-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["italic", "normal"],
  display: "swap",
});

const fontSans = Space_Grotesk({
  variable: "--font-primary-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const fontMono = Space_Mono({
  variable: "--font-primary-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JBE | West Village, New York",
  description:
    "Located in the West Village, JBE brings together seasonal ingredients, thoughtful cooking, and genuine hospitality.",
};

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSerif.variable} ${fontSans.variable} ${fontMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#f3ece6] text-[#231916]" suppressHydrationWarning>
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
