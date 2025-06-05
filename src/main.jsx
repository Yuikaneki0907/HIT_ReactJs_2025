import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom"
import { ThemeProvider } from "./ThemeContext.jsx";
import { StoreProvider } from "./components/store/index.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </StoreProvider>
  </StrictMode>
);
