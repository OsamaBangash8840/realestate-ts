'use client'
import { useState } from 'react'
import { ToggleTheme, Typography } from '../../common'
import { GoMail } from 'react-icons/go'
import { FaPhoneAlt } from 'react-icons/fa'
import Image from 'next/image'
import { IMenuItem } from '@/app/base/types'
import { MenuItem } from '../MenuItem'
import { RxAvatar } from 'react-icons/rx'
import { IoIosArrowDown } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'
import { HiMenu } from 'react-icons/hi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems: IMenuItem[] = [
  { title: 'Home', path: '/' },
  { title: 'Listings', path: '/profile' },
  { title: 'About', path: '/settings' },
  { title: 'Services', path: '/settings' },
  { title: 'Contact', path: '/settings' },
]

interface IMobileMenu {
  show: boolean
  onHide: () => void
  menuItems: IMenuItem[]
}

// Mobile Menu Component
const MobileMenu = ({ show, onHide, menuItems }: IMobileMenu) => {
  const pathname = usePathname()

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen bg-gradient-to-l from-navBgOne via-navBgTwo to-navBgThree w-[300px] transition-all duration-300 flex flex-col justify-between lg:hidden
        ${show ? '' : 'invisible opacity-0'}
      `}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style jsx>{`
        aside::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Top section (logo + menu) */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex justify-between items-center px-4">
          <Link
            href={'/'}
            className="py-2 md:pt-8 md:pb-12 px-2 flex justify-center flex-1 cursor-pointer"
          >
            <Image src={'/authentication/logo.svg'} alt="Logo" width={154} height={90} />
          </Link>
          <button className=" text-white block  cursor-pointer" onClick={onHide}>
            <RxCross2 size={24} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="mt-10 py-1 px-4">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path
            return (
              <li key={index} className="mb-1 rounded-lg">
                <Link href={item.path} onClick={onHide}>
                  <div
                    className={`w-full h-12 flex items-center rounded-lg hover:bg-primary-500/20 transition-all duration-300 ${
                      isActive ? 'bg-primary-500' : 'bg-bgPrimary'
                    }`}
                  >
                    <div
                      className={`h-full pl-4 text-[18px] flex gap-x-3 items-center flex-1 ${
                        isActive ? 'text-white' : 'text-textPrimaryBody'
                      }`}
                    >
                      <Typography
                        variant="large"
                        weight="semibold"
                        className={`${isActive ? 'text-white' : 'text-textPrimaryBody'}`}
                      >
                        {item.title}
                      </Typography>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const hideMenu = () => {
    setShowMobileMenu(false)
  }

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <>
      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-opacity-50 z-40 lg:hidden" onClick={hideMenu} />
      )}

      {/* Mobile Menu */}
      <MobileMenu show={showMobileMenu} onHide={hideMenu} menuItems={menuItems} />

      <section className="bg-primary-500 flex justify-between px-3 sm:px-16 items-center py-2">
        <div className="flex gap-5">
          <div className="gap-1.5 hidden sm:flex">
            <GoMail className="text-white mt-1" size={18} />
            <Typography
              color="custom"
              customColor="text-white"
              variant="large"
              weight="regular"
              className=""
            >
              sales@luxusrealestate.com
            </Typography>
          </div>
          <div className="gap-1.5 hidden sm:flex">
            <FaPhoneAlt className="text-white mt-1" size={18} />
            <Typography
              color="custom"
              customColor="text-white"
              variant="large"
              weight="regular"
              className=""
            >
              +971 123 456 789
            </Typography>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Typography
            color="custom"
            customColor="text-white"
            variant="medium"
            weight="regular"
            className="uppercase"
          >
            Sign Up
          </Typography>
          <Typography
            color="custom"
            customColor="text-white"
            variant="medium"
            weight="regular"
            className="uppercase"
          >
            Login
          </Typography>
          {/* <div className="flex items-center gap-2 p-2 hidden"> */}
          <div className=" items-center gap-2 p-2 hidden">
            <RxAvatar size={24} className="text-white" />
            <Typography
              variant="large"
              weight="regular"
              color="custom"
              customColor="text-white"
              className="text-textPrimary"
            >
              Mohsin Noor
            </Typography>
            <IoIosArrowDown className="text-white" />
          </div>
          <ToggleTheme />
        </div>
      </section>
      <nav className=" flex justify-between items-center px-3 sm:px-16 navShadow  pt-3">
        {/* Mobile Menu Button */}
        <div className="sm:hidden flex">
          <button onClick={toggleMobileMenu} className="lg:hidden text-white p-2">
            <HiMenu size={24} className=" cursor-pointer" />
          </button>
          <Image
            src="/authentication/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className=" w-[80%] h-[180px] -my-9 -ml-4 "
          />
        </div>
        <Image
          src="/authentication/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className=" w-[231px] h-[60px] -ml-10  hidden sm:block"
        />
        <div className="hidden lg:block">
          <ul className="flex gap-12 ">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} hideMenu={hideMenu} />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <CiSearch size={24} className="text-secondary-500" />
        </div>
      </nav>
    </>
  )
}
