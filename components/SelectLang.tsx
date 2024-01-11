export default function SelectLang() {
  return (
    <select
      name="syntax"
      class="select select-bordered w-full max-w-xs"
    >
      <option value="plain" default>TEXT</option>
      {[
        "html",
        "css",
        "javascript",
        "bash",
        "basic",
        "brainfuck",
        "c",
        "csharp",
        "cpp",
        "clojure",
        "coffeescript",
        "dart",
        "elixir",
        "erlang",
        "fsharp",
        "factor",
        "go",
        "graphql",
        "haskell",
        "java",
        "julia",
        "kotlin",
        "lisp",
        "livescript",
        "lua",
        "markdown",
        "matlab",
        "ocaml",
        "php",
        "phpdoc",
        "python",
        "qsharp",
        "r",
        "regex",
        "ruby",
        "rust",
        "sql",
        "swift",
        "typescript",
        "webassembly",
        "yaml",
        "zig",
      ].map((syntax) => <option value={syntax}>{syntax.toUpperCase()}</option>)}
    </select>
  );
}
