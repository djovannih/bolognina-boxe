const gallery = {
  name: 'gallery',
  type: 'object',
  title: 'Galleria',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Immagini',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Immagine',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Testo alternativo',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'display',
      type: 'string',
      title: 'Mostra come',
      description: 'Come vuoi che vengano mostrate le immagini?',
      options: {
        list: [
          { title: "Una sopra l'altra", value: 'stacked' },
          { title: 'In linea', value: 'inline' },
          { title: 'Carosello', value: 'carousel' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      name: 'zoom',
      type: 'boolean',
      title: 'Zoom',
      description: 'Vuoi abilitare lo zoom per queste immagini?',
    },
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0',
    },
    prepare(selection) {
      const { images, image } = selection

      return {
        title: `Galleria di ${Object.keys(images).length} immagini`,
        subtitle: `Testo alternativo: ${image.alt}`,
        media: image,
      }
    },
  },
}

export default gallery
