// src/components/cart/CartSidebar.tsx
'use client'

import { ICartItems } from '@/app/base/types'
import { CouponSection } from '../Coupon'
import { PriceBreakdown } from '../PriceBreakDown'
import { Typography } from '../../common'

interface CartItemProps {
  items: ICartItems
  className?: string
}

export function CartSidebar({ items }: CartItemProps) {
  // Calculate mock totals
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)
  const discount = 0 // Will be dynamic later
  const tax = subtotal * 0.1
  const total = subtotal - discount + tax

  return (
    <div className=" p-3 sm:p-6 space-y-6 sticky top-4">
      <Typography variant="h6" weight="bold">
        Cart Summary
      </Typography>
      {/* Coupon Section */}
      <CouponSection />

      {/* Price Breakdown */}
      <PriceBreakdown subtotal={subtotal} discount={discount} tax={tax} total={total} />
    </div>
  )
}
