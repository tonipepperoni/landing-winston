import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google";

import { ReactNode } from "react";
import { Footer } from "../components/layout/Footer";
import RootHeader from "../components/layout/RootHeader";
import PageHeader from "../components/layout/PageHeader";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Winston blog",
  description: "Collection of posts by Winston Francois",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <RootHeader />
      <body
        className={`${dmSans.variable} ${spaceMono.variable} md:top-[150px] md:relative bg-secondary`}
      >
        <PageHeader />
        <div className={`bg-white`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
