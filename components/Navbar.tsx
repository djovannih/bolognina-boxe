'use client'
const { Disclosure, Menu, Transition } = await import('@headlessui/react')
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import localFont from '@next/font/local'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

import logo from '../public/images/logo.png'

const soccerJerseyFont = localFont({
  src: '../public/fonts/Soccer Jersey.ttf',
})

type MenuItem = {
  href?: string
  label: string
  children?: MenuItem[]
}
const menuItems: MenuItem[] = [
  { href: '/', label: 'Home' },
  {
    label: 'Corsi',
    children: [
      { href: '/boxe', label: 'Boxe' },
      { href: '/functional-training', label: 'Functional training' },
      { href: '/yoga', label: 'Yoga' },
      { href: '/muay-thai', label: 'Muay thai' },
    ],
  },
  { href: '/palestra', label: 'Palestra' },
  { href: '/come-iscriversi', label: 'Come iscriversi' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/contatti', label: 'Contatti' },
]

function MobileMenu() {
  const pathname = usePathname() ?? ''

  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {menuItems.map((menuItem) => (
          <>
            {menuItem.href && (
              <Link
                key={menuItem.label}
                href={menuItem.href ?? '/'}
                className={clsx(
                  pathname === menuItem.href
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={pathname === menuItem.href ? 'page' : undefined}
              >
                {menuItem.label}
              </Link>
            )}
            {menuItem.children && (
              <Disclosure
                key={menuItem.label}
                defaultOpen={menuItem.children.some(
                  (subItem) => subItem.href === pathname
                )}
              >
                <>
                  <Disclosure.Button
                    className={clsx(
                      pathname === '/boxe'
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'flex items-center justify-between px-3 py-2 rounded-md text-base font-medium w-full'
                    )}
                  >
                    <span>{menuItem.label}</span>
                    <ChevronDownIcon className="ui-open:rotate-90 ui-open:transform w-4 h-4 text-gray-300" />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="pl-4">
                      {menuItem.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href!}
                          className={clsx(
                            pathname === subItem.href
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                          )}
                          aria-current={
                            pathname === subItem.href ? 'page' : undefined
                          }
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              </Disclosure>
            )}
          </>
        ))}
      </div>
    </Disclosure.Panel>
  )
}

export default function Navbar() {
  const pathname = usePathname() ?? ''

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
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
              <a href="/" className="flex pr-3 h-9 gap-x-2 lg:pr-0">
                <Image
                  src={logo}
                  alt="Bolognina boxe logo"
                  priority
                  className="w-auto h-full"
                />
                <span
                  className={clsx(
                    soccerJerseyFont.className,
                    'italic text-3xl text-white tracking-wider'
                  )}
                >
                  Bolognina Boxe
                </span>
              </a>
              <div className="absolute inset-y-0 right-0 items-center hidden pr-2 lg:flex gap-x-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  href="/"
                  className={clsx(
                    pathname === '/'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current="page"
                >
                  Home
                </Link>
                <Menu as="div">
                  <Menu.Button
                    className={clsx(
                      [
                        '/boxe',
                        '/functional-training',
                        '/yoga',
                        '/muay-thai',
                      ].includes(pathname)
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-base font-medium flex items-center gap-2'
                    )}
                  >
                    <span>Corsi</span>
                    <ChevronDownIcon className="ui-open:rotate-90 ui-open:transform w-4 h-4 text-gray-300" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute flex flex-col py-1 bg-white rounded-md shadow-lg">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/boxe"
                            className={clsx(
                              active || pathname === '/boxe'
                                ? 'bg-gray-100'
                                : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                            aria-current="page"
                          >
                            Boxe
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/functional-training"
                            className={clsx(
                              active || pathname === '/functional-training'
                                ? 'bg-gray-100'
                                : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                            aria-current="page"
                          >
                            Functional training
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/yoga"
                            className={clsx(
                              active || pathname === '/yoga'
                                ? 'bg-gray-100'
                                : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                            aria-current="page"
                          >
                            Yoga
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/muay-thai"
                            className={clsx(
                              active || pathname === '/muay-thai'
                                ? 'bg-gray-100'
                                : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                            aria-current="page"
                          >
                            Muay thai
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Link
                  href="/palestra"
                  className={clsx(
                    pathname === '/palestra'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current="page"
                >
                  Palestra
                </Link>
                <Link
                  href="/come-iscriversi"
                  className={clsx(
                    pathname === '/come-iscriversi'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current="page"
                >
                  Come iscriversi
                </Link>
                <Link
                  href="/chi-siamo"
                  className={clsx(
                    pathname === '/chi-siamo'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current="page"
                >
                  Come iscriversi
                </Link>
                <Link
                  href="/contatti"
                  className={clsx(
                    pathname === '/contatti'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current="page"
                >
                  Contatti
                </Link>
              </div>
            </div>
          </div>
          <MobileMenu />
        </>
      )}
    </Disclosure>
  )
}
