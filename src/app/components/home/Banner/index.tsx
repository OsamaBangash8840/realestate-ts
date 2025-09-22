'use client'
import { SwiperSlide } from 'swiper/react'
import { Button, CustomSwiper, Typography } from '../../common'

export const HomeBanner = () => {
  return (
    <section className="">
      <CustomSwiper
        slidesOnPhone={1}
        slidesOnTablet={1}
        slidesOnDesktop={1}
        slidesOnLargeScreens={1}
        showButtons={true}
        showPagination={true}
        arrowStyle="minimal"
      >
        <SwiperSlide>
          <div
            className="bg-secondary h-[450px] md:h-[580px] 2xl:h-[700px] w-full gap-5 bg-cover bg-center bg-no-repeat sm:px-12 sm:pt-48 pt-12"
            style={{
              backgroundImage: `url('/home/banner1.jpg')`, // Fixed: Added url() wrapper
            }}
          >
            <div className="bg-primary-500/40 sm:py-3 px-4 py-1.5 w-[390px] sm:w-[600px] rounded-lg">
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className="uppercase"
              >
                Find Your Dream Home
              </Typography>
              <Typography variant="h4" weight="bold" color="primaryBody" className="sm:mt-2 mt-1">
                Find Your Perfect Home.
              </Typography>
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className=" sm:mt-2 mt-1"
              >
                Discover premium properties designed for modern living. Whether it’s an apartment,
                villa, or farmhouse — your dream home is just a click away.
              </Typography>
              <Button title="Browse Properties" className="sm:mt-6 mt-3" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-secondary h-[450px] md:h-[580px] 2xl:h-[700px] w-full gap-5 bg-cover bg-center bg-no-repeat sm:px-12 sm:pt-48 pt-12"
            style={{
              backgroundImage: `url('/home/banner4.jpg')`, // Fixed: Added url() wrapper
            }}
          >
            <div className="bg-primary-500/40 sm:py-3 px-4 py-1.5 w-[390px] sm:w-[600px] rounded-lg">
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className="uppercase"
              >
                Invest with Confidence
              </Typography>
              <Typography variant="h4" weight="bold" color="primaryBody" className="sm:mt-2 mt-1">
                Smart Investments. Endless Possibilities.
              </Typography>
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className=" sm:mt-2 mt-1"
              >
                Explore properties with high rental yield and long-term value. From commercial
                spaces to residential plots, make secure investments today.
              </Typography>
              <Button title="Start Investing" className="sm:mt-6 mt-3" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-secondary h-[450px] md:h-[580px] 2xl:h-[700px] w-full gap-5 bg-cover bg-center bg-no-repeat sm:px-12 sm:pt-48 pt-12"
            style={{
              backgroundImage: `url('/home/banner5.jpg')`, // Fixed: Added url() wrapper
            }}
          >
            <div className="bg-primary-500/40 sm:py-3 px-4 py-1.5 w-[390px] sm:w-[600px] rounded-lg">
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className="uppercase"
              >
                Rent Made Easy
              </Typography>
              <Typography variant="h4" weight="bold" color="primaryBody" className="sm:mt-2 mt-1">
                Find Rentals That Fit Your Life.
              </Typography>
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className="sm:mt-2 mt-1"
              >
                Affordable, flexible, and verified rental listings for families, professionals, and
                students. Move into your new home with ease and confidence.
              </Typography>
              <Button title="View Rentals" className="sm:mt-6 mt-3" />
            </div>
          </div>
        </SwiperSlide>
      </CustomSwiper>
    </section>
  )
}
