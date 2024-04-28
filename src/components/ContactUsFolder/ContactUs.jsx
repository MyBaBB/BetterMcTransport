// eslint-disable-next-line no-unused-vars
import React from "react";

const ContactUs = () => {
  return (
    <div className="relative flex left-[-18rem] m-auto top-[12rem] pb-4   " >
      <a
        href="https://resume-hub.mybabb.com/"
        style={{ textShadow: "2px 2px 3px #1c0303" }}
      >
        <div className="mt-[-4.8rem] ">
          <div
            className="text-right text-xl font-bold italic text-slate-500 sm:text-2xl dark:text-slate-400"
            style={{ fontSize: "24px", textShadow: "1px 1px black" }}
          ></div>
          <span id="contactus1"></span>

          <div className="m-auto mt-14  translate-x-full flex content-center justify-center">
            <div
              className="m-auto content-center rounded-full border border-solid
           border-slate-900 bg-varMEDBLUEFEATHER  p-3 font-Orbitron text-2xl text-black
            active:bg-varLIGHTBLUEFEATHER sm:text-3xl dark:border-none"
              style={{
                boxShadow:
                  "inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.8)",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{ display: "inline-block", transform: "scaleX(-1)" }}
              >
                📡
              </span>
              <span className="z-50 text-varLIGHTBLUEFEATHER hover:text-varLIGHTBEAKTOP">
                Resume Hub
              </span>
              <span>📡</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactUs;
