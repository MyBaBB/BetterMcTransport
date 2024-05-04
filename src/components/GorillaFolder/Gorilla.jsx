// eslint-disable-next-line no-unused-vars
import React from "react";
 

import "./Gorilla.css";
import GorillaBanana from "./GorillaWithBanana100px.png";
import BananaTree from "./BananaTree2.png";
const Gorilla = () => {
  return (
    /* --------- Under Construction Gorilla -----------  */
    <div>
      <div className=" relative flex items-center justify-center">
        <div
          className="gorilla z-1 min-w-screen relative m-auto mb-4 mt-2 h-fit w-fit  scale-[50%] flex-row items-center
             justify-center whitespace-nowrap rounded-3xl border-2 border-lime-500
      bg-gradient-to-b from-sky-500 from-40% to-green-800 to-60% p-[2rem] text-center shadow-2xl xs:scale-[70%] sm:scale-[100%]"
        >
          <p className="whitespace-nowrap font-BlackOpsOne-Regular text-3xl text-lime-400 ">
            This Region
          </p>
          <div className="relative flex   h-[115px] w-[280px]">
            <div className="absolute  bottom-[-1rem]  left-[0]">
              <img src={GorillaBanana} alt="Gorilla With Banana" />
            </div>
            <div className="absolute   right-[-2.2rem] top-[-3rem] ">
              <img src={BananaTree} alt="Banana Tree" />
            </div>
          </div>
          <p className="mt-8 whitespace-nowrap font-BlackOpsOne-Regular text-3xl text-lime-400">
            Under Construction
            <hr className="hr4 mb-1  mt-1  " />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gorilla;
