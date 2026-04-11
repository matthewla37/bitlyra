"use client";

export function ContactForm() {
  return (
    <form
      className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-zinc-300"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-zinc-600/80 bg-slate-950/80 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-zinc-300"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-zinc-600/80 bg-slate-950/80 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-zinc-300"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            className="mt-1 w-full rounded-lg border border-zinc-600/80 bg-slate-950/80 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-700 py-3 text-sm font-semibold text-white shadow-md transition hover:from-teal-500 hover:via-teal-600 hover:to-cyan-600"
      >
        Send message
      </button>
    </form>
  );
}
