// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Accordion01.css";
import AndysRig1 from "./AndysRig1.webp";
import AndysRig2 from "./AndysRig2.webp";
import AndysRig3 from "./AndysRig3.webp";
import AndysRig4 from "./AndysRig4.webp";
import AndysRig5 from "./AndysRig5.webp";

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
          className={`openMenu } relative mx-auto 
         flex h-full w-[80%] items-center 
      justify-center`}
        >
          <div
            className="OurPhotosAccordion1  relative  mx-auto w-full cursor-pointer content-center justify-center
           
            bg-gradient-to-b  from-[#4b5320] to-[#41301b]  md:hidden"
          >
            <div className="relative mx-auto flex content-center justify-center ">
              <button
                className="text-base  font-extrabold text-amber-100  sm:text-2xl"
                style={{ textShadow: "1px 1px 2px black" }}
              >
                <div
                  className="absolute  left-[8px]  top-[-3px]  h-12  w-12 rounded-full  bg-gradient-to-b  from-amber-200 
                  to-varDarkBrown pt-[2px] text-4xl  shadow-sm  shadow-black sm:top-[-1.3px]  "
                  style={{ textShadow: "0px -1px 2px black" }}
                >
                  <span
                    className={`triangle ${isOpen ? "rotate-180" : ""}`}
                    style={{ marginTop: isOpen ? "6px" : "" }}
                  ></span>
                </div>
                <p className="photos p-2 text-[20px] ">Photos</p>
              </button>
            </div>
            {isOpen && (
              <>
                <div className=" flex content-center justify-center  ">
                  <div className="MoversSmallScreen  relative mt-[.25rem]   flex w-fit md:hidden">
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
                    className="MoversSmallScreen relative mt-[1.5rem]   flex w-fit
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
                  <div className="MoversSmallScreen relative mt-[1.5rem]   flex w-fit md:hidden">
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
                  <div className="MoversSmallScreen relative mt-[1.5rem]   flex w-fit md:hidden">
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
                  <div className="MoversSmallScreen relative mt-[1.5rem]   flex w-fit  md:hidden">
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
