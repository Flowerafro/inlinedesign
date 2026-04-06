import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: 'listing', title: 'Listing (Card)' },
    { name: 'details', title: 'Project Page' },
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
      name: "cardImage",
      title: "Thumbnail / Card Image",
      type: "image",
      group: 'listing',
      options: { hotspot: true },
    }),
    defineField({
      name: "types",
      title: "Project Types",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Web site", value: "web-site" },
          { title: "Web application", value: "web-application" },
          { title: "UI Design", value: "ui-design" },
          { title: "UX Design", value: "ux-design" },
          { title: "Logo", value: "logo" },
          { title: "Digital Marketing", value: "digital-marketing" },
          { title: "Graphic Design", value: "graphic-design" },
          { title: "Brand Identity", value: "brand-identity" },
          { title: "Communication design", value: "communication-design" },
          { title: "Prompt Engineering", value: "prompt-engineering" },
          { title: "Generative AI", value: "generative-ai" },
          { title: "Strategic Analysis", value: "strategic-analysis" },
          { title: "Process optimization", value: "process-optimization" },
          { title: "IT Strategy", value: "it-strategy" },
          { title: "Project Management", value: "project-management" },
          { title: "Business Systems", value: "business-systems" }
        ],
        layout: "grid",
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "filterCategories",
      title: "Filter Categories (Buttons)",
      description: "Hvilken knapp skal dette prosjektet vises under?",
      type: "array",
      group: 'listing',
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Web site", value: "web-site" },
          { title: "Web application", value: "web-application" },
          { title: "UI Design", value: "ui-design" },
          { title: "UX Design", value: "ux-design" },
          { title: "Logo", value: "logo" },
          { title: "Digital Marketing", value: "digital-marketing" },
          { title: "Graphic Design", value: "graphic-design" },
          { title: "Brand Identity", value: "brand-identity" },
          { title: "Communication design", value: "communication-design" },
          { title: "Prompt Engineering", value: "prompt-engineering" },
          { title: "Generative AI", value: "generative-ai" },
          { title: "Strategic Analysis", value: "strategic-analysis" },
          { title: "Process optimization", value: "process-optimization" },
          { title: "IT Strategy", value: "it-strategy" },
          { title: "Project Management", value: "project-management" },
          { title: "Business Systems", value: "business-systems" }
        ],
        layout: "grid",
      },
    }),
    defineField({
      name: "assignmentType",
      title: "Assignment Type",
      type: "string",
      group: 'listing',
      options: {
        list: [
          { title: "Exam / School", value: "exam" },
          { title: "Customer Project", value: "customer" },
          { title: "Personal / Hobby", value: "hobby" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "mainImage",
      title: "Hero Image (Top of page)",
      type: "image",
      group: 'details',
      options: { hotspot: true },
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: 'tags',
      },
    }),

    // --- FLEKSIBLE PROSJEKTLENKER ---
    defineField({
      name: "projectLinks",
      title: "Project Links / Deliverables",
      description: "Legg til lenker til nettsider, GitHub eller last opp PDF-manualer",
      type: "array",
      group: 'details',
      of: [
        {
          type: "object",
          fields: [
            {
              name: "linkType",
              title: "Link Label",
              type: "string",
              description: "Eks: 'View Live', 'GitHub', 'Brand Manual PDF'",
              initialValue: "View Live"
            },
            {
              name: "url",
              title: "External URL",
              type: "url",
              description: "Fyll ut denne hvis det er en ekstern lenke"
            },
            {
              name: "file",
              title: "File Upload",
              type: "file",
              description: "Last opp PDF eller andre filer her hvis prosjektet ikke har en URL"
            }
          ]
        }
      ]
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "array",
      group: 'details',
      of: [{ type: "block" }],
    }),

    defineField({
      name: "gallery",
      title: "Project Gallery (Slider)",
      type: "array",
      group: 'details',
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      date: "publishedAt",
      assignment: "assignmentType",
    },
    prepare({ title, media, date, assignment }) {
      const year = date ? new Date(date).getFullYear().toString() : "Draft";
      const typeLabel = assignment ? assignment.charAt(0).toUpperCase() + assignment.slice(1) : "";

      return {
        title,
        media,
        subtitle: `${year} | ${typeLabel}`,
      };
    },
  },
});