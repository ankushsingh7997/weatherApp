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
  const weatherCodes = { 0: "Unknown",
    1000: "Clear",
    1001: "Cloudy",
    1100: "Mostly Clear",
    1101: "Partly Cloudy",
    1102: "Mostly Cloudy",
    2000: "Fog",
    2100: "Light Fog",
    3000: "Light Wind",
    3001: "Wind",
    3002: "Strong Wind",
    4000: "Drizzle",
    4001: "Rain",
    4200: "Light Rain",
    4201: "Heavy Rain",
    5000: "Snow",
    5001: "Flurries",
    5100: "Light Snow",
    5101: "Heavy Snow",
    6000: "Freezing Drizzle",
    6001: "Freezing Rain",
    6200: "Light Freezing Rain",
    6201: "Heavy Freezing Rain",
    7000: "Ice Pellets",
    7101: "Heavy Ice Pellets",
    7102: "Light Ice Pellets",
    8000: "Thunderstorm",
  };
  climate=weatherCodes[obj.weatherCodeMax]
  

  if (obj.weatherCodeMax === 1000||obj.weatherCodeMax===1100 ) {
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/sun.png";
  } else if (obj.weatherCodeMax >= 1001 && obj.weatherCodeMax <= 1102) {
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/cloudy.png";
  } else if (obj.weatherCodeMax >= 2000 && obj.weatherCodeMax <= 2100) {
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/foggy.png";
  } else if (obj.weatherCodeMax >= 3000 && obj.weatherCodeMax <= 3002) {
  
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/strong-wind.png";
  } 
  else if (obj.weatherCodeMax >= 4000 && obj.weatherCodeMax <= 4201) {
    icon ="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/rain.png";
  } 
  
   else if (obj.weatherCodeMax >= 5000 && obj.weatherCodeMax <= 5101) {
    
  icon =
        "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/snow.png";
    }
    else if (obj.weatherCodeMax >= 6000 && obj.weatherCodeMax <= 6201) {
    
  icon =
        "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/freezing-rain.png";
    }
    else if (obj.weatherCodeMax >= 7000 && obj.weatherCodeMax <= 7102) {
    
  icon =
        "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/icepellet.png";
    }
    else if (obj.weatherCodeMax === 8000 ) {
    
  icon =
        "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/storm.png";
    }
  else {
  
    icon =
      "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/profileImage/sun.png";
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
