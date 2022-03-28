import React from "react";
import { truncateAddress } from "sections/utils";

type ConnectWalletButtonProps = {
  signerAddress: string;
  handleConnect: () => void;
  handleDisconnect: () => void;
};

const ConnectWalletButton = ({
  signerAddress,
  handleConnect,
  handleDisconnect,
}: ConnectWalletButtonProps) => {
  return (
    <div>
      <button
        className="bg-carbon rounded-full text-white font-rblack tablet:px-30px mobile:px-30% tablet:py-10px mobile:py-8% whitespace-nowrap
        mobile:text-12px laptop:text-14px desktop:text-16px hover:bg-carbon-800 focus:border-double tablet:ml-20px
        border-4 border-white"
        onClick={signerAddress ? handleDisconnect : handleConnect}
      >
        {signerAddress ? truncateAddress(signerAddress) : "Connect Wallet"}
      </button>
    </div>
  );
};

export default ConnectWalletButton;
