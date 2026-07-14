import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { HeroReveal } from "../client/hero-reveal";
import Image from "next/image";

const metrics = [
  { value: "4.9/5", label: "Customer rating" },
  { value: "12k+", label: "Monthly orders" },
  { value: "48h", label: "Fresh roast promise" },
];

const highlights = [
  "Single-origin beans",
  "Roasted in small batches",
  "Fast delivery, premium packaging",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="max-w-2xl">
            <HeroReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/65 px-4 py-2 text-sm font-medium text-(--color-primary) shadow-[0_10px_30px_rgba(111,78,55,0.08)] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-(--color-primary)" />
                Freshly roasted specialty coffee
              </span>
            </HeroReveal>

            <HeroReveal delay={0.08}>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-(--color-foreground) md:text-6xl lg:text-7xl">
                Premium coffee made for calm rituals and busy mornings
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[rgba(31,23,32,0.72)] md:text-lg">
                Discover refined blends, single-origin beans, and a modern
                coffee experience designed with warmth, speed, and quiet luxury
                in mind.
              </p>
            </HeroReveal>

            <HeroReveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/shop"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-(--color-primary) px-6 text-sm font-medium text-white shadow-[0_16px_40px_rgba(111,78,55,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-foreground)"
                >
                  Shop coffee
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/collections"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/50 bg-white/60 px-6 text-sm font-medium text-(--color-foreground) backdrop-blur-xl transition-colors duration-200 hover:bg-white/80"
                >
                  Explore collections
                </Link>
              </div>
            </HeroReveal>

            <HeroReveal delay={0.32}>
              <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="h-10 w-10 rounded-full border-2 border-white/70 bg-[linear-gradient(135deg,#caa47a,#6f4e37)]" />
                    <div className="h-10 w-10 rounded-full border-2 border-white/70 bg-[linear-gradient(135deg,#f0d8bd,#a67c52)]" />
                    <div className="h-10 w-10 rounded-full border-2 border-white/70 bg-[linear-gradient(135deg,#6b4a32,#2b1d18)]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-(--color-foreground)">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <p className="mt-1 text-sm text-[rgba(31,23,32,0.68)]">
                      Trusted by thousands of coffee lovers
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(111,78,55,0.14)] bg-white/55 px-3 py-1.5 text-xs font-medium text-[rgba(31,23,32,0.72)] backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </HeroReveal>
          </div>

          <HeroReveal delay={0.18} y={32}>
            <div className="relative mx-auto w-full max-w-170 lg:max-w-none">
              <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(214,185,140,0.38),transparent_36%),radial-gradient(circle_at_80%_30%,rgba(111,78,55,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.28))] blur-2xl" />

              <div className="glass-card relative rounded-[40px] border border-white/45 p-3 shadow-[0_24px_90px_rgba(111,78,55,0.14)] sm:p-4 md:p-5">
                <div className="relative aspect-4/5 min-h-105 overflow-hidden rounded-4xl sm:min-h-130 lg:min-h-160">
                  <Image
                    src="/assets/Banner/banner.webp"
                    alt="Premium coffee product"
                    fill
                    priority
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 42vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}
