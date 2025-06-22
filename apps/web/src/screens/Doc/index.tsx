import { useEffect } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Details from '@tiptap/extension-details'
import DetailsSummary from '@tiptap/extension-details-summary'
import DetailsContent from '@tiptap/extension-details-content'

import Toolbar from "./Toolbar";
import "./editor.css";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Start writing your document..." }),
      CharacterCount.configure({ limit: 5000 }),
      Link.configure({ openOnClick: false }),

      // Content Blocks
      Image.configure({ inline: false }),
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      TaskList,
      TaskItem.configure({ nested: true }),
      Details,
      DetailsSummary,
      DetailsContent,
    ],
    content: "",
  });

  return (
    <div className="border rounded bg-white">
      <Toolbar editor={editor} />
      <div className="p-4">
        <div className="prose max-w-none">
          <EditorContent editor={editor} />
        </div>
        {editor && (
          <div className="text-sm text-gray-500 text-right mt-2">
            {editor.storage.characterCount.characters()} characters,
            {editor.storage.characterCount.words()} words
          </div>
        )}
      </div>
    </div>
  );
}
