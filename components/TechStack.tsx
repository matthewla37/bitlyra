import Image from "next/image";

/**
 * Technology logos (Webflow CDN — https://www.voidweb.eu/). Consider self-hosting for production.
 */
const VOIDWEB_ASSET =
  "https://cdn.prod.website-files.com/66a1ede9983bf014f570781a" as const;

type TechItem = { name: string; src: string };

const categories: { title: string; items: TechItem[] }[] = [
  {
    title: "Front-End",
    items: [
      {
        name: "JavaScript",
        src: `${VOIDWEB_ASSET}/687736f035954b6d9920609a_image%2079.png`,
      },
      {
        name: "TypeScript",
        src: `${VOIDWEB_ASSET}/687736f0e62694503ff1c161_image%2080.png`,
      },
      {
        name: "Vue.js",
        src: `${VOIDWEB_ASSET}/687736f1ac361105eed87fc0_image%2084.png`,
      },
      {
        name: "React.js",
        src: `${VOIDWEB_ASSET}/687736f04578cce4f503f2cd_image%2083.png`,
      },
      {
        name: "Next.js",
        src: `${VOIDWEB_ASSET}/687736f09d2bb77e3944fe20_image%2086.png`,
      },
      {
        name: "TailwindCSS",
        src: `${VOIDWEB_ASSET}/687736f48f5d69d9658a191b_image%2091.png`,
      },
      {
        name: "Storybook",
        src: `${VOIDWEB_ASSET}/687736f3697af41d4e3d37be_image%2092.png`,
      },
      {
        name: "Vite Cypress",
        src: `${VOIDWEB_ASSET}/68773761c564c48f16b829b3_image%2093.png`,
      },
    ],
  },
  {
    title: "Back-End",
    items: [
      {
        name: "Laravel",
        src: `${VOIDWEB_ASSET}/687737321cb6a12b73845964_image%2094.png`,
      },
      {
        name: "Node.js",
        src: `${VOIDWEB_ASSET}/68773732dfaa52fb56871c2d_image%2095.png`,
      },
      {
        name: "Express.js",
        src: `${VOIDWEB_ASSET}/6877373273e2844838cb12b6_image%2096.png`,
      },
      {
        name: "C#",
        src: "/tech/csharp.png",
      },
      {
        name: ".NET",
        src: "/tech/dotnet.png",
      },
      {
        name: "Python",
        src: "/tech/python.png",
      },
      {
        name: "Django",
        src: "/tech/django.png",
      },
      {
        name: "MySQL",
        src: `${VOIDWEB_ASSET}/68773732b9464c332ca90eea_image%2099.png`,
      },
      {
        name: "PostgreSQL",
        src: `${VOIDWEB_ASSET}/68773732f4fb7c0cfb8ab99a_image%20100.png`,
      },
      {
        name: "MongoDB",
        src: `${VOIDWEB_ASSET}/68773732acafc02fea0c8337_image%20101.png`,
      },
    ],
  },
];

const allTechnologies: TechItem[] = categories.flatMap((c) => c.items);

function TechCell({ name, src }: TechItem) {
  return (
    <div className="flex w-full max-w-[6.5rem] flex-col items-center justify-start gap-2 justify-self-center text-center sm:max-w-[7rem]">
      <div className="relative flex h-[4rem] w-[4rem] shrink-0 items-center justify-center sm:h-[4.25rem] sm:w-[4.25rem]">
        <Image
          src={src}
          alt={`${name} logo`}
          width={56}
          height={56}
          className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          unoptimized
        />
      </div>
      <span className="max-w-[7.5rem] text-xs leading-snug text-white/90 sm:max-w-[8rem] sm:text-sm">
        {name}
      </span>
    </div>
  );
}

export function TechStack() {
  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-teal-950/40 py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-surface-dark"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(45,212,191,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.06)_1px,transparent_1px)] bg-[size:40px_40px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[min(70%,480px)] w-[90%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.14),transparent_55%)] blur-2xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="tech-heading"
          className="font-hero text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Technologies
        </h2>

        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-950/90 to-teal-950/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:mt-10 sm:p-7 lg:p-8">
          <div className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-x-5 sm:gap-y-8 md:grid-cols-5 lg:grid-cols-6 lg:gap-x-6">
            {allTechnologies.map((item) => (
              <TechCell key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
