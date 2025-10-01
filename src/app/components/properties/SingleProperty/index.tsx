'use client'
import { MockProperties } from '@/app/base/data'
import { IPropertyItems } from '@/app/base/types'
// import Image from 'next/image'
import { Button, CustomSwiper, ImagesGallery, Typography } from '../../common'
import { FaRegHeart, FaStar } from 'react-icons/fa6'
import { Counter } from '../../shadcn'
import { useState } from 'react'
import { FeaturesList } from '../SingleProductFeatures'
import { SpecificationsGrid } from '../SpecificationsGrid'
import { TestimonialPropertyCard } from '../../home'
import { SwiperSlide } from 'swiper/react'
import { PropertiesCard } from '../PropertiesCard'

interface SinglePropertyProps {
  property: IPropertyItems
  className?: string
}
export const SingleProperty = ({ property }: SinglePropertyProps) => {
  const [number, setNumber] = useState(0)

  // Provide default values for potentially undefined properties
  const rating = property.rating || 0
  const reviews = property.reviews || 0
  const price = property.price || 0
  const originalPrice = property.originalPrice

  return (
    <>
      <section className="sm:flex gap-6 overflow-x-hidden ">
        <div className="flex-1 max-w-[600px]  md:max-w-[390px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[760px] items-center">
          <ImagesGallery images={MockProperties.slice(0, 3).map((prop) => prop.image)} />
        </div>
        <div className="mt-2 flex-1 w-full">
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
          <Typography
            variant="h4"
            weight="bold"
            color="custom"
            customColor="text-secondary-500"
            className="mt-2"
          >
            {property.title || 'Untitled Product'}
          </Typography>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
                  size={25}
                />
              ))}
            </div>
            <Typography
              variant="xlarge"
              weight="regular"
              color="custom"
              customColor="text-secondary-500"
            >
              ({reviews} reviews)
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography variant="h6" weight="bold" customColor="text-secondary-500" color="custom">
              ${price.toFixed(2)}
            </Typography>
            {originalPrice && (
              <Typography variant="medium" color="custom" customColor="text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </Typography>
            )}
          </div>
          <Typography variant="xlarge" weight="regular" className="mt-3">
            {property.description}
          </Typography>
          <div className="flex gap-2 mt-4">
            <Counter number={number} setNumber={setNumber} />
            <Button title="Add to Cart" variant="cart" className="w-full" />
          </div>
          <Button title="Buy Now" variant="primary" className="w-full mt-6" />
          <FeaturesList />
          <div className="px-6 mt-1">
            <Typography variant="h5" weight="bold">
              Features
            </Typography>
            <Typography variant="xlarge" weight="regular" className="mt-3">
              {property.description}
            </Typography>
            <Typography variant="h5" weight="bold" className="mt-5">
              Specifications
            </Typography>
            <Typography variant="xlarge" weight="bold" className="mt-3">
              Capacity
            </Typography>
            <SpecificationsGrid />
            <Typography variant="h5" weight="bold" className="mt-5">
              Product Ratings & Reviews
            </Typography>
            <div className="flex justify-between items-center flex-col w-[200px]">
              <Typography variant="h4" weight="bold" className="mt-5">
                4.9
              </Typography>
              <div className="flex items-center gap-3.5 mt-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
                    size={30}
                  />
                ))}
              </div>
              <Typography variant="xlarge" weight="medium" className="mt-3">
                Based on 40 review
              </Typography>
            </div>
          </div>
          <TestimonialPropertyCard
            name="Khalid Al Farsi"
            img="/home/avatar.svg"
            country="Oman"
            desc="These tanks have endured two extreme Riyadh summers without a hint of fading or algae. The water quality for our livestock is now perfectly secure and reliable."
            stars={5}
          />
          <TestimonialPropertyCard
            name="Khalid Al Farsi"
            img="/home/avatar.svg"
            country="Oman"
            desc="These tanks have endured two extreme Riyadh summers without a hint of fading or algae. The water quality for our livestock is now perfectly secure and reliable."
            stars={5}
          />
        </div>
      </section>
      <div className="mt-20">
        <Typography
          variant="medium"
          weight="regular"
          color="custom"
          customColor="text-secondary-400"
        >
          Related Products
        </Typography>
        <Typography variant="h6" weight="bold" className="mb-4">
          More Related Products{' '}
        </Typography>
        <CustomSwiper
          slidesOnPhone={1}
          slidesOnTablet={2}
          slidesOnDesktop={3}
          slidesOnLargeScreens={3}
          showButtons={true}
          // showPagination={true}
          arrowStyle="default"
        >
          {MockProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertiesCard property={property} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </>
  )
}
