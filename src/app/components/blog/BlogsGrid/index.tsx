// components/blog/BlogGrid.tsx
import { IBlogPostItems } from '@/app/base/types'
import React from 'react'
import { BlogCard } from '../BlogsCard'

export const BlogGrid: React.FC<{ posts: IBlogPostItems[] }> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {posts.map((p) => (
        <BlogCard key={p.id} post={p} layout="grid" />
      ))}
    </div>
  )
}
