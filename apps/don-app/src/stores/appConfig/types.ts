export type Theme = "fantasy" | "dracula";

export type AppConfigState = {
  theme: Theme;
  language: string;
  timeZone: string;
};
