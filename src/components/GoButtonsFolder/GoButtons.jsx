// eslint-disable-next-line no-unused-vars
import React from "react";
import WheresAndy from "./WheresAndy";
import "./GoButtons.css";

const GoButtons = () => {
  return (
    <div
      className="mt-[10rem] relative flex w-screen  items-center 
      justify-center   p-1  "
    >
  
      <div>
        <div
          className="GoButtonsWrapper relative m-auto mx-1 mt-8 flex  scale-75 
      items-center justify-center space-x-0 text-[12px] text-sm text-amber-100 xxs:scale-100  
      xxs:space-x-1 xs:space-x-8 xs:text-[1.5rem] sm:text-[1.8rem] md:space-x-12 md:text-[2.1rem] 
         lg:space-x-16 xl:space-x-20 2xl:space-x-24"
        >
          <a href="https://www.instagram.com">
            <div className="GoButtons">
              <p>Instagram</p>
            </div>
          </a>

          <a href="https://www.yelp.com">
            <div className="GoButtons">
              <p>Yelp</p>
            </div>
          </a>

          <a href="https://photos.google.com">
            <div className="GoButtons">
              <p>Photos</p>
            </div>
          </a>

          <a href="https://facebook.com">
            <div className="GoButtons">
              <p>Facebook</p>
            </div>
          </a>
        </div>
        <WheresAndy />
      </div>
    </div>
  );
};

export default GoButtons;
