'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

interface ITextFieldProps {
  icon?: React.ReactNode
  placeholder?: string
  label?: string
  className?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = ({
  icon,
  placeholder,
  className,
  label,
  type = 'text',
  value,
  onChange,
  ...rest
}: ITextFieldProps): React.ReactElement => {
  const pathname = usePathname()
  const isContact = pathname === '/contact'

  return (
    <div className="flex flex-col gap-y-1.5 w-full">
      {label && (
        <label className={`text-sm text-start ${isContact ? 'text-white' : 'text-secondary-500'}`}>
          {label}
        </label>
      )}

      <div
        className={`w-full h-[52px] flex items-center gap-x-3 rounded-[57px] ${
          isContact ? 'border border-white/50' : 'shadow-one'
        } px-4 ${className}`}
      >
        {icon && <span className="text-secondary-500">{icon}</span>}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`flex-1 outline-none placeholder:text-base ${
            isContact
              ? 'placeholder:text-white text-white autofill-white'
              : 'placeholder:text-secondary-500 text-secondary-500 autofill-secondary'
          }`}
          {...rest}
        />
      </div>
    </div>
  )
}
