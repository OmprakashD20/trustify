import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@/App.jsx";
import "@/index.css";

import { ThemeProvider } from "@/providers/ThemeProvider.jsx";
import { AppProvider } from "@/context/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </ThemeProvider>
);
