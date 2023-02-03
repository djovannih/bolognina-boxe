import { UserIcon } from '@heroicons/react/24/outline'
import { defineType } from 'sanity'

export default defineType({
  name: 'staff',
  title: 'Staff',
  icon: UserIcon,
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Ruolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Testo alternativo',
        },
      ]
    },
  ],
})
