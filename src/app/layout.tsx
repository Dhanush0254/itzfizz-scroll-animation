import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITZFIZZ - Scroll-Driven Hero Animation",
  description: "A premium scroll-driven hero section animation showcasing smooth GSAP-powered interactions, scroll-based car animation, and dynamic statistics reveal.",
  keywords: ["ITZFIZZ", "scroll animation", "GSAP", "hero section", "Next.js"],
  openGraph: {
    title: "ITZFIZZ - Scroll-Driven Hero Animation",
    description: "Premium scroll-driven hero section with GSAP animations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Bootstrap Grid (For Layout Help - Plus Points Requirement) */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap-grid.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
