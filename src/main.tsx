import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { makeServer } from "./server/server.ts";
import { StrictMode } from "react";
makeServer();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
