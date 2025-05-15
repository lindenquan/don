import { setAppConfig } from "./state";
import type { Theme } from "./types";

export type AppConfigAction =
  | { type: "SET_THEME"; payload: Theme }
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "SET_LANGUAGE"; payload: string };

export function dispatchAppConfig(action: AppConfigAction) {
  switch (action.type) {
    case "SET_THEME":
      setAppConfig("theme", action.payload);
      break;
    case "SET_LANGUAGE":
      setAppConfig("language", action.payload);
      break;
  }
}
