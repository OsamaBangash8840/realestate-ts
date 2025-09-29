'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const pathParts = pathname.split('/').filter((part) => part !== '')

  // Use pathParts directly (don’t slice)
  const cleanedParts = pathParts

  const formatText = (text: string) => {
    return text.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
  }

  return (
    <nav className="flex items-center space-x-2 text-[16px] text-secondary-500">
      {/* Home */}
      <Link href="/" className="flex items-center text-sm space-x-2 text-brand hover:text-brand/50">
        <span>Home</span>
      </Link>

      {cleanedParts.map((part, index) => {
        const href = '/' + cleanedParts.slice(0, index + 1).join('/')
        const isLast = index === cleanedParts.length - 1

        return (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-brand">/</span>

            {isLast ? (
              <span className="capitalize text-primary-500">{formatText(part)}</span>
            ) : (
              <Link href={href} className="capitalize text-secondary-500">
                {formatText(part)}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
