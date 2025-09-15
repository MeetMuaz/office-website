'use client'

import { useRef, useState } from 'react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showImageModal, setShowImageModal] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const insertText = (before: string, after: string = '') => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = textarea.value.substring(start, end)
    const newText = before + selectedText + after
    
    const newValue = textarea.value.substring(0, start) + newText + textarea.value.substring(end)
    onChange(newValue)
    
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
    }, 0)
  }

  const insertMarkdown = (type: string) => {
    switch (type) {
      case 'h1':
        insertText('# ')
        break
      case 'h2':
        insertText('## ')
        break
      case 'h3':
        insertText('### ')
        break
      case 'bold':
        insertText('**', '**')
        break
      case 'italic':
        insertText('*', '*')
        break
      case 'code':
        insertText('`', '`')
        break
      case 'codeblock':
        insertText('```\n', '\n```')
        break
      case 'link':
        insertText('[', '](url)')
        break
      case 'list':
        insertText('- ')
        break
      case 'quote':
        insertText('> ')
        break
      case 'image':
        setShowImageModal(true)
        break
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('image', file)
      
      try {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: formData
        })
        
        // Simulate uploaded image URL
        const imageUrl = `https://via.placeholder.com/800x400?text=${encodeURIComponent(file.name)}`
        insertText(`![${file.name}](${imageUrl})\n`)
        setShowImageModal(false)
      } catch {
        alert('Error uploading image')
      }
    }
  }

  const handleImageUrl = () => {
    if (imageUrl.trim()) {
      insertText(`![Image](${imageUrl.trim()})\n`)
      setImageUrl('')
      setShowImageModal(false)
    }
  }

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-2 p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
        <button
          type="button"
          onClick={() => insertMarkdown('h1')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors font-medium"
          title="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('h2')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors font-medium"
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('h3')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors font-medium"
          title="Heading 3"
        >
          H3
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('bold')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors font-bold"
          title="Bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('italic')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors italic"
          title="Italic"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('code')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors font-mono"
          title="Inline Code"
        >
          Code
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('codeblock')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors"
          title="Code Block"
        >
          {'{}'}
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('link')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors"
          title="Link"
        >
          🔗 Link
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('list')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors"
          title="List"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('quote')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors"
          title="Quote"
        >
          💬 Quote
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('image')}
          className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-blue-50 hover:border-blue-300 transition-colors"
          title="Insert Image"
        >
          🖼️ Image
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[400px] p-6 focus:outline-none resize-none font-mono text-sm leading-relaxed bg-white"
        placeholder="Write your blog content in markdown...\n\nTip: Use the toolbar buttons above to format your text!"
      />
      <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-sm text-gray-600">
        <p className="flex items-center">
          <span className="text-blue-500 mr-2">💡</span>
          <strong>Pro tip:</strong> Select text and click toolbar buttons to format, or type markdown directly!
        </p>
      </div>

      {/* Image Upload Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-90vw">
            <h3 className="text-lg font-semibold mb-4">Insert Image</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image File
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="text-center text-gray-500">or</div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleImageUrl()}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setShowImageModal(false)
                  setImageUrl('')
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleImageUrl}
                disabled={!imageUrl.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Insert Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}