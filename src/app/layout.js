import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import CommandModalWrapper from "@/components/ui/commandModalWrapper";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Bazar",
  description: "One Stop Marketplace for AI Models",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Navbar />
        <div className="px-32 pt-8"> {children}</div>
        <CommandModalWrapper />
        <Toaster />
      </body>
    </html>
  );
}
