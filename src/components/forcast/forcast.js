
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import ForcastDescription from "../description/forcastDescription";

const Forcast = (props) => {
 

  useEffect(() => {});

  return (
    <>
      <div className="forcast">
        <div className="forcastContainer__overlay">
          <Carousel>
            {props.daily.map((item, i) => (
              <div key={i} className="carousel__innerContainer">
                <div className="forcastContainer1">
                  <div className="imageSection">
                    <img
                      src={`${props.dailyDate[i].icon}`}
                      alt="weatherIcon"
                      style={{
                        padding: "1rem",
                        width: "10rem",
                        height: "10rem",
                        borderRadius: "50%",
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </div>
                  <div className="detailSection">
                    <div className="detail">
                      <p className="location">{`${props.stateName}`}</p>
                    </div>
                    <div className="detail">
                      <p>{`${props.dailyDate[i].climate}`}</p>
                    </div>
                    <div className="detail">
                      <div className="temperature2">
                        
                        <p>{`${props.dailyDate[i].indianDate}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <ForcastDescription item={item} propsData={props}/>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Forcast;


{/* <div className="carousel_List">
                    <span className="icons">
                      <FaArrowDown />
                    </span>
                    <span className="carousel">min</span>
                    <span className="temp" style={{ padding: "0.25rem" }}>
                      {item.values.temperatureMin.toFixed()}
                      {props.unit === "metric" ? "°C" : "°F"}
                    </span>
                  </div>
                  <div className="carousel_List">
                    <span className="icons">
                      <FaArrowUp />
                    </span>
                    <span className="carousel">max</span>
                    <span className="temp">
                      {item.values.temperatureMax.toFixed()}
                      {props.unit === "metric" ? "°C" : "°F"}
                    </span>
                  </div>
                  <div className="carousel_List">
                    <span className="icons">
                      <BiHappy />
                    </span>
                    <span className="carousel">feels like</span>
                    <span className="temp">
                      {item.values.temperatureApparentAvg.toFixed()}
                      {props.unit === "metric" ? "°C" : "°F"}
                    </span>
                  </div>
                  <div className="carousel_List">
                    <span className="icons">
                      <MdCompress />
                    </span>
                    <span className="carousel">pressure</span>
                    <span className="temp">
                      {item.values.pressureSurfaceLevelAvg.toFixed()}hpa
                    </span>
                  </div>
                  <div className="carousel_List">
                    <span className="icons">
                      <MdOutlineWaterDrop />
                    </span>
                    <span className="carousel">humidity</span>
                    <span className="temp">
                      {item.values.humidityAvg.toFixed()}%
                    </span>
                  </div>
                  <div className="carousel_List">
                    <span className="icons">
                      <FaWind />
                    </span>
                    <span className="carousel">wind speed</span>
                    <span className="temp">
                      {item.values.windSpeedAvg.toFixed()}
                      {props.unit === "metric" ? "°C" : "°F"}
                    </span>
                  </div> */}