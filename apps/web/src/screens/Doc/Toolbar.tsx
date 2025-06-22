import { Editor } from "@tiptap/react";
import clsx from "clsx";

interface Props {
  editor: Editor | null;
}

export default function Toolbar({ editor }: Props) {
  if (!editor) return null;

  const btn = (active: boolean) =>
    clsx(
      "px-2 py-1 border rounded text-sm",
      active
        ? "bg-blue-100 text-blue-700 border-blue-400"
        : "bg-white text-gray-700 border-gray-300",
    );

  return (
    <div className="flex flex-wrap gap-2 border-b p-2 bg-gray-50">
      <button
        className={btn(editor.isActive("bold"))}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        className={btn(editor.isActive("italic"))}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        className={btn(editor.isActive("strike"))}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        Strike
      </button>
      <button
        className={btn(editor.isActive("code"))}
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        Code
      </button>

      <button
        className={btn(editor.isActive("paragraph"))}
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        ¶
      </button>
      <button
        className={btn(editor.isActive("heading", { level: 1 }))}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </button>
      <button
        className={btn(editor.isActive("heading", { level: 2 }))}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </button>
      <button
        className={btn(editor.isActive("heading", { level: 3 }))}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        H3
      </button>

      <button
        className={btn(editor.isActive("bulletList"))}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        • List
      </button>
      <button
        className={btn(editor.isActive("orderedList"))}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        1. List
      </button>
      <button
        className={btn(editor.isActive("blockquote"))}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        Quote
      </button>
      <button
        className={btn(editor.isActive("codeBlock"))}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        Code Block
      </button>
      <button
        className={btn(false)}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        ───
      </button>
      <button
        className={btn(false)}
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        ↵ Break
      </button>

      <button
        className={btn(false)}
        onClick={() => editor.chain().focus().undo().run()}
      >
        Undo
      </button>
      <button
        className={btn(false)}
        onClick={() => editor.chain().focus().redo().run()}
      >
        Redo
      </button>
      <button
        className={btn(false)}
        onClick={() => {
          const url = window.prompt("Image URL");
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }}
      >
        Insert Image
      </button>

      <button
        className={btn(false)}
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
      >
        Insert Table
      </button>

      <button
        className={btn(false)}
        onClick={() => editor.chain().focus().addRowAfter().run()}
      >
        Add Row
      </button>

      <button
        className={btn(false)}
        onClick={() => editor.chain().focus().addColumnAfter().run()}
      >
        Add Column
      </button>

      <button
        className={btn(false)}
        onClick={() => editor.chain().focus().deleteTable().run()}
      >
        Delete Table
      </button>

      <button
        className={btn(editor.isActive("taskList"))}
        onClick={() => editor.chain().focus().toggleTaskList().run()}
      >
        Task List
      </button>

      <button
        className={btn(editor.isActive('details'))}
        onClick={() => editor
          .chain()
          .focus()
          .insertContent({
            type: 'details',
            content: [
              {
                type: 'detailsSummary',
                content: [
                  { type: 'text', text: 'Click to expand' },
                ],
              },
              {
                type: 'detailsContent',
                content: [
                  {
                    type: 'paragraph',
                    content: [{ type: 'text', text: 'Details content here.' }], 
                  },
                ],
              },
            ],
          })
          .run()}
      >
        Collapsible
      </button>

    </div>
  );
}
