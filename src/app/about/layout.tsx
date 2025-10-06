import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Qualitem",
  description: "Learn about Qualitem - Post-migration metadata validation specialists helping enterprises ensure SharePoint migration success.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}