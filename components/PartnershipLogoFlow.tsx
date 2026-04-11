/** Partner marks — files in /public/partners (01–16.png). */
const PARTNER_LOGOS = Array.from(
  { length: 16 },
  (_, i) => `/partners/${String(i + 1).padStart(2, "0")}.png`,
);

/** Square slots; base width capped on small viewports. */
const LOGO_SLOT =
  "flex aspect-square w-[min(calc(100vw-3rem),12rem)] shrink-0 items-center justify-center p-3 sm:w-[14rem] sm:max-w-none sm:p-4";

function PartnerMark({ src }: { src: string }) {
  return (
    <li className={LOGO_SLOT}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="block h-full w-full object-contain object-center opacity-90 grayscale"
        loading="lazy"
        decoding="async"
      />
    </li>
  );
}

/**
 * Marquee when motion is allowed; centered static grid when prefers-reduced-motion
 * (avoids a broken double-wide strip with animation disabled).
 */
export function PartnershipLogoFlow() {
  return (
    <>
      <div
        className="relative mt-5 block w-full overflow-hidden motion-reduce:hidden sm:mt-6 md:mt-7"
        aria-hidden
      >
        <div className="partnership-logo-flow flex w-max items-center py-0 sm:py-0.5">
          {[0, 1].map((dup) => (
            <ul
              key={dup}
              className="flex shrink-0 items-center gap-10 pr-10 sm:gap-12 sm:pr-12 md:gap-14 md:pr-14"
            >
              {PARTNER_LOGOS.map((src, i) => (
                <PartnerMark key={`${dup}-${i}`} src={src} />
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div
        className="relative mt-5 hidden w-full justify-center motion-reduce:flex sm:mt-6 md:mt-7"
        aria-hidden
      >
        <ul className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-7">
          {PARTNER_LOGOS.map((src, i) => (
            <PartnerMark key={`static-${i}`} src={src} />
          ))}
        </ul>
      </div>
    </>
  );
}
