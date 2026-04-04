import { defineType, defineField } from "sanity";

export const designProduct = defineType({
  name: "designProduct",
  title: "Design Product",
  type: "document",
  groups: [
    { name: 'listing', title: 'Listing (Card)' },
    { name: 'details', title: 'Digital Product Page' },
  ],
  fields: [
    // --- LISTING GROUP ---
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: 'listing',
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: 'listing',
      options: { source: "title" },
    }),
    defineField({
      name: "heroImage",
      title: "Hero Banner",
      description: "Det brede bildet øverst på detaljsiden",
      type: "image",
      group: 'details',
      options: { hotspot: true },
    }),
    defineField({
      name: "image",
      title: "Listing Image (Card)",
      type: "image",
      group: 'listing',
      options: { hotspot: true },
    }),
    defineField({
      name: "listingDescription", // Kort beskrivelse til oversikten
      title: "Short Description",
      type: "text",
      rows: 2,
      group: 'listing',
    }),
    defineField({
      name: "types",
      title: "Digital product Types",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Logo", value: "logo" },
          { title: "Graphic Design", value: "graphic-design" },
          { title: "Brand Identity", value: "brand-identity" },
          { title: "Digital Download", value: "digital-download" },
          { title: "Printable", value: "printable" },
          { title: "Illustration", value: "illustration" },
          { title: "Digital Art", value: "digital-art" },
          { title: "Drawing", value: "drawing" },
          { title: "Other", value: "other" },
        ],
        layout: "grid",
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "filterCategories",
      title: "Filter Categories",
      type: "array",
      group: 'listing',
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Logo", value: "logo" },
          { title: "Graphic Design", value: "graphic-design" },
          { title: "Brand Identity", value: "brand-identity" },
          { title: "Digital Download", value: "digital-download" },
          { title: "Printable", value: "printable" },
          { title: "Illustration", value: "illustration" },
          { title: "Digital Art", value: "digital-art" },
          { title: "Drawing", value: "drawing" },
          { title: "Other", value: "other" },
        ],
        layout: "grid",
      },
    }),

    // --- DETAILS GROUP (Bilde 6) ---

    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      group: 'details',
      of: [{ type: "block" }], // Gir deg mulighet for fet skrift, lister osv.
    }),
    defineField({
      name: "gallery",
      title: "Product Mockups / Gallery",
      description: "Last opp bildene som skal vises i collagen (bilde 6)",
      type: "array",
      group: 'details',
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "assignmentType",
      title: "Assignment Type",
      type: "string",
      group: 'details',
      options: {
        list: [
          { title: "Exam / School", value: "exam" },
          { title: "Customer Order", value: "customer-order" },
          { title: "Personal / Hobby", value: "hobby" },
          { title: "Commercial / For Sale", value: "commercial" },
          { title: "Public / Community Resource", value: "community" },
        ],
        layout: "radio",
      },
    }),

    // --- LENKER (Vises både på kort og side) ---
    defineField({
      name: "instagramUrl",
      title: "Instagram Link",
      type: "url",
    }),
    defineField({
      name: "portfolioUrl",
      title: "Portfolio/Shop Link (Beacons)",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      category: "filterCategories.0", // Viser den første kategorien som undertittel
    },
    prepare({ title, media, category }) {
      return {
        title,
        media,
        subtitle: category ? category.toUpperCase() : "No category",
      };
    },
  },
});