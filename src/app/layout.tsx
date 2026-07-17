import type { Metadata } from "next";

import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";



export const metadata: Metadata = {
  title: "قهوه تخصصی | تجربه‌ای مدرن",
  description: "قهوه‌ای ممتاز برای صبح‌های آرام و روزهای پرهیجان",
};
export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"

    >
      <body className="min-h-full flex flex-col">
        <LenisProvider />
        {children}
        {modal}
      </body>
    </html>
  );
}
