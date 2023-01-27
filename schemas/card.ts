import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { defineType } from 'sanity'

export default defineType({
  name: 'card',
  title: 'Card',
  icon: InformationCircleIcon,
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Contenuto',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'text',
          title: 'Testo',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'url',
          title: 'URL',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
})
