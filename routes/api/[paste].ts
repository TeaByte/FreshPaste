import { Handlers } from "$fresh/server.ts";
import { get } from "../../utils/db.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const id = ctx.params.paste;
    const paste = await get(id);
    if (!paste) {
      return new Response(JSON.stringify({ error: "paste not found" }), {
        status: 404,
        headers: {
          "content-type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(paste), {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};
