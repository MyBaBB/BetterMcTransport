// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
 
 
 
 
 ;
 
 
 
 ;
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
    <div
      className="navWrapper  top-0 z-50">
      <nav>
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
        <section id="mobile-menu" className="relative flex m-auto  text-4xl">
          <div
            className=" relative top-0 z-[1] w-fit  
              bg-[#343945] px-[3rem]   text-center font-Aclonica-Regular"
          >
            <nav
              className="relative justify-top my-auto   flex min-h-screen flex-col  "
              aria-label="mobile"
            >
              <p id="mobile-menu">
                <br />
                <br />
                <br />
                <a
                  href="https://mybabb.com"
                 
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                 bg-gradient-to-b from-slate-100 to-slate-500 py-1
                                 shadow-varMEDBLUEFEATHER shadow-md " >
                  <div className="relative inline-block pl-4 ">xx</div>
                  <span className="hover:text-varMEDBLUEFEATHER m-auto ml-[2rem] pr-8 ] ">
                  My Landing Page
                  </span>
                  </div>
                </a>
                <br />
               
                <a
                  href="https://mybabb.github.io/My_Introduction/"
                   
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                 bg-gradient-to-b from-slate-100 to-slate-500 py-1
                                 shadow-varMEDBLUEFEATHER shadow-md  " >
                  <div className="relative inline-block pl-4 ">xx</div>
                  <span className="hover:text-varMEDBLUEFEATHER m-auto  pr-6 ] ">
                   My Resume&apos; 
                  </span>
                  </div>
                </a>
                <br />
              
                <a
                  href="https://mybabb.github.io/About_MyBaBB/"
                  
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                 bg-gradient-to-b from-slate-100 to-slate-500 py-1
                                 shadow-varMEDBLUEFEATHER shadow-md  " >
                  <div className="relative inline-block pl-4 ">xx</div>
                  <span className="hover:text-varMEDBLUEFEATHER m-auto ml-[7.5rem]  pr-6 ] ">
                  About
                  </span>
                  </div>
                </a>

               
                <br />
                <a
                  href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
                   
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                 bg-gradient-to-b from-slate-100 to-slate-500 py-1
                                 shadow-varMEDBLUEFEATHER shadow-md  " >
                  <div className="relative inline-block pl-4 pr-2 ">xx</div>
                  <span className="hover:text-varMEDBLUEFEATHER m-auto  pr-6 ] ">
                  Seo Booster 
                  </span>
                  </div>
                </a>
                <br />
                <a
                  href="https://mybabb.github.io/BetterMcTransport/"
                   
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                 bg-gradient-to-b from-slate-100 to-slate-500 py-1
                                 shadow-varMEDBLUEFEATHER shadow-md  " >
                  <div className="relative inline-block pl-4 pr-2 ">xx</div>
                  <span className="hover:text-varMEDBLUEFEATHER m-auto  pr-6 ] ">
                   Basic Demo 
                  </span>
                  </div>
                </a>
                <br />
               <a href="https://mybabb.github.io/Franken-Timer/">
               <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                  bg-gradient-to-b from-slate-100 to-slate-500 py-1
                                  shadow-varMEDBLUEFEATHER shadow-md  " >
                  <div className="relative inline-block pl-4 pr-2">xx</div>
                  <span className="hover:text-varMEDBLUEFEATHER m-auto  pr-6 ] ">
                  Special Event
                  </span>
                  </div>
                  </a>
                <br />
               
               <a
                  href="#"
                   
                  onClick={hideMobileMenu}
                > <div className="relative flex text-center     origin-top animate-open-menu 
                                 text-black border-2   border-gray-700 rounded-3xl
                                  bg-gradient-to-b from-slate-100 to-slate-500 py-1
                                  shadow-varMEDBLUEFEATHER shadow-md  " >
                  <div className="relative inline-block pl-4 ">xx</div>
                  <span className="hover:text-varMEDBLUEFEATHER m-auto  pr-6 ] ">
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
