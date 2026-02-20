import "./globals.css";
import type { Metadata } from "next";
import Banner from "./components/banner";

export const metadata: Metadata = {
  title: "Plannr-A Startup landing page",
  description: "Next.js + TypeScript + Tailwind CSS Starter",
  icons: {
    icon: '/images/logo.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0A0E] text-white">
        <Banner/>
        {children}
      </body>
    </html>
  );
}
