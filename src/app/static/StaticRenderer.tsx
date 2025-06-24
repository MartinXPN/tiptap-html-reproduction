import {generateHTML} from '@tiptap/html';
import Document from '@tiptap/extension-document';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';
import TextAlign from '@tiptap/extension-text-align';
import {TextStyle} from "@tiptap/extension-text-style";
import type {JSONContent} from "@tiptap/core";


function StaticRenderer({doc}: { doc: JSONContent }) {
    console.log('StaticRenderer:', doc);
    const html = generateHTML({
        type: 'doc',
        content: [
            {type: 'paragraph', content: [{type: 'text', text: 'On the server, or the browser'}]},
        ],
    }, [
        Document,
        Paragraph, Text,
        Bold, Italic, Underline,
        TextAlign.configure({types: ['title', 'heading', 'paragraph'], defaultAlignment: 'left'}),
        TextStyle,
    ]);
    console.log('HTML:', html);

    return <div dangerouslySetInnerHTML={{__html: html}}/>
}


export default StaticRenderer;
