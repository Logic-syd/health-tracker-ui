// src/components/TemperatureChart.tsx

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

export function TemperatureChart() {
  const  data  = useHealthData();
    const chartData = data.timestamps.map((time, i) => ({
  time,
  temperature: data.temperature[i],
}));
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Body Temperature</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[35, 38]} unit="°C" />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#82ca9d" name="Temperature" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
