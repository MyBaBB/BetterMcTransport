// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Accordion02 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion02About = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <>
        <div
          onClick={toggleAccordion02About}
          className={`openMenu } relative mb-2 
      flex   h-full w-[101%] items-center  justify-center
      xs:left-[-.3rem]`}
        >
          <div
            className="AboutUsParagraphAccordion2 m-2 mt-2   w-[80%] cursor-pointer rounded-3xl bg-[#41301b] p-2 shadow-lg  shadow-black
        md:hidden "
          >
            <div className="relative flex justify-center ">
              <button
                className="w-full  text-base font-extrabold text-amber-100  sm:text-2xl"
                style={{ textShadow: "1px 1px 2px black" }}
              >
                <div
                  className="absolute left-[-4px] top-[-4px]  h-8  w-8  rounded-full  bg-gradient-to-b 
          from-amber-200 to-varDarkBrown pt-[7px]  text-4xl  shadow-sm shadow-black sm:top-[0px] "
                  style={{ textShadow: "0px -1px 2px black" }}
                >
                  <span className="triangle"></span>
                </div>
                About us
              </button>
            </div>
            {isOpen && (
              <>
                <article>
                  <div
                    className="AboutUsParagraphWrapper  -mb-[9px]  block p-1 text-center md:hidden  
  "
                  >
                    <h2 className="AboutUsh2 text-[.75rem]  xxs:text-[.95rem]  xs:text-[1.25rem] sm:text-[1.55rem]   md:text-[1.75rem]   ">
                      Welcome to MyBaBB Websites
                    </h2>
                    <hr className="mx-auto my-2 w-[70%] min-w-[240px]" />
                    <p>Empty Paragraph</p>
                  </div>
                </article>
              </>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default Accordion02;
