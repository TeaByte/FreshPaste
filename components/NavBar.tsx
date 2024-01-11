import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";

export default function NavBar() {
  return (
    <nav class="navbar bg-base-300 flex justify-between px-4">
      <a href="/" className="flex gap-1 items-center justify-center">
        <img
          src="/logo.svg"
          width="35"
          height="35"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <span class="font-bold">FreshPaste</span>
      </a>
      <a
        class="btn btn-active btn-ghost"
        href="https://github.com/TeaByte/FreshPaste"
        target="_blank"
      >
        <IconBrandGithub />
      </a>
    </nav>
  );
}
