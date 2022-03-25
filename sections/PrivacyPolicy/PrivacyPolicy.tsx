import React from "react";
import EnglishPrivacyPolicy from "./EnglishPrivacyPolicy";
import UkrainianPrivacyPolicy from "./UkrainianPrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <div className="font-rnarrow text-center px-10%">
      <EnglishPrivacyPolicy />
      <div className="pt-100px">
        <UkrainianPrivacyPolicy />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
