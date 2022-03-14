import React, { useState } from "react";
import { useViewPort } from "@hooks/useViewport";
import { EventType } from "@sections/types";
import { VscChromeClose } from "react-icons/vsc";

type PropsDonatePopup = {
  setShowDonatePopup: (arg: boolean) => void;
};

const Popup = ({ setShowDonatePopup }: PropsDonatePopup) => {
  const { isMobile, isTablet } = useViewPort();
  const [ETHAmount, setETHAmount] = useState<number>(0);
  const DonateButton = (amount: number) => {
    return (
      <button
        className="font-rblack text-16px mr-30px mt-10px"
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
      <div className="  fixed z-20 w-screen100%  bg-white top-20% tablet:left-20% laptop:left-30%  px-10% h-80%	">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowDonatePopup(false)}
        >
          <VscChromeClose size={25} />
        </button>

        <p className="font-rblack mt-20%  text-34px">Support Ukraine</p>
        <p className="font-rnarrow pt-10%">
          Support Ukraine to not let this chronology continue. 100% of funds
          from the sales will go directly to the official crypto-accounts of the
          Ministry of Digital Transformation of Ukraine.
        </p>
        <div className=" mt-30px pb-10px border-b font-rlight border-black text-22px dark:border-cotton flex flex-row items-center justify-between">
          <input
            className="w-70%
         
          placeholder-mid_gray placeholder-opacity-70
       
          transition-all duration-1500 outline-none"
            placeholder={"Enter your ETH Amount"}
            // type={"number"}
            // onChange={(e: number) => {
            //   setETHAmount(e);
            // }}
            value={ETHAmount}
            // onKeyUp={(e) => {
            //   if (e.key === "Enter" && value !== "") {
            //     addTag();
            //   }
            // }}
          />
          <p>ETH</p>
        </div>
        <div className="mt-10px flex flex-row items-center flex-wrap">
          {DonateButton(0.1)}
          {DonateButton(0.3)}
          {DonateButton(0.5)}
          {DonateButton(1)}
        </div>

        <div className="flex justify-center w-100% ">
          <button className="font-rblack text-16px bg-carbon text-white rounded-full mt-50px px-15px py-15px w-100%">
            Support
          </button>
        </div>
      </div>
      <div className=" fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70"></div>
    </div>
  ) : (
    <div>
      <div className="  fixed z-20 w-screen60% latop:w-screen40%  bg-white top-20% left-20vw laptop:left-20vw  px-7%  laptop:px-5% py-3%	">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowDonatePopup(false)}
        >
          <VscChromeClose size={25} />
        </button>

        <p className="font-rblack text-34px">Support Ukraine</p>
        <p className="font-rnarrow pt-20px">
          Support Ukraine to not let this chronology continue. 100% of funds
          from the sales will go directly to the official crypto-accounts of the
          Ministry of Digital Transformation of Ukraine.
        </p>
        <div className=" mt-30px pb-10px border-b font-rlight border-black text-22px dark:border-cotton flex flex-row items-center justify-between">
          <input
            className="w-70%
           
            placeholder-mid_gray placeholder-opacity-70
         
            transition-all duration-1500 outline-none"
            placeholder={"Enter your ETH Amount"}
            // type={"number"}
            // onChange={(e: number) => {
            //   setETHAmount(e);
            // }}
            value={ETHAmount}
            // onKeyUp={(e) => {
            //   if (e.key === "Enter" && value !== "") {
            //     addTag();
            //   }
            // }}
          />
          <p>ETH</p>
        </div>
        <div className="mt-10px flex flex-row items-center flex-wrap">
          {DonateButton(0.1)}
          {DonateButton(0.3)}
          {DonateButton(0.5)}
          {DonateButton(1)}
        </div>

        <div className="flex justify-center w-100% ">
          <button className="font-rblack text-16px bg-carbon text-white rounded-full mt-50px px-15px py-15px w-100%">
            Support
          </button>
        </div>
      </div>
      <div className=" fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70"></div>
    </div>
  );
};

export default Popup;
