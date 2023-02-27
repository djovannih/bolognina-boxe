import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { defineType } from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menù',
  type: 'document',
  icon: Cog6ToothIcon,
  fields: [
    {
      name: 'label',
      title: 'Titolo',
      description: 'Visualizzato solo in caso di menù a cascata',
      type: 'string',
    },
    {
      name: 'index',
      title: 'Indice',
      description:
        "Serve a stabilire l'ordine in cui verranno visualizzate le voci nel menù",
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1),
    },
    {
      name: 'subItems',
      title: 'Pagine',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: 'subItem',
          title: 'Pagina',
          type: 'reference',
          to: [{ type: 'page' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
})
