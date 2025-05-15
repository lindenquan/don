import { dispatchAppConfig } from "./dispatcher";
import type { Theme } from "./types";

export const setTheme = (theme: Theme) =>
  dispatchAppConfig({ type: "SET_THEME", payload: theme });

export const setLanguage = (lang: string) =>
  dispatchAppConfig({ type: "SET_LANGUAGE", payload: lang });

export const setTimeZone = (timeZone: string) =>
  dispatchAppConfig({ type: "SET_TIMEZONE", payload: timeZone });
