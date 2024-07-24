import {defineField, defineType} from 'sanity'
import {CodeBlockIcon} from '@sanity/icons'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Please use unique ids',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Please enter project title here.',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Write tagline for project here',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Write category for project here, example (fullstack, frontend, backend)',
    }),
    defineField({
      name: 'liveUrl',
      title: 'LiveURL',
      type: 'string',
      description: "Project's URL here",
    }),
    defineField({
      name: 'repositoryUrl',
      title: 'RepositoryURL',
      type: 'string',
      description: 'Project code repository URL here',
    }),
    defineField({
      name: 'img',
      title: 'Project Image',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'id',
      name: 'title',
      media: 'img',
      category: 'category',
    },
    prepare(selection) {
      return {
        title: `${selection.title ? `${selection.title}:` : ''} ${selection.name} `,
        date: selection.date,
        subtitle: selection.category,
        media: selection.media,
      }
    },
  },
})
