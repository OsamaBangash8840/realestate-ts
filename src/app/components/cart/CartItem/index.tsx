// CartItem.tsx
'use client'
import { ICartItem } from '@/app/base/types'
import Image from 'next/image'
import { Typography } from '../../common'
import { Counter } from '../../shadcn'
import { useState } from 'react'
import { CiTrash } from 'react-icons/ci'

interface CartItemProps {
  item: ICartItem
  className?: string
}

export const CartItem = ({ item }: CartItemProps) => {
  const [number, setNumber] = useState(0)
  return (
    <div className="flex px-0.5 mt-3 py-2 gap-10 rounded-[14px] shadow-one">
      <div className="relative flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          width={250}
          height={200}
          className="object-cover rounded-2xl w-[250px] h-[200px]"
        />
      </div>

      <div className="flex-1">
        <Typography variant="xlarge"> {item.category}</Typography>
        <Typography variant="h6" weight="bold" className="mt-5">
          {item.title}
        </Typography>
        <Typography variant="large" weight="medium" className="mt-3">
          1 x <span className="font-bold ml-1 ">${item.price}</span>
        </Typography>
        <Counter
          number={number}
          setNumber={setNumber}
          className="w-[115px] flex justify-center items-center"
        />
      </div>

      <button className="text-red-500 hover:text-red-700 p-2 h-fit">
        <CiTrash size={26} className="" />
      </button>
    </div>
  )
}
