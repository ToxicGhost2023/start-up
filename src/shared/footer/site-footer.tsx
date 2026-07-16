import Link from "next/link";

const footerLinks = {
  shop: [
    { label: "همه قهوه‌ها", href: "/shop" },
    { label: "پرفروش‌ترین‌ها", href: "/shop/best-sellers" },
    { label: "جدیدترین‌ها", href: "/shop/new" },
  ],
  company: [
    { label: "درباره ما", href: "/about" },
    { label: "مجله", href: "/journal" },
    { label: "تماس با ما", href: "/contact" },
  ],
  support: [
    { label: "حمل و نقل", href: "/shipping" },
    { label: "بازگشت کالا", href: "/returns" },
    { label: "سوالات متداول", href: "/faq" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="px-4 pb-6 pt-12 md:px-6 md:pt-20">
      <div className="container-shell">
        <div className="glass-card rounded-4xl border border-white/40 px-6 py-10 shadow-[0_20px_80px_rgba(111,78,55,0.10)] md:px-10 md:py-12">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
            <div className="max-w-sm">
              <div className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-(--color-primary) text-sm font-bold text-white shadow-[0_8px_24px_rgba(111,78,55,0.28)]">
                  W
                </span>
                <span className="text-base font-semibold tracking-[0.18em] uppercase text-(--color-foreground)">
                  We Shop
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-[rgba(31,23,32,0.72)]">
                قهوه ممتاز، طراحی ظریف و تجربه‌ای روان و مدرن برای مشتریان امروزی.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-(--color-foreground)">
                فروشگاه
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.shop.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[rgba(31,23,32,0.72)] transition-colors duration-200 hover:text-(--color-foreground)"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-(--color-foreground)">
                شرکت
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[rgba(31,23,32,0.72)] transition-colors duration-200 hover:text-(--color-foreground)"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-(--color-foreground)">
                پشتیبانی
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.support.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[rgba(31,23,32,0.72)] transition-colors duration-200 hover:text-(--color-foreground)"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-[rgba(111,78,55,0.12)] pt-6">
            <p className="text-sm text-[rgba(31,23,32,0.56)] text-center md:text-right">
              © ۲۰۲۶ We Shop. ساخته شده برای عاشقان قهوه.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}