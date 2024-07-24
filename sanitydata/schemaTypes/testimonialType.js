import {defineField, defineType} from 'sanity'
import { BillIcon } from "@sanity/icons";

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "number",
      description: "Please use unique ids",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      description: "Write review here",
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      description: "Country here",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      description: "URL here",
    })
  ],
  preview: {
    select: {
      title: "id",
      name: "name",
      country: "country",
    },
    prepare(selection) {
      return {
        title: `${selection.title ? `${selection.title}:` : ""} ${
          selection.name
        } `,
        date: selection.date,
        subtitle: selection.country,
      };
    },
  },
})