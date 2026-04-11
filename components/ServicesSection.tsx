const services = [
  {
    title: "AI Product Development",
    description:
      "Bitlyra helps companies design, build, and optimize AI-powered products, assistants, and workflows. Turn AI into real business impact with a strategy-first approach.",
  },
  {
    title: "Product Strategy Consulting",
    description:
      "The strongest products start with the right plan. Our strategy work helps teams clarify their vision, validate ideas early, and prioritize what will actually move the needle, before investing in full-scale development.",
  },
  {
    title: "UI/UX Design",
    description:
      "We turn functionality into intuitive, compelling user experiences. Through research, design systems, and thoughtful interactions, we help you shape products that are not only easy to use, but built to last.",
  },
  {
    title: "App & Software Development",
    description:
      "You've built something that works, now let's make it something people truly want to use. We develop scalable mobile, web, and custom software products with a clear focus on usability, performance, and long-term growth.",
  },
];

function ServiceRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li
      tabIndex={0}
      className="group relative isolate overflow-hidden rounded-xl border border-slate-200/80 bg-white/50 shadow-sm outline-none backdrop-blur-sm transition-shadow duration-300 hover:shadow-md focus-visible:ring-2 focus-visible:ring-teal-600/35 focus-visible:ring-offset-2 focus-within:shadow-md"
    >
      {/* Abstract dark layer — rises from bottom on hover / focus-within */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-x-0 bottom-0 top-0 origin-bottom translate-y-full bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 opacity-[0.98] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:translate-y-0 group-focus-within:translate-y-0 motion-reduce:translate-y-0 motion-reduce:opacity-0 motion-reduce:duration-300 motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
        />
        <div
          className="absolute inset-0 translate-y-full bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(20,184,166,0.16),transparent_55%)] opacity-0 transition-[transform,opacity] duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-0 motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
        />
        <div
          className="absolute inset-0 translate-y-full bg-[linear-gradient(110deg,rgba(255,255,255,0.06)_0%,transparent_42%,transparent_58%,rgba(255,255,255,0.04)_100%)] opacity-0 transition-[transform,opacity] duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:translate-y-0 motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
        />
      </div>

      <div className="relative z-10 grid gap-6 px-5 py-8 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-10 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <h3 className="font-hero text-left text-xl font-bold leading-snug text-[#1a1a1a] transition-colors duration-300 group-hover:text-white group-focus-within:text-white sm:text-2xl sm:leading-tight">
          {title}
        </h3>
        <p className="text-left text-base leading-[1.6] text-[#555555] transition-colors duration-300 group-hover:text-slate-200 group-focus-within:text-slate-200 sm:text-lg sm:leading-relaxed">
          {description}
        </p>
      </div>
    </li>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-slate-200/80 py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-100/90 via-[#f4fbfb] to-sky-50/40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="font-hero text-2xl font-bold tracking-tight text-[#1a1a1a] sm:text-3xl"
        >
          Services
        </h2>

        <ul className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5">
          {services.map((item) => (
            <ServiceRow key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
