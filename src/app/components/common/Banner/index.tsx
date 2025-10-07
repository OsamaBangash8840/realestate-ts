import React from 'react'
import { Typography } from '../Typography'
import { Button } from '../Button'
import Breadcrumbs from '../BreadCrumbs'

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
  return (
    <div
      className="bg-secondary h-[550px] md:h-[580px] 2xl:h-[700px] w-full gap-5 bg-cover bg-center bg-no-repeat sm:px-12 sm:pt-10 pt-12 overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg})`, // ✅ Correct syntax
      }}
    >
      <div className="-mt-10 sm:-mt-0 py-3 sm:py-0">
        <Breadcrumbs variant="secondary" />
      </div>

      <div className="bg-primary-500/40 sm:py-3 px-3 py-1.5 w-[390px] sm:w-[600px] rounded-lg  sm:mt-20">
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

        {btn && <Button title={btn} className="sm:mt-6 mt-3" />}
      </div>
    </div>
  )
}
