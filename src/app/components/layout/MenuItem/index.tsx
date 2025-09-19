'use client'

import { IMenuItem } from '@/app/base/types'
import { Typography } from '@/app/components/common'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const MenuItem = ({
  item,
  hideMenu,
}: {
  item: IMenuItem
  hideMenu: () => void
}): React.ReactElement => {
  const pathname = usePathname()
  const active: boolean = pathname.includes(item.path)

  return (
    <li className="mb-2">
      <Link href={item.path} onClick={hideMenu}>
        <div
          className={`w-full h-12 flex items-center rounded-lg hover:bg-brand/50 transition-all duration-500`}
        >
          <div
            className={`h-full pl-4 text-[16px] font-semibold flex gap-x-4 items-center flex-1 ${
              active ? 'text-primary-500' : 'text-secondary-500'
            }`}
          >
            {item.icon}
            <Typography
              variant="large"
              weight="medium"
              color="custom"
              customColor="text-white"
              className={` hover:text-white/50 uppercase`}
            >
              {item.title}
            </Typography>
          </div>
        </div>
      </Link>
    </li>
  )
}
