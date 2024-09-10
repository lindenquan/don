import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";
import { RouterHead } from "~/components/router-head/router-head";

import "./global.css";

export default component$(() => {
  const nonce = "7aef386c1d7bf19750fa0429aafb218a";
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        {!isDev && <ServiceWorkerRegister nonce={nonce} />}
      </body>
    </QwikCityProvider>
  );
});
