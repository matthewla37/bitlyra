import { ContactForm } from "@/components/ContactForm";

const LINKEDIN_URL = "https://www.linkedin.com/company/bitlyra/";

function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-teal-900/30 bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950 text-zinc-300"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(45,212,191,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8">
        <section aria-labelledby="contact-heading">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div>
              <h2
                id="contact-heading"
                className="font-hero text-2xl font-bold text-white sm:text-3xl"
              >
                Let&apos;s talk
              </h2>
              <p className="mt-4 max-w-xl text-zinc-400">
                Tell us about your product, timeline, and constraints.
                We&apos;ll respond with next steps.
              </p>
              <p className="mt-6 text-sm text-zinc-400">
                Email:{" "}
                <a
                  className="font-medium text-teal-400 transition hover:text-teal-300"
                  href="mailto:hello@bitlyra.com"
                >
                  hello@bitlyra.com
                </a>
              </p>
              <div className="mt-5">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-[#0A66C2] transition hover:text-[#378fe9]"
                  aria-label="Bitlyra on LinkedIn"
                >
                  <LinkedInLogo className="h-8 w-8 sm:h-9 sm:w-9" />
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <p className="mt-14 text-center text-sm text-zinc-500 sm:mt-16">
          © 2026 Bitlyra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
