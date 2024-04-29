// eslint-disable-next-line no-unused-vars
import React from "react";
import "./DogTag.css";
const DogTag = () => {
  return (
    <div>
      <div
        className="dogTagPhoneNumberWrapper md:mt-[0 rem] relative z-10
     mx-auto  mb-4 mt-[1.25rem] w-fit content-center
      justify-center 
       "
      >
        <h2 className="AndysName mb-[-.45rem] whitespace-nowrap">
          Andy B. Bones
        </h2>
        <p className="USMCveteran my-[-.45rem] whitespace-nowrap">
          USMC Veteran&nbsp; <span className="tagHole "></span>{" "}
        </p>
        <p className="dogTagPhoneNumber whitespace-nowrap ">555-555-5555</p>
      </div>
    </div>
  );
};

export default DogTag;
