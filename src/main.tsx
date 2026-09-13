import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

window.history.scrollRestoration = "manual";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Lunelle-Blooms">
      <App />
    </BrowserRouter>
  </StrictMode>
);