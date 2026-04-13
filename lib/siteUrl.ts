const FALLBACK = "https://bitlyra.com";

/**
 * Canonical site origin for metadata, sitemap, and robots.
 * Empty or invalid `NEXT_PUBLIC_SITE_URL` falls back so builds never throw on `new URL()`.
 */
function resolveSiteUrl(): string {
  const raw =
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
      ? process.env.NEXT_PUBLIC_SITE_URL.trim().replace(/\/$/, "")
      : "";
  if (!raw) return FALLBACK;
  try {
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    return new URL(withProtocol).origin;
  } catch {
    return FALLBACK;
  }
}

export const siteUrl = resolveSiteUrl();
