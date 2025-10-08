// components/blog/BlogCard.tsx
import Image from 'next/image'
import React from 'react'
import { IBlogPostItems } from '@/app/base/types'
import { Typography } from '../../common'
import Link from 'next/link'

type Layout = 'grid' | 'list'

interface Props {
  post: IBlogPostItems
  layout?: Layout
}

export const BlogCard: React.FC<Props> = ({ post, layout = 'grid' }) => {
  return (
    <>
      <Link href={'/blogs/1'}>
        <article
          className={layout === 'grid' ? 'flex flex-col gap-4' : 'flex items-center gap-4'} // 👈 changed
        >
          {/* IMAGE */}
          <div
            className={
              layout === 'grid'
                ? 'relative w-full h-[240px] md:h-[340px] rounded-lg overflow-hidden mt-2.5 sm:mt-0'
                : 'relative w-[190px] h-[190px] rounded-lg overflow-hidden flex-shrink-0'
            }
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority={layout === 'grid'}
            />
          </div>

          {/* CONTENT */}
          <div className={layout === 'grid' ? '' : 'flex-1'}>
            <Typography variant="large" weight="regular" className="text-sm text-gray-500">
              {post.date}
            </Typography>
            <Typography
              variant="xlarge"
              weight="bold"
              className="mt-2 font-semibold text-lg leading-snug"
            >
              {post.title}
            </Typography>

            {layout === 'grid' && (
              <>
                {/* {post.readingTime && (
              <div className="text-xs text-gray-500 mt-2">{post.readingTime}</div>
            )}
            {post.description && <p className="text-sm text-gray-600 mt-3">{post.description}</p>}
            <a
              href={post.slug ?? '#'}
              className="inline-block mt-4 text-sm text-brand-600 hover:underline"
              aria-label={`Read more about ${post.title}`}
            >
              Read more →
            </a> */}
              </>
            )}
          </div>
        </article>
      </Link>
    </>
  )
}
