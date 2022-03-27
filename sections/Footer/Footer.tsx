import React from "react";
import HeaderAndFooterButton from "../../components/HeaderAndFooterButton";
import SocialMediaButton from "../../components/SocialMediaButton";
import { useViewPort } from "@hooks/useViewport";
import { useAppRouter } from "@hooks/useAppRouter";

const Footer = () => {
  const { isMobile } = useViewPort();
  const { push } = useAppRouter();

  const onClickTermsAndConditions = () => push("/terms-and-conditions");
  const onClickPrivacyPolicy = () => push("/privacy-policy");
  return isMobile ? (
    <div className="px-10% font-rnarrow pt-10% pb-20% flex flex-col">
      <div className="flex flex-row align-center mb-4%">
        <SocialMediaButton twitter />
        <SocialMediaButton instagram />
      </div>
      <div className="flex flex-row mb-4%">
        <HeaderAndFooterButton
          label="Privacy Policy"
          onClick={onClickPrivacyPolicy}
        />
        <HeaderAndFooterButton
          label="Terms"
          onClick={onClickTermsAndConditions}
        />
      </div>
      <p>© 2022 Copyright</p>
    </div>
  ) : (
    <div className="flex flex-row px-10% font-rnarrow py-36px items-center justify-between">
      <p className="mr-50%">© 2022 Copyright</p>
      <HeaderAndFooterButton
        label="Privacy Policy"
        onClick={onClickPrivacyPolicy}
      />
      <HeaderAndFooterButton
        label="Terms"
        onClick={onClickTermsAndConditions}
      />
      <SocialMediaButton twitter />
      <SocialMediaButton instagram />
    </div>
  );
};

export default Footer;
