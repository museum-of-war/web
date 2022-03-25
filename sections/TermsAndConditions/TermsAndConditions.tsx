import React from "react";
import EnglishTerms from "./EnglishTerms";
import UkrainianTerms from "./UkrainianTerms";

const TermsAndConditions = () => {
  return (
    <div className="font-rnarrow text-center px-10%">
      <EnglishTerms />
      <div className="pt-100px">
        <UkrainianTerms />
      </div>
    </div>
  );
};

export default TermsAndConditions;
