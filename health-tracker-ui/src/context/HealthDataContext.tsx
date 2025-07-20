import React, { createContext, useContext, useEffect, useState } from "react";

type HealthData = {
  heartRate: number[];
  temperature: number[];
  systolic: number[]; // 收缩压
  diastolic: number[]; // 舒张压
  timestamps: string[];
};

const HealthDataContext = createContext<HealthData | null>(null);

export const HealthDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<HealthData>({
    heartRate: [],
    temperature: [],
    systolic: [],
    diastolic: [],
    timestamps: [],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setData(prev => ({
        heartRate: [...prev.heartRate.slice(-9), Math.floor(Math.random() * 40) + 70],
        temperature: [...prev.temperature.slice(-9), +(36 + Math.random()).toFixed(1)],
        systolic: [...prev.systolic.slice(-9), Math.floor(Math.random() * 30) + 110],
        diastolic: [...prev.diastolic.slice(-9), Math.floor(Math.random() * 20) + 70],
        timestamps: [...prev.timestamps.slice(-9), now],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <HealthDataContext.Provider value={data}>{children}</HealthDataContext.Provider>;
};

export const useHealthData = () => {
  const ctx = useContext(HealthDataContext);
  if (!ctx) throw new Error("useHealthData must be used within a HealthDataProvider");
  return ctx;
};
