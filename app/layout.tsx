import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wahaj Ul Islam — Electrical Engineer",
  description:
    "Wahaj Ul Islam — Electrical Engineer specializing in LV/MV/HV power systems, NESPAK & NTDC compliance, BMS/ELV systems, and electrical estimation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#050507" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://upload.wikimedia.org" crossOrigin="" />
        <link rel="preconnect" href="https://thumb.wikimedia.org" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
