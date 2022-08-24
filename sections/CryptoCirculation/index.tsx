import Blurb from '@sections/AboutProject/Blurb';
import Button from '@components/Button';
import React, { useEffect, useMemo, useState } from 'react';
import { TransferInfoType } from '@sections/types';
import { KNOWN_WALLETS, MAIN_TRANSFERS } from '@sections/AboutUs/constants';
import { openInNewTab, truncateAddress } from '@sections/utils';
import { useWeb3Modal } from '@hooks/useWeb3Modal';

const INCREMENT = 10;

type CryptoCirculationProps = {
  initialSize?: number;
};

const CryptoCirculation = ({ initialSize = 10 }: CryptoCirculationProps) => {
  const { getUsdPriceFromETH, getSellerTransfers } = useWeb3Modal();
  const [transfers, setTransfers] = useState<TransferInfoType[]>([
    ...MAIN_TRANSFERS,
  ]);
  const [countToShow, setCountToShow] = useState(initialSize);
  const [updatedPriceCount, setUpdatedPriceCount] = useState(0);
  const transfersToShow = useMemo(
    () => transfers.sort((t1, t2) => +t1.date - +t2.date).slice(0, countToShow),
    [transfers, countToShow, updatedPriceCount],
  );

  useEffect(() => {
    const newCount = transfersToShow.length;
    if (updatedPriceCount >= newCount) return;
    const transfersToUpdate =
      newCount <= initialSize
        ? transfersToShow
        : transfersToShow.slice(newCount - INCREMENT, newCount);
    Promise.all(
      transfersToUpdate.map((transfer) =>
        getUsdPriceFromETH(transfer.eth).then((usd) => (transfer.usd = usd)),
      ),
    ).then(() => {
      if (newCount > updatedPriceCount) setUpdatedPriceCount(newCount);
    });
  }, [updatedPriceCount, initialSize, transfersToShow]);

  const loadMore = () => {
    const newCountToShow = countToShow + INCREMENT;
    if (
      transfers.length < newCountToShow &&
      transfers.length === MAIN_TRANSFERS.length
    ) {
      getSellerTransfers().then((sellerTransfers) =>
        setTransfers([...transfers, ...sellerTransfers]),
      );
    }
    setCountToShow(newCountToShow);
  };

  return (
    <div className="desktop:mt-120px tablet:mt-96px mobile:mt-60px desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
      <Blurb
        header="Crypto circulation"
        classNames="tablet:mb-40px mobile:mb-32px"
      />
      <div className="relative flex desktop:flex-row mobile:flex-col mobile:justify-between desktop:gap-120px mobile:gap-20px">
        <p className="font-rblack tablet:text-32px mobile:text-27px tablet:leading-36px mobile:leading-30px">
          Our official wallets are available for public access
        </p>
        <Button
          mode="secondary"
          label="View Wallets Details"
          location="https://github.com/museum-of-war/nft/blob/master/docs/Addresses.md#wallets"
          openInNewWindow
          className="tablet:px-72px mobile:px-48px self-center"
        />
      </div>
      <p className="tablet:mt-96px mobile:mt-48px font-rblack tablet:text-32px mobile:text-27px tablet:leading-48px mobile:leading-30px">
        Transactions history
      </p>
      <div className="overflow-auto">
        <table className="w-100% mt-24px text-left">
          <thead>
            <tr className="font-rblack whitespace-nowrap border-b-4 border-carbon tablet:text-14px mobile:text-12px tablet:leading-24px mobile:leading-20px">
              <th className="mobile:py-10px tablet:py-12px pr-24px">Date</th>
              <th className="mobile:py-10px tablet:py-12px pr-24px">
                Amount, ETH
              </th>
              <th className="mobile:py-10px tablet:py-12px pr-24px">
                Amount, USD
              </th>
              <th className="mobile:py-10px tablet:py-12px pr-24px">From</th>
              <th className="mobile:py-10px tablet:py-12px pr-24px">To</th>
              <th className="mobile:py-10px tablet:py-12px" />
            </tr>
          </thead>
          <tbody>
            {transfersToShow.map((transfer) => (
              <tr
                key={transfer.hash}
                className="font-rnarrow whitespace-nowrap tablet:text-16px mobile:text-14px tablet:leading-24px mobile:leading-20px"
              >
                <td className="mobile:py-18px tablet:py-20px pr-24px">
                  {transfer.date.toLocaleString('en-GB', {
                    dateStyle: 'medium',
                    timeStyle: 'long',
                  })}
                </td>
                <td className="mobile:py-18px tablet:py-20px pr-24px">
                  {transfer.eth} ETH
                </td>
                <td className="mobile:py-18px tablet:py-20px pr-24px">
                  $
                  {transfer.usd ? (+transfer.usd).toLocaleString('en-US') : '—'}
                </td>
                <td
                  className="mobile:py-18px tablet:py-20px pr-24px"
                  title={transfer.from}
                >
                  {truncateAddress(transfer.from, 13)}
                </td>
                <td
                  className="mobile:py-18px tablet:py-20px pr-24px"
                  title={transfer.to}
                >
                  {KNOWN_WALLETS[transfer.to.toLowerCase()] ??
                    truncateAddress(transfer.to, 13)}
                </td>
                <td className="mobile:py-18px tablet:py-20px text-right">
                  <span
                    className="font-rblack tablet:text-14px mobile:text-12px mobile:py-10px tablet:py-12px cursor-pointer border-b-4 hover:border-b-4 hover:border-solid border-transparent hover:border-carbon"
                    onClick={() => {
                      openInNewTab(`https://etherscan.io/tx/${transfer.hash}`);
                    }}
                  >
                    See on Etherscan
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button
        mode="secondary"
        label="Show More Transactions"
        className="desktop:mt-48px mobile:mt-24px tablet:px-72px mobile:px-30px tablet:w-auto mobile:w-100%"
        onClick={loadMore}
      />
    </div>
  );
};

export default CryptoCirculation;
