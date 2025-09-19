'use client'
import { Pagination, Autoplay } from 'swiper/modules'
import React, { useRef, ReactNode } from 'react'
import { FaRegCirclePause } from 'react-icons/fa6'
import { Swiper } from 'swiper/react'
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaArrowRight,
  FaCaretLeft,
  FaCaretRight,
} from 'react-icons/fa6'
import { IconType } from 'react-icons'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Types
type ArrowStyleType = 'default' | 'minimal' | 'bold' | 'caret' | 'custom'

interface ArrowConfig {
  leftIcon: IconType
  rightIcon: IconType
  buttonClass: string
  containerClass: string
  iconClass: string
}

interface CustomSwiperProps {
  children: ReactNode
  slidesOnPhone: number
  slidesOnTablet: number
  slidesOnDesktop: number
  slidesOnLargeScreens: number
  showPagination?: boolean
  showButtons?: boolean
  arrowStyle?: ArrowStyleType
  customArrowConfig?: Partial<ArrowConfig>
  leftArrowPosition?: string
  rightArrowPosition?: string
}

// Arrow style configurations
const ARROW_STYLES: Record<ArrowStyleType, ArrowConfig> = {
  default: {
    leftIcon: FaChevronLeft,
    rightIcon: FaChevronRight,
    buttonClass: 'bg-slate-100 flex justify-center items-center h-9 w-9 rounded-[2rem]',
    containerClass:
      'bg-white top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-[2rem] flex justify-center items-center',
    iconClass: 'text-gray-500',
  },
  minimal: {
    leftIcon: FaChevronLeft,
    rightIcon: FaChevronRight,
    buttonClass: ' flex justify-center items-center h-8 w-8 transition-colors',
    containerClass: 'bottom-4 z-40 h-8 w-8',
    iconClass: 'text-white text-[24px] hover:text-white/30',
  },
  bold: {
    leftIcon: FaArrowLeft,
    rightIcon: FaArrowRight,
    buttonClass:
      'bg-blue-500 hover:bg-blue-600 flex justify-center items-center h-10 w-10 rounded-lg transition-colors',
    containerClass: 'top-1/2 -translate-y-1/2 z-40 h-10 w-10',
    iconClass: 'text-white text-sm',
  },
  caret: {
    leftIcon: FaCaretLeft,
    rightIcon: FaCaretRight,
    buttonClass:
      'bg-black bg-opacity-20 hover:bg-opacity-30 flex justify-center items-center h-12 w-12 rounded-full transition-all',
    containerClass: 'top-1/2 -translate-y-1/2 z-40 h-12 w-12',
    iconClass: 'text-white text-xl',
  },
  custom: {
    leftIcon: FaChevronLeft,
    rightIcon: FaChevronRight,
    buttonClass: '',
    containerClass: '',
    iconClass: '',
  },
}

export const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  slidesOnPhone,
  slidesOnTablet,
  slidesOnDesktop,
  slidesOnLargeScreens,
  showPagination = false,
  showButtons = false,
  arrowStyle = 'default',
  customArrowConfig = null,
  leftArrowPosition = 'sm:left-15 left-2',
  rightArrowPosition = 'sm:left-33 left-20',
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null)

  const goToNextSlide = (): void => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goToPrevSlide = (): void => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  // Get arrow configuration
  const getArrowConfig = (): ArrowConfig => {
    if (arrowStyle === 'custom' && customArrowConfig) {
      return {
        ...ARROW_STYLES.custom,
        ...customArrowConfig,
      } as ArrowConfig
    }
    return ARROW_STYLES[arrowStyle] || ARROW_STYLES.default
  }

  const arrowConfig = getArrowConfig()
  const LeftIcon = arrowConfig.leftIcon
  const RightIcon = arrowConfig.rightIcon

  return (
    <div className="min-h-44 overflow-x-hidden">
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            395: { slidesPerView: slidesOnPhone },
            750: { slidesPerView: slidesOnTablet },
            1024: { slidesPerView: slidesOnDesktop },
            1330: { slidesPerView: slidesOnLargeScreens },
          }}
          pagination={showPagination ? { clickable: true } : false}
        >
          {children}
        </Swiper>
        {showButtons && (
          <>
            {/* Left Arrow */}
            <div className={`${arrowConfig.containerClass} ${leftArrowPosition} absolute`}>
              <button
                className={arrowConfig.buttonClass}
                onClick={goToPrevSlide}
                type="button"
                aria-label="Previous slide"
              >
                <LeftIcon className={arrowConfig.iconClass} />
              </button>
            </div>

            {/* Pause Icon - only for minimal style */}
            {arrowStyle === 'minimal' && (
              <div className="absolute bottom-4 left-11 sm:left-24 z-40 h-8 w-8 flex justify-center items-center">
                <FaRegCirclePause className="text-white text-[24px] hover:text-white/30 transition-colors cursor-pointer" />
              </div>
            )}

            {/* Right Arrow */}
            <div className={`${arrowConfig.containerClass} ${rightArrowPosition} absolute`}>
              <button
                className={arrowConfig.buttonClass}
                onClick={goToNextSlide}
                type="button"
                aria-label="Next slide"
              >
                <RightIcon className={arrowConfig.iconClass} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
