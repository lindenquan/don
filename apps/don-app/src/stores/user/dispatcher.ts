import { setUserState } from "./state";
import type { User } from "./types";

export type UserAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_ERROR"; payload: string }
  | { type: "LOGOUT" };

export function dispatchUser(action: UserAction) {
  switch (action.type) {
    case "LOGIN_START":
      setUserState({ loading: true, error: null });
      break;
    case "LOGIN_SUCCESS":
      setUserState({ user: action.payload, loading: false });
      break;
    case "LOGIN_ERROR":
      setUserState({ error: action.payload, loading: false });
      break;
    case "LOGOUT":
      setUserState({ user: null });
      break;
  }
}
