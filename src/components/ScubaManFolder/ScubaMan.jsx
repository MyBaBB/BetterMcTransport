// eslint-disable-next-line no-unused-vars
import React from "react";
 import "./ScubaMask.css";

 
import { MdOutlineScubaDiving } from "react-icons/md";


const ScubaMan = () => {
  return (
    <div className=" absolute flex left-4 bottom-2 ml-4  ">
    <div 
          className="dataToolTip13 Libre_Baskerville"
          data-tool-tip="Back To Top"
        >
          <a href="#">
            <div
            
              className=" z-50 h-[fit] w-[fit] 
                                  rounded-xl border-[1px] border-varLIGHTBLUEFEATHER bg-gray-700 hover:bg-black "
            >
              <div className="scubaManThird  rounded-xl  border-[2px] border-black">
                <div className="scubaManSecond rounded-xl border-[1px] border-varLIGHTBLUEFEATHER p-2 ">
                  <div className="scubaManFirst rotate-[240deg] border-transparent  ">
                    <MdOutlineScubaDiving 
                      size={20}
                      className="scubaMan  text-blue-200  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        </div>
      
    
  );
};

export default ScubaMan;
