import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Space_Grotesk({
  variable: "--font-primary-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const fontMono = Space_Mono({
  variable: "--font-primary-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JBeatery | Restaurant & Bar",
  description:
    "Where native ingredients and bold flavours meet the heat of the wood-fired hearth.",
};

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
