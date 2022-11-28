import { BookOpenIcon } from '@heroicons/react/24/outline'
import { defineType } from 'sanity'

import authorType from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'page',
  title: 'Pagina',
  icon: BookOpenIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Contenuto',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'excerpt',
      title: 'Estratto',
      type: 'text',
    },
    {
      name: 'coverImage',
      title: 'Immagine di copertina',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Data',
      type: 'datetime',
    },
    {
      name: 'author',
      title: 'Autore',
      type: 'reference',
      to: [{ type: authorType.name }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
