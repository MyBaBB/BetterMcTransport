// eslint-disable-next-line no-unused-vars
import React from "react";
import "./WheresAndy.css";

const WheresAndy = () => {
  return (
    <div
      className="WheresAndyWrapper relative z-[3] flex sm:pt-4 h-fit w-screen justify-center   
  text-[12px] text-sm xs:text-[1.5rem] sm:text-[1.8rem]   md:text-[2.2rem]  
         "
    >
      <div className="relative flex w-full justify-around text-amber-100   ">
        <a href="https://support.google.com/maps/answer/7326816?hl=en&co=GENIE.Platform%3DAndroid"
        aria-label="Find Andy on Google Maps">
          <div className=" whitespace-nowrap">
            <p className="WheresAndy ">
              <span className="Radar inline-block -scale-x-100 transform">
                📡
              </span>
              &nbsp;
              <span className="Radar"></span>Find Andy
              <span className="Radar ">📡</span>
            </p>
          </div>
        </a>

        <button onClick={() => (window.location.href = "tel:559-555-5555")}
          aria-label="Call Andy">
          <div className=" whitespace-nowrap ">
            <p
              className="WheresAndy
                        
                   "
            >
              <span className="Radar inline-block -scale-x-100 transform">
                📞
              </span>
              &nbsp;
              <span className="Radar"></span>Call Andy
              <span className="Radar ">📞</span>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WheresAndy;
