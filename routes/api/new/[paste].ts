import { FreshContext } from "$fresh/server.ts";
import { set } from "../../../utils/db.ts";

// NOT DONE YET
// @ts-ignore
export const handler = async (_req: Request, _ctx: FreshContext): Response => {
  const id = _ctx.params.paste;
  // const paste = await set("id", "syntax");
  // if (!paste) {
  //   return new Response(null, {
  //     status: 404,
  //   });
  // }

  // @ts-ignore
  return new Response(id);
};
