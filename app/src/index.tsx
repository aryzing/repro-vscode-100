/* @refresh reload */
import "solid-devtools";
import { render } from "solid-js/web";

import { App } from "./app.tsx";
import "./index.css";

function init() {
  const root = document.getElementById("root");

  render(() => <App />, root!);
}

init();
