import React from "react";
import HeaderAndFooterButton from "../../components/HeaderAndFooterButton";
import SocialMediaButton from "../../components/SocialMediaButton";

const Footer = () => {
  return (
    <div className="flex flex-row px-10% font-rnarrow py-4% items-center">
      <p className="mr-50%">© 2022 Copyright</p>
      <HeaderAndFooterButton label="Privacy Policy" onClick={() => {}} />
      <HeaderAndFooterButton label="Terms" onClick={() => {}} />
      <SocialMediaButton twitter />
      <SocialMediaButton instagram />
    </div>
  );
};

export default Footer;
