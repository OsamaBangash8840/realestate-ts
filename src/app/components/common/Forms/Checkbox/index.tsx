import React from 'react'
import { Typography } from '../../Typography'

interface ITextFieldProps {
  icon?: React.ReactNode
  placeholder?: string
  label?: string
  className?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Checkbox = ({
  icon,
  placeholder,
  className,
  label,
  type = 'text',
  value,
  onChange,
  ...rest
}: ITextFieldProps): React.ReactElement => {
  return (
    <div className="flex justify-between gap-4  w-full ">
      {icon && <span className="text-secondary-500 text-[24px]">{icon}</span>}
      {label && (
        <Typography variant="xlarge" className=" text-secondary-500">
          {label}
        </Typography>
      )}
      <div
        className={`w-full h-[52px] flex justify-end gap-x-3  rounded-[57px] shadow-one px-4 ${className}`}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-[22px] h-[22px] text-primary-500 border-2 border-gray-300 cursor-pointer rounded-full focus:ring-brand appearance-none checked:bg-primary-500 checked:border-primary-500 relative checked:after:content-['o'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center"
          {...rest}
        />
      </div>
    </div>
  )
}
