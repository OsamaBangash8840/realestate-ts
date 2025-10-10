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
      <div className="flex gap-5 items-center shadow-one mt-5 rounded-[14px]">
        <div className="bg-gray-50 rounded-2xl px-2">
          <div className="flex justify-between items-center px-1">
            <Image
              src={'/home/warrantyImg.svg'}
              alt={'Product image'}
              width={400}
              height={190}
              className="w-[20px] h-[20px]"
            />
            <Image
              src={'/home/uaeImg.svg'}
              alt={'Product image'}
              width={400}
              height={190}
              className="w-[20px] h-[20px]"
            />
          </div>
          <Image
            src={item.image}
            alt="Img 1"
            width={54}
            height={54}
            className="w-[97px] h-[80px]"
          />
        </div>
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
