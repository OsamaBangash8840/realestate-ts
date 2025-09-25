'use client'
import Image from 'next/image'
import { CustomSwiper, Typography } from '../../common'
import { SwiperSlide } from 'swiper/react'

const clients = [
  { id: 1, img: '/clients/client1.svg' },
  { id: 2, img: '/clients/client2.svg' },
  { id: 3, img: '/clients/client3.svg' },
  { id: 4, img: '/clients/client4.svg' },
  { id: 5, img: '/clients/client5.svg' },
  { id: 6, img: '/clients/client6.svg' },
  { id: 7, img: '/clients/client7.svg' },
  { id: 8, img: '/clients/client1.svg' },
]

export const OurClients = () => {
  return (
    <section className="py-6 mt-4">
      <Typography
        variant="medium"
        weight="regular"
        color="custom"
        customColor="text-secondary-400"
        className="flex justify-center items-center uppercase"
      >
        Clients
      </Typography>
      <Typography
        variant="h6"
        weight="bold"
        color="custom"
        customColor="text-secondary-500"
        className="flex justify-center items-center mb-6"
      >
        Our Valuable Clients
      </Typography>

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center px-20">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client.img}
            alt={`Client ${index + 1}`}
            width={120}
            height={60}
            className="object-contain"
          />
        ))}
      </div> */}
      <div className="px-3 sm:px-28">
        <CustomSwiper
          slidesOnPhone={2}
          slidesOnTablet={4}
          slidesOnDesktop={5}
          slidesOnLargeScreens={6}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={client.id}>
              <Image
                key={index}
                src={client.img}
                alt={`Client ${index + 1}`}
                width={120}
                height={60}
                className="object-contain w-[152px] h-[100px]"
              />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </section>
  )
}
