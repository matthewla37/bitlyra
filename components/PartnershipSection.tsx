import { PartnershipLogoFlow } from "@/components/PartnershipLogoFlow";

/**
 * Long-term partnership band styled like Pell Software’s homepage block:
 * neutral surface, strong centered headline, partner logo strip below.
 * @see https://www.pellsoftware.com/
 */
export function PartnershipSection() {
  return (
    <section
      id="trust"
      aria-labelledby="partnership-heading"
      className="scroll-mt-32 border-y border-zinc-200 bg-white py-7 sm:py-9 md:py-10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="partnership-heading"
          className="font-hero text-balance text-center text-3xl font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-4xl sm:leading-[1.12] md:text-5xl md:leading-[1.1] lg:text-[3.25rem] lg:leading-[1.08]"
        >
          Long-Term Partnership Focused
        </h2>
      </div>
      <PartnershipLogoFlow />
    </section>
  );
}
