interface LanguageSpec {
    displayName: string;            // Nice display name for the language
    aliases: readonly string[];     // Other ids that should resolve to the canonical id
    requires?: readonly string[];   // An array of other language ids that this language depends on (should be loaded first)
}

// Prisma's canonical id to LanguageSpec mapping
export const catalog: Record<string, LanguageSpec> = {
    "abap": {displayName: "ABAP", aliases: []},
    "actionscript": {displayName: "Actionscript", aliases: [], requires: ["javascript"]},
    "agda": {displayName: "Agda", aliases: []},
    "antlr4": {displayName: "Antlr4", aliases: ["g4"]},
    "apex": {displayName: "Apex", aliases: [], requires: ["clike", "sql"]},
    "arduino": {displayName: "Arduino", aliases: ["ino"], requires: ["cpp"]},
    "asciidoc": {displayName: "Asciidoc", aliases: ["adoc"]},
    "assembly": {displayName: "Assembly", aliases: []},
    "avisynth": {displayName: "Avisynth", aliases: ["avs"]},
    "avro-idl": {displayName: "Avro-IDL", aliases: ["avdl"]},
    "awk": {displayName: "Awk", aliases: []},
    "bash": {displayName: "Bash", aliases: ["shell"]},
    "basic": {displayName: "BASIC", aliases: []},
    "bbcode": {displayName: "BBCode", aliases: ["shortcode"]},
    "bnf": {displayName: "BNF", aliases: ["rbnf"]},
    "birb": {displayName: "Birb", aliases: [], requires: ["clike"]},
    "bison": {displayName: "Bison", aliases: [], requires: ["c"]},
    "bsl": {displayName: "BSL", aliases: ["oscript"]},
    "c": {displayName: "C", aliases: [], requires: ["clike"]},
    "cfscript": {displayName: "CFScript", aliases: ["cfc"], requires: ["clike"]},
    "chaiscript": {displayName: "Chaiscript", aliases: [], requires: ["clike", "cpp"]},
    "clike": {displayName: "Clike", aliases: []},
    "clojure": {displayName: "Clojure", aliases: []},
    "coffeescript": {displayName: "CoffeeScript", aliases: ["coffee"], requires: ["javascript"]},
    "concurnas": {displayName: "Concurnas", aliases: ["conc"]},
    "coq": {displayName: "Coq", aliases: []},
    "cpp": {displayName: "C++", aliases: ["c++", "c++98", "c++11", "c++14", "c++17", "c++20", "c++23"], requires: ["c"]},
    "crystal": {displayName: "Crystal", aliases: [], requires: ["ruby"]},
    "css": {displayName: "CSS", aliases: []},
    "css-extras": {displayName: "CSS-Extras", aliases: [], requires: ["css"]},
    "csv": {displayName: "CSV", aliases: []},
    "csharp": {displayName: "C#", aliases: ["c#", "cs", "dotnet"], requires: ["clike"]},
    "cshtml": {displayName: "CSHTML", aliases: ["razor"], requires: ["markup", "csharp"]},
    "d": {displayName: "D", aliases: [], requires: ["clike"]},
    "dart": {displayName: "Dart", aliases: [], requires: ["clike"]},
    "diff": {displayName: "Diff", aliases: []},
    "dhall": {displayName: "Dhall", aliases: []},
    "django": {displayName: "Django", aliases: ["jinja2"], requires: ["markup-templating"]},
    "dns-zone-file": {displayName: "DNS-zone-file", aliases: ["dns-zone"]},
    "docker": {displayName: "Docker", aliases: ["dockerfile"]},
    "dot": {displayName: "DOT", aliases: ["gv"]},
    "ebnf": {displayName: "EBNF", aliases: []},
    "ejs": {displayName: "EJS", aliases: ["eta"], requires: ["javascript", "markup-templating"]},
    "elixir": {displayName: "Elixir", aliases: []},
    "elm": {displayName: "Elm", aliases: []},
    "erb": {displayName: "ERB", aliases: [], requires: ["ruby", "markup-templating"]},
    "erlang": {displayName: "Erlang", aliases: []},
    "excel-formula": {displayName: "Excel-formula", aliases: ["xlsx", "xls"]},
    "fsharp": {displayName: "F#", aliases: [], requires: ["clike"]},
    "firestore-security-rules": {displayName: "Firestore-security-rules", aliases: [], requires: ["clike"]},
    "flow": {displayName: "Flow", aliases: [], requires: ["javascript"]},
    "fortran": {displayName: "Fortran", aliases: []},
    "ftl": {displayName: "FTL", aliases: [], requires: ["markup-templating"]},
    "gherkin": {displayName: "Gherkin", aliases: []},
    "gml": {displayName: "GML", aliases: ["gamemakerlanguage"], requires: ["clike"]},
    "gn": {displayName: "GN", aliases: ["gni"]},
    "go": {displayName: "Go", aliases: [], requires: ["clike"]},
    "go-module": {displayName: "Go-module", aliases: ["go-mod"]},
    "graphql": {displayName: "GraphQL", aliases: []},
    "groovy": {displayName: "Groovy", aliases: [], requires: ["clike"]},
    "glsl": {displayName: "GLSL", aliases: [], requires: ["c"]},
    "haml": {displayName: "Haml", aliases: [], requires: ["ruby"]},
    "handlebars": {displayName: "Handlebars", aliases: ["hbs"], requires: ["markup-templating"]},
    "haskell": {displayName: "Haskell", aliases: ["hs"]},
    "haxe": {displayName: "Haxe", aliases: [], requires: ["clike"]},
    "hcl": {displayName: "HCL", aliases: []},
    "hlsl": {displayName: "HLSL", aliases: [], requires: ["c"]},
    "html": {displayName: "HTML", aliases: [], requires: ["markup"]},
    "idris": {displayName: "Idris", aliases: ["idr"], requires: ["haskell"]},
    "ignore": {displayName: "Ignore-file", aliases: ["gitignore", "hgignore", "npmignore"]},
    "java": {displayName: "Java", aliases: [], requires: ["clike"]},
    "javadoc": {displayName: "Javadoc", aliases: [], requires: ["markup", "java", "javadoclike"]},
    "javadoclike": {displayName: "Javadoc-like", aliases: []},
    "javascript": {displayName: "JavaScript", aliases: ["js"], requires: ["clike"]},
    "js-extras": {displayName: "JS-extras", aliases: [], requires: ["javascript"]},
    "js-templates": {displayName: "JS-templates", aliases: [], requires: ["javascript"]},
    "jsdoc": {displayName: "JSDoc", aliases: [], requires: ["javascript", "javadoclike", "typescript"]},
    "json": {displayName: "JSON", aliases: ["webmanifest", "jsonp"]},
    "json5": {displayName: "JSON5", aliases: [], requires: ["json"]},
    "jsx": {displayName: "JSX", aliases: [], requires: ["markup", "javascript"]},
    "jolie": {displayName: "Jolie", aliases: [], requires: ["clike"]},
    "julia": {displayName: "Julia", aliases: []},
    "kotlin": {displayName: "Kotlin", aliases: ["kt", "kts"], requires: ["clike"]},
    "kumir": {displayName: "Kumir", aliases: ["kum"]},
    "latex": {displayName: "LaTeX", aliases: ["tex", "context"]},
    "latte": {displayName: "Latte", aliases: [], requires: ["clike", "markup-templating", "php"]},
    "less": {displayName: "Less", aliases: [], requires: ["css"]},
    "lilypond": {displayName: "LilyPond", aliases: ["ly"], requires: ["scheme"]},
    "liquid": {displayName: "Liquid", aliases: [], requires: ["markup-templating"]},
    "lisp": {displayName: "Lisp", aliases: ["emacs", "elisp", "emacs-lisp"]},
    "livescript": {displayName: "LiveScript", aliases: []},
    "llvm": {displayName: "LLVM IR", aliases: []},
    "lua": {displayName: "Lua", aliases: []},
    "makefile": {displayName: "Makefile", aliases: []},
    "markdown": {displayName: "Markdown", aliases: ["md"], requires: ["markup"]},
    "markup": {displayName: "Plain-text", aliases: ["plain-text", "text", "txt", "xml", "svg", "mathml", "ssml", "atom", "rss", "xml-doc"]},
    "markup-templating": {displayName: "Markup-templating", aliases: [], requires: ["markup"]},
    "matlab": {displayName: "MATLAB", aliases: []},
    "mermaid": {displayName: "Mermaid", aliases: []},
    "moonscript": {displayName: "MoonScript", aliases: ["moon"]},
    "naniscript": {displayName: "Naniscript", aliases: ["nani"]},
    "n4js": {displayName: "N4JS", aliases: ["n4jsd"], requires: ["javascript"]},
    "nix": {displayName: "Nix", aliases: []},
    "objectivec": {displayName: "Objective-C", aliases: ["objc"], requires: ["c"]},
    "ocaml": {displayName: "OCaml", aliases: []},
    "opencl": {displayName: "OpenCL", aliases: [], requires: ["c"]},
    "openqasm": {displayName: "OpenQASM", aliases: ["qasm"]},
    "oz": {displayName: "Oz", aliases: []},
    "pascal": {displayName: "Pascal", aliases: ["objectpascal"]},
    "pcaxis": {displayName: "PCAxis", aliases: ["px"]},
    "peoplecode": {displayName: "PeopleCode", aliases: ["pcode"]},
    "perl": {displayName: "Perl", aliases: []},
    "php": {displayName: "PHP", aliases: [], requires: ["markup-templating"]},
    "phpdoc": {displayName: "PHPDoc", aliases: [], requires: ["php", "javadoclike"]},
    "php-extras": {displayName: "PHP-extras", aliases: [], requires: ["php"]},
    "plsql": {displayName: "PL/SQL", aliases: [], requires: ["sql"]},
    "powershell": {displayName: "PowerShell", aliases: []},
    "powerquery": {displayName: "PowerQuery", aliases: ["pq", "mscript"]},
    "processing": {displayName: "Processing", aliases: [], requires: ["clike"]},
    "prolog": {displayName: "Prolog", aliases: []},
    "protobuf": {displayName: "Protobuf", aliases: [], requires: ["clike"]},
    "pug": {displayName: "Pug", aliases: [], requires: ["markup", "javascript"]},
    "purebasic": {displayName: "PureBasic", aliases: ["pbfasm"], requires: ["clike"]},
    "purescript": {displayName: "PureScript", aliases: ["purs"], requires: ["haskell"]},
    "python": {displayName: "Python", aliases: ["py", "python3"]},
    "qsharp": {displayName: "Q#", aliases: ["qs"], requires: ["clike"]},
    "qml": {displayName: "QML", aliases: [], requires: ["javascript"]},
    "qore": {displayName: "Qore", aliases: [], requires: ["clike"]},
    "r": {displayName: "R", aliases: []},
    "racket": {displayName: "Racket", aliases: ["rkt"], requires: ["scheme"]},
    "reason": {displayName: "Reason", aliases: [], requires: ["clike"]},
    "regex": {displayName: "Regex", aliases: []},
    "renpy": {displayName: "Ren'Py", aliases: ["rpy"]},
    "rest": {displayName: "reStructuredText", aliases: []},
    "robotframework": {displayName: "RobotFramework", aliases: ["robot"]},
    "ruby": {displayName: "Ruby", aliases: ["rb"], requires: ["clike"]},
    "rust": {displayName: "Rust", aliases: []},
    "sas": {displayName: "SAS", aliases: []},
    "sass": {displayName: "Sass", aliases: [], requires: ["css"]},
    "scala": {displayName: "Scala", aliases: [], requires: ["java"]},
    "scheme": {displayName: "Scheme", aliases: []},
    "scss": {displayName: "Scss", aliases: [], requires: ["css"]},
    "shell-session": {displayName: "Shell-session", aliases: ["sh-session", "shellsession"], requires: ["bash"]},
    "smarty": {displayName: "Smarty", aliases: [], requires: ["markup-templating"]},
    "sml": {displayName: "SML", aliases: ["smlnj"]},
    "smalltalk": {displayName: "Smalltalk", aliases: []},
    "solidity": {displayName: "Solidity", aliases: ["sol"], requires: ["clike"]},
    "solution-file": {displayName: "Solution-file", aliases: ["sln"]},
    "soy": {displayName: "Soy", aliases: [], requires: ["markup-templating"]},
    "sparql": {displayName: "SPARQL", aliases: ["rq"], requires: ["turtle"]},
    "sqf": {displayName: "SQF", aliases: [], requires: ["clike"]},
    "sql": {displayName: "SQL", aliases: []},
    "squirrel": {displayName: "Squirrel", aliases: [], requires: ["clike"]},
    "swift": {displayName: "Swift", aliases: []},
    "t4-cs": {displayName: "T4-cs", aliases: ["t4"], requires: ["t4-templating", "csharp"]},
    "t4-templating": {displayName: "T4-templating", aliases: []},
    "t4-vb": {displayName: "T4-vb", aliases: [], requires: ["t4-templating", "vbnet"]},
    "tap": {displayName: "TAP", aliases: [], requires: ["yaml"]},
    "tcl": {displayName: "Tcl", aliases: []},
    "textile": {displayName: "Textile", aliases: [], requires: ["markup"]},
    "toml": {displayName: "TOML", aliases: []},
    "tremor": {displayName: "Tremor", aliases: ["trickle", "troy"]},
    "turtle": {displayName: "Turtle", aliases: ["trig"]},
    "twig": {displayName: "Twig", aliases: [], requires: ["markup-templating"]},
    "typescript": {displayName: "TypeScript", aliases: ["ts"], requires: ["javascript"]},
    "typoscript": {displayName: "TypoScript", aliases: ["tsconfig"]},
    "unrealscript": {displayName: "UnrealScript", aliases: ["uscript", "uc"]},
    "uri": {displayName: "URI", aliases: ["url"]},
    "v": {displayName: "V", aliases: [], requires: ["clike"]},
    "vala": {displayName: "Vala", aliases: [], requires: ["clike"]},
    "vbnet": {displayName: "VB.Net", aliases: [], requires: ["basic"]},
    "velocity": {displayName: "Velocity", aliases: [], requires: ["markup"]},
    "verilog": {displayName: "Verilog", aliases: []},
    "vhdl": {displayName: "VHDL", aliases: []},
    "visual-basic": {displayName: "Visual Basic", aliases: ["vb", "vba"]},
    "web-idl": {displayName: "Web-IDL", aliases: ["webidl"]},
    "webassembly": {displayName: "WebAssembly", aliases: []},
    "wiki": {displayName: "Wiki", aliases: [], requires: ["markup"]},
    "wolfram": {displayName: "Mathematica", aliases: ["mathematica", "nb", "wl"]},
    "xeora": {displayName: "Xeora", aliases: ["xeoracube"], requires: ["markup"]},
    "xml-doc": {displayName: "XML-Doc", aliases: [], requires: ["markup"]},
    "xquery": {displayName: "XQuery", aliases: [], requires: ["markup"]},
    "yaml": {displayName: "YAML", aliases: ["yml"]}
} as const;


type Id = keyof typeof catalog;
const aliasToId: Record<string, Id> = {};
for (const [lang, spec] of Object.entries(catalog)) {
    aliasToId[lang] = lang;
    for (const alias of spec.aliases)
        aliasToId[alias] = lang;
}

export const canonicalId = (lang: string): Id | null => {
    const norm = lang.toLowerCase().replace(/[ ._]/g, '-');
    return aliasToId[norm] ?? null;
};

export const prettyName = (lang: string): string => {
    const id = canonicalId(lang);
    if (!id || !(id in catalog))
        return lang; // Return original if not found
    return catalog[id].displayName;
};


export const getAllDependencies = (lang: string | string[]): string[] => {
    if( typeof lang === 'object' )
        return lang.map(l => getAllDependencies(l)).reduce((prev, cur) => [...prev, ...cur], []);

    const id = canonicalId(lang);
    if (!id || !(id in catalog))
        return [];

    const res = [id];
    const dependencies = catalog[id].requires ?? [];
    dependencies.forEach(dep => {
        res.push(...getAllDependencies(dep));
    });
    return [...new Set(res)];
};

class DependencyLoader {
    static startedLoading: Set<string> = new Set<string>();
    private readonly languages: string | string[];
    constructor(languages: string | string[]) {
        this.languages = languages;
    }

    /// DFS
    private loadLanguage = async (lang: string): Promise<void> => {
        // console.log('loadLanguage', lang, 'startedLoading:', this.startedLoading);
        DependencyLoader.startedLoading.add(lang);
        const dep = getAllDependencies(lang);

        await Promise.all(dep.filter(l => !DependencyLoader.startedLoading.has(l)).map(async l => this.loadLanguage(l)));
        await import(`prismjs/components/prism-${lang}.min`);
    }

    load = async () => {
        if( typeof this.languages === 'string' )
            return this.loadLanguage(this.languages);
        return Promise.all(this.languages.map(async l => this.loadLanguage(l)));
    }
}

export const loadDependencies = async (language: string) => {
    const deps = getAllDependencies(language);
    const unique = [...new Set(deps)];
    await new DependencyLoader(unique).load();
    console.log('loaded:', unique);
    return unique;
}

export const loadLineNumbers = async () => {
    await Promise.all([
        import((`prismjs/plugins/line-numbers/prism-line-numbers`)),
        import((`prismjs/plugins/line-numbers/prism-line-numbers.css`)),
    ]);
    console.log('loaded line numbers');
}

export const loadMode = async (mode: 'light' | 'dark' | 'system') => {
    if (mode === 'dark')
        await import((`prismjs/themes/prism-okaidia.min.css`));
    else
        await import((`prismjs/themes/prism.min.css`));
    console.log('loaded prism mode:', mode);
}
