export default function HomePage() {
  return (
    <section className="container-shell py-24 md:py-32">
      <div className="glass-card rounded-4xl border border-white/40 px-6 py-16 shadow-[0_20px_80px_rgba(111,78,55,0.12)] md:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-(--color-border) bg-white/60 px-4 py-1 text-sm font-medium text-(--color-primary) backdrop-blur-md">
            Premium Coffee Experience
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-(--color-foreground) md:text-6xl">
            Crafted coffee for slow moments and fast mornings
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(31,23,32,0.72)] md:text-lg">
            A modern coffee storefront with premium beans, warm aesthetics,
            smooth motion, and a high-performance experience built for
            conversion.
          </p>
        </div>
      </div>
    </section>
  );
}
