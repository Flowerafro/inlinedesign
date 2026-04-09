import { defineType, defineField } from "sanity";


export const drawing = defineType({
    name: "drawing",
    title: "Drawing",
    type: "document",
    groups: [
        { name: 'listing', title: 'Listing (Card)' },
        { name: 'details', title: 'Drawing Page' },
    ],
    fields: [
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
            name: "publishedAt",
            type: "datetime",
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
            name: "types",
            title: "Drawing Types",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Illustration", value: "illustration" },
                    { title: "Digital Art", value: "digital-art" },
                    { title: "Free hand drawing", value: "free-hand-drawing" },
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
                    { title: "Illustration", value: "illustration" },
                    { title: "Digital Art", value: "digital-art" },
                    { title: "Free hand drawing", value: "free-hand-drawing" },
                    { title: "Drawing", value: "drawing" },
                    { title: "Other", value: "other" },
                ],
                layout: "grid",
            },
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

        // --- DETAILS GROUP (Bilde 6) ---

        defineField({
            name: "description",
            title: "Full Description",
            type: "array",
            group: 'details',
            of: [{ type: "block" }],
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
            name: "behanceUrl",
            title: "Behance Link",
            type: "url",
            group: 'details',
        }),
        defineField({
            name: "deviantartUrl",
            title: "DeviantArt Link",
            type: "url",
            group: 'details',
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
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
})