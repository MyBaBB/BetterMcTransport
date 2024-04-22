// eslint-disable-next-line no-unused-vars
import React from "react";
import Copyright from "./Copyright.jsx";
// import UpperLeftIcon from "../assets/Img/upperLeftIcon.webp";
import BigPicture from "./BigPicture.jsx";

import AndysFlag from "./AndysCardFolder/AndysFlag.jsx";
import AndysDogTag from "./AndysDogTag.jsx";
import GoButtons from "./GoButtonsFolder/GoButtons.jsx";
 
import Accordion01Images from "./Accordion01Images.jsx";
import Accordion03Reviews from "./Accordion03Reviews.jsx";
import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
import Gorilla from "../Gorilla.jsx";
// import ScubaMan from "./ScubaManFolder/ScubaMan.jsx";
// import ScubaMask from "./ScubaManFolder/ScubaMask.jsx";
const MainHands = () => {
  return (
    <div>
      <>
        {/*above is the HeaderWrapper */}
        {/* <ScubaMask /> */}
        <div
          className="bodyWrapper relative  flex min-w-full
           items-center justify-center border-2 border-red-500  "
        >
          <div className="relative  w-fit flex-col items-center justify-center  ">
            <GoButtons />
            <AndysFlag />
            <Gorilla  />
            <div
              className="Accordian2Wrapper relative mt-[.5rem] block border-2  border-red-500   px-[10px]
        text-green-50   sm:px-[.5rem] md:mt-[1rem]"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
            >
              {/* TruckSmallScreen */}
              <div className="mb-3 flex content-center justify-center"></div>
              <div className="AboutUsParagraphWrapper relative mx-auto flex  content-center   justify-center md:block">
                <p
                  id="AboutUsh2"
                  className="AboutUsh2 text-[1.45rem]
           lg:text-3xl      
           "
                ></p>
              </div>
            </div>

            <BigPicture />
            <Accordion01Images />
            <Accordion03Reviews />

            <AndysDogTag />
            <AquariumDataTip />
            <Copyright />
          </div>
        </div>
      </>
      {/* <ScubaMan /> */}
    </div>
  );
};

export default MainHands;
