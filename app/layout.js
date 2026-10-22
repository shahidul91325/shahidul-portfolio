import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://shahidul-portfolio.vercel.app"),
  title: "MD Shahidul Islam | Full-Stack Web Developer",
  description:
    "Production-ready developer portfolio of MD Shahidul Islam, Full-Stack Web Developer based in Dhaka, Bangladesh. Specializing in React, Next.js, Node.js, Tailwind CSS, and scalable web applications.",
  keywords: [
    "MD Shahidul Islam",
    "Shahidul Islam",
    "MSI Portfolio",
    "Full-Stack Developer",
    "Web Developer Dhaka",
    "React Developer Bangladesh",
    "Next.js Developer",
    "Bazar Dor",
    "FitLog",
    "Dev Stack",
    "JavaScript Developer",
  ],
  authors: [{ name: "MD Shahidul Islam", url: "https://github.com/shahidul91325" }],
  creator: "MD Shahidul Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahidul-portfolio.vercel.app",
    title: "MD Shahidul Islam | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer based in Dhaka, Bangladesh specializing in React, Next.js, and modern web application development.",
    siteName: "MD Shahidul Islam Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 1000,
        alt: "MD Shahidul Islam - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Shahidul Islam | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer based in Dhaka, Bangladesh specializing in React, Next.js, and modern web applications.",
    images: ["/images/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#070a12] text-slate-100 selection:bg-sky-500/30 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
