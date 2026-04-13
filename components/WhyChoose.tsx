const cards = [
  {
    title: "Mature workflow",
    description:
      "We always handle every project with care and guarantee deep involvement of all team members. No stress, no mess! Artkai team plans thoroughly, develops efficiently, and delivers easily due to great communication, Agile methodology and personalized approach to each client.",
  },
  {
    title: "Top 5% UX & Engineering Talents",
    description:
      "Turn all your bold ideas and innovative vision into reality with our talented design and engineering experts. We wrap high-quality code into a trendy and user-friendly design to impress even the most demanding users.",
  },
  {
    title: "Accurate Estimations & Predictable Delivery",
    description:
      "Get no more unpleasant surprises, project delays or cost overruns! With our team everything always goes smoothly and according to plan. We set realistic timelines and provide accurate estimations, so that you can allocate all resources effectively and mitigate many development risks.",
  },
  {
    title: "Cross-Platform Expertise",
    description:
      "Build intuitive and feature-rich cross-platform solutions with Artkai to reach out to a wider audience and power up your business. We use advanced technologies and tools to deliver apps that provide native-like experience and work seamlessly across multiple devices and platforms.",
  },
] as const;

export function WhyChoose() {
  return (
    <section
      id="why"
      className="relative scroll-mt-24 overflow-hidden py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="why-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-surface-dark-rich"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/3 top-1/4 h-[min(80%,520px)] w-[55%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.12),transparent_65%)] blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="why-heading"
          className="max-w-3xl font-hero text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl"
        >
          Why Bitlyra?
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2">
          {cards.map((card) => (
            <li
              key={card.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-[1px] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
            >
              <h3 className="font-hero text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                {card.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
