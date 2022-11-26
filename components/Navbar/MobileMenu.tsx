import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import SimpleTransition from '../Transitions/SimpleTransition'
import { MenuItem } from './Navbar'

interface MobileMenuProps {
  menuItems: MenuItem[]
}

export default function MobileMenu({ menuItems }: MobileMenuProps) {
  const pathname = usePathname() ?? ''

  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {menuItems.map((menuItem) => (
          <>
            {menuItem.href && (
              <Link
                key={menuItem.label}
                href={menuItem.href}
                className={clsx(
                  pathname === menuItem.href
                    ? 'bg-neutral-800 text-white'
                    : 'text-gray-300 hover:bg-neutral-800 hover:text-white',
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
                        : 'text-gray-300 hover:bg-neutral-800 hover:text-white',
                      'flex items-center justify-between px-3 py-2 rounded-md text-base font-medium w-full'
                    )}
                  >
                    <span>{menuItem.label}</span>
                    <ChevronDownIcon className="w-4 h-4 text-gray-300 ui-open:rotate-90 ui-open:transform" />
                  </Disclosure.Button>
                  <SimpleTransition>
                    <Disclosure.Panel className="pl-4">
                      {menuItem.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href!}
                          className={clsx(
                            pathname === subItem.href
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-neutral-800 hover:text-white',
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
                  </SimpleTransition>
                </>
              </Disclosure>
            )}
          </>
        ))}
      </div>
    </Disclosure.Panel>
  )
}
