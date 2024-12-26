// eslint-disable-next-line no-unused-vars
import React from "react";
import { SiHubspot } from "react-icons/si";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="relative flex  m-auto top-[12rem] pb-4   " >
      <a
        href="https://resume-hub.mybabb.com/"
        style={{ textShadow: "2px 2px 3px #1c0303" }}
      >
        <div className="mt-[-3.8rem] ">
          <div
            className="text-right text-xl font-bold italic text-slate-500 sm:text-2xl dark:text-slate-400"
            style={{ fontSize: "24px", textShadow: "1px 1px black" }}
          ></div>
          <span id="contactus1"></span>

          <div className=" m-auto mt-14  flex content-center justify-center">
            <div
              className="WheresAndy sm:text-3xl whitespace-nowrap  "       
                >
              <span className="hubSpinner  inline-block text-[aliceblue]   "><SiHubspot /></span>
              <span 
                    className="z-1 font-BlackOpsOne-Regular text-amber-100 hover:text-[limegreen] ">
                     &nbsp;&nbsp;Resume Hub&nbsp;&nbsp;
              </span>
              <span className="hubSpinnerReverse inline-block text-[aliceblue]  "> <SiHubspot /></span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactUs;
