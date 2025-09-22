'use client'
import { MockProperties } from '@/app/base/data'
import { HomeBanner } from '../Banner'
import { BenefitsGrid } from '../Benefits'
import { CategoriesGrid } from '../Categories'
import { PropertiesGrid } from '../PropertiesGrid'
import { PropertiesCard } from '../../properties'
import { CustomSwiper } from '../../common'
import { SwiperSlide } from 'swiper/react'
import { VideoSection } from '../VideoSection'
import { BlogsGrid } from '../Blogs'
import { HomeContact } from '../HomeContact'

export const MainHome = () => {
  return (
    <>
      <HomeBanner />
      <CategoriesGrid />
      <BenefitsGrid />

      {/* Properties section with swiper */}
      <section className="px-3 sm:px-16 py-6">
        {/* Section header */}
        <PropertiesGrid
          properties={[]}
          title="Top Selling"
          subtitle="Top Selling Properties"
          isSwiper={true}
        />

        {/* Swiper with individual property cards */}
        <div className="mt-6">
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
      </section>
      <VideoSection />
      {/* Properties section with swiper */}
      <section className="px-3 sm:px-16 py-6">
        {/* Section header */}
        <PropertiesGrid
          properties={[]}
          title="Discount Deal"
          subtitle="Flash Deal On Properties"
          isSwiper={true}
        />

        {/* Swiper with individual property cards */}
        <div className="mt-6">
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
      </section>
      <BlogsGrid />
      <HomeContact />
    </>
  )
}
