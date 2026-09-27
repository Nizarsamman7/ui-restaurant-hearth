import type { Metadata } from "next";
import { Cormorant, Outfit } from "next/font/google";
import "./globals.css";

const display = Cormorant({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const body = Outfit({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: { default: "Hearth", template: "%s · Hearth" },
  description: "Restaurant template with a set menu and reservation request.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body>{children}</body>
    </html>
  );
}
