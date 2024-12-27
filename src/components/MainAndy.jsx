// eslint-disable-next-line no-unused-vars
import React from "react";
import Copyright from "./Copyright.jsx";
// import UpperLeftIcon from "../assets/Img/upperLeftIcon.webp";
import BigPicture from "./BigPictureFolder/BigPicture.jsx";

import AndysCard from "./AndysCardFolder/AndysCard.jsx";
import AndysDogTag from "./DogTagFolder/DogTag.jsx";
import GoButtons from "./MediaButtonsFolder/MediaButtons.jsx";
import  RangerCamo from '../assets/Img/rangerCamo.jpg';
import Accordion01Images from "./AccordionFolder/Accordion01Folder/Accordion01Images.jsx";
import Accordion03Reviews from "./AccordionFolder/Accordion03Folder/Accordion03Reviews.jsx";
import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
// import Gorilla from "../components/GorillaFolder/Gorilla.jsx";
import AllButtons from "./AllButtons.jsx";
// import ScubaMan from "./ScubaManFolder/ScubaMan.jsx";
// import ScubaMask from "./ScubaManFolder/ScubaMask.jsx";
const AndysMain = () => {
  return (
    <div>
      <>
       
        <div
          className="bodyWrapper relative flex-row min-w-full items-center justify-center
            p-2 border-2 border-green-200 "
        >
              < AllButtons />
          <div
            className="relative m-auto  flex w-full 
          flex-col items-center justify-center  p-1 "
          >
             <img src={RangerCamo} alt="" className="fixed opacity-[.2] top-0 left-0 w-screen bg-cover -z-1 mt-1 outline-2 border-green-900 " />
        
            
            <AndysCard />
            <div
              className="Accordion2Wrapper relative mt-[.5rem] block   px-[10px]
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
            {/* <Gorilla /> */}
          </div>
        </div>
        <div>
          {" "}
          
        </div>
      </>
      {/* <ScubaMan /> */}
    </div>
  );
};

export default AndysMain;
