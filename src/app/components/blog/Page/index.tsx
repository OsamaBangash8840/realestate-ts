import { IBlogPostItems } from '@/app/base/types'
import Breadcrumbs from '../../common/BreadCrumbs'
import { BlogsGrid } from '../../home'
import { BlogGrid } from '../BlogsGrid'
import { Typography } from '../../common'

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

export const BlogsPageComponent = () => {
  return (
    <>
      <div className="sm:px-16 px-3 pt-8">
        <Breadcrumbs />
      </div>
      <BlogsGrid />
      <div className="sm:px-16 px-3 ">
        <Typography variant="medium">News</Typography>
        <Typography variant="h6" weight="bold" className="">
          All Blogs
        </Typography>
        <BlogGrid posts={posts} />
        <BlogGrid posts={posts} />
        <BlogGrid posts={posts} />
      </div>
    </>
  )
}
