import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type Card = {
  title: string
  content: string
  link: { text: string; url: string }
  image: SanityImageSource
}
