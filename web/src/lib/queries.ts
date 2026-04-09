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
  description?: unknown[];
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
  description?: any[];
  gallery?: SanityImage[];
  techStack?: string[];
  types?: string[];
  instagramUrl?: string;
  portfolioUrl?: string;
}

export interface Drawing {
  _id: string;
  _type: "drawing";
  title: string;
  slug: SanitySlug;
  image?: SanityImage;
  heroImage?: SanityImage;
  filterCategories?: string[];
  assignmentType?: string;
  description?: any[];
  techStack?: string[];
  types?: string[];
  behanceUrl?: string;
  deviantartUrl?: string;
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
  types,
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
  assignmentType,
  types,
  techStack,
  filterCategories,
  listingDescription,
  publishedAt
`;

const DESIGN_PRODUCT_DETAIL_FIELDS = `
  _id,
  _type,
  title,
  slug,
  image,
  heroImage,
  filterCategories,
  assignmentType,
  techStack,
  listingDescription,
  description,
  gallery,
  types,
  instagramUrl,
  portfolioUrl
`;

const DRAWING_FIELDS = `
  _id,
  _type,
  title,
  slug,
  image,
  heroImage,
  assignmentType,
  types,
  techStack,
  filterCategories,
  publishedAt
`;

const DRAWING_DETAIL_FIELDS = `
  _id,
  _type,
  title,
  slug,
  image,
  heroImage,
  filterCategories,
  assignmentType,
  techStack,
  description,
  types,
  behanceUrl,
  deviantartUrl
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
  *[_type == "designProduct"] | order(publishedAt desc) {
    ${DESIGN_PRODUCT_FIELDS}
  }
`;

export const DESIGN_PRODUCT_BY_SLUG_QUERY = `
  *[_type == "designProduct" && slug.current == $slug][0] {
    ${DESIGN_PRODUCT_DETAIL_FIELDS}
  }
`;

export const DESIGN_PRODUCTS_SLUGS_QUERY = `
  *[_type == "designProduct" && defined(slug.current)]{ "slug": slug.current }
`;

export const DRAWINGS_QUERY = `
  *[_type == "drawing"] | order(publishedAt desc) {
    ${DRAWING_FIELDS}
  }
`;

export const DRAWING_BY_SLUG_QUERY = `
  *[_type == "drawing" && slug.current == $slug][0] {
    ${DRAWING_DETAIL_FIELDS}
  }
`;

export const DRAWINGS_SLUGS_QUERY = `
  *[_type == "drawing" && defined(slug.current)]{ "slug": slug.current }
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

/** Fetch a single design product by slug with full detail fields. */
export async function getDesignProductBySlug(slug: string): Promise<DesignProduct | null> {
  return sanityClient.fetch<DesignProduct | null>(DESIGN_PRODUCT_BY_SLUG_QUERY, { slug });
}

/** Fetch all design product slugs for generateStaticParams. */
export async function getDesignProductSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch<{ slug: string }[]>(DESIGN_PRODUCTS_SLUGS_QUERY);
}

/** Fetch all drawings, ordered newest first. */
export async function getDrawings(): Promise<Drawing[]> {
  return sanityClient.fetch<Drawing[]>(DRAWINGS_QUERY);
}

/** Fetch a single drawing by slug with full detail fields. */
export async function getDrawingBySlug(slug: string): Promise<Drawing | null> {
  return sanityClient.fetch<Drawing | null>(DRAWING_BY_SLUG_QUERY, { slug });
}

/** Fetch all drawing slugs for generateStaticParams. */
export async function getDrawingSlugs(): Promise<{ slug: string }[]> {
  return sanityClient.fetch<{ slug: string }[]>(DRAWINGS_SLUGS_QUERY);
}

/** Fetch both collections in parallel – useful for the homepage. */
export async function getAllPortfolioItems(): Promise<{
  projects: Project[];
  designProducts: DesignProduct[];
  drawings: Drawing[];
}> {
  const [projects, designProducts, drawings] = await Promise.all([
    getProjects(),
    getDesignProducts(),
    getDrawings(),
  ]);
  return { projects, designProducts, drawings };
}
