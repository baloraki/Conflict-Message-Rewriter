import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { absoluteUrl, localizedAlternates, SITE_URL } from "@/lib/site";

describe("SEO URL configuration", () => {
  it("uses dontsend.org as default site URL", () => {
    expect(SITE_URL).toBe("https://dontsend.org");
  });

  it("builds absolute canonical URLs for locale homes", () => {
    expect(absoluteUrl("/tr")).toBe("https://dontsend.org/tr");
    expect(absoluteUrl("/de")).toBe("https://dontsend.org/de");
    expect(absoluteUrl("/en")).toBe("https://dontsend.org/en");
    expect(absoluteUrl("/es")).toBe("https://dontsend.org/es");
  });

  it("builds complete hreflang map with x-default", () => {
    expect(localizedAlternates()).toEqual({
      en: "https://dontsend.org/en",
      de: "https://dontsend.org/de",
      tr: "https://dontsend.org/tr",
      es: "https://dontsend.org/es",
      "x-default": "https://dontsend.org/en",
    });
  });

  it("has no burnafterchat.app references in layouts, pages, or sitemap config", () => {
    const rootLayoutFile = readFileSync(
      resolve(process.cwd(), "src/app/layout.tsx"),
      "utf8"
    );
    const localeLayoutFile = readFileSync(
      resolve(process.cwd(), "src/app/[lang]/layout.tsx"),
      "utf8"
    );
    const localeHomeFile = readFileSync(
      resolve(process.cwd(), "src/app/[lang]/page.tsx"),
      "utf8"
    );
    const sitemapConfigFile = readFileSync(
      resolve(process.cwd(), "next-sitemap.config.js"),
      "utf8"
    );

    for (const value of [
      rootLayoutFile,
      localeLayoutFile,
      localeHomeFile,
      sitemapConfigFile,
      SITE_URL,
    ]) {
      expect(value).not.toContain("burnafterchat.app");
    }

    expect(rootLayoutFile).toContain("canonical: absoluteUrl(\"/\")");
    expect(localeLayoutFile).toContain("canonical: absoluteUrl(`/${locale}`)");
    expect(localeHomeFile).toContain("canonical: absoluteUrl(`/${locale}`)");
    expect(sitemapConfigFile).toContain("https://dontsend.org");
  });
});
