'use client';

import {NodeViewContent, NodeViewWrapper, ReactNodeViewRenderer} from "@tiptap/react";
import {CodeBlock} from '@tiptap/extension-code-block';


function EmptyView() {
    console.log('EmptyView');
    return <NodeViewWrapper><NodeViewContent /></NodeViewWrapper>
}


const CodeBlockWithView = CodeBlock.extend({
    addNodeView() {
        return ReactNodeViewRenderer(EmptyView, {contentDOMElementTag: 'code'});
    },
});

export default CodeBlockWithView;
