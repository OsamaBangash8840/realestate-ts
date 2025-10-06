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
  label,
  type = 'checkbox',
  onChange,
}: ITextFieldProps): React.ReactElement => {
  return (
    <div className="flex justify-between gap-4 w-full shadow-one py-5 px-3.5 rounded-[14px] mt-2">
      <div className="flex gap-4 items-center">
        {icon && <span className="text-secondary-500 text-[24px]">{icon}</span>}
        {label && (
          <Typography variant="xlarge" className="text-secondary-500">
            {label}
          </Typography>
        )}
      </div>

      <input
        type={type}
        onChange={onChange}
        className="w-[22px] h-[22px] cursor-pointer rounded-full appearance-none border-2 border-gray-300 focus:ring-2 focus:ring-secondary-500 focus:ring-offset-1 checked:border-[4px] checked:border-white checked:bg-secondary-500 transition-all"
      />
    </div>
  )
}
