// eslint-disable-next-line no-unused-vars
import React from "react";
import Copyright from "./Copyright.jsx";
// import UpperLeftIcon from "../assets/Img/upperLeftIcon.webp";
import BigPicture from "./BigPicture.jsx";
 
import DavesFlag from "./DavesFlag.jsx";
import AndysDogTag from "./AndysDogTag.jsx";
import GoButtons from "./GoButtons.jsx";
import WheresAndy from "./WheresAndy.jsx";
import Accordion01Images from "./Accordion01Images.jsx";
import Accordion03Reviews from "./Accordion03Reviews.jsx";
import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
// import ScubaMan from "./ScubaManFolder/ScubaMan.jsx";
// import ScubaMask from "./ScubaManFolder/ScubaMask.jsx";
const MainHands = () => {
  return (
    <div >
      <>
        
          {/*above is the HeaderWrapper */}
          {/* <ScubaMask /> */}
          <div className="bodyWrapper relative  justify-center items-center
           flex-row border-2 border-red-500 min-w-full  ">
         
         <div className="relative flex-col w-fit justify-center items-center p-1 m-1 ">
          <GoButtons />
          <WheresAndy />
          <DavesFlag />

          <div
            className="Accordian2Wrapper relative  mt-[.5rem]  block   px-[10px]
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
