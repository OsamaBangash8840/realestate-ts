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
    image: '/home/blogImg2.svg',
  },
  {
    id: 2,
    title: '5 Essential Maintenance Tips to Keep Your Water Tank Clean for Decades',
    date: '12 March, 2025',
    image: '/home/blogImg3.svg',
  },
  {
    id: 3,
    title: '5 Essential Maintenance Tips to Keep Your Water Tank Clean for Decades',
    date: '12 March, 2025',
    image: '/home/blogImg4.svg',
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
        className="flex justify-center items-center uppercase"
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

      <div className="sm:flex sm:px-16 px-3 gap-6 py-6 overflow-x-hidden">
        {/* Featured Blog */}
        <div className="w-full 2xl:w-1/2">
          <Image
            src={'/home/blogImg1.svg'}
            alt="Blog Img 1"
            width={300}
            height={300}
            className="w-full h-[390px] sm:h-[420px] 2xl:h-[480px] rounded-lg object-cover"
          />

          <div className="flex justify-between mt-2">
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

          <Typography variant="xlarge" weight="bold" className="mt-2">
            Rainwater Harvesting 101: How to Choose the Right Tank Size for Your Home
          </Typography>

          <Typography variant="large" weight="regular" className="mt-2 text-gray-600">
            Ready to save water and money? This beginners guide walks you through the simple steps
            to calculate your ideal water tank capacity based on your roof area and local rainfall.
          </Typography>
        </div>

        {/* Blog List */}
        <div className="w-full 2xl:w-1/2">
          <BlogList posts={posts} />
        </div>
      </div>
    </section>
  )
}
