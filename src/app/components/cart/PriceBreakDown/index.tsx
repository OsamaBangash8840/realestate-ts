import { Button, Typography } from '../../common'

interface PriceBreakdownProps {
  subtotal: number
  discount: number
  tax: number
  total: number
}
// src/components/cart/PriceBreakdown.tsx
export function PriceBreakdown({ subtotal, discount, tax, total }: PriceBreakdownProps) {
  return (
    <div className="">
      {/* <h3 className="font-semibold text-lg">Order Summary</h3> */}

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <Typography variant="xlarge" weight="medium" className="">
            Subtotal
          </Typography>
          <Typography variant="xlarge" weight="regular">
            1 x <span className="ml-1">${subtotal.toLocaleString()}</span>
          </Typography>
        </div>
        <div className="flex justify-between mt-4">
          <Typography variant="xlarge" weight="medium" className="">
            Shipping
          </Typography>
          <Typography variant="xlarge" weight="regular" color="custom" customColor="text-success">
            Free
          </Typography>
        </div>

        <div className="flex justify-between mt-4">
          <Typography variant="xlarge" weight="medium" className="">
            Tax (10%)
          </Typography>
          <Typography variant="xlarge" weight="regular">
            ${tax.toLocaleString()}
          </Typography>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-${discount.toLocaleString()}</span>
          </div>
        )}

        <Typography variant="large" weight="regular" className="mt-5 rounded-xl shadow-one p-3">
          For Bottled water & Tissue Free Shipping for above 100.00 . (For Water Tanks, the delivery
          is as per the production.) For Road Barriers free shipping for above 50pcs
        </Typography>

        <div className=" pt-2 flex justify-between text-lg font-bold">
          <Typography variant="xlarge" weight="bold">
            Total <span className="text-base font-normal ml-1">(Inclusive of Vat)</span>
          </Typography>
          <Typography variant="xlarge" weight="bold" className="text-blue-600">
            ${total.toLocaleString()}
          </Typography>
        </div>
      </div>
      <Button title="Proceed to Checkout" className="w-full mt-5" />
    </div>
  )
}
