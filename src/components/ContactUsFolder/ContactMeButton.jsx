import React from "react";
import "./ContactUs.css"
const ContactMeButton = () => {
  return (
    <div>
      <a href="https://contact.mybabb.com" 
      aria-label="Contact Me">
      <div className="contactUs whitespace-nowrap sm:text-3xl  ">
        <span className="z-1 font-BlackOpsOne-Regular text-[aliceblue] hover:text-[limegreen] ">
          &nbsp;&nbsp;Contact&nbsp;&nbsp;
        </span>
      </div>
    </a>
    </div>
  );
};

export default ContactMeButton;
