import { Handlers } from "$fresh/server.ts";
import { makePaste } from "../utils/db.ts";

import SelectLang from "../components/SelectLang.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
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
    const id = await makePaste(content, syntax);
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
    <section class="h-full flex flex-col items-center justify-center mx-8">
      <form
        class="grow flex flex-col w-full items-center justify-center gap-2 py-8"
        method="post"
      >
        <textarea
          minLength={5}
          maxlength={5000}
          type="text"
          name="content"
          placeholder="Paste your content here"
          class="textarea textarea-bordered bg-base-300 w-full h-full"
        >
        </textarea>
        <div class="flex gap-2">
          <button type="submit" class="btn btn-active btn-ghost w-52">
            Share
          </button>
          <SelectLang />
        </div>
      </form>
    </section>
  );
}
