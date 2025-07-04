'use client';

import {EditorContent, useEditor} from '@tiptap/react';
import type {Content} from "@tiptap/core";
import Document from '@tiptap/extension-document';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';
import TextAlign from '@tiptap/extension-text-align';
import {TextStyle} from '@tiptap/extension-text-style';
import {Dropcursor, Gapcursor, TrailingNode, UndoRedo} from '@tiptap/extensions';
import CodeBlock from "@/app/code/CodeBlockWithView";

function Editor({initialContent}: {initialContent: Content}) {
    const editor = useEditor({
        autofocus: true,
        immediatelyRender: false,
        content: initialContent,
        extensions: [
            Document,
            Paragraph, Text,
            CodeBlock.configure({defaultLanguage: 'python'}),
            Bold, Italic, Underline,
            TextAlign.configure({types: ['title', 'heading', 'paragraph'], defaultAlignment: 'left'}),
            TextStyle,
            Dropcursor.configure({
                width: 2,
            }), Gapcursor, UndoRedo, TrailingNode,
        ],
    });

    return (
        <div className="wrapper" style={{padding: '1rem', border: '1px solid #ccc', borderRadius: '4px'}}>
            <EditorContent editor={editor} />
        </div>
    )
}

export default Editor;
