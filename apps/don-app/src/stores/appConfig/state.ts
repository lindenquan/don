import { createStore } from "solid-js/store";
import type { AppConfigState } from "./types";

const [appConfig, setAppConfig] = createStore<AppConfigState>({
  theme: "light",
  language: "en",
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
});

export { appConfig };

export function updateAppConfig<K extends keyof AppConfigState>(
  key: K,
  value: AppConfigState[K],
) {
  setAppConfig(key, value);
}
