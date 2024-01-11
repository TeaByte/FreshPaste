export default function NavBar() {
  return (
    <nav class="navbar bg-base-300">
      <div class="flex-1">
        <a href="/" className="flex gap-1 items-center justify-center">
          <img
            src="/logo.svg"
            width="35"
            height="35"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <span class="font-bold">FreshPaste</span>
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="/api">API</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
