import SiteHeader from "@/components/SiteHeader/SiteHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import localFont from "next/font/local";
import getBaseUrl from "@/utils/getBaseUrl";

const interFont = Inter({ subsets: ["latin"], variable: "--font-inter" });
const chulapaFont = localFont({
  src: [
    { path: "../fonts/Chulapa-Light.otf", weight: "100" },
    { path: "../fonts/Chulapa-Regular.otf", weight: "400" },
    { path: "../fonts/Chulapa-Bold.otf", weight: "700" },
  ],
  display: "swap",
  variable: "--font-chulapa",
});

export const metadata: Metadata = {
  title: {
    default: "El Pez Gato - Bar Musical", // for this page
    template: "%s - El Pez Gato - Bar Musical", // for subpages
  },
  description:
    "Bar musical en el centro de Madrid, en Calle del Pez 40. Tu garito de buena música, buen ambiente, buenos precios y actuaciones en vivo.",
  themeColor: "#000000",
  alternates: { canonical: getBaseUrl() },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${chulapaFont.variable} flex flex-col`}
      >
        <SiteHeader />
        <main className="grow">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
