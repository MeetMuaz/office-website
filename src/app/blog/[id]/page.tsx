import { getBlogPostById } from '../blog-posts'
import { notFound } from 'next/navigation'
import { Params } from '@/app/services/layout'
import BlogPostClient from './blog-post-client'

export async function generateStaticParams() {
  const { getAllBlogPosts } = await import('../blog-posts')
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { id } = await params
  const post = getBlogPostById(id)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
