import { createStore } from "solid-js/store";
import type { UserState } from "./types";

export const [userState, setUserState] = createStore<UserState>({
  user: null,
  loading: false,
  error: null,
});
