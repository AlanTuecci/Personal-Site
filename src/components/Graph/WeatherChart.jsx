import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Filler,
} from "chart.js";
import "chartjs-adapter-date-fns";
import annotationPlugin from "chartjs-plugin-annotation";
import { enUS } from "date-fns/locale";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Filler,
  annotationPlugin,
);

const WeatherChart = ({ cityName, weatherData, data }) => {
  if (!weatherData || !weatherData.hourly || !data || !data.dataKey) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-32 w-64 bg-gray-100 rounded"></div>
        </div>
      </div>
    );
  }

  let name = "";
  let yAxisTitle = "";

  if (data.dataKey === "temperature_2m") {
    name = "Temperature";
    yAxisTitle = "°C";
  } else if (data.dataKey === "precipitation") {
    name = "Precipitation";
    yAxisTitle = "mm";
  } else if (data.dataKey === "cloud_cover") {
    name = "Cloud Cover";
    yAxisTitle = "%";
  }

  const chartPoints = weatherData.hourly.time.map((t, i) => ({
    x: new Date(t).getTime(),
    y: weatherData.hourly[data.dataKey][i],
  }));

  const referenceLineTime = new Date(`${weatherData.hourly.time[0].substring(0, 11) + data.time_value}`).getTime();

  const chartData = {
    datasets: [
      {
        label: name,
        data: chartPoints,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        pointRadius: 0,
        pointHoverRadius: 6,
        borderWidth: 3,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour",
          displayFormats: { hour: "HH:mm" },
        },
        adapters: { date: { locale: enUS } },
        grid: { display: false },
        ticks: {
          color: "#94A3B8",
          font: { family: "system-ui, sans-serif" },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#F1F5F9",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#94A3B8",
          font: { family: "system-ui, sans-serif" },
        },
        title: {
          display: true,
          text: yAxisTitle,
          color: "#94A3B8",
          font: { weight: "bold" },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0F172A",
        titleColor: "#F8FAFC",
        bodyColor: "#F8FAFC",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
      },
      annotation: {
        annotations: {
          referenceLine: {
            type: "line",
            xMin: referenceLineTime,
            xMax: referenceLineTime,
            borderColor: "#EF4444",
            borderWidth: 2,
            borderDash: [4, 4],
            label: {
              content: `📸 ${data.time_value}`,
              enabled: true,
              position: "start",
              backgroundColor: "#EF4444",
              color: "white",
              borderRadius: 4,
              font: { size: 11, weight: "bold", family: "system-ui, sans-serif" },
            },
          },
        },
      },
    },
  };

  return (
    <div className="absolute inset-0 pb-4">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
};

export default WeatherChart;
