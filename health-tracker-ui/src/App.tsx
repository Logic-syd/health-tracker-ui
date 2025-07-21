// src/App.tsx

import { useEffect, useState } from "react";
import { HealthDataProvider } from "./context/HealthDataContext";
import { Dashboard } from "./pages/Dashboard";

function App() {
  const [theme, setTheme] = useState("light");
  const [refreshInterval, setRefreshInterval] = useState(5000);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <HealthDataProvider refreshInterval={refreshInterval}>
      <Dashboard
        refreshInterval={refreshInterval}
        setRefreshInterval={setRefreshInterval}
        toggleTheme={toggleTheme}
      />
    </HealthDataProvider>
  );
}

export default App;
