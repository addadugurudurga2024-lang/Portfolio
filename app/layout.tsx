import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "A D S ABHISHEK | AI/ML & Software Engineering",
  description:
    "Portfolio of A D S ABHISHEK, a Computer Science student at VIT Chennai focused on Artificial Intelligence, Machine Learning, software engineering, and full-stack development.",
  keywords: [
    "A D S ABHISHEK",
    "ADS ABHISHEK",
    "AI/ML Engineer",
    "Software Engineer",
    "VIT Chennai",
    "Full-Stack Developer",
    "Machine Learning",
    "React",
    "Node.js",
    "Python",
    "Java",
  ],
  authors: [{ name: "A D S ABHISHEK" }],
  creator: "A D S ABHISHEK",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ads-abhishek.vercel.app",
    title: "A D S ABHISHEK | AI/ML & Software Engineering Portfolio",
    description:
      "Computer Science student at VIT Chennai focused on AI/ML, software engineering, and building practical full-stack applications.",
    siteName: "A D S ABHISHEK Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "A D S ABHISHEK | AI/ML & Software Engineering Portfolio",
    description:
      "Computer Science student at VIT Chennai focused on AI/ML, software engineering, and building practical full-stack applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#08090D] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
