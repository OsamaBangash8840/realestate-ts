// components/blog/BlogList.tsx
import { IBlogPostItems } from '@/app/base/types'
import React from 'react'
import { BlogCard } from '../BlogsCard'

export const BlogList: React.FC<{ posts: IBlogPostItems[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-6 mt-8 sm:mt-0">
      {posts.map((p) => (
        <BlogCard key={p.id} post={p} layout="list" />
      ))}
    </div>
  )
}
