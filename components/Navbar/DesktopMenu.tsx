import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import SimpleTransition from 'components/Transitions/SimpleTransition'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

import { MenuItem } from './Navbar'

interface DesktopMenuProps {
  menuItems: MenuItem[]
}

export default function DesktopMenu({ menuItems }: DesktopMenuProps) {
  const pathname = usePathname() ?? ''

  return (
    <div className="absolute inset-y-0 right-0 items-center hidden pr-2 lg:flex gap-x-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      {menuItems.map((menuItem) => (
        <Fragment key={menuItem.label}>
          {menuItem.href ? (
            <Link
              key={menuItem.label}
              href={menuItem.href}
              className={clsx(
                pathname === menuItem.href
                  ? 'bg-neutral-800 text-white'
                  : 'text-neutral-300 hover:bg-neutral-800 hover:text-white',
                'block px-3 py-2 rounded-md text-base font-medium'
              )}
              aria-current={pathname === menuItem.href ? 'page' : undefined}
            >
              {menuItem.label}
            </Link>
          ) : (
            menuItem.children && (
              <Menu as="div">
                <Menu.Button
                  className={clsx(
                    menuItem.children.some(
                      (subItem) => subItem.href === pathname
                    )
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-300 hover:bg-neutral-800 hover:text-white',
                    'px-3 py-2 rounded-md text-base font-medium flex items-center gap-2'
                  )}
                >
                  <span>{menuItem.label}</span>
                  <ChevronDownIcon className="w-4 h-4 text-neutral-300 ui-open:rotate-90 ui-open:transform" />
                </Menu.Button>
                <SimpleTransition>
                  <Menu.Items className="absolute flex flex-col py-1 rounded-md shadow-lg bg-neutral-50 w-max">
                    {menuItem.children.map((subItem) => (
                      <Menu.Item key={subItem.label}>
                        {({ active }) => (
                          <Link
                            href={subItem.href!}
                            className={clsx(
                              active || pathname === subItem.href
                                ? 'bg-neutral-100'
                                : '',
                              'block px-4 py-2 text-sm text-neutral-700'
                            )}
                            aria-current={
                              pathname === menuItem.href ? 'page' : undefined
                            }
                          >
                            {subItem.label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </SimpleTransition>
              </Menu>
            )
          )}
        </Fragment>
      ))}
    </div>
  )
}
