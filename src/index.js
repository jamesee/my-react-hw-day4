import * as React from "react";
import * as ReactDOM from "react-dom";
import { AuthProvider } from "./domains/auth";
import "./index.css";
import { Gallery } from "./pages/gallery";

ReactDOM.render(
  <AuthProvider>
    <Gallery />
  </AuthProvider>,
  document.querySelector("#root")
);
