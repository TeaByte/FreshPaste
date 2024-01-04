import { asset } from "$fresh/runtime.ts";
import { Head } from "$fresh/runtime.ts";
import { type Handlers, PageProps } from "$fresh/server.ts";
import { get } from "../utils/db.ts";
import CopyButton from "../islands/CopyButton.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const id = ctx.params.paste;
    const paste = await get(id);
    if (!paste) {
      return ctx.renderNotFound();
    }
    return ctx.render({ paste, id });
  },
};
export default function Greet(props: PageProps) {
  return (
    <>
      <Head>
        <script src={asset("prism.js")}></script>
        <link
          href={asset("prism.css")}
          rel="stylesheet"
        >
        </link>
      </Head>

      <section>
        <div class="flex justify-between items-center">
          <p>Syntax: {props.data.paste.syntax.toUpperCase()}</p>
          <div class={"flex gap-1 items-center justify-center"}>
            <CopyButton content={props.data.paste.content} />
            <a
              href={`/api/raw/${props.data.id}`}
              class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
            >
              Raw
            </a>
          </div>
        </div>
        <pre class="rounded h-96"><code class={`language-${props.data.paste.syntax} match-braces line-numbers`}>{props.data.paste.content}</code></pre>
      </section>
    </>
  );
}
