// eslint-disable-next-line no-unused-vars
import React from "react";
import SwampBuggy from "./SwampBuggy.webp";
import OctoArmy from "./OctoArmy.jpg";
import "../NavbarFolder/Navbar.css";
import DogTag from "../DogTagFolder/DogTag";
import "./Header.css";
import Navbar from "../NavbarFolder/Navbar";
const Header = () => {
  return (
    <div>
      <Navbar />
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
          className="m-auto w-fit scale-[70%] "
        >
          <DogTag />
        </p>
        <a href="https://resume-hub.mybabb.com/">
          <div className="outerOctoArmyWrapper hidden md:block">
            <div className="dataToolTip82" data-tool-tip="To Kraken">
              <div className="octoArmyWrapper ">
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
