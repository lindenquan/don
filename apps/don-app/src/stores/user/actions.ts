import { dispatchUser } from "./dispatcher";
import type { User } from "./types";

export async function login(username: string, password: string) {
  dispatchUser({ type: "LOGIN_START" });

  try {
    // simulate login API
    await new Promise((r) => setTimeout(r, 1000));
    const user: User = { id: "1", name: "John Doe", email: "john@example.com" };
    dispatchUser({ type: "LOGIN_SUCCESS", payload: user });
  } catch {
    dispatchUser({ type: "LOGIN_ERROR", payload: "Login failed" });
  }
}

export function logout() {
  dispatchUser({ type: "LOGOUT" });
}
