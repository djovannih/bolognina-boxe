'use client'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import localFont from '@next/font/local'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

import logo from '../public/images/logo.png'

const soccerJerseyFont = localFont({
  src: '../public/fonts/Soccer Jersey.ttf',
})

const navigation = [
  { name: 'Palestra', href: '#', current: false },
  { name: 'Come iscriversi', href: '#', current: false },
  { name: 'Chi siamo', href: '#', current: false },
  { name: 'Contatti', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
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
              <div className="flex pr-3 h-9 gap-x-2 lg:pr-0">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  priority
                  className="w-auto h-full"
                />
                <span
                  className={classNames(
                    soccerJerseyFont.className,
                    'italic text-3xl text-white tracking-wider'
                  )}
                >
                  Bolognina Boxe
                </span>
              </div>
              <div className="absolute inset-y-0 right-0 items-center hidden pr-2 lg:flex gap-x-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  href="/"
                  className={classNames(
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
                    className={classNames(
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
                    <ChevronDownIcon className="w-4 h-4 text-gray-300" />
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
                            className={classNames(
                              active || pathname === '/' ? 'bg-gray-100' : '',
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
                            className={classNames(
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
                            className={classNames(
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
                            className={classNames(
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
                  className={classNames(
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
                  className={classNames(
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
                  className={classNames(
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
                  className={classNames(
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

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as={Link}
                href="/"
                className={classNames(
                  pathname === '/'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/boxe"
                className={classNames(
                  pathname === '/boxe'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={pathname === '/boxe' ? 'page' : undefined}
              >
                Boxe
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/functional-training"
                className={classNames(
                  pathname === '/functional-training'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={
                  pathname === '/functional-training' ? 'page' : undefined
                }
              >
                Functional training
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/yoga"
                className={classNames(
                  pathname === '/yoga'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={pathname === '/yoga' ? 'page' : undefined}
              >
                Yoga
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/muay-thai"
                className={classNames(
                  pathname === '/muay-thai'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={pathname === '/muay-thai' ? 'page' : undefined}
              >
                Muay thai
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/palestra"
                className={classNames(
                  pathname === '/palestra'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={pathname === '/palestra' ? 'page' : undefined}
              >
                Palestra
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/come-iscriversi"
                className={classNames(
                  pathname === '/come-iscriversi'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={
                  pathname === '/come-iscriversi' ? 'page' : undefined
                }
              >
                Come iscriversi
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/chi-siamo"
                className={classNames(
                  pathname === '/chi-siamo'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={pathname === '/chi-siamo' ? 'page' : undefined}
              >
                Chi siamo
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/contatti"
                className={classNames(
                  pathname === '/contatti'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={pathname === '/contatti' ? 'page' : undefined}
              >
                Contatti
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
