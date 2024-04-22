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
    <div className="navWrapper  top-0  z-50">
      <nav className="">
        <div className="burger-menu md:hidden " onClick={updateMenu}>
          <div
            className={burger_class}
            style={{
              backgroundColor: "aliceblue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "aliceblue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className={burger_class}
            style={{
              backgroundColor: "aliceblue",
              boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
        </div>
      </nav>

      <div className={menu_class}>
        <section id="mobile-menu" className=" relative m-auto flex  text-4xl">
          <div
            className=" font-Aclonica-Regular relative top-0 z-[1]  
              w-fit bg-[#584C3A]   px-[3rem] text-center"
          >
            <nav
              className="justify-top relative my-auto   flex min-h-screen flex-col  "
              aria-label="mobile"
            >
              <p id="mobile-menu">
                <br />
                <br />
                <br />
                <a href="https://mybabb.com" onClick={hideMobileMenu}>
                  {" "}
                  <div
                    className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-md shadow-yellow-950 "
                  >
                    <div className="relative  inline-block pl-4 "><BsPersonVcard /></div>
                    <span className="] m-auto ml-[2rem] pr-8 hover:text-varMEDBLUEFEATHER ">
                      My Landing Page
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
                    className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-md shadow-yellow-950  "
                  >
                    <div className="relative inline-block pl-4 "><GiStrongMan /></div>
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
                    className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-md shadow-yellow-950  "
                  >
                    <div className="relative inline-block pl-4 "><LiaInfoSolid /></div>
                    <span className="] m-auto ml-[6.5rem]  hover:text-varMEDBLUEFEATHER ">
                      About
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
                    className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-md shadow-yellow-950  "
                  >
                    <div className="relative inline-block pl-4 pr-2 "><RiSeoLine /></div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                      Seo Booster
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
                    className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                 to-slate-500 py-1 text-center text-black
                                 shadow-md shadow-yellow-950  "
                  >
                    <div className="relative inline-block pl-4 pr-2 "><SiQuicklook /></div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                      Basic Demo
                    </span>
                  </div>
                </a>
                <br />
                <a href="https://mybabb.github.io/Franken-Timer/">
                  <div
                    className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                  to-slate-500 py-1 text-center text-black
                                  shadow-md shadow-yellow-950  "
                  >
                    <div className="relative inline-block pl-4 pr-2"><LiaHourglassHalfSolid /></div>
                    <span className="] m-auto  pr-6 hover:text-varMEDBLUEFEATHER ">
                      Special Event
                    </span>
                  </div>
                </a>
                <br />

                <a href="#" onClick={hideMobileMenu}>
                  {" "}
                  <div
                    className="animate-open-menu relative flex     origin-top rounded-3xl 
                                 border-2 border-gray-700   bg-gradient-to-b from-slate-100
                                  to-slate-500 py-1 text-center text-black
                                  shadow-md shadow-yellow-950  "
                  >
                    <div className="relative inline-block pl-4 "><SiTestinglibrary /></div>
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
