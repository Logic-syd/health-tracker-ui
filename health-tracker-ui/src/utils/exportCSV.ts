import type { HealthData } from "../context/HealthDataContext";

export function exportHealthDataToCSV(data: HealthData) {
  const headers = ["Time", "Heart Rate", "Temperature", "Systolic", "Diastolic"];
  const rows = data.timestamps.map((time, i) => [
    time,
    data.heartRate[i] ?? "",
    data.temperature[i] ?? "",
    data.systolic[i] ?? "",
    data.diastolic[i] ?? "",
  ]);

  const csv = [headers, ...rows]
    .map(row => row.join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "health_data.csv";
  link.click();
  URL.revokeObjectURL(url);
}
