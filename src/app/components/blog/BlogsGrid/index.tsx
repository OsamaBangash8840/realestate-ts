// components/blog/BlogGrid.tsx
import { IBlogPostItems } from '@/app/base/types'
import React from 'react'
import { BlogCard } from '../BlogsCard'

export const BlogGrid: React.FC<{ posts: IBlogPostItems[] }> = ({ posts }) => {
  return (
    <div className="sm:grid grid-cols-3 gap-8 mt-5">
      {posts.map((p) => (
        <BlogCard key={p.id} post={p} layout="grid" />
      ))}
    </div>
  )
}
