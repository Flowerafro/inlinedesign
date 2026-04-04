import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./sanity";
import type { SanityImage } from "./queries";

const builder = createImageUrlBuilder(sanityClient);

export function imageUrl(source: SanityImage) {
  return builder.image(source);
}

export function fileUrl(ref: string): string {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
  const clean = ref.replace(/^file-/, "").replace(/-([^-]+)$/, ".$1");
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${clean}`;
}