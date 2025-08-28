'use client'

import { BlogEditor } from '@/components/admin/BlogEditor'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog Admin Dashboard</h1>
          <p className="text-lg text-gray-600">Create and publish engaging blog posts</p>
        </div>
        
        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">New Blog Post</h2>
            <p className="text-blue-100 mt-1">Fill in the details below to create your blog post</p>
          </div>
          <div className="p-8">
            <BlogEditor />
          </div>
        </div>
      </div>
    </div>
  )
}