import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adualys Therapeutics — Coming Soon",
  description: "Adualys Therapeutics. Official website coming soon.",
  openGraph: {
    title: "Adualys Therapeutics — Coming Soon",
    description: "Official website coming soon.",
    type: "website",
    images: [
      {
        url: "/images/adualys-logo.png",
        width: 401,
        height: 147,
        alt: "Adualys Therapeutics",
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
      className={`${poppins.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#070F3A] flex flex-col font-sans selection:bg-[#882694]/10 selection:text-[#070F3A]">
        {children}
      </body>
    </html>
  );
}
