'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import BlurImage from '@/components/mis/blur-image'
import { Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react'
import { BlogPost } from '../../blog-posts'

interface CategoryClientProps {
  categoryName: string
  categoryPosts: BlogPost[]
  categories: string[]
  blogPosts: BlogPost[]
  currentSlug: string
}

export default function CategoryClient({ 
  categoryName, 
  categoryPosts, 
  categories, 
  blogPosts, 
  currentSlug 
}: CategoryClientProps) {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto mb-16">
        <div className="mx-auto max-w-3xl text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {categoryName}
          </h1>
          <p className="text-gray-600 text-lg">
            {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {categoryPosts.length > 0 ? (
              <div className="space-y-12">
                {categoryPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="relative h-60 overflow-hidden rounded-lg md:h-full">
                          <BlurImage
                            src={post.image || '/placeholder.svg'}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="space-y-4 md:col-span-2">
                          <div>
                            <span className="bg-blue-100 text-blue-800 inline-block rounded-full px-3 py-1 text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                          <h2 className="group-hover:text-blue-600 text-2xl font-bold transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-gray-600">{post.excerpt}</p>
                          <div className="text-gray-500 flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="pt-2">
                            <span className="text-blue-600 inline-flex items-center font-medium group-hover:underline">
                              Read more <ChevronRight className="ml-1 h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">There are no articles in this category yet.</p>
                <Link 
                  href="/blog"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Browse All Articles
                </Link>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">All Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => {
                  const categorySlug = category.toLowerCase().replace(/\s+/g, '-')
                  const isActive = categorySlug === currentSlug
                  const count = blogPosts.filter(post => post.category === category).length
                  
                  return (
                    <li key={category}>
                      <Link
                        href={`/blog/category/${categorySlug}`}
                        className={`group flex items-center justify-between p-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span className={isActive ? 'font-medium' : 'group-hover:text-blue-600'}>
                          {category}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({count})
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold">Explore More</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Discover articles from all categories
              </p>
              <Link 
                href="/blog"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full justify-center"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}