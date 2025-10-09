'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { RxDashboard } from 'react-icons/rx'
import { CiShoppingCart } from 'react-icons/ci'
import { Typography } from '@/app/components/common'
import { IMenuItem } from '@/app/base/types'
import { useTheme } from '@/providers'
import { usePathname } from 'next/navigation'
import { routes } from '@/app/base/constants'
import { IoIosHeartEmpty } from 'react-icons/io'
import { CiLocationOn } from 'react-icons/ci'
import { IoPersonOutline } from 'react-icons/io5'
import { CiLock } from 'react-icons/ci'

interface ISidebar {
  show: boolean
  onHide: () => void
}

// Extended menu item interface for internal use
interface IMenuItemWithSub extends IMenuItem {
  subItems?: IMenuItem[]
  iconActive?: React.ReactNode // Add iconActive property
}

// Menu with submenu items
export const menu: IMenuItemWithSub[] = [
  {
    title: 'Dashboard',
    path: routes.dashboard,
    icon: <RxDashboard />,
  },
  {
    title: 'Order History',
    path: routes.orderHistory,
    icon: <CiShoppingCart />,
  },
  {
    title: 'Wishlist',
    path: routes.wishlist,
    icon: <IoIosHeartEmpty />,
  },
  {
    title: 'My Address',
    path: routes.myAddress,
    icon: <CiLocationOn />,
  },
  {
    title: 'Profile Settings',
    path: routes.profileSetting,
    icon: <IoPersonOutline />,
  },
  {
    title: 'Passwords',
    path: routes.password,
    icon: <CiLock />,
  },
]

// Custom MenuItem component for items with submenus
const MenuItemWithSubmenu = ({
  item,
  hideMenu,
}: {
  item: IMenuItemWithSub
  hideMenu: () => void
}): React.ReactElement => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme() // 👈 get current theme

  // Check if current path matches this item or any of its subitems
  const isActiveParent = item.subItems?.some((subItem) => pathname.includes(subItem.path))
  const isActiveSelf = pathname.includes(item.path)
  const active = isActiveSelf || isActiveParent

  const getIcon = () => {
    // For dark theme, prioritize darkIcon for images
    if (theme === 'dark' && item.darkIcon) {
      return active ? item.iconActive || item.darkIcon : item.darkIcon
    }

    // For light theme or items without darkIcon
    if (item.iconActive) {
      return active ? item.iconActive : item.icon
    }

    return item.icon
  }

  const handleToggle = () => {
    if (item.subItems && item.subItems.length > 0) {
      setIsOpen(!isOpen)
    }
  }

  const handleItemClick = () => {
    if (!item.subItems || item.subItems.length === 0) {
      hideMenu()
    } else {
      handleToggle()
    }
  }

  return (
    <li className="mb-1 rounded-lg sm:mt-6">
      {/* Main menu item */}
      {item.subItems && item.subItems.length > 0 ? (
        <button onClick={handleItemClick} className="w-full">
          <div
            className={`w-full h-10 flex items-center rounded-[14px] hover:bg-brand/50 transition-all duration-300 ${
              active ? 'bg-primary-100' : 'shadow-one'
            }`}
          >
            <div
              className={`h-full pl-4 text-[15px] font-semibold font-inter flex gap-x-3 items-center  ${
                active ? 'text-primary-500' : 'text-secondary-500'
              }`}
            >
              {getIcon()}
              <Typography
                variant="large"
                weight="medium"
                className={` text-left ${active ? 'text-primary-500' : 'text-secondary-500'}`}
              >
                {item.title}
              </Typography>
              {/* Plus/Minus icon */}
              <div className="">
                <span
                  className={`text-base font-medium ${
                    active ? 'text-primary-500' : 'text-secondary-500'
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </span>
              </div>
            </div>
          </div>
        </button>
      ) : (
        <Link href={item.path} onClick={handleItemClick}>
          <div
            className={`w-full h-10 flex items-center rounded-lg hover:bg-brand/50 transition-all duration-300 py-7 ${
              active ? 'bg-primary-100' : 'shadow-one'
            }`}
          >
            <div
              className={`h-full pl-4 text-[26px] flex gap-x-3 items-center  ${
                active ? 'text-primary-500' : 'text-secondary-500'
              }`}
            >
              {getIcon()}
              <p
                className={`text-[18px] font-medium ${
                  active ? 'text-primary-500' : 'text-secondary-500'
                }`}
              >
                {item.title}
              </p>
            </div>
          </div>
        </Link>
      )}

      {/* Submenu items */}
      {item.subItems && item.subItems.length > 0 && isOpen && (
        <ul className="mt-1">
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex} className="mb-1">
              <Link href={subItem.path} onClick={hideMenu}>
                <div
                  className={`w-full h-10 flex items-center rounded-lg hover:bg-brand/50 transition-all duration-300 ${
                    pathname.includes(subItem.path) ? 'bg-brand py-2' : 'bg-bgPrimary'
                  }`}
                >
                  <div
                    className={`h-full pl-4 text-[18px] flex gap-x-3 items-center  ${
                      pathname.includes(subItem.path) ? 'text-primary-500' : 'text-secondary-500'
                    }`}
                  >
                    {subItem.icon}
                    <Typography
                      variant="large"
                      weight="semibold"
                      className={`${
                        pathname.includes(subItem.path) ? 'text-primary-500' : 'text-secondary-500'
                      }`}
                    >
                      {subItem.title}
                    </Typography>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export const Sidebar = ({ show, onHide }: ISidebar): React.ReactElement => (
  <aside
    className={`sm:fixed top-0 left-0 z-50 bg-bgPrimary h-screen w-full sm:w-[300px] xl:sticky transition-all duration-300 styledScroll flex flex-col justify-between overflow-y-auto
      ${show ? '' : ' opacity-100  '}
    `}
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
    <style jsx>{`
      aside::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {/* Top section (logo + menu) */}
    <div className=" ">
      <ul className="mt-4 xl:mt-0 py-1">
        {menu.map((item, index) => (
          <MenuItemWithSubmenu item={item} key={index} hideMenu={onHide} />
        ))}
      </ul>
    </div>
  </aside>
)
