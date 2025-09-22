// components/blog/BlogCard.tsx
import Image from 'next/image'
import React from 'react'

type Layout = 'grid' | 'list'

interface Props {
  post: BlogPost
  layout?: Layout
}

interface BlogPost {
  id: string | number
  title: string
  date: string
  readingTime?: string
  description?: string
  image: string // path or url
  slug?: string
}

export const BlogCard: React.FC<Props> = ({ post, layout = 'grid' }) => {
  return (
    <article className={layout === 'grid' ? 'flex flex-col gap-4' : 'flex items-start gap-4'}>
      {/* IMAGE */}
      <div
        className={
          layout === 'grid'
            ? 'relative w-full h-[320px] md:h-[420px] rounded-lg overflow-hidden'
            : 'relative w-28 h-28 rounded-lg overflow-hidden flex-shrink-0'
        }
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority={layout === 'grid'} // featured -> priority
        />
      </div>

      {/* CONTENT */}
      <div className={layout === 'grid' ? '' : 'flex-1'}>
        <div className="text-sm text-gray-500">{post.date}</div>
        <h3 className="mt-2 font-semibold text-lg leading-snug">{post.title}</h3>

        {layout === 'grid' && (
          <>
            {post.readingTime && (
              <div className="text-xs text-gray-500 mt-2">{post.readingTime}</div>
            )}
            {post.description && <p className="text-sm text-gray-600 mt-3">{post.description}</p>}
            <a
              href={post.slug ?? '#'}
              className="inline-block mt-4 text-sm text-brand-600 hover:underline"
              aria-label={`Read more about ${post.title}`}
            >
              Read more →
            </a>
          </>
        )}
      </div>
    </article>
  )
}
