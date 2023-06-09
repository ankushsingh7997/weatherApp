const timeConversion = (utcTimeString) => {
  // Create a new Date object with the UTC time
  var utcTime = new Date(utcTimeString);

  // Convert UTC time to IST
  var istTime = utcTime.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  // Extract the time components from the IST time string
  var [, time] = istTime.split(", ");
  var [hours, minutes] = time.split(":");

  // Format the IST time string
  var istTimeString = hours.padStart(2, "0") + ":" + minutes;

  // Output the IST time

  return istTimeString;
};

const checkClimate = (obj) => {
  let icon = "";
  let climate = "";

  if (obj.weatherCodeMax === 1000 && obj.weatherCodeMin === 1000) {
    climate = "Sunny";
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/sun.png";
  } else if (obj.visibilityMax < 10 && obj.cloudCoverAvg >= 50) {
    climate = "haze";
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/foggy.png";
  } else if (obj.precipitationProbabilityMax > 0) {
    climate = "rainy";
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/rain.png";
  } else if (obj.snowAccumulationMax > 0) {
    climate = "snowfall";
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/snow.png";
  } else if (obj.cloudCoverAvg >= 50) {
    climate = "cloudy";
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/cloudy.png";
  } else {
    climate = "unknown";
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/unknown.png";
  }
  return { climate, icon };
};

const timeConvert = (date) => {
  const utcTime = new Date(date);
  const istTime = new Date(utcTime.getTime() + 5.5 * 60 * 60 * 1000);

  const options = { month: "long", day: "numeric", year: "numeric" };
  const istFormattedDate = istTime.toLocaleDateString("en-US", options);

  return istFormattedDate;
};
const calculateForcast = (daily) => {
  let arr = [];

  for (let i = 0; i < daily.length; i++) {
    const {
      temperatureMin,
      temperatureMax,
      cloudCoverAvg,
      cloudCoverMax,
      cloudCoverMin,
      weatherCodeMax,
      weatherCodeMin,
      visibilityMax,
      snowAccumulationMax,
      precipitationProbabilityMax,
    } = daily[i].values;
    let obj = {
      temperatureMin,
      temperatureMax,
      cloudCoverAvg,
      cloudCoverMax,
      cloudCoverMin,
      weatherCodeMax,
      weatherCodeMin,
      visibilityMax,
      snowAccumulationMax,
      precipitationProbabilityMax,
    };

    const { climate, icon } = checkClimate(obj);
    const time = daily[i].time;

    let indianDate = timeConvert(time);

    arr[i] = { climate, icon, indianDate };
  }

  return arr;
};

export { timeConversion, checkClimate, timeConvert, calculateForcast };
