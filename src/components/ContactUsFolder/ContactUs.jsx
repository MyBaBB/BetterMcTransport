// eslint-disable-next-line no-unused-vars
import React from "react";
import { SiHubspot } from "react-icons/si";
import HomeButton from "./HomeButton";
import ResumeHub from "./ResumeHub";

import "./ContactUs.css";

import ContactMeButton from "../ContactUsFolder/ContactMeButton";
const ContactUs = () => {
  return (
    <div className="relative top-[12rem]  m-auto flex pb-4   ">
      <div className="mt-[-3.8rem] ">
        <div className=" m-auto mt-14 flex w-screen content-center justify-evenly">
          <HomeButton />
          <ResumeHub />
          <ContactMeButton />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
