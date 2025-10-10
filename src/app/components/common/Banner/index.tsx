'use client'
import React from 'react'
import { Typography } from '../Typography'
import { Button } from '../Button'
import Breadcrumbs from '../BreadCrumbs'
import { FaPhoneAlt } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { usePathname } from 'next/navigation'
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link'
import { routes } from '@/app/base/constants'

interface ITextFieldProps {
  bg?: string
  smallHeading?: string
  lgHeading?: string
  className?: string
  desc?: string
  btn?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Banner = ({
  bg,
  smallHeading,
  lgHeading,
  desc,
  btn,
}: ITextFieldProps): React.ReactElement => {
  const pathname = usePathname()
  return (
    <div
      className="bg-secondary h-[550px] md:h-[580px] 2xl:h-[700px] w-full gap-5 bg-cover bg-center bg-no-repeat sm:px-12 sm:pt-10 pt-12 overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg})`, // ✅ Correct syntax
      }}
    >
      <div className="-mt-10 sm:-mt-0 py-3 px-3 sm:py-0">
        <Breadcrumbs variant="secondary" />
      </div>

      <div className=" sm:py-3 px-3 py-1.5 w-[390px] sm:w-[600px] rounded-lg  sm:mt-20">
        {smallHeading && (
          <Typography variant="large" weight="regular" color="primaryBody" className="uppercase">
            {smallHeading}
          </Typography>
        )}

        {lgHeading && (
          <Typography variant="h4" weight="bold" color="primaryBody" className="sm:mt-2 mt-1">
            {lgHeading}
          </Typography>
        )}

        {desc && (
          <Typography variant="large" weight="regular" color="primaryBody" className="sm:mt-2 mt-1">
            {desc}
          </Typography>
        )}

        {btn && (
          <Link href={routes.contact}>
            <Button title={btn} className="sm:mt-6 mt-3" />
          </Link>
        )}
        {pathname === '/contact' && (
          <>
            <div className="gap-2 flex items-center mt-3">
              <GoMail className="text-white mt-1" size={24} />
              <Typography
                color="custom"
                customColor="text-white"
                variant="xlarge"
                weight="regular"
                className=""
              >
                sales@luxusrealestate.com
              </Typography>
            </div>
            <div className="gap-2 flex items-center mt-8">
              <FaPhoneAlt className="text-white mt-1" size={24} />
              <Typography
                color="custom"
                customColor="text-white"
                variant="xlarge"
                weight="regular"
                className=""
              >
                +971 123 456 789
              </Typography>
            </div>
            <div className="gap-2 flex items-center mt-8">
              <CiLocationOn className="text-white mt-1 flex-shrink-0" size={24} />
              <Typography
                color="custom"
                customColor="text-white"
                variant="xlarge"
                weight="regular"
                className=""
              >
                Branches: Ajman (Head Office), Abu Dhabi, Al Ain, Dxb Al Qouz, Dxb Al Aweer, Dxb Al
                Rashidiya, Sharjah Sheikh Mohammed Bin Zayed Road, Sharjah Industrial 11,
                UAQ(Factory)
              </Typography>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
