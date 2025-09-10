import SvgImageLoading from "../../assets/SvgImageLoading.jsx";
import Header from "../../components/Header/Header.jsx";
import WeatherChart from "../../components/Graph/WeatherChart.jsx";
import Map from "../../components/Gallery/Map.jsx";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Gallery = () => {
  const date = new Date();

  const { collection } = useParams();

  const [viewData, setViewData] = useState("temperature_2m");
  const [timeTaken, setTimeTaken] = useState("00:00:00");
  const [dateTaken, setDateTaken] = useState(date.toDateString());
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgData, setImgData] = useState([]);
  const [locationName, setLocationName] = useState("Loading");
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [pastWeather, setPastWeather] = useState(null);

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

    const fetchPastWeatherData = async () => {
      setLoading(true);
      try {
        const currImg = imgData[currImgIdx];
        const apiUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${encodeURIComponent(
          currImg.latitude
        )}&longitude=${encodeURIComponent(currImg.longitude)}&start_date=${encodeURIComponent(
          currImg.date
        )}&end_date=${encodeURIComponent(
          currImg.date
        )}&hourly=temperature_2m,precipitation,cloud_cover&daily=sunrise,sunset&timezone=auto`;

        const response = await axios.get(apiUrl);
        setPastWeather(response.data);
        setTimeTaken(imgData[currImgIdx].time_taken.substr(0, 8));
        setDateTaken(imgData[currImgIdx].date_taken);
      } catch (error) {
        console.error(`Error fetching weather data: ${error}`);
        setError("Failed to load weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPastWeatherData();
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

  const addImageFallback = (event) => {
    event.currentTarget.src = imgData[currImgIdx]?.backup_url;
  };

  return (
    <>
      <Header />
      <div className="text-center">
        <div className="px-6 mt-6 lg:text-4xl xl:text-5xl text-2xl font-[googleSansMedium]">
          Location: {locationName}
        </div>
        <main className="flex flex-col md:flex-row w-full p-4 gap-4">
          <div className="w-full md:w-1/2">
            <div className="p-4 rounded-lg shadow-xl">
              {imgData.length > 0 ? (
                <div className="relative my-2 mb-6">
                  <img
                    src={imgData[currImgIdx]?.url}
                    width={imgData[currImgIdx]?.width}
                    height={imgData[currImgIdx]?.height}
                    onError={addImageFallback}
                    alt={`Capture for ${collection} on ${imgData[currImgIdx]?.date}`}
                    className={`w-full h-auto object-contain rounded-md transition-opacity duration-500 ${
                      imgData.length > 1 ? "h-[56vh] max-h-[56vh]" : "h-[70vh] max-h-[70vh]"
                    } ${loading ? "opacity-0" : "opacity-100"}`}
                  />

                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                      loading ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <SvgImageLoading className="w-32 h-32 md:w-48 md:h-[56vh]" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <SvgImageLoading className="w-32 h-32 md:w-48 md:h-[56vh]" />
                </div>
              )}

              {imgData.length > 1 && (
                <div className="flex justify-around border-t border-gray-700 pt-4">
                  <button
                    onClick={handlePrevClick}
                    className="px-8 py-2 border-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNextClick}
                    className="px-8 py-2 border-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 rounded-lg shadow-xl flex flex-col gap-4">
            <div className="">
              <WeatherChart
                cityName={collection}
                weatherData={pastWeather}
                data={{
                  dataKey: viewData,
                  time_value: timeTaken,
                  date_value: dateTaken,
                }}
              />
              <div className="flex justify-around border-t border-gray-700 mt-2">
                <button
                  onClick={() => setViewData("temperature_2m")}
                  className="mt-4 mx-1 lg:mx-4 lg:px-4 py-2 w-1/3 border-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                >
                  Temperature
                </button>
                <button
                  onClick={() => setViewData("precipitation")}
                  className="mt-4 mx-1 lg:mx-4 lg:px-4 py-2 w-1/3 border-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                >
                  Precipitation
                </button>
                <button
                  onClick={() => setViewData("cloud_cover")}
                  className="mt-4 mx-1 lg:mx-4 lg:px-4 py-2 w-1/3 border-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                >
                  Cloud Cover
                </button>
              </div>
            </div>
          </div>
        </main>
        <Map location_plus_code={imgData[currImgIdx]?.plus_code} />
      </div>
    </>
  );
};

export default Gallery;
