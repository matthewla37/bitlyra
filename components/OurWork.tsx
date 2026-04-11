import Image from "next/image";

export type WorkTile = {
  category: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  imageSrc: string;
  imageLabel: string;
};

const workTiles: WorkTile[] = [
  {
    category: "FinTech",
    title: "From spreadsheets to software teams rely on.",
    description:
      "Unified platforms with clear workflows, role-based access, and reporting leadership can trust.",
    stats: [
      { value: "62%", label: "Fewer support tickets" },
      { value: "4×", label: "Faster month-end close" },
    ],
    imageSrc: "/work/fintech.png",
    imageLabel: "FinTech project",
  },
  {
    category: "Health & Wellness",
    title: "Products that keep members engaged.",
    description:
      "Strategy, UX, and engineering for apps focused on habits, offline use, and measurable outcomes.",
    stats: [
      { value: "2.1×", label: "Weekly active use" },
      { value: "35%", label: "Retention lift" },
    ],
    imageSrc: "/work/health-wellness.png",
    imageLabel: "Health & wellness project",
  },
  {
    category: "B2B SaaS",
    title: "Onboarding that converts trials.",
    description:
      "Activation flows, empty states, and funnel instrumentation so product and growth iterate with confidence.",
    stats: [
      { value: "28%", label: "Trial conversions" },
      { value: "18%", label: "Faster time-to-value" },
    ],
    imageSrc: "/work/b2b-saas.png",
    imageLabel: "B2B SaaS project",
  },
  {
    category: "Logistics",
    title: "Dispatch and routing under peak load.",
    description:
      "Real-time maps, driver tools, and admin consoles that stay fast when volume spikes.",
    stats: [
      { value: "40%", label: "Less manual scheduling" },
      { value: "12%", label: "Fuel savings" },
    ],
    imageSrc: "/work/logistics.png",
    imageLabel: "Logistics project",
  },
];

function WorkSectionBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50/90 to-teal-50/20"
      aria-hidden
    />
  );
}

function WorkSectionTitle({ id }: { id: string }) {
  return (
    <h2
      id={id}
      className="font-hero text-2xl font-bold tracking-tight text-[#1a1a1a] sm:text-3xl lg:text-[2rem]"
    >
      Our Work
    </h2>
  );
}

function WorkTilePanel({ tile }: { tile: WorkTile }) {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-5 sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-teal-700">
        {tile.category}
      </p>
      <h3 className="font-hero text-lg font-bold leading-snug text-[#1a1a1a] sm:text-xl">
        {tile.title}
      </h3>
      <p className="text-sm leading-relaxed text-[#555]">{tile.description}</p>
      <dl className="mt-1 grid grid-cols-2 gap-3 border-t border-slate-200/90 pt-4">
        {tile.stats.map((s) => (
          <div key={s.label}>
            <dt className="font-hero text-base font-bold tabular-nums text-[#1a1a1a]">
              {s.value}
            </dt>
            <dd className="mt-0.5 text-[10px] leading-snug text-[#666] sm:text-xs">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function WorkHoverTile({ tile }: { tile: WorkTile }) {
  return (
    <article
      tabIndex={0}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-sm outline-none ring-slate-300 transition-shadow focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[16/11]">
        <Image
          src={tile.imageSrc}
          alt={tile.imageLabel}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover motion-safe:transition motion-safe:duration-500 motion-reduce:blur-none sm:group-hover:blur-md sm:group-focus-within:blur-md"
          priority={false}
        />

        {/* Dim over photo (below text panel) */}
        <div
          className="absolute inset-0 z-[1] bg-slate-900/0 motion-safe:transition motion-safe:duration-500 sm:group-hover:bg-slate-900/25 sm:group-focus-within:bg-slate-900/25 motion-reduce:bg-transparent"
          aria-hidden
        />

        {/* Desktop: text slides in from the right */}
        <div className="absolute inset-y-0 right-0 z-[2] hidden w-[min(100%,20rem)] translate-x-full border-l border-white/25 bg-white/95 shadow-[-12px_0_32px_rgba(15,23,42,0.12)] backdrop-blur-sm motion-safe:transition motion-safe:duration-500 motion-safe:ease-out sm:block sm:group-hover:translate-x-0 sm:group-focus-within:translate-x-0 motion-reduce:translate-x-0">
          <WorkTilePanel tile={tile} />
        </div>
      </div>

      {/* Mobile / coarse pointer: copy below image */}
      <div className="border-t border-slate-200/90 bg-white sm:hidden">
        <WorkTilePanel tile={tile} />
      </div>
    </article>
  );
}

export function OurWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-slate-200/80 py-16 sm:py-20"
    >
      <WorkSectionBackdrop />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <WorkSectionTitle id="work-heading" />
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {workTiles.map((tile) => (
            <li key={tile.category}>
              <WorkHoverTile tile={tile} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
