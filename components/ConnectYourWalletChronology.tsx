import { useViewPort } from '@hooks/useViewport';
import React from 'react';

type ConnectYourWalletChronologyProps = {
  handleConnect: () => void;
};

const ConnectYourWalletChronology = ({
  handleConnect,
}: ConnectYourWalletChronologyProps) => {
  const { isMobile } = useViewPort();
  return isMobile ? (
    <div className="mt-8% flex flex-col justify-center">
      <div className="bg-carbon text-white p-40px -mx-32px">
        <p className="font-rblack text-29px leading-30px mb-20px">
          Connect your wallet to support Ukraine
        </p>
        <p className="font-rnarrow text-14px mb-30px">
          Під’єднай гаманець, щоб підтримати Україну
        </p>
        <div className="flex justify-center">
          <button
            className="border-2 rounded-full border-white 
        font-rblack
            px-30px py-20px mobile:text-12px
            whitespace-nowrap mobile:w-full
            "
            onClick={() => {
              handleConnect();
            }}
          >
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="block mt-2%">
        <img alt="Dots" src={'/img/pd-dots1.png'} />
      </div>
    </div>
  ) : (
    <div className="mt-8% flex flex-col justify-center desktop:mx-0 tablet:-mx-72px">
      <div className="bg-carbon text-white desktop:px-96px tablet:px-72px py-72px flex flex-row items-center justify-between">
        <div className="desktop:w-60% tablet:w-70% mobile:w-70%">
          <p className="font-rblack text-32px leading-36px">
            Connect your wallet to support Ukraine
          </p>
          <p className="font-rnarrow text-16px pt-24px">
            Під’єднай гаманець, щоб підтримати Україну
          </p>
        </div>
        <div className="">
          <button
            className="border-2 rounded-full border-white 
        font-rblack flex justify-center
            desktop:px-25px desktop:py-10px desktop:text-14px
            tablet:px-20px tablet:py-10px tablet:text-12px
            mobile:px-15px mobile:py-5px mobile:text-12px
            whitespace-nowrap
            "
            onClick={handleConnect}
          >
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="w-50% tablet:w-50% block m-auto mt-2%">
        <img alt="Dots" src="/img/pd-dots1.png" />
      </div>
    </div>
  );
};

export default ConnectYourWalletChronology;
