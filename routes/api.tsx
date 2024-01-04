import { asset } from "$fresh/runtime.ts";
import { Head } from "$fresh/runtime.ts";

export default function API() {
  return (
    <>
      <Head>
        <title>Fresh Paste - API</title>
      </Head>

      <section class="mt-8">
        <div class="flex flex-col justify-between items-center gap-16">
          <div class="flex justify-center items-center flex-col gap-2 w-full">
            <div class="flex gap-1 items-center justify-center w-full">
              <p class="text-1xl font-bold bg-gray-300 rounded w-fit p-1">
                POST
              </p>
              <input
                class="bg-white border-gray-500 border-2 rounded text-center p-1 w-96"
                disabled
                value="https://clear-cow-12.deno.dev/api/new/"
              />
            </div>
            <p>Allows you to create a new paste.</p>
            <p>
              {'{"content":"Hi", "syntax":"plain"}'}
            </p>
          </div>

          <div class="flex justify-center items-center flex-col gap-2 w-full">
            <div class="flex gap-1 items-center justify-center w-full">
              <p class="text-1xl font-bold bg-gray-300 rounded w-fit p-1">
                GET
              </p>
              <input
                class="bg-white border-gray-500 border-2 rounded text-center p-1 w-96"
                disabled
                value="https://clear-cow-12.deno.dev/api/{id}"
              />
            </div>
            <p>Allows you to view the full data.</p>
            <p>
              {"{id} equals id of the paste"}
            </p>
          </div>

          <div class="flex justify-center items-center flex-col gap-2 w-full">
            <div class="flex gap-1 items-center justify-center w-full">
              <p class="text-1xl font-bold bg-gray-300 rounded w-fit p-1">
                GET
              </p>
              <input
                class="bg-white border-gray-500 border-2 rounded text-center p-1 w-96"
                disabled
                value="https://clear-cow-12.deno.dev/api/raw/{id}"
              />
            </div>
            <p>Allows you to view the raw content.</p>
            <p>
              {"{id} equals id of the paste"}
            </p>
          </div>

          <p class=" bg-gray-300 rounded w-fit p-1">
            Pastes gets expired after 30 days!
          </p>
        </div>
        <div>
        </div>
      </section>
    </>
  );
}
