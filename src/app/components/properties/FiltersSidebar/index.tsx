'use client'
import { IFilterItem } from '@/app/base/types'
import { Button, Typography } from '../../common'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

const menuItems: IFilterItem[] = [
  { title: '400 USG' },
  { title: '500 USG' },
  { title: '600 USG' },
  { title: '700 USG' },
  { title: '800 USG' },
  { title: '900 USG' },
  { title: '1000 USG' },
  { title: '1500 USG' },
  { title: '3000 USG' },
]

interface IMobileFilter {
  show: boolean
  onHide: () => void
  menuItems: IFilterItem[]
}

const MobileFilterMenu = ({ show, onHide, menuItems }: IMobileFilter) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen bg-white w-[250px] transition-all duration-300 flex flex-col justify-between items-center xl:hidden
        ${show ? 'translate-x-0' : '-translate-x-full'}
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
        <div className="flex justify-end items-center px-4">
          <button className="text-primary-500 block cursor-pointer mt-2" onClick={onHide}>
            <RxCross2 size={24} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className=" py-1 px-4">
          <FilterContent menuItems={menuItems} />
        </div>
      </div>
    </aside>
  )
}

// Extracted filter content component to avoid duplication
const FilterContent = ({ menuItems }: { menuItems: IFilterItem[] }) => {
  const checkboxClassName =
    "w-[22px] h-[22px] text-primary-500 border-2 border-gray-300 cursor-pointer rounded-lg focus:ring-brand appearance-none checked:bg-primary-500 checked:border-primary-500 relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center"

  return (
    <div className="shadow-one px-4">
      <Typography variant="xlarge" weight="medium">
        Tank Size
      </Typography>
      <div className="space-y-4 mt-5 shadow-one pb-3 rounded-[14px]">
        {menuItems.map((item) => {
          return (
            <label key={item.title} className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                {item.title}
              </Typography>
            </label>
          )
        })}
      </div>

      <Typography variant="xlarge" weight="medium" className="mt-6">
        Price
      </Typography>
      <div className="space-y-4 mt-5 shadow-one pb-3  rounded-[14px]">
        <label className="flex gap-6 items-center cursor-pointer">
          <input type="checkbox" className={checkboxClassName} />
          <Typography variant="large" className="" weight="regular">
            $0 - $1000
          </Typography>
        </label>
        <label className="flex gap-6 items-center cursor-pointer">
          <input type="checkbox" className={checkboxClassName} />
          <Typography variant="large" className="" weight="regular">
            $1000 - $5000
          </Typography>
        </label>
      </div>

      <Typography variant="xlarge" weight="medium" className="mt-6">
        Type
      </Typography>
      <div className="space-y-4 mt-5 shadow-one pb-3  rounded-[14px]">
        <label className="flex gap-6 items-center cursor-pointer">
          <input type="checkbox" className={checkboxClassName} />
          <Typography variant="large" className="" weight="regular">
            Vertical
          </Typography>
        </label>
        <label className="flex gap-6 items-center cursor-pointer">
          <input type="checkbox" className={checkboxClassName} />
          <Typography variant="large" className="" weight="regular">
            Horizontal
          </Typography>
        </label>
      </div>
      <Button title="Apply" variant="primary" className="w-full mt-8 2xl:mt-11 xl:hidden" />
    </div>
  )
}

export const FiltersSidebar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const hideFilterMenu = () => {
    setShowMobileMenu(false)
  }

  const toggleFilterMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <>
      {/* Mobile Menu Overlay - only show on smaller screens */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-white/35 z-40 xl:hidden" onClick={hideFilterMenu} />
      )}

      {/* Mobile Filter Button - visible from sm to lg */}
      <button
        onClick={toggleFilterMenu}
        className="xl:hidden  z-30 bg-white rounded-[99px] shadow-one px-4 hover:bg-primary-600 transition-colors duration-200"
      >
        {/* <HiOutlineAdjustmentsHorizontal size={24} /> */}
        <Typography variant="large" weight="regular" className="py-1">
          Filter
        </Typography>
      </button>

      {/* Mobile Menu */}
      <MobileFilterMenu show={showMobileMenu} onHide={hideFilterMenu} menuItems={menuItems} />

      {/* Desktop Sidebar - always visible on XL screens */}
      <aside className="hidden xl:block xl:sticky xl:top-4 xl:h-fit w-[240px]">
        <div className="bg-white">
          <FilterContent menuItems={menuItems} />
        </div>
      </aside>
    </>
  )
}
