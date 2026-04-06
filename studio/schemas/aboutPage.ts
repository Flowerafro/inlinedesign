import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
    name: "aboutPage",
    title: "About Page",
    type: "document",
    fields: [
        defineField({
            name: "hook",
            title: "Hook (Heispitsj)",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "education",
            title: "Education",
            type: "array",
            of: [
                defineField({
                    name: "educationItem",
                    title: "Education item",
                    type: "object",
                    fields: [
                        defineField({
                            name: "school",
                            title: "School",
                            type: "string",
                        }),
                        defineField({
                            name: "degree",
                            title: "Degree",
                            type: "string",
                        }),
                        defineField({
                            name: "startDate",
                            title: "Start date",
                            type: "date",
                            options: { dateFormat: 'YYYY' }
                        }),
                        defineField({
                            name: "endDate",
                            title: "End date",
                            type: "date",
                            options: { dateFormat: 'YYYY' }
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "tools",
            title: "Tools",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "details",
            title: "The Details (Hovedtekst)",
            type: "text",
            rows: 6,
        }),
        defineField({
            name: "personalTouch",
            title: "The Personal Touch",
            type: "text",
            rows: 5,
        }),
    ],
    preview: {
        select: { title: "hook" },
        prepare(selection) {
            return { title: 'About Page Content' }
        }
    },
});