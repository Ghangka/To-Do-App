import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ShoppingListProvider } from "./state.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShoppingListProvider>
      <App />
    </ShoppingListProvider>
  </StrictMode>
);
