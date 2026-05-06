import type { Metadata } from "next";

interface BuildMetadataOptions {
  title: string;
  description: string;
  index?: boolean;
}

export function buildMetadata({
  title,
  description,
  index = true,
}: BuildMetadataOptions): Metadata {
  return {
    title,
    description,
    robots: { index, follow: index },
  };
}
