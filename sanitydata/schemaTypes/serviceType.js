import {defineField, defineType} from 'sanity'
import { BulbOutlineIcon } from "@sanity/icons";

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Please enter project title here.",
    }),
    defineField({
      name: "icon",
      title: "Service Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "icon",
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      };
    },
  },
})