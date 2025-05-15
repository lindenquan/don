import { setTimeZone } from "~/stores/appConfig/actions";
import { appConfig } from "~/stores/appConfig/state";

export default function TimeSetting() {
  return (
    <div>
      <p>TimeZone: {appConfig.timeZone}</p>
      <button
        onClick={() =>
          setTimeZone(appConfig.timeZone === "UTC" ? "America/New_York" : "UTC")
        }
      >
        Set TimeZone
      </button>
    </div>
  );
}
