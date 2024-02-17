// eslint-disable-next-line no-unused-vars
import React from "react";

const GoButtons = () => {
  return (
    <div>
      <>
        <div
          className="GoButtonsWrapper  relative top-[4rem] z-[3] flex h-fit  w-full
   justify-center p-4 text-[7px] xxs:top-[4.9rem]  xxs:text-[9px] xs:top-[5.95rem] xs:text-[14px]
   sm:top-[6.5rem] sm:text-[15px] md:top-[7.5rem] md:text-[18px] lg:top-[8.15rem] lg:text-[22px] xl:top-[9rem]
   xl:text-[26px]"
        >
          <a href="https://www.instagram.com/">
            <div className="GoButtons ">
              <p>Instagram</p>
            </div>
          </a>

          <a href="https://www.yelp.com">
            <div className="GoButtons ">
              <p>Yelp</p>
            </div>
          </a>

          <a href="https://photos.google.com">
            <div className="GoButtons ">
              <p>Photos</p>
            </div>
          </a>

          <a href="https://facebook.com">
            <div className="GoButtons ">
              <p>Facebook</p>
            </div>
          </a>
        </div>
      </>
    </div>
  );
};

export default GoButtons;
