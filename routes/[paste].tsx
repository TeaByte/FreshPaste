import { asset } from "$fresh/runtime.ts";
import { Head } from "$fresh/runtime.ts";
import { type Handlers, PageProps } from "$fresh/server.ts";
import { getPaste } from "../utils/db.ts";

import CopyButton from "../islands/CopyButton.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const id = ctx.params.paste;
    const paste = await getPaste(id);
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
      <section class="h-full flex flex-col items-center justify-center mx-8 py-8">
        <div class="flex justify-between items-center w-full">
          <div class="badge bg-base-300">
            {props.data.paste.syntax.toUpperCase()}
          </div>
          <CopyButton content={props.data.paste.content} />
        </div>
        <pre class="rounded grow w-full"><code class={`language-${props.data.paste.syntax} match-braces line-numbers`}>{props.data.paste.content}</code></pre>
      </section>
    </>
  );
}
