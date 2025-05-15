import { setTheme } from "~/stores/appConfig/actions";
import { appConfig } from "~/stores/appConfig/state";

export default function Theme() {
  return (
    <div>
      <p>Theme: {appConfig.theme}</p>
      <button
        class="btn"
        onClick={() =>
          setTheme(appConfig.theme === "dracula" ? "fantasy" : "dracula")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}
