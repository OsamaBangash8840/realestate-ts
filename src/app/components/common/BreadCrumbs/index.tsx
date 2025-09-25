'use client'

import { usePathname } from 'next/navigation'
import { IoHomeOutline } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const pathParts = pathname.split('/').filter((part) => part !== '')

  // Remove locale (first part)
  const cleanedParts = pathParts.slice(1)

  // Only show first route after locale
  const firstRoute = cleanedParts[0]
  const href = '/' + [firstRoute].filter(Boolean).join('/')

  const formatText = (text: string) => {
    return text.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      {/* Home */}
      <Link
        href={''}
        className="flex items-center text-sm space-x-2 text-brand hover:text-brand/50"
      >
        <IoHomeOutline />
        <span>Home</span>
      </Link>

      {firstRoute && (
        <div className="flex items-center space-x-2">
          <span className="text-brand">
            <IoIosArrowForward />
          </span>
          <Link
            href={href}
            className="capitalize text-gray-700 dark:text-breadcrumbsDarktext hover:dark:text-white/80 hover:text-black"
          >
            {formatText(firstRoute)}
          </Link>
        </div>
      )}
    </nav>
  )
}
