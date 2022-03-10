import React from "react";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import HeaderAndFooterButton from "../../components/HeaderAndFooterButton";

const Header = () => {
  return (
    <div className="flex flex-row w-screen px-10% items-center mb-8% pt-2%">
      <img
        className="w-10% min-w-75px laptop:mr-30% tablet:mr-25% mobile:mr-15%"
        src={"/img/logo.png"}
        alt="Logo"
      />
      <HeaderAndFooterButton label="Warline" onClick={() => {}} />
      <HeaderAndFooterButton label="About project" onClick={() => {}} />
      <HeaderAndFooterButton label="My tokens" onClick={() => {}} />
      <ConnectWalletButton />
    </div>
  );
};

export default Header;
