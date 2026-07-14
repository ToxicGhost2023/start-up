import { FeaturedProductsSection } from "@/features/landing/components/server/featured-products-section";
import { HeroSection } from "@/features/landing/components/server/hero-section";
import { WhyUsSection } from "@/features/landing/components/server/why-us-section";

export default function HomePage() {
  return (
    <section className="container-shell py-24 md:py-32">
      <HeroSection />
      <FeaturedProductsSection />
      <WhyUsSection />
    </section>
  );
}
