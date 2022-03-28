import React, { useState } from "react";
import { useViewPort } from "@hooks/useViewport";
import { VscChromeClose } from "react-icons/vsc";
import { useWeb3Modal } from "@hooks/useWeb3Modal";

type PropsDonatePopup = {
  setShowDonatePopup: (arg: boolean) => void;
};

const NUMBER_3_DECIMALS = /^(?:\d*\.\d{1,3}|\d+)$/;

const DonateProjectPopup = ({ setShowDonatePopup }: PropsDonatePopup) => {
  const { isMobile } = useViewPort();
  const { donate } = useWeb3Modal();
  const [ETHAmount, setETHAmount] = useState<string>("");
  const [amountError, setAmountError] = useState<boolean>(false);

  const DonateButton = (amount: string) => {
    return (
      <button
        className="font-rblack text-14px leading-40px tablet:leading-48px"
        onClick={() => {
          setETHAmount(amount);
        }}
      >
        {amount} ETH
      </button>
    );
  };

  return isMobile ? (
    <div>
      <div className="fixed z-20 w-screen100% bg-white top-0 px-24px h-100% flex flex-col justify-center">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowDonatePopup(false)}
        >
          <VscChromeClose size={25} />
        </button>

        <p className="font-rblack text-29px leading-30px">Support our project</p>
        <div className=" mt-30px pb-10px border-b font-rlight border-black text-22px dark:border-cotton flex flex-row items-center justify-between">
          <input
            className="w-70%
          placeholder-mid_gray placeholder-opacity-70
          transition-all duration-1500 outline-none"
            placeholder={"Enter your ETH Amount"}
            value={ETHAmount !== null ? ETHAmount : ""}
            onChange={(e) => {
              setETHAmount(e.target.value);
              setAmountError(!NUMBER_3_DECIMALS.test(e.target.value));
            }}
          />
          <p>ETH</p>
        </div>
        <div className="mt-20px flex flex-row items-center flex-wrap gap-x-24px">
          {DonateButton("0.1")}
          {DonateButton("0.3")}
          {DonateButton("0.5")}
          {DonateButton("1")}
        </div>
        {amountError && (
          <p className="text-10px text-red-500">Amount has incorrect format</p>
        )}
        <div className="flex justify-center w-100% ">
          <button
            className="font-rblack text-16px bg-carbon text-white rounded-full mt-20px px-15px py-18px w-100%"
            onClick={() => {
              const performDonation = async () => {
                if (amountError) {
                  return;
                }
                await donate(ETHAmount, "project");
              };
              performDonation();
              setShowDonatePopup(false);
            }}
            disabled={!ETHAmount || amountError}
          >
            Donate Now
          </button>
        </div>
      </div>
      <div className=" fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70"></div>
    </div>
  ) : (
    <div>
      <div className="fixed z-20 w-496px laptop:w-544px bg-white top-20% left-50% -translate-x-50% px-48px p-72px">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowDonatePopup(false)}
        >
          <VscChromeClose size={25} />
        </button>

        <p className="font-rblack text-32px leading-48px">Support our project</p>
        <div className="mt-24px pb-10px border-b font-rlight border-black text-22px dark:border-cotton flex flex-row items-center justify-between">
          <input
            className="w-70%
            placeholder-mid_gray placeholder-opacity-70
            transition-all duration-1500 outline-none"
            placeholder={"Enter your ETH Amount"}
            value={String(ETHAmount)}
            onChange={(e) => {
              setETHAmount(e.target.value);
              setAmountError(!NUMBER_3_DECIMALS.test(e.target.value));
            }}
          />
          <p>ETH</p>
        </div>
        <div className="flex flex-row items-center flex-wrap gap-x-24px">
          {DonateButton("0.1")}
          {DonateButton("0.3")}
          {DonateButton("0.5")}
          {DonateButton("1")}
        </div>
        {amountError && (
          <p className="text-12px text-red-500">Amount has incorrect format</p>
        )}
        <div className="flex justify-center w-100%">
          <button
            className="font-rblack text-16px bg-carbon text-white rounded-full mt-24px px-15px py-12px w-100%"
            onClick={() => {
              const performDonation = async () => {
                if (amountError) {
                  return;
                }
                await donate(ETHAmount, "project");
              };
              performDonation();
              setShowDonatePopup(false);
            }}
            disabled={!ETHAmount || amountError}
          >
            Donate Now
          </button>
        </div>
      </div>
      <div className=" fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70"></div>
    </div>
  );
};

export default DonateProjectPopup;
