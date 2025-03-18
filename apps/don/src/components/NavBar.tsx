import { A } from "@solidjs/router";

function NavBar() {
  return (
    <nav>
      <A href="/" rel="prefetch">
        Home
      </A>
      <A href="/about" rel="prefetch">
        About
      </A>
    </nav>
  );
}

export default NavBar;
