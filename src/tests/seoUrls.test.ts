import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { metadata as rootMetadata } from "@/app/page";
import { generateMetadata as generateLocaleLayoutMetadata } from "@/app/[lang]/layout";
import { generateMetadata as generateLocaleHomeMetadata } from "@/app/[lang]/page";
import { LOCALES } from "@/i18n/config";
import { SITE_URL, absoluteUrl, localizedAlternates } from "@/lib/site";

function asString(value: string | URL | null | undefined): string {
  if (!value) return "";
  return typeof value === "string" ? value : value.toString();
}

describe("SEO URL configuration", () => {
  it("uses https://dontsend.org as default site URL", () => {
    expect(SITE_URL).toBe("https://dontsend.org");
  });

  it("builds absolute localized canonical URLs", async () => {
    for (const locale of LOCALES) {
      const metadata = await generateLocaleHomeMetadata({
        params: Promise.resolve({ lang: locale }),
      });
      expect(asString(metadata.alternates?.canonical)).toBe(absoluteUrl(`/${locale}`));
    }
  });

  it("builds complete hreflang map with x-default", async () => {
    const metadata = await generateLocaleLayoutMetadata({
      params: Promise.resolve({ lang: "tr" }),
    });
    const languages = metadata.alternates?.languages;

    expect(languages).toEqual(localizedAlternates());
    expect(languages?.["x-default"]).toBe(absoluteUrl("/en"));
  });

  it("uses absolute canonical for root metadata", () => {
    expect(asString(rootMetadata.alternates?.canonical)).toBe(absoluteUrl("/"));
  });

  it("has no burnafterchat.app in SEO helpers or sitemap config", async () => {
    const trMetadata = await generateLocaleLayoutMetadata({
      params: Promise.resolve({ lang: "tr" }),
    });
    const sitemapConfigFile = readFileSync(
      resolve(process.cwd(), "next-sitemap.config.js"),
      "utf8"
    );

    const seoValues = [
      SITE_URL,
      absoluteUrl("/tr"),
      asString(trMetadata.alternates?.canonical),
      asString(trMetadata.openGraph?.url),
      sitemapConfigFile,
    ];

    for (const value of seoValues) {
      expect(String(value)).not.toContain("burnafterchat.app");
    }
    expect(sitemapConfigFile).toContain("https://dontsend.org");
  });
});
