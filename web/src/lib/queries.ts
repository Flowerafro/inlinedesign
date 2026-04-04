import { sanityClient } from "./sanity";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface ProjectLink {
  linkType: string;
  url?: string;
  file?: { asset: { _ref: string; _type: "reference" } };
}

export interface Project {
  _id: string;
  _type: "project";
  title: string;
  slug: SanitySlug;
  cardImage?: SanityImage;
  mainImage?: SanityImage;
  filterCategories?: string[];
  types?: string[];
  assignmentType?: "exam" | "customer" | "hobby";
  publishedAt?: string;
  description?: unknown[]; // Portable Text blocks
  techStack?: string[];
  projectLinks?: ProjectLink[];
  gallery?: SanityImage[];
}

export interface DesignProduct {
  _id: string;
  _type: "designProduct";
  title: string;
  slug: SanitySlug;
  image?: SanityImage;
  heroImage?: SanityImage;
  filterCategories?: string[];
  assignmentType?: string;
  listingDescription?: string;
}

// ---------------------------------------------------------------------------
// GROQ queries
// ---------------------------------------------------------------------------

const PROJECT_LISTING_FIELDS = `
  _id,
  _type,
  title,
  slug,
  cardImage,
  filterCategories,
  assignmentType,
  publishedAt
`;

const PROJECT_DETAIL_FIELDS = `
  _id,
  _type,
  title,
  slug,
  cardImage,
  mainImage,
  filterCategories,
  types,
  assignmentType,
  publishedAt,
  description,
  techStack,
  projectLinks[]{
    linkType,
    url,
    file
  },
  gallery
`;

const DESIGN_PRODUCT_FIELDS = `
  _id,
  _type,
  title,
  slug,
  image,
  heroImage,
  filterCategories,
  assignmentType,
  listingDescription
`;

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(publishedAt desc) {
    ${PROJECT_LISTING_FIELDS}
  }
`;

export const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    ${PROJECT_DETAIL_FIELDS}
  }
`;

export const PROJECTS_SLUGS_QUERY = `
  *[_type == "project" && defined(slug.current)]{ "slug": slug.current }
`;

export const DESIGN_PRODUCTS_QUERY = `
  *[_type == "designProduct"] | order(_createdAt desc) {
    ${DESIGN_PRODUCT_FIELDS}
  }
`;

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

/** Fetch all published projects (listing fields only), ordered newest first. */
export async function getProjects(): Promise<Project[]> {
  return sanityClient.fetch<Project[]>(PROJECTS_QUERY);
}

/** Fetch a single project by slug with full detail fields. */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return sanityClient.fetch<Project | null>(PROJECT_BY_SLUG_QUERY, { slug });
}

/** Fetch all project slugs for generateStaticParams. */
export async function getProjectSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch<{ slug: string }[]>(PROJECTS_SLUGS_QUERY);
}

/** Fetch all design products, ordered newest first. */
export async function getDesignProducts(): Promise<DesignProduct[]> {
  return sanityClient.fetch<DesignProduct[]>(DESIGN_PRODUCTS_QUERY);
}

/** Fetch both collections in parallel – useful for the homepage. */
export async function getAllPortfolioItems(): Promise<{
  projects: Project[];
  designProducts: DesignProduct[];
}> {
  const [projects, designProducts] = await Promise.all([
    getProjects(),
    getDesignProducts(),
  ]);
  return { projects, designProducts };
}
