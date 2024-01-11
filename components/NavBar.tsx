export default function NavBar() {
  return (
    <nav class="navbar bg-neutral text-neutral-content">
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
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul class="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a href="/api">API</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
}
