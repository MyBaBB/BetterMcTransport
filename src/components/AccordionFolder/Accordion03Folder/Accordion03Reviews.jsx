// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { GrStarOutline } from "react-icons/gr";
import "./Accordion03.css";
const Accordion03 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion03Reviews = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <>
        <div className=" relative  mx-auto mt-8 md:mt-[9rem] flex w-full content-center justify-center  ">
          <div
            onClick={toggleAccordion03Reviews}
            className={`openMenu'} relative  flex h-full w-[80%] items-center  
      justify-center`}
          >
            <div
              className="Accordion03ReviewsWrapper  relative mt-2 w-full cursor-pointer 
              content-center justify-center  
         rounded-[24px] bg-gradient-to-b  from-[#4b5320] to-[#41301b]   md:mt-[-10rem] "
            >
              <div
                className="relative mx-auto flex  content-center justify-center 
          pb-[6px] pt-[4px]"
              >
                 <div
                    className="absolute  left-[15px] top-[1px] md:top-[4px] h-12 w-12  rounded-full  bg-gradient-to-b 
             from-amber-200 to-varDarkBrown pt-[2px]  text-4xl  shadow-sm shadow-black   "
                    style={{ textShadow: "0px -1px 2px black" }}
                  >
                    {" "}
                    <span
                className={`triangle ${isOpen ? "rotate-180" : ""}`}
                style={{ marginTop: isOpen ? "7px" : "" }}
              ></span>
                  </div>
                <button
                  className="text-base  font-extrabold text-amber-100 sm:text-2xl "
                  style={{ textShadow: "1px 1px 2px black" }}
                >
                 
                  <p className="reviews text-[20px] p-[.4rem]">Reviews</p>
                </button>
              </div>

              {isOpen && (
                <>
                  <div className="mt-1">
                    <div
                      className=" flex-col content-center justify-start
 "
                    >
                      <span className="ReviewsPersonName">James Westmore</span>{" "}
                      <br />
                      <span className="ReviewsPersonDate">
                        Nov. 2 2022
                      </span>{" "}
                      <br />
                      <span className="ReviewsPersonStarRating">
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                      </span>
                      <p className="ReviewsPersonParagraph">
                        &nbsp;&nbsp;I recently used Andy&apos;s 4x4 Transport to
                        move my vehicle from California to Texas, and I was
                        extremely impressed with their service. The driver was
                        professional, courteous, and very knowledgeable about
                        the best routes to take. He kept me informed throughout
                        the entire process, and I felt confident that my vehicle
                        was in good hands..
                      </p>
                      <hr
                        className="ReviewsPersonHorizontalRule
"
                      />
                      <span className="ReviewsPersonName">Arnold Parker</span>{" "}
                      <br />
                      <span className="ReviewsPersonDate">
                        Sept. 14 2022
                      </span>{" "}
                      <br />
                      <span className="ReviewsPersonStarRating">
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                      </span>
                      <p className="ReviewsPersonParagraph">
                        &nbsp;&nbsp;The customer service representatives at
                        Andy&apos;s 4x4 Transport were also very helpful and
                        responsive. They answered all of my questions promptly
                        and made sure that I had all of the information I needed
                        to make an informed decision. They were also very
                        patient with me when I had to change my pickup date at
                        the last minute.
                      </p>
                      <hr
                        className="ReviewsPersonHorizontalRule
"
                      />
                      <span className="ReviewsPersonName">Marty Oneal</span>{" "}
                      <br />
                      <span className="ReviewsPersonDate">
                        June 19 2021
                      </span>{" "}
                      <br />
                      <span className="ReviewsPersonStarRating">
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                      </span>
                      <p className="ReviewsPersonParagraph">
                        &nbsp;&nbsp;Overall, I would highly recommend
                        Andy&apos;s 4x4 Transport to anyone who needs to
                        transport their vehicle. They are a reliable,
                        trustworthy, and professional company that truly cares
                        about their customers. Thank you, Andy&apos;s 4x4
                        Transport, for providing such excellent service!
                      </p>
                      <hr
                        className="ReviewsPersonHorizontalRule
"
                      />
                      <span className="ReviewsPersonName">Neo Shoemaker</span>{" "}
                      <br />
                      <span className="ReviewsPersonDate">
                        Dec. 4 2023
                      </span>{" "}
                      <br />
                      <span className="ReviewsPersonStarRating">
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                        <GrStarOutline className="inline-block text-varGold " />
                      </span>
                      <p className="ReviewsPersonParagraph">
                        &nbsp;&nbsp;What a great and Honest guy, I am glad I
                        chose Andy.&apos;
                      </p>
                    </div>

                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Accordion03;
