import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import { HeroReveal } from "../client/hero-reveal";

const products = [
  {
    id: "ethiopian-bloom",
    name: "Ethiopian Bloom",
    description: "Floral aroma, citrus brightness, silky finish",
    price: "$24",
    image: "/assets/products/paket1.jpg",
    badge: "Best Seller",
    rating: "4.9",
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "Dark chocolate body, toasted nuts, bold crema",
    price: "$27",
    image: "/assets/products/paket2.jpg",
    badge: "New Roast",
    rating: "4.8",
  },
  {
    id: "house-signature",
    name: "House Signature",
    description: "Balanced sweetness, caramel notes, smooth finish",
    price: "$22",
    image: "/assets/products/paket3.jpg",
    badge: "Signature",
    rating: "4.9",
  },
  {
    id: "golden-harvest",
    name: "Golden Harvest",
    description: "Stone fruit, cocoa aroma, refined acidity",
    price: "$29",
    image: "/assets/products/paket4.jpg",
    badge: "Limited",
    rating: "5.0",
  },
];

export function FeaturedProductsSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <HeroReveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-white/50 bg-white/60 px-4 py-2 text-sm font-medium text-(--color-primary) backdrop-blur-xl">
                Featured selection
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-(--color-foreground) md:text-4xl lg:text-5xl">
                Crafted for everyday rituals and slow premium moments
              </h2>

              <p className="mt-4 max-w-xl text-base leading-8 text-[rgba(31,23,32,0.72)] md:text-lg">
                Explore our most loved coffees, roasted in small batches with
                refined flavor profiles and a modern specialty experience.
              </p>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.08}>
            <Link
              href="/shop"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/50 bg-white/60 px-6 text-sm font-medium text-(--color-foreground) backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/80"
            >
              View all products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </HeroReveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <HeroReveal key={product.id} delay={0.08 * (index + 1)} y={24}>
              <article className="glass-card group relative overflow-hidden rounded-4xl border border-white/45 p-3 shadow-[0_20px_70px_rgba(111,78,55,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(111,78,55,0.16)]">
                <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(234,219,199,0.7))]">
                  <div className="absolute left-4 top-4 z-10 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-medium text-(--color-foreground) backdrop-blur-md">
                    {product.badge}
                  </div>

                  <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-medium text-(--color-foreground) backdrop-blur-md">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {product.rating}
                  </div>

                  <div className="relative aspect-[4/4.6] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-contain object-center p-6 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-xl font-semibold text-(--color-foreground)">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[rgba(31,23,32,0.68)]">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-medium uppercase tracking-[0.18em] text-[rgba(31,23,32,0.48)]">
                        Price
                      </div>
                      <div className="mt-1 text-2xl font-semibold text-(--color-foreground)">
                        {product.price}
                      </div>
                    </div>

                    <Link
                      href={`/shop/${product.id}`}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-(--color-primary) px-5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(111,78,55,0.18)] transition-all duration-200 hover:bg-(--color-foreground)"
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Buy now
                    </Link>
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
