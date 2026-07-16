import { Quote, Star } from "lucide-react";
import { HeroReveal } from "../client/hero-reveal";

const testimonials = [
  {
    name: "امیرحسین",
    role: "عاشق اسپرسو",
    quote: "ترکیب ۴۰/۶۰ دقیقاً کرما و بدنی را که هر روز دنبالش هستم به من داد. قوی، نرم و یکدست.",
    highlight: "ترکیب ۴۰/۶۰",
  },
  {
    name: "نیلوفر",
    role: "دوستدار قهوه تخصصی",
    quote: "معمولاً به دنبال فنجان‌های سبک‌تر و تمیزتر هستم و پروفایل عربیکا ظریف، خوش‌رایحه و لایه‌لایه بود.",
    highlight: "۱۰۰٪ عربیکا",
  },
  {
    name: "رضا",
    role: "دم‌آوری روزانه با موکاپات",
    quote: "من چیزی پرجرأت برای دم‌آوری روزانه می‌خواستم و انتخاب روبوستا طعم عمیق و انرژی واقعی را به من داد.",
    highlight: "پروفایل روبوستا",
  },
];

function Rating() {
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(214,185,140,0.14),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(111,78,55,0.08),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.18),transparent_40%)]" />

      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <HeroReveal>
            <span className="inline-flex items-center rounded-full border border-white/50 bg-white/60 px-4 py-2 text-sm font-medium text-(--color-primary) backdrop-blur-xl">
              نظرات مشتریان
            </span>
          </HeroReveal>

          <HeroReveal delay={0.08}>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-4xl lg:text-5xl lg:leading-[1.1]">
              در مراسم روزانه دم می‌شود
            </h2>
          </HeroReveal>

          <HeroReveal delay={0.16}>
            <p className="mt-6 text-base leading-8 text-[rgba(31,23,32,0.72)] md:text-lg">
              چند کلمه از مشتریانی که پروفایل مورد نظر، تعادل طعم و ریتم روزانه قهوه خود را یافته‌اند.
            </p>
          </HeroReveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <HeroReveal key={item.name} delay={0.06 * (index + 1)} y={20}>
              <article className="glass-card relative flex h-full min-h-75 flex-col overflow-hidden rounded-4xl border border-white/45 bg-white/45 p-6 shadow-[0_16px_50px_rgba(111,78,55,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/55 hover:shadow-[0_24px_70px_rgba(111,78,55,0.1)]">
                <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-white/20 blur-3xl" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/55 bg-white/70 text-(--color-primary)">
                    <Quote className="h-5 w-5" />
                  </div>

                  <span className="rounded-full border border-white/55 bg-white/65 px-3 py-1.5 text-xs font-medium text-[rgba(31,23,32,0.72)] backdrop-blur-lg">
                    {item.highlight}
                  </span>
                </div>

                <div className="relative mt-8">
                  <Rating />

                  <p className="mt-5 text-base leading-8 text-[rgba(31,23,32,0.78)]">
                    “{item.quote}”
                  </p>
                </div>

                <div className="relative mt-auto pt-8">
                  <div className="h-px w-full bg-[linear-gradient(90deg,rgba(111,78,55,0.16),rgba(214,185,140,0.3),transparent)]" />

                  <div className="mt-5">
                    <p className="text-base font-semibold text-(--color-foreground)">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-[rgba(31,23,32,0.58)]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            </HeroReveal>
          ))}
        </div>
      </div>
    </section>
  );
}