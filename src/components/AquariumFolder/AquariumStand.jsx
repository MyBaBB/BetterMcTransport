// eslint-disable-next-line no-unused-vars
import React from "react";
import "./AquariumStand.css";
import { FaLink } from "react-icons/fa";
import Octopus from "./OctoPus22x80.png";
import "./AquariumStand.css";
const AquariumStand = () => {
  return (
    <div className="OctopusHideLandscape  mt-[2.9rem]    flex-row items-center justify-center">
      <div className="OctopusWrapper OctopusHideLandscape  relative m-auto flex  justify-center  ">
        <img src={Octopus} alt="Octopus" />
      </div>
      <div
        className="aquariumStandWrapper rounded-xl border-[2px] border-varLIGHTBLUEFEATHER
       border-l-transparent border-r-transparent sm:block"
      >
        <div
          className="border-[12px] border-black border-b-gray-800 
        border-l-transparent border-r-transparent border-t-gray-800"
        >
          <div
            className="customInset  border-[1px] border-black border-l-transparent border-r-transparent bg-yellow-950"
            style={{
              boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 1)",
            }}
          >
            
            {/* <div className="OctopusWrapper absolute top-[0.325rem] right-[21px] ">
              <img
                src={Octopus} alt="Octopus" />
            </div> */}
            <h3
              className="h2 relative whitespace-nowrap  text-center text-blue-200 "
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
              }}
            >
              <span className="Kingthings m-4 whitespace-nowrap p-4 text-[2.2rem] ">
              <span
                      className="rightPointer inline-block
                                 text-varLIGHTBLUEFEATHER">
              <FaLink size={17} />
            </span>&nbsp;Portfolio&nbsp;Hub&nbsp;
                <span className="rightPointer  inline-block 
                                 rotate-[90deg] text-varLIGHTBLUEFEATHER"            >
              <FaLink size={17} />
            </span>
              </span>
            </h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AquariumStand;
