import { Editor } from '@tiptap/react'

interface Props {
  editor: Editor | null
}

export default function Toolbar({ editor }: Props) {
  if (!editor) return null

  return (
    <div className="flex flex-wrap gap-2 border-b p-2 bg-gray-50">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'font-bold text-blue-600' : ''}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'italic text-blue-600' : ''}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'font-semibold text-blue-600' : ''}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'text-blue-600' : ''}
      >
        • List
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={!editor.isActive('heading') ? 'text-blue-600' : ''}
      >
        ¶
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className="ml-2 text-gray-500"
      >
        Undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className="text-gray-500"
      >
        Redo
      </button>
    </div>
  )
}