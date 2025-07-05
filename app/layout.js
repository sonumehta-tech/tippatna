import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Extara from "@/Components/Extara";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
title: "Technical Institute & Training Center Patna - Practical Repair Courses",
description: "Technical Institute & Training Center in Patna provides practical, job-oriented courses in AC, washing machine, RO, geyser, refrigerator, motor winding & house wiring.",
  icons: {
    icon: '/images/logo.jpg',  // relative to /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div className="md:mt-30 mt-35">
          {children}
        </div>
        <Footer/>
        <Extara/>
      </body>
    </html>
  );
}
