import Image from 'next/image'
import { Typography } from '../../common'

export const OurStory = () => {
  return (
    <>
      <section className="sm:flex gap-5 items-center sm:px-16 px-3 mt-6">
        <Image
          src={'/home/banner4.jpg'}
          alt="Our Story"
          width={600}
          height={500}
          className="w-full rounded-lg"
        />
        <div>
          <Typography variant="medium" className=" uppercase mt-1">
            OUR STORY
          </Typography>
          <Typography variant="h6" weight="bold" className="mt-1">
            Who is POLYSAVE
          </Typography>
          <Typography variant="large" className="mt-1">
            At PolySave, we specialize in delivering advanced vertical plastic water tanks, road
            barriers, grp panel and fiberglass that combine durability, efficiency, and innovative
            design. Headquartered in Dubai, UAE, our company is committed to supporting households,
            businesses, and industries with reliable and space-efficient water storage solutions.
          </Typography>
          <Typography variant="large" className="mt-2">
            We focus on engineering our tanks with premium, safe, and sustainable materials designed
            to withstand Dubai’s demanding climate. Whether for residential, commercial, or
            industrial applications, PolySave ensures that water storage is both smart and
            dependable.
          </Typography>
        </div>
      </section>
    </>
  )
}
