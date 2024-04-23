// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import AndysTruck from "./AndysTruck.webp";
import VeteranLogo from "./VeteranLogo.webp";
import "./AndysCard.css";
const AndysCard = () => {
  return (
    <div>
      <>
      <div>
        <div
          className="AndysNewCard  relative m-auto  mt-4 w-fit flex-row justify-center rounded-2xl
            "
          style={{ aspectRatio: "1.75/1" }}
        >
          <article
            className="RedFlagDiv m-auto rounded-t-xl"
            style={{
              height: "33.33%",
              backgroundImage:
                "linear-gradient(to bottom, rgba(250, 0, 0, 1) 90% , rgba(250, 250, 250, .9))",
            }}
          >
            <h2
              className="RedTopWords
           text-[12px] xxs:text-[16px] xs:text-[20px] sm:text-[25px] md:text-[30px]  lg:text-[30px] xl:text-[37px]
           
           "
            >
              <span className="whitespace-nowrap">
                Transporting Motorcycles to{" "}
              </span>
              <br />
              <span className="whitespace-nowrap">
                Louisiana, Mississippi, Florida, Texas
              </span>
            </h2>
          </article>

          <article>
            <div
              className="WhiteFlagDiv  relative m-auto flex items-center justify-center"
              style={{ height: "33.33%", backgroundColor: "white" }}
            >
              <div className="relative block ">
                <img
                  src={AndysTruck}
                  alt="AndysBlankVan2"
                  className=" mb-[-1rem] mt-[-.7rem] rotate-[-3deg]
                scale-[130%] pl-[5rem] xxs:mt-[-.75rem] xs:mb-[-1.55rem] xs:mt-[-.75rem] sm:mb-[-1.55rem] 
                sm:mt-[-1.3rem] md:mb-[-2.2rem] md:mt-[-1.55rem]   lg:mb-[-2rem] lg:mt-[-1.55rem] xl:mt-[-1.7rem]"
                />
                <div
                  className="VanWords 
                text-[16px] xxs:text-[20px] xs:text-[30px] sm:text-[30px] md:text-[50px]  lg:text-[53px] xl:text-[58px]  
                "
                >
                  <h2>4X4 ATV-Transport</h2>
                </div>
              </div>
            </div>
          </article>

          <article
            className="BlueFlagDiv relative m-auto   flex   rounded-b-xl align-baseline"
            style={{
              height: "33.33%",
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 250, 1) 90% , rgba(250, 250, 250, .9))",
            }}
          >
            <img
              src={VeteranLogo}
              alt="VeteranLogo"
              className="relative inline-block"
            />

            <div className="BlueBottomWords  pt-4 ">
              <h2
                className="
                 xl:mt-[.5rem ] mt-[-.1rem] text-[8px] xxs:mt-[0rem] xxs:text-[12px] xs:mt-[0rem] xs:text-[20px]
                 sm:mt-[.25rem] sm:text-[24px] md:mt-[.5rem] md:text-[30px] lg:mt-[.5rem] lg:text-[30px] xl:text-[37px]
              "
              >
                <span className="whitespace-nowrap text-amber-100">
                  {" "}
                  We Move Power-Sports{" "}
                </span>
                <br />
                <span className="whitespace-nowrap text-amber-100">
                  {" "}
                  To Your Location
                </span>{" "}
              </h2>
            </div>
            <div
              className="MilitaryDiscounts  xl:text-[16px]} relative flex w-fit  items-center p-2
            

            text-[8px] text-amber-100 sm:text-[10px] md:text-[12px] lg:text-[14px]
             "
            >
              <p>
                Military <br /> Discounts <br /> Available
              </p>
            </div>
          </article>
        </div>
        </div>
      </>
    </div>
  );
};

export default AndysCard;
