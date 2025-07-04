'use client';

// import useAsyncEffect from "use-async-effect";
import {NodeViewContent, NodeViewWrapper, ReactNodeViewRenderer} from "@tiptap/react";
import {canonicalId} from "@/app/code/prismutil";
import CodeBlock from "@/app/code/CodeBlock";
import type {NodeViewProps} from "@tiptap/core";


function CodeBlockView({node}: NodeViewProps) {
    console.log('node.attrs.language:', node.attrs.language);
    const canonical = canonicalId(node.attrs.language ?? '');
    const currentLang = canonical || 'python'; // default to 'python' if no language is set
    // if (!canonical)
    //     updateAttributes({ language: 'python' });

    // preload grammar when language changes
    // useAsyncEffect(async () => {
    //     await loadMode('dark');
    //     await loadDependencies(currentLang);
    //     editor.view?.dispatch(editor.view.state.tr.setMeta('prismForce', true));
    // }, [currentLang]);

    // ProseMirror gives the node-view a brand-new Node every time the user types.
    // So, we can't just use `getText={() => node.textContent}`
    // const getText = useCallback(() => {
    //     const pos = getPos();
    //     if (!pos)
    //         return '';
    //     const current = editor.state.doc.nodeAt(pos);
    //     return current ? current.textContent : '';
    // }, [editor, getPos]);


    return <>
        <NodeViewWrapper as="pre" className={`language-${currentLang}`} style={{position: 'relative'}}>
            {/* the editable code content */}
            <NodeViewContent />

            {/* language picker */}
            <></>

            {/* copy button */}
            <></>
        </NodeViewWrapper>
    </>
}


const CodeBlockWithView = CodeBlock.extend({
    addNodeView() {
        return ReactNodeViewRenderer(CodeBlockView, {contentDOMElementTag: 'code'});
    },
});

export default CodeBlockWithView;
