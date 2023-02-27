import { groq } from 'next-sanity'
import sanityClient from 'utils/sanityClient'

import Menu from './Menu'

export type MenuItem = {
  href?: string
  label: string
  children?: MenuItem[]
}
const items: MenuItem[] = [
  { href: '/', label: 'Home' },
  {
    label: 'Corsi',
    children: [
      { href: '/boxe', label: 'Boxe' },
      { href: '/yoga', label: 'Yoga' },
      { href: '/muay-thai', label: 'Muay thai' },
      { href: '/danza-fit', label: 'Danza fit' },
      { href: '/hip-hop', label: 'Hip hop' },
    ],
  },
  { href: '/palestra', label: 'Palestra' },
  { href: '/come-iscriversi', label: 'Come iscriversi' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/contatti', label: 'Contatti' },
]

const getData = async (): Promise<any> =>
  await sanityClient.fetch(groq`*[_type == "menuItem"] | order(index asc) {
    label,
    'subItems':subItems[]->{title, 'slug': slug.current},
  }`)

export default async function Navbar() {
  const menuItems = await getData()
  const items: MenuItem[] = menuItems.map((item: any) =>
    item.subItems.length === 1
      ? ({
          label: item.subItems[0].title,
          href: `/${item.subItems[0].slug}`,
        } as MenuItem)
      : ({
          label: item.label,
          children: item.subItems.map(
            (subItem: any) =>
              ({
                label: subItem.title,
                href: `/${subItem.slug}`,
              } as MenuItem)
          ),
        } as MenuItem)
  )

  return <Menu items={items} />
}
