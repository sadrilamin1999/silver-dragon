import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Silver Dragon | Home",
  description: "Martial Arts Academy website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(montserrat.className, "bg-dark", "text-light")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
