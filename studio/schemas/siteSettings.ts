import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site title",
      type: "string",
      initialValue: "Line Henriksen – inline design",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "ogImage",
      title: "Default OG image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "beaconsUrl",
      title: "Beacons / Portfolio URL",
      type: "url",
    }),
    defineField({
      name: "email",
      title: "Contact email",
      type: "string",
    }),
    defineField({
      name: "cvFile",
      title: "CV / Resume (PDF)",
      type: "file",
      options: { accept: ".pdf" },
    }),
  ],
  preview: {
    select: { title: "siteTitle" },
  },
});
