import { IBlogPostItems } from '@/app/base/types'
import { BlogList } from '../../blog'
import { Typography } from '../../common'
import Image from 'next/image'

const posts: IBlogPostItems[] = [
  {
    id: 1,
    title: 'Rainwater Harvesting 101: How to Choose the Right Tank Size for Your Home',
    date: '12 March, 2025',
    readingTime: '5 min Reading',
    description: 'Ready to save water and money? This beginner’s guide walks you through...',
    image: '/home/banner1.jpg',
  },
  {
    id: 2,
    title: '5 Essential Maintenance Tips to Keep Your Water Tank Clean for Decades',
    date: '12 March, 2025',
    image: '/home/banner2.jpg',
  },
  {
    id: 3,
    title: '5 Essential Maintenance Tips to Keep Your Water Tank Clean for Decades',
    date: '12 March, 2025',
    image: '/home/banner2.jpg',
  },
]

export const BlogsGrid = () => {
  return (
    <section className="py-6">
      <Typography
        variant="medium"
        weight="regular"
        color="custom"
        customColor="text-secondary-400"
        className="flex justify-center items-center"
      >
        Blogs
      </Typography>
      <Typography
        variant="h6"
        weight="bold"
        color="custom"
        customColor="text-secondary-500"
        className="flex justify-center items-center"
      >
        Latest Blogs
      </Typography>
      <div className="sm:flex sm:px-16 px-3 gap-3 py-3 overflow-x-hidden">
        <div>
          <Image
            src={'/home/banner1.jpg'}
            alt="Blog Img 1"
            width={300}
            height={300}
            className=" w-[390px] sm:w-[600px] 2xl:w-[750px] h-[390px] rounded-lg"
          />
          <div className="flex justify-between mt-2 w-[370px] sm:w-[600px] 2xl:w-[750px]">
            <Typography
              variant="large"
              weight="regular"
              color="custom"
              customColor="text-secondary-500"
            >
              12 March, 2025
            </Typography>
            <Typography
              variant="large"
              weight="regular"
              color="custom"
              customColor="text-secondary-500"
            >
              5min Reading
            </Typography>
          </div>
          <Typography
            variant="xlarge"
            weight="bold"
            className="w-[390px] sm:w-[600px] 2xl:w-[750px] mt-2"
          >
            Rainwater Harvesting 101: How to Choose the Right Tank Size for Your Home
          </Typography>
          <Typography
            variant="large"
            weight="regular"
            className="w-[390px] sm:w-[600px] 2xl:w-[750px] mt-2"
          >
            Ready to save water and money? This beginners guide walks you through the simple steps
            to calculate your ideal water tank capacity based on your roof area and local rainfall.
          </Typography>
        </div>
        <BlogList posts={posts} />
      </div>
    </section>
  )
}
