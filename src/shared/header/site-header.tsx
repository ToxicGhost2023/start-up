import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="container-shell">
        <div className="glass-card flex h-16 items-center justify-between rounded-full border border-white/40 px-4 shadow-[0_10px_40px_rgba(111,78,55,0.10)] md:h-18 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[15px] font-semibold tracking-[0.18em] text-(--color-foreground) uppercase"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-primary) text-sm font-bold text-white shadow-[0_8px_24px_rgba(111,78,55,0.28)]">
              W
            </span>
            <span>We Shop</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[rgba(31,23,32,0.72)] transition-colors duration-200 hover:bg-white/60 hover:text-(--color-foreground)"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-[rgba(31,23,32,0.72)] transition-colors duration-200 hover:text-(--color-foreground) md:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="/shop"
              className="inline-flex h-10 items-center justify-center rounded-full bg-(--color-primary) px-5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(111,78,55,0.22)] transition-all duration-200 hover:-translate-y-px hover:bg-(--color-foreground)"
            >
              Order now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
