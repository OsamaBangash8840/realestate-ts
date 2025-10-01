import { ITestimonialsItems } from '@/app/base/types'
import { Typography } from '../../common'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

export const TestimonialGrid = () => {
  return (
    <section className="bg-primary-100 py-6 px-3 sm:px-16">
      <Typography
        variant="medium"
        weight="regular"
        color="custom"
        customColor="text-secondary-400"
        className="flex justify-center items-center uppercase"
      >
        TESTIMONIALS
      </Typography>
      <Typography
        variant="h6"
        weight="bold"
        color="custom"
        customColor="text-secondary-500"
        className="flex justify-center items-center mb-6"
      >
        Trusted by over 180,000 Customers
      </Typography>
      <div className="sm:grid grid-cols-3 gap-5">
        <TestimonialCard
          name="Khalid Al Farsi"
          img="/home/avatar.svg"
          country="Oman"
          desc="These tanks have endured two extreme Riyadh summers without a hint of fading or algae. The water quality for our livestock is now perfectly secure and reliable."
          stars={5}
        />
        <TestimonialCard
          name="Khalid Al Farsi"
          img="/home/avatar.svg"
          country="Oman"
          desc="These tanks have endured two extreme Riyadh summers without a hint of fading or algae. The water quality for our livestock is now perfectly secure and reliable."
          stars={5}
        />
        <TestimonialCard
          name="Khalid Al Farsi"
          img="/home/avatar.svg"
          country="Oman"
          desc="These tanks have endured two extreme Riyadh summers without a hint of fading or algae. The water quality for our livestock is now perfectly secure and reliable."
          stars={5}
        />
      </div>
    </section>
  )
}

export const TestimonialCard = ({ name, img, country, desc, stars }: ITestimonialsItems) => (
  <div className="p-4 bg-white rounded-2xl border border-gray-100 mt-8 sm:mt-0">
    <div className="flex items-center mb-3">
      <Image src={img || ''} alt={name || ''} width={60} height={60} className="rounded-full" />
      <div className="ml-3">
        <Typography variant="large" weight="bold">
          {name}
        </Typography>
        <Typography variant="large" weight="regular" className="mt-2">
          {country}
        </Typography>
      </div>
    </div>

    <div className="flex mb-2 gap-3">
      <FaStar className={1 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={20} />
      <FaStar className={2 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={20} />
      <FaStar className={3 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={20} />
      <FaStar className={4 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={20} />
      <FaStar className={5 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={20} />
    </div>

    <Typography variant="large" weight="regular">
      {desc}
    </Typography>
  </div>
)

export const TestimonialPropertyCard = ({
  name,
  img,
  country,
  desc,
  stars,
}: ITestimonialsItems) => (
  <div className="p-4 bg-white rounded-2xl mt-8 sm:mt-0">
    <div className="flex items-center mb-3">
      <Image src={img || ''} alt={name || ''} width={56} height={56} className="rounded-full" />
      <div className="ml-3">
        <Typography variant="h6" weight="bold">
          {name}
        </Typography>
        <Typography variant="xlarge" weight="regular" className="mt-0">
          {country}
        </Typography>
      </div>
    </div>

    <div className="flex mb-2 gap-3">
      <FaStar className={1 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={24} />
      <FaStar className={2 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={24} />
      <FaStar className={3 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={24} />
      <FaStar className={4 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={24} />
      <FaStar className={5 <= (stars ?? 0) ? 'text-yellow-400' : 'text-gray-300'} size={24} />
    </div>

    <Typography variant="xlarge" weight="medium">
      {desc}
    </Typography>
  </div>
)
