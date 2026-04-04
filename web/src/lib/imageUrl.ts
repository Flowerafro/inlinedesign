import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity";
import type { SanityImage } from "./queries";

const builder = imageUrlBuilder(sanityClient);

/**
 * Returns a typed image URL builder for a Sanity image reference.
 * Usage: imageUrl(img).width(800).url()
 */
export function imageUrl(source: SanityImage) {
  return builder.image(source);
}

/**
 * Resolves a Sanity file asset _ref to its CDN download URL.
 * Ref format: "file-<hash>-<ext>"
 */
export function fileUrl(ref: string): string {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
  // Convert "file-abc123-pdf" → "abc123.pdf"
  const clean = ref.replace(/^file-/, "").replace(/-([^-]+)$/, ".$1");
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${clean}`;
}
