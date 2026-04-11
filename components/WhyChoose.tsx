const bullets = [
  "Senior engineers integrated quickly",
  "End-to-end product delivery",
  "Quality and maintainability first",
  "Timezone-friendly collaboration",
];

const stats = [
  { value: "+300", label: "Successful projects", color: "#e8dcc8" },
  { value: "+5", label: "Countries", color: "#2dd4bf" },
  { value: "+50", label: "Discovery engagements", color: "#c4b5fd" },
  { value: "4.8/5", label: "Satisfaction", color: "#6ee7b7" },
];

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
          Why teams choose Bitlyra
        </h2>
        <ul className="mt-8 max-w-2xl space-y-3 text-sm text-white/70 sm:text-base">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-14 rounded-lg border border-white/15 sm:mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={[
                  "px-5 py-8 text-left sm:px-8 sm:py-10 lg:py-12",
                  i % 2 === 0 ? "border-r border-white/10" : "",
                  i < 2 ? "border-b border-white/10" : "",
                  "lg:border-b-0",
                  i < 3 ? "lg:border-r lg:border-white/10" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <p
                  className="font-hero text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-white/50 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
