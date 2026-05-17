import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

interface BuildMetadataOptions {
  title: string;
  description: string;
  index?: boolean;
  canonicalPath?: string;
  openGraphType?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  index = true,
  canonicalPath,
  openGraphType = "website",
}: BuildMetadataOptions): Metadata {
  return {
    title,
    description,
    robots: { index, follow: index },
    alternates: canonicalPath
      ? { canonical: absoluteUrl(canonicalPath) }
      : undefined,
    openGraph: canonicalPath
      ? {
          title,
          description,
          url: absoluteUrl(canonicalPath),
          type: openGraphType,
        }
      : undefined,
  };
}
