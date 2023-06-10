import {
  calculateForcast,
  checkClimate,
  timeConversion,
} from "../utils/helperFunctions";

const API_KEY = "AJtcMayEAmEpDyVzNLF7W5zr1Pdpk7VQ";




const getData = async (city, units) => {
  let check = false;
  const url = `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${API_KEY}&units=${units}`;

  const data = await fetch(url)
    .then((result) => result.json())
    .then((data) => data)
    .catch((err) => (check = true));

  if (!check) {
    localStorage.setItem(`${data.location.name}`, JSON.stringify(data));
    const { location, timelines } = data;

    const { name } = location;

    const {
      temperatureMin,
      temperatureMax,
      cloudCoverAvg,
      weatherCodeMax,
      weatherCodeMin,
      visibilityMax,
      snowAccumulationMax,
    } = timelines.daily[0].values;

    const { daily } = timelines;

    const {
      temperature,
      windSpeed,
      visibility,
      humidity,
      cloudCover,
      pressureSurfaceLevel,
      temperatureApparent,
      weatherCode,
      precipitationProbability,
      precipitationProbabilityMax,
    } = timelines.hourly[0].values;

    const { time } = timelines.hourly[0];
    console.log(process.env.REACT_APP_API_KEY)

    const obj = {
      weatherCodeMax,
      weatherCodeMin,
      visibilityMax,
      cloudCoverAvg,
      precipitationProbabilityMax,
      snowAccumulationMax,
    };
    // check climate is rainy , haze , sunny ,cloudy
    const { climate, icon } = checkClimate(obj);

    // utc time conversion
    const Indiantime = timeConversion(time);
    let dailyData = calculateForcast(daily);

    const object = {
      temperatureMin,
      temperatureMax,
      temperature,
      windSpeed,
      visibility,
      humidity,
      cloudCover,
      pressureSurfaceLevel,
      climate,
      temperatureApparent,
      name,
      icon,
      Indiantime,
      daily,
      dailyData,
    };

    return object;
  } else {
    console.log(data);
  }
};
export { getData };
