import { Handlers } from "$fresh/server.ts";
import { getPaste } from "../../../utils/db.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const id = ctx.params.paste;
    const paste = await getPaste(id);
    if (!paste) {
      return new Response("Paste not found!.", {
        status: 404,
      });
    }
    // @ts-ignore
    return new Response(paste.content);
  },
};
