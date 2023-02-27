import { defineType } from 'sanity'

import YouTubePreview from '../components/Sanity/youtube'

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube video',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL del video YouTube',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: YouTubePreview,
  },
})
