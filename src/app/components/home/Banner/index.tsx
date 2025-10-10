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
              backgroundImage: `url('/home/banner4.png')`, // Fixed: Added url() wrapper
            }}
          >
            <div className=" sm:py-3 px-4 py-1.5 w-[390px] sm:w-[600px] rounded-lg">
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className="uppercase"
              >
                POLYSAVE A TRUSTED PARTNER
              </Typography>
              <Typography variant="h4" weight="bold" color="primaryBody" className="sm:mt-2 mt-1">
                Built to Last. Engineered for Your Life.
              </Typography>
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className=" sm:mt-2 mt-1"
              >
                Premium, durable water and storage tanks designed for homes, farms, and industry.
                Get cleaner water and unwavering reliability.
              </Typography>
              <Button title="Shop Products" className="sm:mt-6 mt-3" />
            </div>
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div
            className="bg-secondary h-[450px] md:h-[580px] 2xl:h-[700px] w-full gap-5 bg-cover bg-center bg-no-repeat sm:px-12 sm:pt-48 pt-12"
            style={{
              backgroundImage: `url('/home/banner4.png')`, // Fixed: Added url() wrapper
            }}
          >
            <div className=" sm:py-3 px-4 py-1.5 w-[390px] sm:w-[600px] rounded-lg">
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className="uppercase"
              >
                POLYSAVE A TRUSTED PARTNER
              </Typography>
              <Typography variant="h4" weight="bold" color="primaryBody" className="sm:mt-2 mt-1">
                Built to Last. Engineered for Your Life.
              </Typography>
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className=" sm:mt-2 mt-1"
              >
                Premium, durable water and storage tanks designed for homes, farms, and industry.
                Get cleaner water and unwavering reliability.
              </Typography>
              <Button title="Shop Products" className="sm:mt-6 mt-3" />
            </div>
          </div>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <div
            className="bg-secondary h-[450px] md:h-[580px] 2xl:h-[700px] w-full gap-5 bg-cover bg-center bg-no-repeat sm:px-12 sm:pt-48 pt-12"
            style={{
              backgroundImage: `url('/home/banner4.png')`, // Fixed: Added url() wrapper
            }}
          >
            <div className=" sm:py-3 px-4 py-1.5 w-[390px] sm:w-[600px] rounded-lg">
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className="uppercase"
              >
                POLYSAVE A TRUSTED PARTNER
              </Typography>
              <Typography variant="h4" weight="bold" color="primaryBody" className="sm:mt-2 mt-1">
                Built to Last. Engineered for Your Life.
              </Typography>
              <Typography
                variant="large"
                weight="regular"
                color="primaryBody"
                className=" sm:mt-2 mt-1"
              >
                Premium, durable water and storage tanks designed for homes, farms, and industry.
                Get cleaner water and unwavering reliability.
              </Typography>
              <Button title="Shop Products" className="sm:mt-6 mt-3" />
            </div>
          </div>
        </SwiperSlide>
      </CustomSwiper>
    </section>
  )
}
