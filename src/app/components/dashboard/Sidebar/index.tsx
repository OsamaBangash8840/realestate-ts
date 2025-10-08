import React, { useState } from 'react'
// import { MenuItem } from "../MenuItem";
import Image from 'next/image'
import { IoHomeOutline } from 'react-icons/io5'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { Typography } from '@/app/components/common'
import { IMenuItem } from '@/app/base/types'
import { AiOutlinePieChart } from 'react-icons/ai'
import { IoIosChatboxes } from 'react-icons/io'
import { FaRegUser } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { PiAddressBook } from 'react-icons/pi'
// import { IoSettingsOutline } from "react-icons/io5";
import { useTheme } from '@/providers'
import { usePathname } from 'next/navigation'
import { routes } from '@/app/base/constants'

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
    icon: <IoHomeOutline />,
  },
  {
    title: 'Jobs Oversight',
    path: routes.jobsOversight,
    icon: <PiAddressBook />,
  },
  {
    title: 'User Management',
    path: routes.userManagementCorporate,
    icon: <FaUsers />,
    subItems: [
      {
        title: 'Corporate',
        path: routes.userManagementCorporate,
      },
      {
        title: 'Recruiter',
        path: routes.userManagementRecruiter,
      },
    ],
  },
  {
    title: 'Platform Users',
    path: routes.platformUsers,
    icon: <FaRegUser />,
  },
  {
    title: 'Payment Monitoring',
    path: routes.paymentMonitoring,
    icon: (
      <Image
        src={'/dashboard/paymentMonitoring.svg'}
        alt="Payment Monitoring"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    iconActive: (
      <Image
        src={'/dashboard/paymentMonitoringWhite.svg'}
        alt="Payment Monitoring"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    darkIcon: (
      <Image
        src={'/dashboard/DarkPaymentmonitoring.svg'}
        alt="Payment Monitoring"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
  },
  {
    title: 'Transactions',
    path: routes.transactionsMonitoring,
    icon: <RiMoneyDollarCircleLine />,
  },
  {
    title: 'Reports and Analytics',
    path: routes.reportsAndAnalytics,
    icon: <AiOutlinePieChart />,
  },
  {
    title: 'Disputes',
    path: routes.disputes,
    icon: <IoIosChatboxes />,
  },
  {
    title: 'Platform Configration',
    path: routes.platformConfiguration,
    icon: (
      <Image
        src={'/dashboard/newspapper-outline.svg'}
        alt="Payment Monitoring"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    iconActive: (
      <Image
        src={'/dashboard/newspapper-outline-1.svg'}
        alt="Payment Monitoring"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    darkIcon: (
      <Image
        src={'/dashboard/Darknewspapper-outline.svg'}
        alt="Payment Monitoring"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    subItems: [
      {
        title: 'Fees Configuration',
        path: routes.feesConfiguration,
      },
      {
        title: 'Coupons',
        path: routes.coupons,
      },
    ],
  },
  // {
  //   title: "Settings",
  //   path:routes.verification,
  //   icon: <IoSettingsOutline />,
  // },
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
    <li className="mb-1 rounded-lg">
      {/* Main menu item */}
      {item.subItems && item.subItems.length > 0 ? (
        <button onClick={handleItemClick} className="w-full">
          <div
            className={`w-full h-10 flex items-center rounded-lg hover:bg-brand/50 transition-all duration-300 ${
              active ? 'bg-brand py-2' : 'bg-bgPrimary'
            }`}
          >
            <div
              className={`h-full pl-4 text-[15px] font-semibold font-inter flex gap-x-3 items-center flex-1 ${
                active ? 'text-white' : 'text-textPrimaryBody'
              }`}
            >
              {getIcon()}
              <Typography
                variant="large"
                weight="medium"
                className={`flex-1 text-left ${active ? 'text-white' : 'text-textPrimaryBody'}`}
              >
                {item.title}
              </Typography>
              {/* Plus/Minus icon */}
              <div className="pr-3">
                <span
                  className={`text-base font-medium ${
                    active ? 'text-white' : 'text-textPrimaryBody'
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
            className={`w-full h-10 flex items-center rounded-lg hover:bg-brand/50 transition-all duration-300 ${
              active ? 'bg-brand py-2' : 'bg-bgPrimary'
            }`}
          >
            <div
              className={`h-full pl-4 text-[18px] flex gap-x-3 items-center flex-1 ${
                active ? 'text-white' : 'text-textPrimaryBody'
              }`}
            >
              {getIcon()}
              <Typography
                variant="large"
                weight="semibold"
                className={`${active ? 'text-white' : 'text-textPrimaryBody'}`}
              >
                {item.title}
              </Typography>
            </div>
          </div>
        </Link>
      )}

      {/* Submenu items */}
      {item.subItems && item.subItems.length > 0 && isOpen && (
        <ul className="mt-1 ml-6">
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex} className="mb-1">
              <Link href={subItem.path} onClick={hideMenu}>
                <div
                  className={`w-full h-10 flex items-center rounded-lg hover:bg-brand/50 transition-all duration-300 ${
                    pathname.includes(subItem.path) ? 'bg-brand py-2' : 'bg-bgPrimary'
                  }`}
                >
                  <div
                    className={`h-full pl-4 text-[18px] flex gap-x-3 items-center flex-1 ${
                      pathname.includes(subItem.path) ? 'text-white' : 'text-textPrimaryBody'
                    }`}
                  >
                    {subItem.icon}
                    <Typography
                      variant="large"
                      weight="semibold"
                      className={`${
                        pathname.includes(subItem.path) ? 'text-white' : 'text-textPrimaryBody'
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
    className={`fixed top-0 left-0 z-50 bg-bgPrimary h-screen w-[300px] xl:sticky transition-all duration-300 styledScroll border-r border-gray-100 flex flex-col justify-between overflow-y-auto
      ${show ? '' : 'invisible opacity-0 xl:opacity-100 xl:visible '}
    `}
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
    <style jsx>{`
      aside::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {/* Top section (logo + menu) */}
    <div className="flex-1 ">
      <div className="flex justify-between items-center px-4">
        <Link href={'/'} className="py-2 md:pt-8 md:pb-12 px-2 flex justify-center xl:flex-1">
          <Image src={'/auth/SanadLogo.svg'} alt="Logo" width={124} height={39} />
        </Link>
        <button className="text-xl text-brand block xl:hidden" onClick={onHide}>
          <RxCross2 />
        </button>
      </div>

      <ul className="mt-10 xl:mt-0 py-1 px-4">
        {menu.map((item, index) => (
          <MenuItemWithSubmenu item={item} key={index} hideMenu={onHide} />
        ))}
      </ul>
    </div>

    {/* Bottom profile section */}
    <div className="flex items-center gap-4 ml-7 p-2">
      <Image
        src={'/dashboard/Avatar.svg'}
        alt=""
        width={84}
        height={84}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
      />
      <div>
        <Typography variant="xlarge" weight="bold" className="text-textPrimary">
          Mohsin Noor
        </Typography>
        <Typography variant="medium" className="text-textPrimaryBody block">
          Joined in August 2014
        </Typography>
      </div>
      <IoIosArrowForward className="ml-4" />
    </div>
  </aside>
)
