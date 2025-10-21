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
  annotationPlugin
);

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return `${str[0].toUpperCase()}${str.substring(1)}`;
}

const WeatherChart = ({ cityName, weatherData, data }) => {
  if (!weatherData || !weatherData.hourly || !data || !data.dataKey) {
    return (
      <div className="bg-slate-50 rounded-xl shadow-xl p-4 flex items-center justify-center h-[400px]">
        <p>Weather data is unavailable or incomplete.</p>
      </div>
    );
  }

  let name = "";
  let yAxisTitle = "";

  if (data.dataKey === "temperature_2m") {
    name = "Temperature";
    yAxisTitle = "Temperature (°C)";
  } else if (data.dataKey === "precipitation") {
    name = "Precipitation";
    yAxisTitle = "Precipitation (mm)";
  } else if (data.dataKey === "cloud_cover") {
    name = "Cloud Cover";
    yAxisTitle = "Cloud Cover (%)";
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
        borderColor: "#0891B2",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        pointRadius: 2,
        pointHoverRadius: 6,
        borderWidth: 2,
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
          displayFormats: {
            hour: "HH:mm",
          },
          tooltipFormat: "MMM d, HH:mm",
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
        grid: {
          color: "#E2E8F0",
        },
        ticks: {
          color: "#475569",
        },
        title: {
          display: true,
          text: "Time",
          color: "#475569",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#E2E8F0",
        },
        ticks: {
          color: "#475569",
        },
        title: {
          display: true,
          text: yAxisTitle,
          color: "#475569",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#1E293B",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#F8FAFC",
        bodyColor: "#F8FAFC",
        borderColor: "#334155",
        borderWidth: 1,
        padding: 10,
      },
      annotation: {
        annotations: {
          referenceLine: {
            type: "line",
            xMin: referenceLineTime,
            xMax: referenceLineTime,
            borderColor: "red",
            borderWidth: 2,
            borderDash: [6, 6],
            label: {
              content: data.time_value,
              enabled: true,
              position: "start",
              backgroundColor: "rgba(0,0,0,0.0)",
              color: "red",
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl mb-6 text-center font-semibold">
        {name} on {data.date_value}
      </h2>
      <div className="relative h-[250px] md:h-[400px] lg:h-[400px]">
        <Line options={chartOptions} data={chartData} />
      </div>
    </div>
  );
};

export default WeatherChart;
