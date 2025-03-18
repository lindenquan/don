import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";
import { Suspense, createEffect, lazy } from "solid-js";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));

const App: Component = () => {
  createEffect(() => {
    document.title = import.meta.env.VITE_APP_TITLE;
  });
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </Suspense>
  );
};

export default App;
