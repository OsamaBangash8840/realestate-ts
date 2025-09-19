'use client'

import { useTheme } from '@/providers'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full hover:bg-secondary inline-flex justify-center items-center bg-white dark:bg-black text-primary-500 cursor-pointer hover:text-bgPrimary transition-all duration-300"
    >
      {theme === 'light' ? (
        <MdOutlineLightMode className="text-xl" />
      ) : (
        <MdOutlineDarkMode className="text-xl" />
      )}
    </button>
  )
}
