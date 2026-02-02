// eslint-disable-next-line no-unused-vars
import React from "react";

import "./MediaButtons.css";

const GoButtons = () => {
  return (
    <div
      className="relative mt-[10rem] flex w-screen  items-center 
      justify-center   p-1  "
    >
      {/* xxxxxxxx :md media buttons xxxxxxxxxxxx */}

      <div
        className="mediaButtonsWrapper relative m-auto mx-1 mt-8   hidden 
      scale-75 items-center justify-center text-sm  
      text-amber-100 sm:flex sm:space-x-8 sm:text-[2.4rem]
         md:space-x-12 md:text-[3.4rem]  lg:space-x-16 xl:space-x-20"
      >
        <a href="https://www.instagram.com" aria-label="Instagram Button">
          <div className="mediaButtons">
            <p>Instagram</p>
          </div>
        </a>

        <a href="https://www.yelp.com" aria-label="Yelp Button">
          <div className="mediaButtons">
            <p>Yelp</p>
          </div>
        </a>

        <a href="https://photos.google.com" aria-label="Photos Button">
          <div className="mediaButtons">
            <p>Photos</p>
          </div>
        </a>

        <a href="https://facebook.com" aria-label="Facebook Button">
          <div className="mediaButtons">
            <p>Facebook</p>
          </div>
        </a>
      </div>

      {/* xxxxxxxxxxxx :xxs media buttons xxxxxxxxxxxx  */}
      <div
        className="mediaButtonsWrapper relative   mt-4 scale-75 
      flex-row items-center  text-2xl text-amber-100 sm:hidden "
      >
        <div className=" relative mb-4 flex w-screen justify-around ">
          <a href="https://www.instagram.com" aria-label="Instagram Button">
            <div className="twoMediaButtons ">
              <p>Instagram</p>
            </div>
          </a>

          <a href="https://www.yelp.com" aria-label="Yelp Button">
            <div className="twoMediaButtons">
              <p>Yelp</p>
            </div>
          </a>
        </div>
        <div>
          <div className="relative mt-8 flex w-screen justify-around ">
            <a href="https://photos.google.com " aria-label="Photos Button">
              <div className="twoMediaButtons">
                <p>Photos</p>
              </div>
            </a>

            <a href="https://facebook.com" aria-label="Facebook Button">
              <div className="twoMediaButtons">
                <p>Facebook</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoButtons;
