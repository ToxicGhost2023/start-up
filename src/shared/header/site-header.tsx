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
            bg-linear-to-r from-(--color-accent)/70 to-(--color-secondary)/70
            px-3
            shadow-[8px_8px_20px_rgba(111,78,55,0.15),-8px_-8px_20px_rgba(255,255,255,0.5)]
            backdrop-blur-xl
            border border-white/40
            md:h-18 md:px-4
          "
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[#1f1720]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-(--color-primary) to-(--color-accent) text-sm font-bold text-white shadow-[3px_3px_8px_rgba(111,78,55,0.2),-3px_-3px_8px_rgba(255,255,255,0.3)]">
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
                className="rounded-full px-4 py-2 text-sm font-medium text-[rgba(31,23,32,0.68)] transition-all duration-200 hover:bg-white/40 hover:text-[#1f1720] hover:shadow-[inset_3px_3px_6px_rgba(111,78,55,0.08),inset_-3px_-3px_6px_rgba(255,255,255,0.4)]"
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
              className="inline-flex h-11 items-center justify-center rounded-full bg-(--color-primary) px-5 text-sm font-medium text-white shadow-[4px_4px_12px_rgba(111,78,55,0.25),-4px_-4px_12px_rgba(255,255,255,0.15)] transition-all duration-200 hover:bg-[#1f1720] hover:shadow-[4px_4px_12px_rgba(31,23,32,0.3)]"
            >
              شروع خرید
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/shop"
              className="inline-flex h-10 items-center justify-center rounded-full bg-(--color-primary) px-4 text-sm font-medium text-white shadow-[4px_4px_12px_rgba(111,78,55,0.25),-4px_-4px_12px_rgba(255,255,255,0.15)] transition-colors duration-200 hover:bg-[#1f1720]"
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