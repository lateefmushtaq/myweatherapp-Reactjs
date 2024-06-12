import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./WeatherDisplay.css";
import {
  WbSunnyTwoTone,
  CloudCircleTwoTone,
  ShowerTwoTone,
} from "@mui/icons-material";
function convertTo12HourTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strMinutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = `${hours}:${strMinutes} ${ampm}`;
  return strTime;
}

function WeatherDisplay({ data, loading, error }) {
  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.main || !data.main.temp) {
    return <div className="default">Enter City To Continue</div>;
  }
  const temp = (data.main.temp - 273.15).toFixed(2);
  const humidity = [data.main.humidity];
  const city = data.name;
  const country = data.sys.country;
  const [sunrise, sunset] = [data.sys.sunrise, data.sys.sunset];

  const [main, description] = [
    data.weather[0].main,
    data.weather[0].description,
  ];
  const timezone = data.timezone;
  const wind = data.wind.speed;

  const [lon, lat] = [data.coord.lon, data.coord.lat];
  let weatherIcon;
  if (description.includes("rain")) {
    weatherIcon = <ShowerTwoTone />;
  } else if (temp > 18) {
    weatherIcon = <WbSunnyTwoTone />;
  } else {
    weatherIcon = <CloudCircleTwoTone />;
  }
  return (
    <div className="weather-display">
      <p>{weatherIcon}</p>
      <h2>
        Weather in {city},{country}
      </h2>
      <p>
        <strong>Temperature:</strong> {temp}°C
      </p>
      <p>
        <strong>Humidity:</strong> {humidity}%
      </p>
      <p>
        <strong>Condition:</strong> {main},{description}
      </p>
      <p>
        <strong>Wind Speed:</strong> {wind} m/s
      </p>
      <p>
        <strong>Time Zone:</strong> {timezone} m/s
      </p>
      <p>
        <strong>Sunset:</strong> {convertTo12HourTime(sunrise)},
        <strong>Sunrise: </strong>
        {convertTo12HourTime(sunset)}
      </p>
      <p>
        {lat},{lon}
      </p>
    </div>
  );
}

export default WeatherDisplay;
