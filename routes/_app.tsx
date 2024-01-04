import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fresh Paste</title>
        <meta
          name="description"
          content="Effortless text sharing for quick collaboration. Share code snippets, notes, and more with simplicity and ease."
        />
        <meta
          name="keywords"
          content="text sharing, collaboration, code snippets, notes, online platform, Fresh Paste"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="TeaBytr" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main class="flex flex-col items-center justify-center gap-2 px-6 md:px-20">
          <nav class="flex items-center justify-center w-full gap-6 mt-3 mb-5 text-lg">
            <div>
              <a href="/" className="flex gap-1 items-center justify-center">
                <img
                  src="/logo.svg"
                  width="35"
                  height="35"
                  alt="the Fresh logo: a sliced lemon dripping with juice"
                />
                FreshPaste
              </a>
            </div>
            <a href="/api">API</a>
          </nav>
          <div class="w-full">
            <Component />
          </div>
        </main>
        <footer class="bg-gray-300 fixed bottom-0 w-full">
          <div class="flex items-center justify-between p-4 px-8">
            <a href="https://fresh.deno.dev" target="_blank">
              <img
                width="197"
                height="37"
                src="https://fresh.deno.dev/fresh-badge.svg"
              />
            </a>
            <a
              href="https://github.com/TeaByte/FreshPaste"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
