// eslint-disable-next-line no-unused-vars
import React from "react";

import "./ContactUs.css";

const HomeButton = () => {
  return (
    <a href="https://mybabb.com" 
    aria-label="Home Page">
      <div className="contactUs whitespace-nowrap sm:text-3xl  ">
        <span className="z-1 font-BlackOpsOne-Regular text-[aliceblue] hover:text-[limegreen] ">
          &nbsp;&nbsp;Home&nbsp;&nbsp;
        </span>
      </div>
    </a>
  );
};

export default HomeButton;
