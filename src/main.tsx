import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemePaletteMode } from "./context/ThemePaletteMode/ThemePaletteMode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemePaletteMode>
      <App />
    </ThemePaletteMode>
  </StrictMode>
);
