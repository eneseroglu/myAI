import type { Metadata } from "next";
import localFont from "next/font/local";
import { PAGE_TITLE, PAGE_DESCRIPTION } from "@/configuration/ui";
import "./globals.css";
import { ErrorWrapper } from "./parts/error/error-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeToggle } from "./theme-toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
          <div className="p-4">
            <ThemeToggle />
          </div>
          <ErrorWrapper>{children}</ErrorWrapper>
        </body>
      </TooltipProvider>
    </html>
  );
}
