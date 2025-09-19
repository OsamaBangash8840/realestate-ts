'use client'

import React, { type ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  className?: string
  loading?: boolean
  variant?: 'outline' | 'primary'
  icon?: React.ReactElement
  iconPosition?: 'left' | 'right'
}

export const Button = ({
  title,
  className = '',
  loading = false,
  variant = 'primary',
  icon,
  iconPosition = 'right',
  ...rest
}: IButton): React.ReactElement => {
  const baseStyles =
    'px-5 h-[48px] md:h-[52px] rounded-full justify-center transition-all duration-300 text-sm md:text-base font-medium cursor-pointer inline-flex gap-2 items-center hover:text-primary'

  const variantStyles = {
    outline:
      'shadow-[0px_4px_12px_rgba(0,0,0,0.03)] bg-white hover:border hover:border-primary-500',
    primary:
      'rounded-full bg-primary-500 text-white hover:text-primary hover:bg-white hover:border hover:border-primary-500 hover:text-primary-500',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className} cursor-pointer`}
      disabled={loading}
      {...rest}
    >
      {icon && iconPosition === 'left' && <span className="text-white text-[18px]">{icon}</span>}
      {!loading ? title : 'Loading...'}
      {icon && iconPosition === 'right' && <span className="text-white text-[18px]">{icon}</span>}
    </button>
  )
}
