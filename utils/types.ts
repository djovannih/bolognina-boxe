import { Image } from '@sanity/types'

export type Card = {
  title: string
  content: string
  link: { text: string; url: string }
  image: Image
}

export type StaffMember = {
  name: string
  role: string
  description: string
  image: Image
}

export type HomepageData = {
  cards: Card[]
  staff: StaffMember[]
}
