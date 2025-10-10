import { IPropertyItems } from '@/app/base/types'
import Image from 'next/image'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { Typography } from '../../common'
import Link from 'next/link'
import { routes } from '@/app/base/constants'

interface IPropertyProps {
  property: IPropertyItems
  className?: string
}

export const PropertiesCard = ({ property }: IPropertyProps) => {
  // Add null checks for optional properties
  const discountPercentage =
    property.originalPrice && property.price
      ? Math.round(((property.originalPrice - property.price) / property.originalPrice) * 100)
      : 0

  // Provide default values for potentially undefined properties
  const rating = property.rating || 0
  const reviews = property.reviews || 0
  const price = property.price || 0
  const originalPrice = property.originalPrice

  return (
    <div className="">
      <div className="relative">
        <div className="bg-gray-50 rounded-2xl">
          <div className="flex justify-center items-center">
            <Image
              src={property.image || '/placeholder.jpg'}
              alt={property.title || 'Product image'}
              width={400}
              height={190}
              className="w-[280px] h-[230px] 2xl:w-[340px] 2xl:h-[280px] rounded-2xl object-cover mt-10"
            />
          </div>
          <div className="flex justify-between items-center px-4">
            <Image
              src={'/home/warrantyImg.svg'}
              alt={property.title || 'Product image'}
              width={400}
              height={190}
              className="w-[50px] h-[50px]"
            />
            <Image
              src={'/home/uaeImg.svg'}
              alt={property.title || 'Product image'}
              width={400}
              height={190}
              className="w-[50px] h-[50px]"
            />
          </div>
        </div>
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-4 bg-primary-500 text-white px-2 py-1 rounded-full text-xs">
            <Typography
              variant="medium"
              weight="regular"
              color="custom"
              customColor="text-white"
              className="px-2 py-0.5"
            >
              Best Selling
            </Typography>
          </div>
        )}
      </div>

      <div className="px-2">
        <div className="flex justify-between items-center mt-4">
          <Typography
            variant="xlarge"
            weight="regular"
            color="custom"
            customColor="text-secondary-500"
          >
            {property.category || 'Unknown Category'}
          </Typography>
          <FaRegHeart
            size={24}
            className="cursor-pointer text-secondary-500 hover:text-red-500 mr-2"
          />
        </div>
        <Link href={routes.singleProduct}>
          <Typography variant="h6" weight="bold" color="custom" customColor="text-secondary-500">
            {property.title || 'Untitled Product'}
          </Typography>
        </Link>

        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
                size={20}
              />
            ))}
          </div>
          <Typography
            variant="large"
            weight="regular"
            color="custom"
            customColor="text-secondary-500"
          >
            ({reviews} reviews)
          </Typography>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Typography variant="large" weight="bold" customColor="text-secondary-500" color="custom">
            ${price.toFixed(2)}
          </Typography>
          {originalPrice && (
            <Typography variant="medium" color="custom" customColor="text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </Typography>
          )}
        </div>
      </div>
    </div>
  )
}
