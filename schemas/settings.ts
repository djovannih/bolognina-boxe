import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Cog6ToothIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    {
      name: 'title',
      description: 'Titolo del sito',
      title: 'Titolo',
      type: 'string',
      initialValue: 'Bolognina boxe',
      validation: (rule) => rule.required(),
    },
  ],
})
