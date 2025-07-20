// src/components/BloodPressureChart.tsx

import { useHealthData } from "../context/HealthDataContext.tsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function BloodPressureChart() {
  const  data  = useHealthData();
    const chartData = data.timestamps.map((time, i) => ({
  time,
   systolic: data.systolic[i],
    diastolic: data.diastolic[i],
}));
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Blood Pressure</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[100, 130]} unit="mmHg" />
          <Tooltip />
          <Line type="monotone" dataKey="systolic" stroke="#ff7300" name="Systolic" />
        <Line type="monotone" dataKey="diastolic" stroke="#8884d8" name="Diastolic" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
