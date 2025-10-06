import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Qualitem - Post-Migration Metadata Validation for SharePoint",
    template: "%s | Qualitem"
  },
  description: "Ensure perfect metadata integrity after SharePoint migrations. Our Metadata Checker & Fixer validates and repairs metadata discrepancies between Office documents and SharePoint Online.",
  keywords: ["SharePoint metadata", "post-migration validation", "metadata integrity", "SharePoint migration", "document metadata validation", "migration verification", "SharePoint Online"],
  authors: [{ name: "Qualitem Team" }],
  creator: "Qualitem",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Qualitem - Post-Migration Metadata Validation for SharePoint",
    description: "Ensure perfect metadata integrity after SharePoint migrations. Validate and repair metadata discrepancies between Office documents and SharePoint Online.",
    siteName: "Qualitem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualitem - Post-Migration Metadata Validation for SharePoint",
    description: "Ensure perfect metadata integrity after SharePoint migrations. Validate and repair metadata discrepancies post-migration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
