import { setTheme } from "~/stores/appConfig/actions";
import { appConfig } from "~/stores/appConfig/state";

export default function Theme() {
  return (
    <div>
      <p>Theme: {appConfig.theme}</p>
      <button
        onClick={() => setTheme(appConfig.theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
    </div>
  );
}
