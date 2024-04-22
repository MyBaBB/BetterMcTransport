// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  return (
    <div className="m-auto">
      <div
        className="hidden-square top-68   font-Orbitron animate-open-menu w-full origin-top 
                    flex-col items-center justify-center bg-black text-center"
        style={{
          boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 1)",
        }}
      >
        <nav
          className=" mt-[0rem] flex  flex-col items-center"
          aria-label="mobile"
        >
          <p id="mobile-menu-2">
            <a href="https://mybabb.com" className="mobileMenuWords ">
              MyBaBB.com
            </a>
            <hr
              className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent
                             border-r-transparent bg-yellow-950 "
            />
            <a
              href="https://mybabb.github.io/My_Introduction/"
              className="w-full py-6 text-center"
            >
              <span className="mobileMenuWords">Resume&apos;</span>
            </a>
            <hr
              className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent
                             border-r-transparent bg-yellow-950 "
            />
            <a
              href="https://mybabb.github.io/About_MyBaBB/"
              className="mobileMenuWords"
            >
              <span className="mobileMenuWords">About</span>
            </a>
            <hr
              className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent 
                             border-r-transparent bg-yellow-950 "
            />
            <a
              href="https://mybabb.github.io/BetterMcTransport/"
              className="w-full py-6 text-center"
            >
              <span className="mobileMenuWords">Basic Demo</span>
            </a>

            <hr
              className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent
                             border-r-transparent bg-yellow-950 "
            />
            <a
              href="https://mybabb.github.io/SEO-BEST_PRACTICES/"
              className="w-full py-6 text-center"
            >
              <span className="mobileMenuWords ">SEO Page</span>
            </a>
            <hr
              className="m-auto my-4
                             h-[3.5px] w-[50%] border-[1px] border-blue-400 border-l-transparent 
                             border-r-transparent bg-yellow-950 "
            />
            <a
              href="https://mybabb.github.io/Franken-Timer/"
              className="w-full py-6 text-center"
            >
              <span className="mobileMenuWords">
                <em>Special Event</em>
              </span>
            </a>
          </p>
          {/* xxxxxxxxxxxxxxxx⬆️  Buttons on Hidden Mobile Menu  xxxxxxxxxxx */}
          <div></div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
