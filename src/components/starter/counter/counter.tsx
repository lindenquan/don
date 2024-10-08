import { $, component$, useSignal } from "@builder.io/qwik";
import Gauge from "../gauge";
import styles from "./counter.module.css";

export default component$(() => {
  const count = useSignal(50);

  const setCount = $((newValue: number) => {
    if (newValue < 0 || newValue > 100) {
      return;
    }
    count.value = newValue;
  });

  return (
    <div class={styles["counter-wrapper"]}>
      <button
        class="button-dark button-small"
        onClick$={() => setCount(count.value - 1)}
      >
        -
      </button>
      <Gauge value={count.value} />
      <button
        class="button-dark button-small"
        onClick$={() => setCount(count.value + 1)}
      >
        +
      </button>
    </div>
  );
});
