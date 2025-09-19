import React, { ElementType } from 'react'
import clsx from 'clsx'

type Weight = 'regular' | 'medium' | 'semibold' | 'bold'
type Color = 'textBrand' | 'primary' | 'secondary' | 'primaryBody' | 'custom'
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'xlarge' | 'large' | 'medium' | 'small'

interface ITypography {
  variant?: Variant
  weight?: Weight
  children: React.ReactNode
  as?: ElementType
  className?: string
  color?: Color
  customColor?: string // Can be hex, rgb, or Tailwind classes like 'text-red-500'
}

const tags: Record<Variant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  xlarge: 'p',
  large: 'p',
  medium: 'p',
  small: 'p',
}

const sizes: Record<Variant, string> = {
  h1: 'text-[56px] 2xl:text-[72px] xl:leading-[72px] font-bold leading-[61px]',
  h2: 'text-[48px] 2xl:text-[54px] xl:text-[60px] leading-[52px] xl:leading-[72px] font-bold',
  h3: 'text-[40px] 2xl:text-[40px] font-bold',
  h4: 'text-[32px] font-bold 2xl:text-[42px]',
  h5: 'text-[24px] font-bold 2xl:text-[30px]',
  h6: 'text-[20px] font-bold 2xl:text-[27px]',
  xlarge: 'text-[18px] 2xl:text-[24px]',
  large: 'text-base 2xl:text-[20px]',
  medium: 'text-sm 2xl:text-[18px]',
  small: 'text-xs 2xl:text-[16px]',
}

const weights: Record<Weight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const colors: Record<Color, string> = {
  textBrand: 'text-gray-700',
  primary: 'text-secondary-500',
  primaryBody: 'text-white',
  secondary: 'text-textSecondaryBody',
  custom: '', // Empty string for custom colors
}

export const Typography = ({
  variant = 'large',
  weight = 'regular',
  color = 'primary',
  children,
  as,
  className,
  customColor,
}: ITypography) => {
  const Tag = as ?? tags[variant]

  let colorClass = colors[color]
  let inlineStyle = undefined

  if (color === 'custom' && customColor) {
    // Check if it's a Tailwind class (starts with text-)
    if (customColor.startsWith('text-')) {
      colorClass = customColor
    } else {
      // It's a custom color value (hex, rgb, etc.)
      colorClass = ''
      inlineStyle = { color: customColor }
    }
  }

  return (
    <Tag
      className={clsx(sizes[variant], weights[weight], colorClass, className)}
      style={inlineStyle}
    >
      {children}
    </Tag>
  )
}
