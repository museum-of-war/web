import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactGA from 'react-ga4';
import Button from '@components/Button';
import { VscChromeClose } from 'react-icons/vsc';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useAppRouter } from '@hooks/useAppRouter';
import { UtorgCurrencies } from '@constants/collections/Warline/constants';
import { AnalyticsContext } from 'types';
import { openInNewTab } from '@sections/utils';
import { WarlineDrop } from '@sections/types';

type MintingModalProps = {
  setOpenMintingModal: (arg: boolean) => void;
  drop?: WarlineDrop;
  tokenId?: number;
  maxMints?: number;
  analyticsContext?: AnalyticsContext;
};

const MintingModal = ({
  //TODO: refactor to PopupProvider?
  setOpenMintingModal,
  drop,
  tokenId,
  maxMints,
  analyticsContext,
}: MintingModalProps) => {
  const { provider, getDropPriceETH, mintSecondDrop, mintDrop } =
    useWeb3Modal();
  const { push } = useAppRouter();
  const [signerAddress, setSignerAddress] = useState<string>('');
  const [amount, setAmount] = useState<number>(1);
  const [decreaseDisabled, setDecreaseDisabled] = useState<boolean>(true);
  const [increaseDisabled, setIncreaseDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAddress = async () => {
      if (provider !== undefined) {
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setSignerAddress(address);
      } else {
        setSignerAddress('');
      }
    };
    getAddress();
  }, [provider]);

  const utorgLink = useMemo(() => {
    const utorgCurrency = drop ? UtorgCurrencies[drop] : null;
    if (!utorgCurrency) return null;

    const params = new URLSearchParams();
    params.append('currency', utorgCurrency);
    params.append('nftId', '' + tokenId);
    params.append('amount', '' + amount);
    return `https://app.utorg.pro/direct/Np3qdvMIRU/${signerAddress}?${params}`;
  }, [signerAddress, drop, tokenId, amount]);

  const decreaseAmount = () => {
    if (amount > 1) setAmount(amount - 1);
    if (amount - 1 <= 1) setDecreaseDisabled(true);
    setIncreaseDisabled(false);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
    setDecreaseDisabled(false);
    if (maxMints && amount + 1 >= maxMints) setIncreaseDisabled(true);
  };

  const onBuyETH = useCallback(() => {
    ReactGA.send({
      category: analyticsContext?.category || 'nft',
      action: 'buy_eth',
      label: tokenId,
      value: amount,
    });
    setIsLoading(true);

    const mintPromise =
      drop && drop !== WarlineDrop.Drop1 && drop !== WarlineDrop.Drop2
        ? mintDrop(drop, tokenId ?? 1, amount)
        : mintSecondDrop(amount);

    mintPromise
      .then(() => push('/tokens'))
      .catch((e) => alert(e?.message ?? e))
      .finally(() => setIsLoading(false));
  }, [
    amount,
    analyticsContext?.category,
    drop,
    mintSecondDrop,
    mintDrop,
    push,
    tokenId,
  ]);

  const onBuyViaCard = useCallback(() => {
    if (utorgLink) {
      openInNewTab(utorgLink);
      ReactGA.send({
        category: analyticsContext?.category || 'nft',
        action: 'buy_via_card',
        label: tokenId,
        value: amount,
      });
    }
  }, [amount, analyticsContext?.category, tokenId, utorgLink]);

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
          You will mint NFTs from those that are currently on sale.
          <br />
          Each NFT will cost {drop ? getDropPriceETH(drop) : '?'} ETH.
        </p>
        <div className="flex tablet:flex-row tablet:items-center tablet:mt-48px mobile:mt-40px mobile:flex-col mobile:items-start">
          <div className="flex tablet:w-auto mobile:w-100% mobile:justify-between">
            <button
              onClick={() => decreaseAmount()}
              disabled={decreaseDisabled || isLoading}
              className={`${
                decreaseDisabled ? 'opacity-20' : 'opacity-100'
              } outline-none tablet:w-48px tablet:h-48px mobile:w-60px mobile:h-60px flex items-center justify-center border-2 border-carbon rounded-full text-44px tablet:leading-48px mobile:leading-60px`}
            >
              -
            </button>
            <div className="outline-none font-rblack text-center mx-12px tablet:w-72px tablet:h-48px tablet:text-32px tablet:leading-48px mobile:w-auto mobile:h-60px mobile:text-27px mobile:leading-60px">
              {amount}
            </div>
            <button
              onClick={() => increaseAmount()}
              disabled={increaseDisabled || isLoading}
              className={`${
                increaseDisabled ? 'opacity-20' : 'opacity-100'
              } tablet:w-48px tablet:h-48px mobile:w-60px mobile:h-60px flex items-center justify-center border-2 border-carbon rounded-full text-44px tablet:leading-48px mobile:leading-60px`}
            >
              +
            </button>
          </div>
          <div className="flex tablet:flex-col tablet:mt-0 tablet:ml-48px mobile:flex-row mobile:mt-30px mobile:ml-0">
            <p className="tablet:text-12px tablet:leading-12px mobile:text-14px mobile:leading-20px">
              Total
            </p>
            <p className="tablet:text-16px tablet:leading-24px tablet:ml-0 mobile:ml-7px mobile:text-14px mobile:leading-20px">
              {(amount * (drop ? getDropPriceETH(drop) : 0)).toFixed(2)} ETH
            </p>
          </div>
        </div>
        <div className="flex flex-col mobile:gap-[20px] tablet:gap-24px">
          <Button
            mode="primary"
            className={`tablet:h-48px mobile:h-60px w-100% mt-48px ${
              isLoading ? 'bg-carbon-800' : ''
            }`}
            round={false}
            disabled={isLoading}
            label="Buy Now in ETH"
            onClick={onBuyETH}
          />
          {!!utorgLink && (
            <div className="flex flex-col items-center">
              <Button
                mode="secondary"
                className={`tablet:h-48px mobile:h-60px w-100% ${
                  isLoading ? 'opacity-70' : ''
                }`}
                round={false}
                disabled={isLoading}
                label="Buy Now with Card"
                onClick={onBuyViaCard}
              />
              <p className="text-14px leading-24px text-center opacity-70">
                via UTORG
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MintingModal;
