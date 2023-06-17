import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ForcastDescription from "../description/forcastDescription";

const Forcast = (props) => {
 

  useEffect(() => {});

  return (
    <>
      <div className="forcast">
        <div className="forcastContainer__overlay">
          <Carousel showThumbs={false}>
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
                      <p className="location">{`${props.stateName.split(",")[0]}`}</p>
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


