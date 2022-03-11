import React from "react";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import HeaderAndFooterButton from "../../components/HeaderAndFooterButton";
import { useViewPort } from "@hooks/useViewport";
import { useAppRouter } from "@hooks/useAppRouter";

type HeaderProps = {
  signerAddress: string;
  handleConnect: () => void;
  handleDisconnect: () => void;
  menuOpen: boolean;
  setMenuOpen: (arg: boolean) => void;
};

const Header = ({
  signerAddress,
  handleConnect,
  handleDisconnect,
  menuOpen,
  setMenuOpen,
}: HeaderProps) => {
  const { isMobile } = useViewPort();
  const { push, route } = useAppRouter();
  return isMobile ? (
    <div
      className={`w-screen px-10% mb-8% pt-8% pb-15% ${
        menuOpen && "border-b-4"
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <img
          className="w-15% min-w-75px mr-15%"
          src={"/img/pd-logoNoSymbol.png"}
          alt="Logo"
        />
        {
          <HeaderAndFooterButton
            label={menuOpen ? "" : "Menu"}
            menu
            onClick={() => setMenuOpen(!menuOpen)}
          />
        }
      </div>
      {menuOpen && (
        <>
          <div className="my-8%">
            <HeaderAndFooterButton
              label="Warline"
              onClick={() => {
                push("/warline");
                setMenuOpen(false);
              }}
              underlined={route === "/warline"}
            />
          </div>
          <div className="mb-8%">
            <HeaderAndFooterButton
              label="About project"
              onClick={() => {
                push("/");
                setMenuOpen(false);
              }}
              underlined={route === "/"}
            />
          </div>
          <div className="mb-8%">
            <HeaderAndFooterButton
              label="My tokens"
              onClick={() => {
                push("/tokens");
                setMenuOpen(false);
              }}
              underlined={route === "/tokens"}
            />
          </div>
          {
            <ConnectWalletButton
              signerAddress={signerAddress}
              handleConnect={handleConnect}
              handleDisconnect={handleDisconnect}
            />
          }
        </>
      )}
    </div>
  ) : (
    <div className="flex flex-row w-screen pl-10% pr-13% items-center mb-8% pt-2% justify-between z-20">
      <img
        className="w-15% min-w-75px laptop:mr-30% tablet:mr-25%"
        src={"/img/pd-logoNoSymbol.png"}
        alt="Logo"
      />
      {!menuOpen && (
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
      {menuOpen && (
        <HeaderAndFooterButton
          label=""
          menu
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
    </div>
  );
};

export default Header;
