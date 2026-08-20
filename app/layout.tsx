import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wahaj Ul Islam — Electrical Engineer",
  description:
    "Portfolio of Wahaj Ul Islam, an Electrical Engineer specialising in power systems, LV/MV/HV site execution, and BMS & ELV integration for large-scale EPC projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        {children}
        <Script
          src="https://unpkg.com/@lottiefiles/lottie-player@2.0.3/dist/lottie-player.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
