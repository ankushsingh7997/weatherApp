import React from "react";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import "./description.css";

const Description = (props) => {
  const tempUnit = props.units === "metric" ? "°C" : "°F";
  const windUnit = props.units === "metric" ? "°m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: props.weather.temperatureMin.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: props.weather.temperatureMax.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: props.weather.temperatureApparent.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: props.weather.pressureSurfaceLevel,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: props.weather.temperatureMin,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: props.weather.windSpeed.toFixed(),
      unit: tempUnit,
    },
  ];

  return (
    <div className="section section_descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div className="card" key={id}>
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}

    </div>
  );
};

export default Description;
