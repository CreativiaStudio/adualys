import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adualys — Coming Soon",
  description: "Adualys. Official website coming soon.",
  openGraph: {
    title: "Adualys — Coming Soon",
    description: "Official website coming soon.",
    type: "website",
    images: [
      {
        url: "/images/adualys-molecules.jpg",
        width: 1920,
        height: 1080,
        alt: "Adualys",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#070F3A] flex flex-col font-sans selection:bg-[#990099]/10 selection:text-[#070F3A]">
        {children}
      </body>
    </html>
  );
}
