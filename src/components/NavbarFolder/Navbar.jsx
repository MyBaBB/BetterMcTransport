// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import { LiaInfoSolid } from "react-icons/lia";
import { SiQuicklook } from "react-icons/si";
import { GiStrongMan } from "react-icons/gi";
import { RiSeoLine } from "react-icons/ri";
import { BsPersonVcard } from "react-icons/bs";
import { LiaHourglassHalfSolid } from "react-icons/lia";
import { SiTestinglibrary } from "react-icons/si";
const Navbar = () => {
  //to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle burger menu classes
  const updateMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass(" hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const hideMobileMenu = () => {
    setMenuClass("menu hidden");
    setIsMenuClicked(false);
    setBurgerClass("burger-bar unclicked");
  };

  return (
    <div className="navWrapper  z-30">
      {" "}
      {/* to adjust hamburger  */}
      <nav className="">
        <div className="burger-menu md:hidden " onClick={updateMenu}>
          <div
            className={burger_class}
            style={{
              backgroundColor: "aliceblue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, .3)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "aliceblue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, .3)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "aliceblue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, .3)",
            }}
          ></div>
        </div>
      </nav>
      <div className={menu_class}>
        <section
          id="mobile-menu"
          className="hiddenHolder relative m-auto  flex  items-center justify-center  text-4xl 
                   "
        >
          <div /* middle part */
            className="  top-1 z-[1]  
              h-fit w-fit rounded-3xl border-[6px] border-[#494909] bg-[#584C3A]  px-[1.5rem] text-center"
          >
            <nav
              className="relative flex flex-col  justify-center  "
              aria-label="mobile"
            >
              <p id="mobile-menu2">
                <br />
                <a href="https://mybabb.com" onClick={hideMobileMenu}>
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-lg shadow-[#494909] "
                  >
                    <div className="relative inline-block  pl-4 text-center ">
                      <BsPersonVcard />
                    </div>
                    <span className="] m-auto ml-[2rem] pl-5 hover:text-varMEDBLUEFEATHER ">
                      My Place
                    </span>
                  </div>
                </a>
                <br />

                <a
                  href="https://mybabb.github.io/My_Introduction/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-lg shadow-[#494909]  "
                  >
                    <div className="relative inline-block pl-4 ">
                      <GiStrongMan />
                    </div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                      My Resume&apos;
                    </span>
                  </div>
                </a>
                <br />

                <a
                  href="https://mybabb.github.io/About_MyBaBB/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-lg shadow-[#494909]  "
                  >
                    <div className="relative inline-block pl-4 ">
                      <LiaInfoSolid />
                    </div>
                    <span className="] m-auto ml-[2.5rem]  hover:text-varMEDBLUEFEATHER ">
                      About Web
                    </span>
                  </div>
                </a>

                <br />
                <a
                  href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-lg shadow-[#494909]  "
                  >
                    <div className="relative inline-block pl-4 pr-2 ">
                      <RiSeoLine />
                    </div>
                    <span className="] m-auto  pr-12 hover:text-varMEDBLUEFEATHER ">
                      Search Engine
                    </span>
                  </div>
                </a>
                <br />
                <a
                  href="https://mybabb.github.io/BetterMcTransport/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-lg shadow-[#494909]  "
                  >
                    <div className="relative inline-block pl-4 pr-2 ">
                      <SiQuicklook />
                    </div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                      Basic Demo
                    </span>
                  </div>
                </a>
                <br />
                <a href="https://mybabb.github.io/Franken-Timer/">
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                  to-slate-500 py-1 text-center text-black
                                  shadow-lg shadow-[#494909]  "
                  >
                    <div className="relative inline-block pl-4 pr-2">
                      <LiaHourglassHalfSolid />
                    </div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                      Special Event
                    </span>
                  </div>
                </a>
                <br />

                <a
                  href="https://resume-hub.mybabb.com/"
                  onClick={hideMobileMenu}
                >
                  {" "}
                  <div
                    className="relative flex origin-top     animate-open-menu rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                  to-slate-500 py-1 text-center text-black
                                  shadow-lg shadow-[#494909]  "
                  >
                    <div className="relative inline-block pl-4 ">
                      <SiTestinglibrary />
                    </div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                      Kraken
                    </span>
                  </div>
                </a>
                <br />
              </p>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
