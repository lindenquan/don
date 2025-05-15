import { updateAppConfig } from "./state";
import type { Theme } from "./types";

const updateTheme = (payload: string) => {
  document.documentElement.setAttribute("data-theme", payload);
};

export type AppConfigAction =
  | { type: "SET_THEME"; payload: Theme }
  | { type: "SET_LANGUAGE"; payload: string }
  | { type: "SET_TIMEZONE"; payload: string };

export function dispatchAppConfig(action: AppConfigAction) {
  switch (action.type) {
    case "SET_THEME": {
      updateAppConfig("theme", action.payload);
      updateTheme(action.payload);
      break;
    }
    case "SET_LANGUAGE":
      updateAppConfig("language", action.payload);
      break;
    case "SET_TIMEZONE":
      updateAppConfig("timeZone", action.payload);
      break;
  }
}
