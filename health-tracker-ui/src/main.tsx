import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HealthDataProvider } from "./context/HealthDataContext.tsx";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HealthDataProvider>
      <App />
    </HealthDataProvider>
  </React.StrictMode>
);
