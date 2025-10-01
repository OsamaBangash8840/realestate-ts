// src/components/cart/CouponSection.tsx
'use client'

import { Button, TextField } from '../../common'

export function CouponSection() {
  return (
    <div className="">
      <div className="flex gap-2">
        <TextField placeholder="Coupon Code" />
        <Button title="Apply" />
      </div>
    </div>
  )
}
