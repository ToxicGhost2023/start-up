import { CategoryShowcaseSection } from "@/features/landing/components/server/category-showcase-section";
import { FeaturedProductsSection } from "@/features/landing/components/server/featured-products-section";
import { FinalCtaSection } from "@/features/landing/components/server/final-cta-section";
import { HeroSection } from "@/features/landing/components/server/hero-section";
import { TestimonialsSection } from "@/features/landing/components/server/testimonials-section";
import { WhyUsSection } from "@/features/landing/components/server/why-us-section";

export default function HomePage() {
  return (
    <main className="landing-shell">
      <HeroSection />
      <WhyUsSection />
      <FeaturedProductsSection />
      <CategoryShowcaseSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </main>
  );
}
