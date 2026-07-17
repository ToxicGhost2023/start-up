import Link from "next/link";
import { MobileNav } from "@/shared/header/mobile-nav";

const navItems = [
  { label: "خانه", href: "/" },
  { label: "فروشگاه", href: "/shop" },
  { label: "کالکشن‌ها", href: "/collections" },
  { label: "درباره ما", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="container-shell">
        <div
          className="
            relative flex h-16 items-center justify-between
            rounded-[999px]
            bg-[linear-gradient(180deg,#faf8f3_0%,#f6f4ee_48%,#ebe7df_100%)]
            px-3
            shadow-[0_16px_24px_-20px_rgba(80,58,43,0.45)]
            md:h-18 md:px-4
          "
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[#1f1720]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(145deg,#7a5840,#5f4331)] text-sm font-bold text-white">
              W
            </span>

            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-semibold uppercase tracking-[0.18em]">
                We Shop
              </span>

              <span className="hidden text-[11px] text-[rgba(31,23,32,0.56)] md:block">
                فروشگاه مدرن و انتخاب‌شده
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[rgba(31,23,32,0.68)] transition-colors duration-200 hover:bg-white/50 hover:text-[#1f1720]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/login"
              className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-[rgba(31,23,32,0.72)] transition-colors hover:text-[#1f1720]"
            >
              ورود
            </Link>

            <Link
              href="/shop"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#6f4e37] px-5 text-sm font-medium text-white transition-colors hover:bg-[#1f1720]"
            >
              شروع خرید
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/shop"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#6f4e37] px-4 text-sm font-medium text-white transition-colors hover:bg-[#1f1720]"
            >
              خرید
            </Link>

            <MobileNav navItems={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
