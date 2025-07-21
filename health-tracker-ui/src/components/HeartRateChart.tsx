import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useHealthData } from "../context/HealthDataContext.tsx";

export const HeartRateChart = () => {
  const { heartRate, timestamps } = useHealthData();
  const chartData = heartRate.map((value, i) => ({ time: timestamps[i],heartRate: heartRate[i], bpm: value ,isHigh: heartRate[i] > 100,}));
const hasHighHeartRate = heartRate.some((h) => h > 100);
  return (
    <div className="mb-8">
      <h2
  className={`text-xl font-semibold mb-2 ${
    hasHighHeartRate ? "text-red-600 animate-pulse" : ""
  }`}
>
  Heart Rate
</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[40, 140]} />
          <Tooltip />
          <Line
          type="monotone"
          stroke="var(--accent)" dataKey="heartRate" 
          name="Heart Rate"
          dot={({ cx, cy, payload }) =>
            payload.isHigh ? (
              <circle cx={cx} cy={cy} r={5} fill="red" />
            ) : (
              <circle cx={cx} cy={cy} r={3} fill="#8884d8" />
            )
          }
        />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
