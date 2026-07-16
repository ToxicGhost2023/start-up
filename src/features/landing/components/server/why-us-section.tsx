import { Award, Compass, Sparkles, Truck } from "lucide-react";
import { HeroReveal } from "../client/hero-reveal";

const features = [
  {
    icon: Compass,
    title: "تامین تک‌خاستگاه",
    description: "ما مستقیماً با مزارع خانوادگی از کلمبیا تا اتیوپی همکاری می‌کنیم تا تجارت عادلانه و کنترل کیفیت استثنایی را تضمین کنیم.",
  },
  {
    icon: Award,
    title: "بو دادن در تیراژ محدود",
    description: "هر بچ با منحنی‌های دمایی دقیق بو داده می‌شود تا نت‌های طعمی و رایحه‌های طبیعی هر دانه برجسته شود.",
  },
  {
    icon: Truck,
    title: "بو داده و ارسال امروز",
    description: "تاریخ بو دادن روی هر کیسه درج می‌شود. سفارش شما در کیسه‌های پر از نیتروژن بسته‌بندی و ظرف ۲۴ ساعت ارسال می‌شود.",
  },
  {
    icon: Sparkles,
    title: "مراسم پایدار",
    description: "از کیسه‌های زیست‌تخریب‌پذیر تا ارسال خنثی کربنی، مراسم صبحگاهی شما تأثیری مثبت بر زمین می‌گذارد.",
  },
];

export function WhyUsSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_80%,rgba(214,185,140,0.18),transparent_50%),radial-gradient(circle_at_20%_20%,rgba(111,78,55,0.06),transparent_40%)]" />

      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-20">
          <div className="flex flex-col">
            <HeroReveal>
              <div>
                <span className="inline-flex items-center rounded-full border border-white/50 bg-white/60 px-4 py-2 text-sm font-medium text-(--color-primary) backdrop-blur-xl">
                  تفاوت بوخانه
                </span>
              </div>
            </HeroReveal>

            <HeroReveal delay={0.08}>
              <div>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-4xl lg:text-5xl lg:leading-[1.1]">
                  استانداردهای بی‌نقص از خاک تا فنجان
                </h2>
              </div>
            </HeroReveal>

            <HeroReveal delay={0.16}>
              <div>
                <p className="mt-6 text-base leading-8 text-[rgba(31,23,32,0.72)] md:text-lg">
                  ما معتقدیم قهوه چیزی فراتر از کافئین است—یک مراسم آرام صبحگاهی.
                  به همین دلیل هر مرحله را با شفافیت، اشتیاق و دقت علمی مدیریت می‌کنیم.
                </p>
              </div>
            </HeroReveal>

            <HeroReveal delay={0.24}>
              <div className="mt-8 rounded-[28px] border border-white/45 bg-white/40 p-6 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--color-primary) text-white shadow-[0_10px_25px_rgba(111,78,55,0.2)]">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-(--color-foreground)">
                      تعهد کیفیت ما
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-[rgba(31,23,32,0.65)]">
                      اگر بو دادن شما عالی نیست، بدون سوال تعویض می‌کنیم.
                    </p>
                  </div>
                </div>
              </div>
            </HeroReveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <HeroReveal key={feature.title} delay={0.08 * (index + 1)} y={20}>
                  <div className="h-full">
                    <article className="glass-card group flex h-full flex-col rounded-4xl border border-white/45 p-6 shadow-[0_16px_50px_rgba(111,78,55,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:shadow-[0_24px_70px_rgba(111,78,55,0.12)]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/55 bg-white/70 text-(--color-primary) transition-all duration-300 group-hover:scale-105 group-hover:bg-(--color-primary) group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-6 text-xl font-semibold text-(--color-foreground)">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[rgba(31,23,32,0.68)]">
                        {feature.description}
                      </p>
                    </article>
                  </div>
                </HeroReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}