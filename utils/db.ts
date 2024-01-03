const kv = await Deno.openKv();

export function set(content: string, syntax: string) {
  const id = crypto.randomUUID();
  kv.set(["pastes", id], { content, syntax });
  return id;
}

export const get = async (id: string) => {
  const result = await kv.get(["pastes", id]);
  return result.value;
};
