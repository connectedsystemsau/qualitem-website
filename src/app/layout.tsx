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
    default: "Qualitem - Free SharePoint Migration Scanner",
    template: "%s | Qualitem"
  },
  description: "Download our free Windows tool to scan your SharePoint migration for metadata issues. Upgrade to automatically fix problems between Office documents and SharePoint Online.",
  keywords: ["SharePoint metadata", "post-migration validation", "metadata integrity", "SharePoint migration", "document metadata validation", "migration verification", "SharePoint Online"],
  authors: [{ name: "Qualitem Team" }],
  creator: "Qualitem",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Qualitem - Free SharePoint Migration Scanner",
    description: "Download our free Windows tool to scan SharePoint migrations. Find metadata issues and upgrade to fix them automatically.",
    siteName: "Qualitem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qualitem - Free SharePoint Migration Scanner",
    description: "Download our free Windows scanner to check SharePoint migrations for metadata issues.",
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
