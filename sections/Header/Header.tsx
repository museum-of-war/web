import React from "react";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import HeaderButton from "../../components/HeaderButton";

const Header = () => {
  return (
    <div className="flex flex-row w-screen px-10% items-center mb-8% pt-2%">
      <img
        className="w-10% min-w-75px mr-30%"
        src={"/img/logo.png"}
        alt="Logo"
      />
      <HeaderButton label="Warline" onClick={() => {}} />
      <HeaderButton label="About project" onClick={() => {}} />
      <HeaderButton label="My tokens" onClick={() => {}} />
      <ConnectWalletButton />
    </div>
  );
};

export default Header;
