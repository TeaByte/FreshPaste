import { Handlers } from "$fresh/server.ts";
import { set } from "../utils/db.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },

  async POST(req, ctx) {
    const form = await req.formData();
    const content = form.get("content")?.toString();
    const syntax = form.get("syntax")?.toString();
    if (!content || !syntax) {
      return new Response(null, {
        status: 404,
      });
    }

    const id = set(content, syntax);
    const headers = new Headers();
    headers.set("location", `/${id}`);
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default function Subscribe() {
  return (
    <section>
      <form
        class="flex flex-col w-full items-center justify-center gap-2"
        method="post"
      >
        <textarea
          minLength={5}
          maxlength={5000}
          required
          class="px-2 w-full py-1 border-gray-500 bg-white border-2 rounded"
          rows={17}
          type="text"
          name="content"
          placeholder="Paste your content here"
          value=""
        />
        <div class="flex gap-2">
          <button
            type="submit"
            class="px-2 py-1 w-32 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
          >
            Share
          </button>
          <select
            name="syntax"
            class="bg-white border-gray-500 border-2 rounded w-40"
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
            ].map((syntax) => (
              <option value={syntax}>{syntax.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
}
