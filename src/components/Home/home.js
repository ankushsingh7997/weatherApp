import React, { useEffect, useState } from "react";
import snowbg from "../../assets/snow.jpg";
import sunnybg from "../../assets/sunny.jpg";
import rainy from "../../assets/rain.jpg";
import haze from "../../assets/haze.jpg";
import cloudy from "../../assets/cloudy.jpg";
import Description from "../description/Description";
import { getData } from "../../services/weatherServices";
import Forcast from "../forcast/forcast";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [units, setUnit] = useState("metric");
  const [bg, setBg] = useState(sunnybg);
  const [currentState, setCurrentState] = useState("delhi");

  const handleSearch = async () => {
    const data = await getData(searchCity, units);
    setWeather(data);
    setCurrentState(searchCity);
  };

  const handleUnitClick = async () => {
    setUnit(units === "metric" ? "imperial" : "metric");
    await handleSearch(); // Call handleSearch with updated units
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("delhi", "metric");
      setWeather(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const background = () => {
      if (weather) {
        if (weather.climate === "Sunny") setBg(sunnybg);
        else if (weather.climate === "haze") setBg(haze);
        else if (weather.climate === "rainy") setBg(rainy);
        else if (weather.climate === "cloudy") setBg(cloudy);
        else setBg(snowbg);
      }
    };

    background();
  }, [weather]);

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <>
            <div className="container">
              <div className="section section__inputs">
                <input
                  type="text"
                  name="city"
                  value={searchCity}
                  placeholder="Enter city name"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                      e.currentTarget.blur();
                    }
                  }}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
                <button onClick={handleUnitClick}>
                  {units === "metric" ? "° F" : "° C"}
                </button>
              </div>
              <div className="section section__temperature">
                <div className="icon">
                  <h3>{`${weather.name}`}</h3>
                  <img
                    src={weather.icon}
                    alt="weatherIcon"
                    style={{
                      padding: "0.5rem",
                      width: "54px",
                      height: "54px",
                      borderRadius: "50%",
                      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                  <h3>{`${weather.climate}`}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${weather.temperature.toFixed()}  °${
                    units === "metric" ? "C" : "F"
                  }`}</h1>
                </div>
              </div>
              <Description weather={weather} units={units} />
            </div>
            <Forcast
              daily={weather.daily}
              unit={units}
              dailyDate={weather.dailyData}
              stateName={weather.name}
            />
          </>
        )}
      </div>
    </div>
  );
}
