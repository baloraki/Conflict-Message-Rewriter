"use client";

import { useEffect, useState } from "react";

/**
 * Renders an email address using three layers of anti-crawl obfuscation:
 *
 * 1. **No SSR** – `useEffect` only runs in the browser; static crawlers and
 *    search-engine bots see nothing in the initial HTML.
 * 2. **Base64** – the plain address never appears in source or the JS bundle.
 * 3. **CSS RTL** – the reversed string is written into the DOM; CSS
 *    `direction: rtl` + `unicode-bidi: bidi-override` flips it back visually so
 *    sighted users read the correct address, but regex scrapers see reversed text.
 *
 * To generate the `encoded` prop value:
 *   node -e "console.log(Buffer.from('you@example.com').toString('base64'))"
 */
interface ObfuscatedEmailProps {
  /** Base64-encoded email address. */
  encoded: string;
  className?: string;
}

export function ObfuscatedEmail({ encoded, className }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    try {
      setEmail(window.atob(encoded));
    } catch {
      // malformed base64 – stay hidden
    }
  }, [encoded]);

  if (!email) {
    // Render nothing until client-side hydration; crawlers see no address
    return null;
  }

  // Layer 3 – reversed chars in the DOM, CSS flips them visually
  const reversed = email.split("").reverse().join("");

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      style={{ direction: "rtl", unicodeBidi: "bidi-override" }}
    >
      {reversed}
    </a>
  );
}
