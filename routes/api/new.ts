import { Handlers } from "$fresh/server.ts";
import { set } from "../../utils/db.ts";

export const handler: Handlers = {
  async POST(req) {
    const body = await req.json();
    const [content, syntax] = [body.content, body.syntax];
    if (!content || !syntax) {
      return new Response(
        JSON.stringify({ error: "content and syntax are required" }),
        {
          status: 404,
          headers: {
            "content-type": "application/json",
          },
        },
      );
    }
    const id = set(content, syntax);
    return new Response(JSON.stringify({ id }), {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};
