// eslint-disable-next-line no-unused-vars
import React from "react";
import { SiHubspot } from "react-icons/si";
import "./ContactUs.css";


const ResumeHub = () => {
  return (
      <a
        href="https://resume-hub.mybabb.com/" >
         
          <span id="ResumeHub1"></span>
          <div
              className="contactUs sm:text-3xl whitespace-nowrap  "       
                >
              <span className="hubSpinner  inline-block text-[aliceblue]   ">
                <SiHubspot />
              </span>
              <span 
                    className="z-1 font-BlackOpsOne-Regular text-amber-100 hover:text-[limegreen] ">
                     &nbsp;&nbsp;Resume Hub&nbsp;&nbsp;
              </span>
              <span className="hubSpinnerReverse inline-block text-[aliceblue]  ">
                 <SiHubspot />
              </span>
            </div>
      </a>
  );
};

export default ResumeHub;
