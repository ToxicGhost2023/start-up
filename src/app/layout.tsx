import type { Metadata } from "next";

import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";



export const metadata: Metadata = {
  title: "قهوه تخصصی | تجربه‌ای مدرن",
  description: "قهوه‌ای ممتاز برای صبح‌های آرام و روزهای پرهیجان",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"

    >
      <body className="min-h-full flex flex-col">
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
