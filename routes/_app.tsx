import { type PageProps } from "$fresh/server.ts";

import Footer from "../components/Footer.tsx";
import NavBar from "../components/NavBar.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
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
        <meta name="author" content="TeaByte" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div class="h-screen flex flex-col">
          <NavBar />
          <main class="grow">
            <Component />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
