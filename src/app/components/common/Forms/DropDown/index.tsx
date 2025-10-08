'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React from 'react'

interface IDropdownOption {
  label: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right' // default left
}

interface IDropdownProps {
  button: React.ReactNode
  options: IDropdownOption[]
  className?: string
  menuClassName?: string
}

export const Dropdown = ({
  button,
  options,
  className = '',
  menuClassName = '',
}: IDropdownProps): React.ReactElement => {
  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      <MenuButton as="div">{button}</MenuButton>
      <MenuItems
        anchor="bottom"
        className={`absolute z-50 mt-0 w-48 md:ml-[-55px] ml-[-60px] sm:ml-[-70px] origin-top-right bg-bgPrimary dark:bg-bgSecondary border border-gray-100 rounded-lg shadow-[0_1px_2px_-1px_#0000001A,0_1px_3px_0_#0000001A] focus:outline-none ${menuClassName}`}
      >
        {options.map((option, index) => (
          <MenuItem key={index}>
            {({ active }) => {
              const content = (
                <div
                  className={`flex items-center gap-2  mr-3${
                    option.iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {option.icon && (
                    <span
                      className={`flex-shrink-0 text-gray-500 dark:text-white ${
                        active ? 'text-white' : ''
                      }`}
                    >
                      {option.icon}
                    </span>
                  )}
                  <span className="whitespace-nowrap">{option.label}</span>
                </div>
              )

              return option.href ? (
                <a
                  href={option.href}
                  className={`block px-4 py-2 text-sm border-b last:border-b-0 border-gray-100 transition ${
                    active
                      ? 'bg-brand text-white'
                      : 'text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-brand dark:hover:text-brand'
                  }`}
                >
                  {content}
                </a>
              ) : (
                <button
                  onClick={option.onClick}
                  className={`block w-full text-left px-4 py-2 text-sm border-b last:border-b-0 border-gray-100 transition ${
                    active
                      ? 'bg-brand text-white'
                      : 'text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-brand dark:hover:text-brand'
                  }`}
                >
                  {content}
                </button>
              )
            }}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
