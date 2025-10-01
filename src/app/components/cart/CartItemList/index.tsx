import { ICartItems } from '@/app/base/types'
import { Typography } from '../../common'
import { CartItem } from '../CartItem'

interface CartItemProps {
  items: ICartItems
  className?: string
}

export const CartItemList = ({ items }: CartItemProps) => {
  return (
    <>
      <Typography variant="h6" weight="bold">
        Cart <span className="text-base font-normal ml-1">{items.length} Product</span>
      </Typography>
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}
