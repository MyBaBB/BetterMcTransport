// eslint-disable-next-line no-unused-vars
import React from "react";

const WheresAndy = () => {
  return (
    <div>
      <div
        className="WheresAndyWrapper relative top-[2rem] z-[3] flex h-fit w-full  justify-center
     p-4 text-[8px] xxs:top-[3.2rem] xxs:text-[10px]  xs:top-[4.65rem] xs:text-[16px] sm:top-[5.5rem]
     sm:text-[20px] md:top-[5.89rem] md:text-[18px] lg:top-[7.15rem] lg:text-[25px] xl:top-[9rem] xl:text-[26px]
     "
      >
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
