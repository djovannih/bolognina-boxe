import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import sanityClient from './sanityClient'

const imageBuilder = createImageUrlBuilder(sanityClient)

export const urlForImage = (source: SanityImageSource) =>
  source ? imageBuilder.image(source).auto('format').fit('max').url() : ''
