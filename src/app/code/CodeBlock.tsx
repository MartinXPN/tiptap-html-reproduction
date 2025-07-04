import {CodeBlock as CodeBlockTiptap} from '@tiptap/extension-code-block';
import {createPrismPlugin} from "@/app/code/prismplugin";
import {canonicalId} from '@/app/code/prismutil';


const CodeBlock = CodeBlockTiptap.extend({
    addOptions() {
        return {
            ...this.parent?.(),
            defaultLanguage: null,
            exitOnTripleEnter: true,
            exitOnArrowDown: true,
        }
    },

    addAttributes() {
        return {
            ...this.parent?.(),
            language: {
                default: this.options.defaultLanguage ?? 'plain-text',
                parseHTML: element => element.getAttribute('data-language'),
                renderHTML: attrs => {
                    return ({
                        'data-language': attrs.language,
                        class: `language-${canonicalId(attrs.language)}`,
                        style: 'position: relative',
                    });
                },
            },
        }
    },

    addProseMirrorPlugins() {
        return [
            createPrismPlugin({
                nodeName: this.name,
                defaultLanguage: this.options.defaultLanguage ?? 'python',
            }),
        ]
    },
});

export default CodeBlock;
