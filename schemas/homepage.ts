import { HomeIcon } from '@heroicons/react/24/outline'
import { defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  icon: HomeIcon,
  type: 'document',
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'card' }],
      validation: (Rule) => Rule.required().length(3),
    },
  ],
})