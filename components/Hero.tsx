import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[min(85vh,800px)] scroll-mt-24 items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] blur-[2px] scale-[1.02]"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/78 via-slate-900/40 to-teal-950/15"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-slate-900/25 to-slate-950/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-teal-600/18"
        aria-hidden
      />

      <div className="relative z-10 w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-4xl text-left font-hero ml-2 sm:ml-4 md:ml-8 lg:ml-12">
          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl sm:leading-[1.06] lg:text-7xl lg:leading-[1.05]"
          >
            From Idea to Scalable Product
          </h1>
          <p className="mt-8 max-w-3xl text-xl font-normal leading-relaxed text-white/95 sm:text-2xl sm:leading-relaxed">
            We design and build modern web, mobile, and cloud solutions with a
            strong focus on performance, maintainability, and real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}
