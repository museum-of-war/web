import React from "react";
import ContentTopConnected from "./ContentTopConnected";
import ContentTopNotConnected from "./ContentTopNotConnected";

type ContentTopProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const ContentTop = ({ signerAddress, handleConnect }: ContentTopProps) => {
  return signerAddress ? (
    <ContentTopConnected />
  ) : (
    <ContentTopNotConnected
      signerAddress={signerAddress}
      handleConnect={handleConnect}
    />
  );
};

export default ContentTop;
