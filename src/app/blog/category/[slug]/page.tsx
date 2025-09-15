import { use } from 'react'
import { getAllBlogPosts } from '../../blog-posts'
import CategoryClient from './CategoryClient'

export function generateStaticParams() {
  const blogPosts = getAllBlogPosts()
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))
  
  return categories.map(category => ({
    slug: category.toLowerCase().replace(/\s+/g, '-')
  }))
}

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = use(params)
  const blogPosts = getAllBlogPosts()
  const categoryName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const categoryPosts = blogPosts.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === slug
  )
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))

  return (
    <CategoryClient 
      categoryName={categoryName}
      categoryPosts={categoryPosts}
      categories={categories}
      blogPosts={blogPosts}
      currentSlug={slug}
    />
  )
}