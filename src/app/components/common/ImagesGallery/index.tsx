'use client'

import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { Lightbox } from 'react-modal-image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CiImageOn } from 'react-icons/ci'

interface ImagesGalleryProps {
  images: string[]
}

export const ImagesGallery: React.FC<ImagesGalleryProps> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [openLightBox, setOpenLightbox] = useState<boolean>(false)
  const [urlToLargeImageFile, setUrlToLargeImageFile] = useState<string>('')

  const ref = useRef<Slider>(null)

  const previewSettings = {
    dots: false,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: images.length > 1,
    autoplaySpeed: 4000,
  }

  return (
    <section className="flex-1 mt-7 w-full items-center">
      <div className="min-w-0 relative">
        {openLightBox && (
          <Lightbox
            medium={urlToLargeImageFile}
            large={urlToLargeImageFile}
            onClose={() => setOpenLightbox(false)}
          />
        )}

        <Slider {...previewSettings} ref={ref} afterChange={(i: number) => setActiveSlide(i)}>
          {images.map((image, index) => (
            <div
              onClick={() => {
                setUrlToLargeImageFile(image)
                setOpenLightbox(true)
              }}
              key={index}
              className="cursor-pointer w-full h-[350px] md:h-[250px] xl:h-[450px] rounded-2xl overflow-hidden"
            >
              <Image
                src={image}
                alt={`Property image ${index + 1}`}
                width={600}
                height={450}
                className="w-full h-full md:h-[250px] xl:h-full rounded-2xl object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>

        {/* Overlay showing 1/n */}
        <div className="flex text-white absolute bottom-2 left-2 bg-black/65 px-3 py-1 gap-1 rounded-md">
          <CiImageOn className="mt-1" />
          <span>
            {activeSlide + 1}/{images.length}
          </span>
        </div>
      </div>

      {/* 👇 Thumbnails Section */}
      <div className="mt-7">
        {/* Mobile: horizontal scroll */}
        <div className="flex sm:hidden gap-3 overflow-x-auto whitespace-nowrap pb-2">
          {images.map((image, i) => (
            <div
              key={i}
              className={`inline-block cursor-pointer focus:outline-none relative rounded-2xl overflow-hidden min-w-[100px] max-w-[120px] ${
                activeSlide !== i &&
                'before:content-[""] before:absolute before:inset-0 before:w-full before:h-full before:bg-black/60'
              }`}
              onClick={() => {
                ref.current?.slickGoTo(i)
                setActiveSlide(i)
              }}
            >
              <Image
                src={image}
                alt={`Thumbnail ${i + 1}`}
                width={120}
                height={90}
                className="w-[100px] h-[75px] rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden sm:flex flex-wrap justify-center gap-5">
          {images.map((image, i) => (
            <div
              key={i}
              className={`flex-1 min-w-[150px] max-w-[180px] cursor-pointer focus:outline-none relative rounded-2xl overflow-hidden ${
                activeSlide !== i &&
                'before:content-[""] before:absolute before:inset-0 before:w-full before:h-full before:bg-black/60'
              }`}
              onClick={() => {
                ref.current?.slickGoTo(i)
                setActiveSlide(i)
              }}
            >
              <Image
                src={image}
                alt={`Thumbnail ${i + 1}`}
                width={160}
                height={110}
                className="w-full h-[110px] md:h-[120px] rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
