import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/albert-sans";
import PanelProvider from "./contexts/panelContext.jsx";

createRoot(document.getElementById("root")).render(
  <PanelProvider>
    <App />
  </PanelProvider>
);
