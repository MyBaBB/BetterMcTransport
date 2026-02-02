// eslint-disable-next-line no-unused-vars
import React from "react";
import "./DogTag.css";
const DogTag = () => {
  return (
    <div>
      <div className="dogTagPhoneNumberWrapper z-10    ">
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
