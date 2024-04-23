// eslint-disable-next-line no-unused-vars
import React from "react";
import Copyright from "./Copyright.jsx";
// import UpperLeftIcon from "../assets/Img/upperLeftIcon.webp";
import BigPicture from "./BigPictureFolder/BigPicture.jsx";

import AndysCard from "./AndysCardFolder/AndysCard.jsx";
import AndysDogTag from "./AndysDogTag.jsx";
import GoButtons from "./GoButtonsFolder/GoButtons.jsx";

import Accordion01Images from "./AccordionFolder/Accordion01Folder/Accordion01Images.jsx";
import Accordion03Reviews from "./AccordionFolder/Accordion03Folder/Accordion03Reviews.jsx";
import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
import Gorilla from "../Gorilla.jsx";
// import ScubaMan from "./ScubaManFolder/ScubaMan.jsx";
// import ScubaMask from "./ScubaManFolder/ScubaMask.jsx";
const AndysMain = () => {
  return (
    <div>
      <>
        {/*above is the HeaderWrapper */}
        {/* <ScubaMask /> */}
        <div
          className="bodyWrapper relative justify-center items-center flex min-w-full
            p-2 "
        >
          <div className="relative flex  w-full flex-col 
          items-center justify-center m-auto  p-1 ">
            {/* <GoButtons /> */}
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
            < Gorilla/>
            <Copyright />
          </div>
        </div>
      </>
      {/* <ScubaMan /> */}
    </div>
  );
};

export default AndysMain;
