import { cuid } from "https://deno.land/x/cuid/index.js";

const kv = await Deno.openKv();

export async function makePaste(content: string, syntax: string) {
  const id = cuid();
  await kv.set(["pastes", id], { content, syntax }, { expireIn: 2592000000 });
  return id;
}

export async function getPaste(id: string) {
  const result = await kv.get(["pastes", id]);
  return result.value;
}
