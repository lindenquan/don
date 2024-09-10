import type { RequestHandler } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";

export const onRequest: RequestHandler = (event) => {
  if (!isDev) {
    const nonce = "7aef386c1d7bf19750fa0429aafb218a";
    event.sharedMap.set("@nonce", nonce);
  }
};
