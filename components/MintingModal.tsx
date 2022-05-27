import React, { useState } from 'react';
import Button from '@components/Button';
import { VscChromeClose } from 'react-icons/vsc';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useAppRouter } from '@hooks/useAppRouter';

type MintingModalProps = {
  setOpenMintingModal: (arg: boolean) => void;
};

const MintingModal = ({ setOpenMintingModal }: MintingModalProps) => {
  const { mintSecondDrop } = useWeb3Modal();
  const { push } = useAppRouter();
  const [amount, setAmount] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const decreaseAmount = () => {
    if (amount > 1) setAmount(amount - 1);
    if (amount - 1 === 1) setDisabled(true);
  };
  const increaseAmount = () => {
    setAmount(amount + 1);
    setDisabled(false);
  };
  return (
    <>
      <div className="fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70" />
      <div
        className="font-rnarrow text-carbon flex flex-col tablet:justify-between mobile:justify-center fixed z-20
          tablet:w-496px desktop:w-544px tablet:h-auto mobile:w-screen100% mobile:h-screen100% bg-white tablet:top-50%
          tablet:left-50% mobile:top-0 mobile:left-0 tablet:-translate-x-50% tablet:-translate-y-50% mobile:translate-x-0
          mobile:translate-y-0 desktop:p-72px tablet:p-48px mobile:p-24px"
      >
        <button
          className="absolute right-48px top-48px"
          onClick={() => setOpenMintingModal(false)}
        >
          <VscChromeClose size={25} />
        </button>
        <p className="font-rblack tablet:text-32px tablet:leading-48px mobile:text-29px mobile:leading-30px">
          {isLoading ? 'Minting NFTs...' : 'Mint NFTs'}
        </p>
        <p className="tablet:text-16px tablet:leading-24px tablet:mt-24px mobile:mt-20px">
          Select how many tokens you want to mint.
          <br />
          You will mint random NFTs from those that are currently on sale.
          <br />
          Each NFT will cost 0.15 ETH.
        </p>
        <div className="flex tablet:flex-row tablet:items-center tablet:mt-48px mobile:mt-40px mobile:flex-col mobile:items-start">
          <div className="flex tablet:w-auto mobile:w-100% mobile:justify-between">
            <button
              onClick={() => decreaseAmount()}
              disabled={disabled || isLoading}
              className={`${
                disabled ? 'opacity-20' : 'opacity-100'
              } outline-none tablet:w-48px tablet:h-48px mobile:w-60px mobile:h-60px flex items-center justify-center border-2 border-carbon rounded-full text-44px tablet:leading-48px mobile:leading-60px`}
            >
              -
            </button>
            <div className="outline-none font-rblack text-center mx-12px tablet:w-72px tablet:h-48px tablet:text-32px tablet:leading-48px mobile:w-auto mobile:h-60px mobile:text-27px mobile:leading-60px">
              {amount}
            </div>
            <button
              onClick={() => increaseAmount()}
              disabled={isLoading}
              className="tablet:w-48px tablet:h-48px mobile:w-60px mobile:h-60px flex items-center justify-center border-2 border-carbon rounded-full text-44px tablet:leading-48px mobile:leading-60px"
            >
              +
            </button>
          </div>
          <div className="flex tablet:flex-col tablet:mt-0 tablet:ml-48px mobile:flex-row mobile:mt-30px mobile:ml-0">
            <p className="tablet:text-12px tablet:leading-12px mobile:text-14px mobile:leading-20px">
              Total
            </p>
            <p className="tablet:text-16px tablet:leading-24px tablet:ml-0 mobile:ml-7px mobile:text-14px mobile:leading-20px">
              {(amount * 0.15).toFixed(2)} ETH
            </p>
          </div>
        </div>
        <Button
          mode="primary"
          className={`tablet:h-48px mobile:h-60px w-100% mt-48px ${
            isLoading ? 'bg-carbon-800' : ''
          }`}
          round={false}
          disabled={isLoading}
          label="Mint Now"
          onClick={() => {
            setIsLoading(true);
            mintSecondDrop(amount)
              .then(() => push('/tokens'))
              .catch((e) => alert(e?.message ?? e))
              .finally(() => setIsLoading(false));
          }}
        />
      </div>
    </>
  );
};

export default MintingModal;
