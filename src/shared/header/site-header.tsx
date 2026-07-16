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
        <div className="flex h-16 items-center justify-between rounded-[28px] border border-[rgba(111,78,55,0.14)] bg-[rgba(248,244,237,0.88)] px-3 shadow-[0_12px_30px_rgba(111,78,55,0.08),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-md md:h-18 md:px-4">

          {/* لوگو */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-(--color-foreground)"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#7a5840,#5f4331)] text-sm font-bold text-white shadow-[0_10px_24px_rgba(111,78,55,0.24)]">
              W
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-semibold tracking-[0.18em] uppercase">
                We Shop
              </span>
              <span className="hidden text-[11px] text-[rgba(31,23,32,0.56)] md:block">
                فروشگاه مدرن و انتخاب‌شده
              </span>
            </span>
          </Link>

          {/* منوی دسکتاپ */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[rgba(31,23,32,0.68)] transition-all duration-200 hover:bg-white/70 hover:text-(--color-foreground)"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* دکمه‌های دسکتاپ */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/signin"
              className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-[rgba(31,23,32,0.72)] transition-colors duration-200 hover:text-(--color-foreground)"
            >
              ورود
            </Link>
            <Link
              href="/shop"
              className="inline-flex h-11 items-center justify-center rounded-full bg-(--color-primary) px-5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(111,78,55,0.18)] transition-all duration-200 hover:-translate-y-px hover:bg-(--color-foreground)"
            >
              شروع خرید
            </Link>
          </div>

          {/* بخش موبایل و تبلت */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/shop"
              className="inline-flex h-10 items-center justify-center rounded-full bg-(--color-primary) px-4 text-sm font-medium text-white shadow-[0_10px_24px_rgba(111,78,55,0.16)] transition-colors duration-200 hover:bg-(--color-foreground)"
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