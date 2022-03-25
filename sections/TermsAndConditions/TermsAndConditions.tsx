import React from "react";
import EnglishTerms from "./EnglishTerms";
import UkrainianTerms from "./UkrainianTerms";

const TermsAndConditions = () => {
  return (
    <div className="font-rnarrow text-center px-10%">
      <EnglishTerms />
      <UkrainianTerms />
    </div>
  );
};

export default TermsAndConditions;
