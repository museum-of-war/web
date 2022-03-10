import React from "react";
import HeaderAndFooterButton from "../../components/HeaderAndFooterButton";
import SocialMediaButton from "../../components/SocialMediaButton";
import { isMobile } from "react-device-detect";

const Footer = () => {
  return isMobile ? (
    <div className="px-10% font-rnarrow py-6%">
      <div className="flex flex-row mb-4%">
        <SocialMediaButton twitter />
        <SocialMediaButton instagram />
      </div>
      <div className="flex flex-row mb-4%">
        <HeaderAndFooterButton label="Privacy Policy" onClick={() => {}} />
        <HeaderAndFooterButton label="Terms" onClick={() => {}} />
      </div>
      <p className="mr-50%">© 2022 Copyright</p>
    </div>
  ) : (
    <div className="flex flex-row px-10% font-rnarrow py-4% items-center justify-between">
      <p className="mr-50%">© 2022 Copyright</p>
      <HeaderAndFooterButton label="Privacy Policy" onClick={() => {}} />
      <HeaderAndFooterButton label="Terms" onClick={() => {}} />
      <SocialMediaButton twitter />
      <SocialMediaButton instagram />
    </div>
  );
};

export default Footer;
