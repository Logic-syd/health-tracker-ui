import { HeartRateChart } from "../components/HeartRateChart";
import { TemperatureChart } from "../components/TemperatureChart";
import { BloodPressureChart } from "../components/BloodPressureChart";

export const Dashboard = () => {
  return (
    <div className="max-w-full w-full mx-auto p-4">
      <HeartRateChart />
      <TemperatureChart />
      <BloodPressureChart />
    </div>
  );
};
