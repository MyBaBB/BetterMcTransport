// eslint-disable-next-line no-unused-vars
import React from "react";
import { GiGorilla } from "react-icons/gi";
const Gorilla = () => {
  return (
    /* --------- Under Construction Gorilla -----------  */

    <div
      className="Test z-1 relative  m-[20px] mt-14 h-fit min-w-screen
             flex-row items-center justify-center rounded-3xl
      border-2 border-lime-500  bg-varLIGHTSPACE p-[2rem] text-center shadow-2xl"
    >
      <p className="whitespace-nowrap font-BlackOpsOne text-3xl text-lime-500">
        This Region
      </p>
      <div className="relative flex h-[30%] w-full items-center justify-center">
        <GiGorilla size={80} className="text-gray-800" />
      </div>

      <p className="whitespace-nowrap font-BlackOpsOne text-3xl text-lime-500">
        Under Construction
      </p>
    </div>
  );
};

export default Gorilla;
