import React from "react";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import "./forcastDiscriptions.css";

const ForcastDescription = (props) => {
  const tempUnit = props.propsData.units === "metric" ? "°C" : "°F";
  const windUnit = props.propsData.units === "metric" ? "°m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: props.item.values.temperatureMin.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: props.item.values.temperatureMax.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: props.item.values.temperatureApparentAvg.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: props.item.values.pressureSurfaceLevelAvg.toFixed(),
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: props.item.values.humidityAvg.toFixed(),
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: props.item.values.windSpeedAvg.toFixed(),
      unit: "km/h",
    },
  ];

  return (
    <div className="section section_descriptions1">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div className="card1" key={id}>
          <div className="description__card-icon1">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}

    </div>
  );
};

export default ForcastDescription;
