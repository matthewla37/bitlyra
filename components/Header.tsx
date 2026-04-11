"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

/** Order matches `app/page.tsx`: Partnership → Why → Services → Tech → Work; contact is CTA. */
const navItems = [
  { href: "#trust", label: "Partnership" },
  { href: "#why", label: "Why Bitlyra" },
  { href: "#services", label: "Services" },
  { href: "#tech", label: "Technologies" },
  { href: "#work", label: "Work" },
] as const;

const navLinkClass =
  "inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white";

/** When #below-hero crosses above this, slightly stronger header chrome */
const HEADER_SOLID_TOP_PX = 64;

function readSolidHeader() {
  const mark = document.getElementById("below-hero");
  if (!mark) return window.scrollY > 120;
  return mark.getBoundingClientRect().top < HEADER_SOLID_TOP_PX;
}

export function Header() {
  const [solid, setSolid] = useState(false);
  const [logoHomeAnim, setLogoHomeAnim] = useState(false);

  useLayoutEffect(() => {
    const update = () => setSolid(readSolidHeader());
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setLogoHomeAnim(true);
    window.setTimeout(() => setLogoHomeAnim(false), 600);
  }

  return (
    <header
      className={
        solid
          ? "sticky top-0 z-50 border-b border-zinc-700/90 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] backdrop-blur-md transition-[border-color,box-shadow] duration-300"
          : "sticky top-0 z-50 border-b border-white/10 bg-gradient-to-b from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-md transition-[border-color,box-shadow] duration-300"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 font-hero sm:px-6 lg:gap-6 lg:px-8">
        <Link
          href="#hero"
          onClick={handleLogoClick}
          className="flex min-w-0 shrink-0 items-center gap-2 hover:opacity-90 sm:gap-3"
          aria-label="Bitlyra — back to top"
        >
          <span
            className={
              logoHomeAnim
                ? "inline-block origin-center motion-safe:animate-logo-home motion-reduce:animate-none"
                : "inline-block origin-center"
            }
          >
            <Image
              src="/bitlyra_logo_square_v3.svg"
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 object-contain shadow-sm drop-shadow-sm"
              priority
              unoptimized
              aria-hidden
            />
          </span>
          <div className="leading-tight">
            <span className="block text-xl font-semibold lowercase tracking-tight text-white">
              bitlyra
            </span>
            <span className="hidden text-[11px] text-zinc-400 sm:block">
              Your ideas, our innovations
            </span>
          </div>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 lg:gap-4">
          <nav
            className="hidden min-w-0 max-w-[calc(100vw-12rem)] flex-1 justify-end rounded-full border border-white/10 bg-slate-900/60 px-1 py-1 shadow-inner shadow-black/20 backdrop-blur-sm lg:flex lg:max-w-none lg:flex-none lg:flex-row lg:flex-nowrap lg:items-center lg:gap-0.5 lg:overflow-x-auto lg:[scrollbar-width:none] [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0"
            aria-label="Main"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="relative shrink-0 rounded-full bg-teal-950/50 p-1 ring-1 ring-teal-700/40">
            <div
              className="pointer-events-none absolute inset-0 rounded-full bg-teal-500/15 blur-md"
              aria-hidden
            />
            <Link
              href="#contact"
              className="relative inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 px-3 py-2.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-md transition hover:from-teal-500 hover:to-cyan-500 sm:px-5 sm:text-xs"
            >
              Get in touch
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-teal-600"
                  aria-hidden
                >
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <nav
        className="flex gap-1 overflow-x-auto border-t border-white/10 bg-slate-950/80 px-4 py-2 font-hero backdrop-blur-sm lg:hidden"
        aria-label="Main mobile"
      >
        {navItems.map((item) => (
          <Link
            key={`m-${item.href}`}
            href={item.href}
            className="shrink-0 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-white/10"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
