import * as React from "react";
import * as ReactDOM from "react-dom";
import { AuthProvider } from "./domains/auth";
import "./index.css";
import { MarketplacePublic } from "./pages/marketplace-public";

ReactDOM.render(
  <AuthProvider>
    <MarketplacePublic />
    {/* <Marketplace /> */}
  </AuthProvider>,
  document.querySelector("#root")
);
