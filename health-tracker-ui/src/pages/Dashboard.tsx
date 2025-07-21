import { HeartRateChart } from "../components/HeartRateChart";
import { TemperatureChart } from "../components/TemperatureChart";
import { BloodPressureChart } from "../components/BloodPressureChart";
import { useHealthData } from "../context/HealthDataContext";
import { exportHealthDataToCSV } from "../utils/exportCSV";
import { useI18n } from "../context/LanguageContext";

export const Dashboard = ({ refreshInterval, setRefreshInterval, toggleTheme }) => {
    const data = useHealthData();
    const { t, lang, setLang } = useI18n();
    console.log("current lang:", lang);
    const languages = [
        { code: "en", label: "English" },
        { code: "de", label: "Deutsch" },
        { code: "zh", label: "中文" },
    ];
    return (
        <div className="w-full min-h-screen bg-[var(--background)]">
            {/* 右上角语言切换 */}
            <div className="absolute top-4 right-8 z-10">
                <select
                    value={lang}
                    onChange={e => setLang(e.target.value as "en" | "zh" | "de")}
                    className="px-3 py-1 rounded border border-gray-300 bg-white dark:bg-gray-800 dark:text-white"
                >
                    {languages.map(l => (
                        <option key={l.code} value={l.code}>{l.label}</option>
                    ))}
                </select>
            </div>
            <div className="flex w-full">
                {/* 左侧图表区 */}
                <div className="flex-1 p-4">
                    <div className="bg-[var(--card)] text-[var(--text)] p-6 rounded shadow-md">
                        <h1 className="text-2xl font-bold mb-4">{t("dashboardTitle")}</h1>
                        <HeartRateChart />
                        <TemperatureChart />
                        <BloodPressureChart />
                    </div>
                </div>
                {/* 右边按钮区 */}
                <div className="flex flex-col items-end gap-2 mt-20 ml-4 mr-8">
                    {/* 刷新间隔输入框 */}
                    <div className="w-48">
                        <label
                            htmlFor="interval"
                            className="block text-[var(--text)] text-lg font-semibold mb-1"
                        >
                            {t("refreshInterval")}
                        </label>
                        <input
                            id="interval"
                            type="number"
                            min={1000}
                            step={1000}
                            value={refreshInterval}
                            onChange={e => setRefreshInterval(Number(e.target.value))}
                            className="w-full px-4 py-2 rounded bg-[#ffd6e0] text-black text-lg font-semibold border-none focus:ring-2 focus:ring-pink-300"
                        />
                    </div>
                    {/* 按钮 */}
                    <button
                        onClick={toggleTheme}
                        className="w-48 px-4 py-2 rounded bg-[#ff8fa3] text-white hover:opacity-90 text-lg font-semibold"
                    >
                        Toggle Theme
                    </button>
                    <button
                        className="w-48 px-4 py-2 rounded bg-[#ffb86b] text-white hover:opacity-90 text-lg font-semibold"
                        onClick={() => exportHealthDataToCSV(data)}
                    >
                        {t("exportCsv")}
                    </button>
                </div>
            </div>
        </div>
    );
};
