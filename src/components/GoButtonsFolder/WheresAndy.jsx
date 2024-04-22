// eslint-disable-next-line no-unused-vars
import React from "react";
import "./GoButtons.css";
const WheresAndy = () => {
  return (
    <div className="WheresAndyWrapper relative flex justify-center  z-[3] h-fit w-full   
    p-4 text-[12px] text-sm      
     xs:text-[1.5rem] sm:text-[1.8rem]   md:text-[2.1rem]  
         ">
      <div className="relative flex w-full justify-around text-amber-100   " >
        <a href="https://support.google.com/maps/answer/7326816?hl=en&co=GENIE.Platform%3DAndroid">
          <div className=" whitespace-nowrap">
            <p className="WheresAndy mr-1 ">
              <span className="Radar inline-block -scale-x-100 transform">
                📡
              </span>
              &nbsp;
              <span className="Radar"></span>Find Andy
              <span className="Radar ">📡</span>
            </p>
          </div>
        </a>

        <button onClick={() => (window.location.href = "tel:559-555-5555")}>
          <div className=" whitespace-nowrap ">
            <p
              className="WheresAndy
                        
                 ml-4   "
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
