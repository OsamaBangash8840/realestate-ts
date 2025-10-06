'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface BreadcrumbsProps {
  variant?: 'default' | 'secondary'
}

export default function Breadcrumbs({ variant = 'default' }: BreadcrumbsProps) {
  const pathname = usePathname()
  const pathParts = pathname.split('/').filter((part) => part !== '')

  const cleanedParts = pathParts

  const formatText = (text: string) => {
    return text.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
  }

  const colors = {
    default: {
      home: 'text-brand hover:text-brand/50',
      separator: 'text-brand',
      link: 'text-secondary-500',
      current: 'text-primary-500',
    },
    secondary: {
      home: 'text-white hover:text-secondary-500/50',
      separator: 'text-white ',
      link: 'text-white  hover:text-gray-800',
      current: 'text-white ',
    },
  }

  const currentColors = colors[variant]

  return (
    <nav className="flex flex-wrap justify-center sm:justify-start items-center gap-x-2 gap-y-1 text-[14px] sm:text-[16px] text-secondary-500 break-words">
      {/* Home */}
      <Link href="/" className={`flex items-center text-sm space-x-2 ${currentColors.home}`}>
        <span>Home</span>
      </Link>

      {cleanedParts.map((part, index) => {
        const href = '/' + cleanedParts.slice(0, index + 1).join('/')
        const isLast = index === cleanedParts.length - 1

        return (
          <div key={index} className="flex items-center space-x-2">
            <span className={currentColors.separator}>/</span>

            {isLast ? (
              <span className={`capitalize ${currentColors.current}`}>{formatText(part)}</span>
            ) : (
              <Link href={href} className={`capitalize ${currentColors.link}`}>
                {formatText(part)}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
