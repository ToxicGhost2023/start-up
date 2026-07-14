import { SiteFooter } from "@/shared/footer/site-footer";
import { SiteHeader } from "@/shared/header/site-header";
import type { ReactNode } from "react";

type StoreLayoutProps = {
  children: ReactNode;
};

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(214,185,140,0.22),transparent_30%),linear-gradient(180deg,#f8f4ed_0%,#f3eee6_100%)]" />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
