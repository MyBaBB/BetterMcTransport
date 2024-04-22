// eslint-disable-next-line no-unused-vars
import React from "react";
import SwampBuggy from "./SwampBuggy.webp";
import OctoArmy from "./OctoArmy.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="headerWrapper">
        <a href="https://mybabb.com">
          <div className="outerSwampBuggyWrapper hidden md:block">
            <div className="swampBuggyWrapper">
              <div className="dataToolTip81 " data-tool-tip="To My Homepage">
                <div className=" relative ">
                  <img
                    id="swampBuggy"
                    src={SwampBuggy}
                    alt="Swamp Buggy"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
        <p
          className=" headerCenterTextBox  text-[12px]sm:text-[16px] w-fit scale-[70%] 
         text-amber-50    xxs:scale-[80%] xs:scale-[100%] md:text-[20px] lg:text-[25px] xl:text-[30px]"
        >
          <h1>Andy&apos;s 4x4 ATV-Transport</h1>
        </p>
        <a href="https://resume-hub.mybabb.com/">
          <div className="outerOctoArmyWrapper">
            <div className="octoArmyWrapper hidden md:block">
              <div className="dataToolTip82" data-tool-tip="To Kraken">
                <div className=" relative">
                  <img
                    src={OctoArmy}
                    alt="Army Octopus"
                    width={80}
                    height={80}
                    className="rounded-full"
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

export default Header;
