import React from "react";
import HeaderAndFooterButton from "../../components/HeaderAndFooterButton";
import SocialMediaButton from "../../components/SocialMediaButton";
import { useViewPort } from "@hooks/useViewport";
import { useAppRouter } from "@hooks/useAppRouter";
import { openInNewTab } from "../utils";

const Footer = () => {
  const { isMobile } = useViewPort();
  const { push } = useAppRouter();

  const onClickTermsAndConditions = () => push("/terms-and-conditions");
  const onClickPrivacyPolicy = () => push("/privacy-policy");
  const onClickAuditReport = () => openInNewTab("/audit.pdf");

  return isMobile ? (
    <div className="px-10% font-rnarrow pt-10% pb-20% flex flex-col">
      <div className="flex flex-row align-center mb-4%">
        <SocialMediaButton github />
        <SocialMediaButton twitter />
        <SocialMediaButton instagram />
      </div>
      <div className="flex flex-row mb-4% flex-wrap">
        <HeaderAndFooterButton label="Audit" onClick={onClickAuditReport} wrapperClassName="mr-20px" />
        <HeaderAndFooterButton
          label="Privacy Policy"
          onClick={onClickPrivacyPolicy}
          wrapperClassName="mr-20px"
        />
        <HeaderAndFooterButton
          label="Terms"
          onClick={onClickTermsAndConditions}
          wrapperClassName="mr-20px"
        />
      </div>
       <p className="m-0">© 2022 Copyright</p>
    </div>
  ) : (
    <div className="flex laptop:flex-row tablet:flex-col-reverse px-10% font-rnarrow py-36px items-center laptop:justify-between w-full">
      <p className="grow tablet:mt-24px laptop:mt-0">© 2022 Copyright</p>
      <div className="flex flex-row items-center laptop:justify-end tablet:justify-center">
        <HeaderAndFooterButton wrapperClassName="mr-24px" label="Audit" onClick={onClickAuditReport} />
        <HeaderAndFooterButton
          label="Privacy Policy"
          onClick={onClickPrivacyPolicy}
          wrapperClassName="mr-24px"
        />
        <HeaderAndFooterButton
          label="Terms"
          onClick={onClickTermsAndConditions}
          wrapperClassName="mr-24px"
        />
        <SocialMediaButton github />
        <SocialMediaButton twitter />
        <SocialMediaButton instagram />
      </div>
    </div>
  );
};

export default Footer;
