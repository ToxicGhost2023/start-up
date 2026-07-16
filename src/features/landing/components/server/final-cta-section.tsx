import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { HeroReveal } from "../client/hero-reveal";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(214,185,140,0.18),transparent_50%),radial-gradient(circle_at_20%_80%,rgba(111,78,55,0.06),transparent_40%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-100 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,rgba(214,185,140,0.08)_50%,transparent_100%)] blur-3xl" />

      <div className="container-shell">
        <div className="glass-card relative overflow-hidden rounded-[40px] border border-white/50 bg-white/40 px-6 py-16 text-center shadow-[0_32px_80px_rgba(111,78,55,0.08)] backdrop-blur-2xl md:px-12 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[rgba(214,185,140,0.12)] via-transparent to-[rgba(111,78,55,0.08)]" />

          <div className="relative mx-auto max-w-2xl">
            <HeroReveal y={15}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--color-primary) backdrop-blur-xl">
                <ShoppingBag className="h-3.5 w-3.5" />
                تازه بو داده شده
              </span>
            </HeroReveal>

            <HeroReveal delay={0.08} y={20}>
              <h2 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-5xl lg:text-6xl lg:leading-[1.15]">
                آماده ارتقاء <br />
                مراسم روزانه قهوه خود هستید؟
              </h2>
            </HeroReveal>

            <HeroReveal delay={0.16} y={20}>
              <p className="mt-6 text-base leading-8 text-[rgba(31,23,32,0.72)] md:text-lg">
                پروفایل‌های انتخاب‌شده ما را کشف کنید. ارسال سریع، دانه‌های تازه
                بو داده، بسته‌بندی شده برای حفظ عطر و طعم طبیعی.
              </p>
            </HeroReveal>

            <HeroReveal delay={0.24} y={15}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/shop"
                  className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-(--color-primary) px-8 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(111,78,55,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-(--color-primary-hover) hover:shadow-[0_16px_40px_rgba(111,78,55,0.35)] sm:w-auto"
                >
                  <span>مشاهده فروشگاه</span>
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/50 px-8 text-sm font-semibold text-(--color-foreground) shadow-[0_8px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:scale-[1.02] hover:border-white/90 hover:bg-white/80 sm:w-auto"
                >
                  تهیه سفارشی
                </Link>
              </div>
            </HeroReveal>
          </div>
        </div>
      </div>
    </section>
  );
}