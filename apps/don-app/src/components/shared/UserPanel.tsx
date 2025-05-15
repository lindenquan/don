import { Show } from "solid-js";
import { login, logout } from "~/stores/user/actions";
import { userState } from "~/stores/user/state";

export default function UserPanel() {
  return (
    <div>
      <Show
        when={userState.user}
        fallback={
          <button class="btn btn-primary" onClick={() => login("x", "x")}>
            Login
          </button>
        }
      >
        <p>Welcome, {userState.user!.name}</p>
        <button onClick={logout}>Logout</button>
      </Show>
      <Show when={userState.loading}>Logging in...</Show>
      <Show when={userState.error}>
        <p>{userState.error}</p>
      </Show>
    </div>
  );
}
