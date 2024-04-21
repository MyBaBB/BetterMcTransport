// eslint-disable-next-line no-unused-vars
import React from "react";

const GoButtons = () => {
  return (
    <div className="flex justify-center items-center w-screen border-2  border-red-500  ">
      <div className="GoButtonsWrapper relative border-2  border-red-500   flex m-auto justify-center items-center">
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
    </div>
  );
};

export default GoButtons;
