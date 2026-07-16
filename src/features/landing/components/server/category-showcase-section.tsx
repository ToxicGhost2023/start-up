import Link from "next/link";
import { ArrowUpLeft, Bean, Flame, Leaf, MoonStar, Waves } from "lucide-react";
import { HeroReveal } from "../client/hero-reveal";

const categories = [
  {
    title: "ترکیب ۳۰/۷۰",
    subtitle: "۳۰٪ عربیکا • ۷۰٪ روبوستا",
    description: "کرمای متراکم، بدن قوی و کافئین بیشتر برای عاشقان اسپرسو",
    href: "/shop?category=30-70-blend",
    icon: Flame,
    accent: "from-[rgba(111,78,55,0.18)] via-[rgba(214,185,140,0.1)] to-transparent",
    tags: ["اسپرسو", "قوی", "کافئین بالا"],
  },
  {
    title: "ترکیب ۴۰/۶۰",
    subtitle: "۴۰٪ عربیکا • ۶۰٪ روبوستا",
    description: "طعم متعادل با عمق شکلاتی، تلخی ملایم و بافت نرم‌تر",
    href: "/shop?category=40-60-blend",
    icon: Bean,
    accent: "from-[rgba(89,58,39,0.16)] via-[rgba(214,185,140,0.08)] to-transparent",
    tags: ["متعادل", "کلاسیک", "کرمای غنی"],
  },
  {
    title: "۱۰۰٪ عربیکا",
    subtitle: "دانه‌های تک‌خاستگاه و ویژه",
    description: "اسیدیته تمیز، رایحه گل‌دار و لایه‌های طعمی برای دم‌آوری روزانه",
    href: "/shop?category=arabica",
    icon: Leaf,
    accent: "from-[rgba(126,156,110,0.14)] via-[rgba(214,185,140,0.08)] to-transparent",
    tags: ["تخصصی", "خوش‌رایحه", "نرم"],
  },
  {
    title: "۱۰۰٪ روبوستا",
    subtitle: "قوی و پر بدن",
    description: "دانه‌های تیره، خاکی و کافئین‌دار برای موکاپات و عصاره‌گیری قوی",
    href: "/shop?category=robusta",
    icon: Waves,
    accent: "from-[rgba(84,63,47,0.18)] via-[rgba(214,185,140,0.07)] to-transparent",
    tags: ["پرجرأت", "بدن سنگین", "انرژی روزانه"],
  },
  {
    title: "قهوه طعم‌دار",
    subtitle: "پروفایل‌های دم‌آوری تزریق‌شده",
    description: "طعم‌های وانیل، فندق، کارامل و فصلی برای فنجانی شیرین‌تر",
    href: "/shop?category=flavored",
    icon: MoonStar,
    accent: "from-[rgba(164,124,92,0.16)] via-[rgba(214,185,140,0.08)] to-transparent",
    tags: ["شیرین", "خوش‌رایحه", "دم‌آوری راحت"],
  },
  {
    title: "بدون کافئین و روشن",
    subtitle: "محرک کم، طعم دلپذیر",
    description: "گزینه‌های ملایم برای لحظات عصرانه بدون از دست دادن شخصیت",
    href: "/shop?category=decaf-light-roast",
    icon: SparkIcon,
    accent: "from-[rgba(180,160,132,0.16)] via-[rgba(255,255,255,0.08)] to-transparent",
    tags: ["بدون کافئین", "روشن", "فنجان عصرانه"],
  },
];

function SparkIcon(props: React.ComponentProps<typeof MoonStar>) {
  return <MoonStar {...props} />;
}

export function CategoryShowcaseSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(214,185,140,0.14),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(111,78,55,0.08),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.22),transparent_40%)]" />

      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <HeroReveal>
            <span className="inline-flex items-center rounded-full border border-white/50 bg-white/60 px-4 py-2 text-sm font-medium text-(--color-primary) backdrop-blur-xl">
              پروفایل‌های قهوه
            </span>
          </HeroReveal>

          <HeroReveal delay={0.08}>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-4xl lg:text-5xl lg:leading-[1.1]">
              قهوه‌ خود را بر اساس طعم، بدن و سطح کافئین انتخاب کنید
            </h2>
          </HeroReveal>

          <HeroReveal delay={0.16}>
            <p className="mt-6 text-base leading-8 text-[rgba(31,23,32,0.72)] md:text-lg">
              از ترکیبات قوی روبوستا تا انتخاب‌های ظریف عربیکا، پروفایل‌هایی را
              کشف کنید که برای اسپرسو، موکاپات و دم‌آوری‌های آیینی طراحی شده‌اند.
            </p>
          </HeroReveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <HeroReveal key={category.title} delay={0.06 * (index + 1)} y={20}>
                <Link href={category.href} className="group block h-full">
                  <article className="glass-card relative flex h-full min-h-70 flex-col overflow-hidden rounded-4xl border border-white/45 bg-white/45 p-6 shadow-[0_16px_50px_rgba(111,78,55,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/70 hover:bg-white/55 hover:shadow-[0_28px_80px_rgba(111,78,55,0.12)]">
                    <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${category.accent}`} />
                    <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-white/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/55 bg-white/70 text-(--color-primary) transition-all duration-300 group-hover:scale-105 group-hover:bg-(--color-primary) group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/60 text-(--color-primary) transition-all duration-300 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5 group-hover:bg-(--color-primary) group-hover:text-white">
                        <ArrowUpLeft className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="relative mt-8">
                      <p className="text-xs font-medium uppercase tracking-[0.22em] text-[rgba(31,23,32,0.45)]">
                        {category.subtitle}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-(--color-foreground)">
                        {category.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[rgba(31,23,32,0.68)]">
                        {category.description}
                      </p>
                    </div>

                    <div className="relative mt-6 flex flex-wrap gap-2">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/55 bg-white/65 px-3 py-1.5 text-xs font-medium text-[rgba(31,23,32,0.72)] backdrop-blur-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Link>
              </HeroReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}