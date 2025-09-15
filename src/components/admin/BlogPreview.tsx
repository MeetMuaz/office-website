'use client'

function formatMarkdown(text: string): string {
  return text
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-2 text-gray-900">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-6 mb-3 text-gray-900">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">$1</code>')
    .replace(/!\[([^\]]*)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" class="w-full max-w-2xl mx-auto my-4 rounded-lg shadow-sm" />')
    .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^- (.*$)/gim, '<li class="mb-1 ml-4">• $1</li>')
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">$1</blockquote>')
    .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
    .replace(/^(?!<[h|l|b])(.+)$/gim, '<p class="mb-4 text-gray-700 leading-relaxed">$1</p>')
}

interface BlogPreviewProps {
  title: string
  excerpt: string
  content: string
  author: string
  role: string
  date: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

export function BlogPreview({
  title,
  excerpt,
  content,
  author,
  role,
  date,
  readTime,
  category,
  image,
  tags
}: BlogPreviewProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header Image */}
      {image && (
        <div className="w-full h-64 bg-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        {/* Category and Meta */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {category}
          </span>
          <div className="text-sm text-gray-500">
            {date} • {readTime}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {title || 'Blog Title'}
        </h1>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {excerpt}
          </p>
        )}

        {/* Author */}
        <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium">
              {author ? author.charAt(0).toUpperCase() : 'A'}
            </span>
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{author || 'Author Name'}</div>
            <div className="text-sm text-gray-500">{role || 'Author Role'}</div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: formatMarkdown(content || 'Blog content will appear here...')
            }}
          />
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}