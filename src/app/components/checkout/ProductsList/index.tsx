import Image from 'next/image'
import { Typography } from '../../common'
import { ICartItem } from '@/app/base/types'

interface CartItemProps {
  item: ICartItem
  className?: string
}

export const ProductList = ({ item }: CartItemProps) => {
  return (
    <>
      <div className="flex gap-5 items-center">
        <Image
          src={item.image}
          alt="Img 1"
          width={54}
          height={54}
          className="w-[129px] h-[130px]"
        />
        <div>
          <Typography variant="xlarge">{item.category}</Typography>
          <Typography variant="xlarge" weight="bold">
            {item.title}
          </Typography>
          <Typography variant="large" weight="medium">
            {' '}
            1 x {item.price}
          </Typography>
        </div>
      </div>
    </>
  )
}
