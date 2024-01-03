import { FreshContext } from "$fresh/server.ts";
import { get } from "../../utils/db.ts";

// @ts-ignore
export const handler = async (_req: Request, _ctx: FreshContext): Response => {
  const id = _ctx.params.paste;
  const paste = await get(id);
  if (!paste) {
    return new Response(null, {
      status: 404,
    });
  }

  // @ts-ignore
  return new Response(JSON.stringify(paste), {
    headers: {
      "content-type": "application/json",
    },
  });
};
