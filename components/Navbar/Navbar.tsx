'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import localFont from '@next/font/local'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/images/logo.png'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const soccerJerseyFont = localFont({
  src: '../../public/fonts/Soccer Jersey.ttf',
})

export type MenuItem = {
  href?: string
  label: string
  children?: MenuItem[]
}
export const menuItems: MenuItem[] = [
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

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed inset-0 z-10 bg-neutral-900 h-fit">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <Link href="/" className="flex pr-3 h-9 gap-x-2 lg:pr-0">
                <Image
                  src={logo}
                  alt="Bolognina boxe logo"
                  priority
                  className="w-auto h-full"
                />
                <span
                  className={clsx(
                    soccerJerseyFont.className,
                    'italic text-3xl text-white tracking-wider leading-none'
                  )}
                >
                  Bolognina Boxe
                </span>
              </Link>
              <div className="inset-y-0 left-0 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Apri il menù principale</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <DesktopMenu menuItems={menuItems} />
            </div>
          </div>
          <MobileMenu menuItems={menuItems} />
        </>
      )}
    </Disclosure>
  )
}
