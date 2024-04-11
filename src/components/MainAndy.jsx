// eslint-disable-next-line no-unused-vars
import React from "react";
import Copyright from "./Copyright.jsx";
import UpperLeftIcon from "../assets/Img/upperLeftIcon.webp";
import BigPicture from "./BigPicture.jsx";
import Movericon2 from "../assets/Img/Movericon2.webp";
import DavesFlag from "./DavesFlag.jsx";
import AndysDogTag from "./AndysDogTag.jsx";
import GoButtons from "./GoButtons.jsx";
import WheresAndy from "./WheresAndy.jsx";
import Accordion01Images from "./Accordion01Images.jsx";
import Accordion03Reviews from "./Accordion03Reviews.jsx";
import AquariumDataTip from "./AquariumFolder/AquariumDataTip.jsx";
import ScubaMan from "./ScubaManFolder/ScubaMan.jsx";
import ScubaMask from "./ScubaManFolder/ScubaMask.jsx";
const MainHands = () => {
  return (
    <div>
    
      <>
        <div className="bodyWrapper">
          <div className="HeaderWrapper">
            {/* the Animation */}

            <div
              className="RotateWheelsWrapper     
           >
       left-[-4.6rem]   top-[-3.5rem] scale-[45%] bg-white  xxs:-top-[3rem] xxs:left-[-4.1rem] xs:-top-[2.75rem]
          sm:-left-[3rem] sm:-top-[2.9rem] sm:scale-[55%] md:-left-[2.7rem] md:-top-[2rem] md:scale-[65%]
        
       lg:-left-[1.7rem]
          lg:-top-[2rem] lg:scale-[80%] xl:-left-[.5rem] xl:-top-[1.5rem] xl:scale-[90%] "
            >
              <div className=" relative w-fit p-4">
                <img
                  id="RotateWheels"
                  src={UpperLeftIcon}
                  alt="Helping Hands"
                />
              </div>
            </div>

            {/* <div id='RotateWheelsWords'></div> */}

            {/*  the Animated  */}

            {/*  Daves Heading 1 sm: hidden  */}
            <p
              className=" DaveTrimmHeading1  hidden 
        translate-y-[-.90rem] text-amber-50  xxs:hidden xs:translate-y-[-1.2rem] sm:hidden md:block   
          
            md:text-[1.75rem] lg:block lg:translate-y-[-1rem]
          
          lg:text-[1.75rem] xl:block xl:text-[2rem]      "
            >
              <h1>Andy&apos;s 4x4 ATV-Transport</h1>
            </p>

            {/*  DaveTrimmHeading1 sm: hidden  */}

            {/*  DaveTrimmHeading2 lg: hidden */}
            <p
              className=" DaveTrimmHeading2 mt-[-12px]    
             translate-y-[-.90rem] text-[.6rem] text-amber-100   
             xxs:text-[.85rem] xs:translate-y-[-1.2rem] xs:text-[1.2rem] sm:mt-[-10px] 
             sm:text-[1.2rem] md:hidden md:text-[1.55rem]
             lg:hidden lg:translate-y-[-1rem]
             
           lg:text-[1.75rem] xl:hidden xl:text-[2rem]      "
            >
              <h1>
                Andy&apos;s <br /> 4x4 ATV-Transport
              </h1>
            </p>

            {/* Dave's Heading 2 lg: hidden  */}

            {/* Dave Icon */}
            <div
              className="  UpperRightLogo right-1rem > fixed
              w-fit scale-[40%]  rounded-full bg-transparent

               p-1 shadow-inner sm:right-[.25rem]

           md:-top-[1rem] md:right-[-.75rem] md:block md:scale-[45%]  lg:-top-[1rem]

           lg:right-[1rem] lg:scale-[60%] xl:-top-[.25rem] xl:scale-[60%] "
            >
              <div className=" relative w-[160px]">
                <img src={Movericon2} alt="Mover Icon" />
              </div>
            </div>
            {/* Mover Icon */}
          </div>
          {/*above is the HeaderWrapper */}
          <ScubaMask />
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
            <div className="AboutUsParagraphWrapper relative mx-auto flex hidden content-center   justify-center md:block">
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
      </>
      <ScubaMan />
    </div>
  );
};

export default MainHands;
