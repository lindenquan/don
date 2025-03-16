import type { Component } from "solid-js";
import { createEffect } from "solid-js";

import logo from "~/public/images/logo.svg";
import styles from "~/src/App.module.css";

const App: Component = () => {
  console.log(import.meta.env);

  createEffect(() => {
    document.title = import.meta.env.VITE_APP_TITLE;
  });
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid & changesets
        </a>
      </header>
    </div>
  );
};

export default App;
