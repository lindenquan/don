import { createStore } from "solid-js/store";
import type { AppConfigState } from "./types";

export const [appConfig, setAppConfig] = createStore<AppConfigState>({
  theme: "light",
  language: "en",
});
