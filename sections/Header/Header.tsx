import React from "react";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import HeaderAndFooterButton from "../../components/HeaderAndFooterButton";
import { useViewPort } from "@hooks/useViewport";
import { useAppRouter } from "@hooks/useAppRouter";

type HeaderProps = {
  signerAddress: string;
  handleConnect: () => void;
  handleDisconnect: () => void;
};

const Header = ({
  signerAddress,
  handleConnect,
  handleDisconnect,
}: HeaderProps) => {
  const { isMobile } = useViewPort()
  const { push, route } = useAppRouter();
  return isMobile ? (
    <div className="flex flex-row w-screen px-10% items-center mb-8% pt-8% pb-15% justify-between">
      <img
        className="w-15% min-w-75px mr-15%"
        src={"/img/pd-logoNoSymbol.png"}
        alt="Logo"
      />
      {<HeaderAndFooterButton label="Menu" onClick={() => {}} />}
    </div>
  ) : (
    <div className="flex flex-row w-screen pl-10% pr-13% items-center mb-8% pt-2% justify-between">
      <img
        className="w-15% min-w-75px laptop:mr-30% tablet:mr-25%"
        src={"/img/pd-logoNoSymbol.png"}
        alt="Logo"
      />
      {!isMobile && (
        <>
          <HeaderAndFooterButton
            label="Warline"
            onClick={() => {
              push("/warline");
            }}
            underlined={route === "/warline"}
          />
          <HeaderAndFooterButton
            label="About project"
            onClick={() => {
              push("/");
            }}
            underlined={route === "/"}
          />
          <HeaderAndFooterButton
            label="My tokens"
            onClick={() => {
              push("/tokens");
            }}
            underlined={route === "/tokens"}
          />
          {
            <ConnectWalletButton
              signerAddress={signerAddress}
              handleConnect={handleConnect}
              handleDisconnect={handleDisconnect}
            />
          }
        </>
      )}
      {isMobile && <HeaderAndFooterButton label="Menu" onClick={() => {}} />}
    </div>
  );
};

export default Header;
