import { Handlers } from "$fresh/server.ts";
import { get } from "../../../utils/db.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const id = ctx.params.paste;
    const paste = await get(id);
    if (!paste) {
      return new Response("Paste not found!.", {
        status: 404,
      });
    }
    // @ts-ignore
    return new Response(paste.content);
  },
};
