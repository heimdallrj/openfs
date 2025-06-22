import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import Toolbar from './Toolbar'
import './editor.css'

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start writing here...</p>',
  })

  return (
    <div className="border rounded bg-white">
      <Toolbar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}