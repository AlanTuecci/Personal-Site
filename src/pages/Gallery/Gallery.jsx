import Header from "../../components/Header/Header.jsx";
import WeatherChart from "../../components/Graph/WeatherChart.jsx";
import Map from "../../components/Gallery/Map.jsx";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const Gallery = () => {
  const date = new Date();
  const { collection } = useParams();
  const navigate = useNavigate();

  const [viewData, setViewData] = useState("temperature_2m");
  const [timeframe, setTimeframe] = useState("historical");

  const [timeTaken, setTimeTaken] = useState("00:00:00");
  const [dateTaken, setDateTaken] = useState(date.toDateString());
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgData, setImgData] = useState([]);
  const [locationName, setLocationName] = useState("Loading...");
  const [currImgIdx, setCurrImgIdx] = useState(0);

  const [pastWeather, setPastWeather] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchImgData = async () => {
      try {
        const response = await axios.get(`https://alantuecci.dev/gallery/api/images/${collection}`);
        setImgData(response.data.resources);
        setLocationName(response.data.location);
      } catch (err) {
        console.error(`Error fetching data: ${err}`);
        setError("Failed to load photo data.");
      }
    };
    fetchImgData();
  }, [collection]);

  useEffect(() => {
    if (imgData.length === 0) return;

    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const currImg = imgData[currImgIdx];
        const lat = encodeURIComponent(currImg.latitude);
        const lon = encodeURIComponent(currImg.longitude);
        const imgDate = encodeURIComponent(currImg.date);

        const historicalUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${imgDate}&end_date=${imgDate}&hourly=temperature_2m,precipitation,cloud_cover&daily=sunrise,sunset&timezone=auto`;
        const currentUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation,cloud_cover&daily=sunrise,sunset&timezone=auto&forecast_days=1`;

        const [historicalRes, currentRes] = await Promise.all([axios.get(historicalUrl), axios.get(currentUrl)]);

        setPastWeather(historicalRes.data);
        setCurrentWeather(currentRes.data);
        setTimeTaken(imgData[currImgIdx].time_taken.substr(0, 8));
        setDateTaken(imgData[currImgIdx].date_taken);
      } catch (error) {
        console.error(`Error fetching weather data: ${error}`);
        setError("Failed to load weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [imgData, currImgIdx]);

  const handlePrevClick = () => {
    if (imgData.length >= 1) {
      setCurrImgIdx((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imgData.length - 1));
    }
  };

  const handleNextClick = () => {
    if (imgData.length >= 1) {
      setCurrImgIdx((prevIndex) => (prevIndex < imgData.length - 1 ? prevIndex + 1 : 0));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowLeft") handlePrevClick();
      if (e.key === "ArrowRight") handleNextClick();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, imgData.length]);

  const addImageFallback = (event) => {
    event.currentTarget.src = imgData[currImgIdx]?.backup_url;
  };

  const activeWeather = timeframe === "historical" ? pastWeather : currentWeather;
  const activeDateText = timeframe === "historical" ? dateTaken : "Today";

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />

      <div className="w-[95%] max-w-7xl mx-auto mt-8">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-6"
        >
          <svg
            className="w-4 h-4 transform transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Collections
        </button>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">{locationName}</h1>
          <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 relative group overflow-hidden h-[50vh] lg:h-[70vh] flex items-center justify-center">
              {loading && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl z-10" />}

              <AnimatePresence mode="wait">
                {imgData.length > 0 && (
                  <motion.img
                    key={currImgIdx}
                    src={imgData[currImgIdx]?.url}
                    onError={addImageFallback}
                    alt={`Capture on ${imgData[currImgIdx]?.date}`}
                    className="w-full h-full object-contain rounded-xl z-0 cursor-zoom-in"
                    onClick={() => setIsModalOpen(true)}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </AnimatePresence>

              {imgData.length > 1 && (
                <>
                  <button
                    onClick={handlePrevClick}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button
                    onClick={handleNextClick}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-md z-20 pointer-events-none">
                    {currImgIdx + 1} / {imgData.length}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex bg-gray-100 p-1 rounded-lg w-full sm:w-auto">
                  {["temperature_2m", "precipitation", "cloud_cover"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setViewData(type)}
                      className={`flex-1 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                        viewData === type ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {type === "temperature_2m" ? "Temp" : type === "precipitation" ? "Precip" : "Clouds"}
                    </button>
                  ))}
                </div>

                <div className="flex bg-gray-100 p-1 rounded-lg w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => setTimeframe("historical")}
                    className={`flex-1 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                      timeframe === "historical"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Photo Date
                  </button>
                  <button
                    onClick={() => setTimeframe("current")}
                    className={`flex-1 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all ${
                      timeframe === "current" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Today
                  </button>
                </div>
              </div>

              <div className="flex-1 relative min-h-[300px]">
                <WeatherChart
                  cityName={collection}
                  weatherData={activeWeather}
                  data={{
                    dataKey: viewData,
                    time_value: timeTaken,
                    date_value: activeDateText,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Image Specifications</h2>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <ExifItem label="Date Taken" value={imgData[currImgIdx]?.date_taken} />
              <ExifItem label="Time Taken" value={imgData[currImgIdx]?.time_taken} />
              <ExifItem
                label={`Sunrise (${timeframe === "historical" ? "Historical" : "Today"})`}
                value={
                  loading || !activeWeather
                    ? "..."
                    : new Date(activeWeather.daily.sunrise[0]).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                }
              />
              <ExifItem
                label={`Sunset (${timeframe === "historical" ? "Historical" : "Today"})`}
                value={
                  loading || !activeWeather
                    ? "..."
                    : new Date(activeWeather.daily.sunset[0]).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                }
              />
              <div className="col-span-2 my-1 border-t border-gray-100" />
              <ExifItem label="Exposure" value={imgData[currImgIdx]?.exposure} />
              <ExifItem label="Aperture" value={imgData[currImgIdx]?.aperture} />
              <ExifItem label="Focal Length" value={imgData[currImgIdx]?.focal_length} />
              <ExifItem label="ISO Rating" value={imgData[currImgIdx]?.iso} />
            </div>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-full min-h-[300px]">
            <Map location_plus_code={imgData[currImgIdx]?.plus_code} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-50"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <motion.img
              key={currImgIdx}
              src={imgData[currImgIdx]?.url}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain cursor-default"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              onError={addImageFallback}
            />

            {imgData.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevClick();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all"
                  aria-label="Previous image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextClick();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md transition-all"
                  aria-label="Next image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm font-medium tracking-widest">
                  {currImgIdx + 1} / {imgData.length}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExifItem = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{label}</span>
    <span className="text-lg font-medium text-gray-800">{value || "N/A"}</span>
  </div>
);

export default Gallery;
