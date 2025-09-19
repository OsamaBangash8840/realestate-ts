'use client'
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { CiLock } from 'react-icons/ci'

interface IPasswordFieldProps {
  placeholder?: string
  label?: string
  className?: string
}
export const PasswordField = ({
  placeholder,
  className,
  label,
  ...rest
}: IPasswordFieldProps): React.ReactElement => {
  const [inputType, setInputType] = useState('password')
  return (
    <div className="flex flex-col gap-y-2 w-full ">
      {label && (
        <label className="text-sm font-medium text-left text-secondary-500 ">{label}</label>
      )}
      <div
        className={`w-full h-[52px] flex items-center gap-x-3 rounded-[57px] shadow-one px-4 relative ${className}`}
      >
        <span className="text-tertiary cursor-pointer  ">
          <CiLock size={24} className="text-secondary-500" />
        </span>

        <input
          type={inputType}
          placeholder={placeholder}
          className="placeholder:text-secondary-500 text-sm font-medium text-secondary-500 flex-1 outline-none"
          {...rest}
        />

        {inputType === 'text' ? (
          <BsEyeSlash
            className="absolute top-1/2  cursor-pointer -translate-y-1/2 right-4 text-xl text-secondary-500"
            onClick={() => {
              setInputType((prev) => (prev === 'text' ? 'password' : 'text'))
            }}
          />
        ) : (
          <BsEye
            className="absolute top-1/2 cursor-pointer -translate-y-1/2 right-4 text-xl text-secondary-500"
            onClick={() => {
              setInputType((prev) => (prev === 'text' ? 'password' : 'text'))
            }}
          />
        )}
      </div>
    </div>
  )
}
