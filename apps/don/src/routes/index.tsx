import Counter from "~/components/Counter";
import "./index.css";
import logo from "~public/images/logo.svg";

export const prerender = true;

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <img src={logo} alt="Logo" />
      <Counter />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank" rel="noreferrer">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
