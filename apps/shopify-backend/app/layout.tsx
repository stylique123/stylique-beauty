import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stylique Beauty — AI-Powered Beauty Advisor",
    template: "%s | Stylique Beauty",
  },
  description:
    "Your intelligent beauty consultant. Personalised skin analysis, shade matching, virtual try-on, and curated routines — powered by AI.",
  keywords: [
    "AI beauty advisor",
    "shade matching",
    "skin analysis",
    "beauty routine",
    "virtual try-on",
    "foundation shade finder",
  ],
  authors: [{ name: "Stylique Beauty" }],
  openGraph: {
    title: "Stylique Beauty — AI-Powered Beauty Advisor",
    description:
      "Personalised skin analysis, shade matching, virtual try-on, and curated routines.",
    type: "website",
    siteName: "Stylique Beauty",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
