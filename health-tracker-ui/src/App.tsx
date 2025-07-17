// Project: health-tracker-ui
// Stack: React + Vite + TypeScript + Recharts

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const mockData = [
  { time: "08:00", heartRate: 72, temperature: 36.6, bloodPressure: 120 },
  { time: "10:00", heartRate: 76, temperature: 36.8, bloodPressure: 122 },
  { time: "12:00", heartRate: 80, temperature: 37.0, bloodPressure: 118 },
  { time: "14:00", heartRate: 78, temperature: 36.7, bloodPressure: 115 },
];

export default function HealthDashboard() {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    // simulate API call
    const timer = setInterval(() => {
      setData((prev) => [
        ...prev.slice(-3),
        {
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          heartRate: Math.floor(Math.random() * 10 + 70),
          temperature: +(36 + Math.random()).toFixed(1),
          bloodPressure: Math.floor(Math.random() * 10 + 110),
        },
      ]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Health Tracker Dashboard</h1>
      <LineChart
        width={700}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate" />
        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" name="Temperature (°C)" />
        <Line type="monotone" dataKey="bloodPressure" stroke="#ff7300" name="Blood Pressure" />
      </LineChart>
    </div>
  );
}
