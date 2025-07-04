import Prism from 'prismjs';
import {findChildren} from '@tiptap/core';
import {Plugin, PluginKey} from '@tiptap/pm/state';
import {Decoration, DecorationSet} from '@tiptap/pm/view';
import type {Node as ProsemirrorNode} from '@tiptap/pm/model';
import {canonicalId} from '@/app/code/prismutil';


function parseTokens(
    tokens: (string | Prism.Token)[],
    classes: string[] = [],
): { text: string; classes: string[] }[] {
    // Recursively flatten Prism tokens to `{text, classList}` segments.
    return tokens.flatMap(token => {
        if (typeof token === 'string')
            return [{ text: token, classes }];

        const tokClasses = [
            ...classes,
            'token',
            token.type,
            ...(Array.isArray(token.alias) ? token.alias : [token.alias]).filter(Boolean),
        ] as string[];

        return parseTokens(
            Array.isArray(token.content) ? token.content : [token.content],
            tokClasses,
        );
    });
}

function getDecorations(
    doc: ProsemirrorNode,
    nodeName: string,
    defaultLanguage?: string | null,
): DecorationSet {
    const decorations: Decoration[] = []

    findChildren(doc, n => n.type.name === nodeName).forEach(({ node, pos }) => {
        let from = pos + 1;
        const rawLang   = node.attrs.language || defaultLanguage || 'plain-text';
        const language  = canonicalId(rawLang);

        // grammar not yet loaded → skip for now
        if (!language || !Prism.languages[language])
            return;

        const tokens = Prism.tokenize(node.textContent, Prism.languages[language]);
        parseTokens(tokens).forEach(seg => {
            const to = from + seg.text.length;
            if (seg.classes.length)
                decorations.push(Decoration.inline(from, to, {class: seg.classes.join(' ')}));
            from = to;
        });
    })

    return DecorationSet.create(doc, decorations);
}

export function createPrismPlugin({nodeName, defaultLanguage}: {
    nodeName: string,
    defaultLanguage?: string | null,
}) {
    return new Plugin({
        key: new PluginKey('prism-highlighter'),
        state: {
            init: (_, { doc }) => getDecorations(doc, nodeName, defaultLanguage),
            apply(tr, oldDecos) {
                if (tr.docChanged || tr.getMeta('prismForce'))
                    return getDecorations(tr.doc, nodeName, defaultLanguage);
                return oldDecos.map(tr.mapping, tr.doc);
            },
        },
        props: {
            decorations(state) {
                return this.getState(state);
            },
        },
    })
}
