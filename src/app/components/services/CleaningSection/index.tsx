import Image from 'next/image'
import { Typography } from '../../common'

export const CleaningSection = () => {
  return (
    <>
      <section className="sm:flex gap-5 items-center sm:px-16 px-3 mt-6">
        <Image
          src={'/home/cleaningImg.svg'}
          alt="Our Story"
          width={600}
          height={500}
          className="w-full rounded-lg"
        />
        <div>
          <Typography variant="medium" className=" uppercase mt-1">
            CLEANING
          </Typography>
          <Typography variant="h6" weight="bold" className="mt-1">
            Why Regular Cleaning is Essential
          </Typography>
          <Typography variant="large" className="mt-1">
            Over time, tanks accumulate sediment, biofilm, and harmful pathogens like Legionella.
            Regular professional cleaning is not just maintenance its a necessity for health and
            safety.
          </Typography>
        </div>
      </section>
    </>
  )
}
