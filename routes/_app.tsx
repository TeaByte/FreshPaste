import { type PageProps } from "$fresh/server.ts";

import Footer from "../components/Footer.tsx";
import NavBar from "../components/NavBar.tsx";

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
        <NavBar />
        <main class="flex flex-col items-center justify-center gap-2 px-6 md:px-20 w-full">
          <div class="w-full">
            <Component />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
