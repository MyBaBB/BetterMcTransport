// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import AndysRig1 from "../assets/Img/AndysRig1.webp";
import AndysRig2 from "../assets/Img/AndysRig2.webp";
import AndysRig3 from "../assets/Img/AndysRig3.webp";
import AndysRig4 from "../assets/Img/AndysRig4.webp";
import AndysRig5 from "../assets/Img/AndysRig5.webp";

const Accordion01 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion01Images = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto w-full content-center">
      <>
        <div
          onClick={toggleAccordion01Images}
          className={`openMenu } relative mx-auto mt-[8.5rem]
         flex h-full w-[80%] items-center 
      justify-center`}
        >
          <div className="OurPhotosAccordion1  relative  mx-auto w-full cursor-pointer content-center justify-center rounded-3xl bg-gradient-to-b  from-[#4b5320] to-[#41301b]  md:hidden">
            <div className="relative mx-auto flex content-center justify-center ">
              <button
                className="text-base  font-extrabold text-amber-100  sm:text-2xl"
                style={{ textShadow: "1px 1px 2px black" }}
              >
                <div
                  className="absolute left-[-5px]  top-[-4px] h-8    w-8  rounded-full  bg-gradient-to-b 
             from-amber-200 to-varDarkBrown pt-[7px]  text-4xl  shadow-sm shadow-black sm:top-[0px] "
                  style={{ textShadow: "0px -1px 2px black" }}
                >
                  <span className="triangle"></span>
                </div>
                Photos
              </button>
            </div>
            {isOpen && (
              <>
                <div className=" flex content-center justify-center  ">
                  <div className="MoversSmallScreen  relative mt-[.25rem] block flex w-fit md:hidden">
                    <img
                      src={AndysRig1}
                      alt="AndysRig1"
                      width={480}
                      height={480}
                      className=" z-1 rounded-[18px]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex content-center justify-center">
                  <div
                    className="MoversSmallScreen relative mt-[1.5rem] block flex w-fit
                 md:hidden"
                  >
                    <img
                      src={AndysRig2}
                      alt="AndysRig2"
                      width={480}
                      height={480}
                      className=" z-1 rounded-[18px]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex content-center justify-center">
                  <div className="MoversSmallScreen relative mt-[1.5rem] block flex w-fit md:hidden">
                    <img
                      src={AndysRig3}
                      alt="AndysRig3"
                      width={480}
                      height={480}
                      className=" z-1 rounded-[18px]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex content-center justify-center">
                  <div className="MoversSmallScreen relative mt-[1.5rem] block flex w-fit md:hidden">
                    <img
                      src={AndysRig4}
                      alt="AndysRig4"
                      width={480}
                      height={480}
                      className=" z-1  rounded-[18px]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex content-center justify-center">
                  <div className="MoversSmallScreen relative mt-[1.5rem] block flex w-fit  md:hidden">
                    <img
                      src={AndysRig5}
                      alt="AndysRig5"
                      width={480}
                      height={480}
                      className=" z-1 rounded-[18px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default Accordion01;
