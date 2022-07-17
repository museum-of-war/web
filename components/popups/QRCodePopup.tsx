import React, { useMemo, useState, useEffect, useRef } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Button from '@components/Button';
import { usePopup } from '@providers/PopupProvider';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { TicketType } from '@sections/types';
import { useIsMounted } from '@hooks/useIsMounted';
import { useCountdown } from '@hooks/useCountdown';
import QRCode from 'react-qr-code';

type PropsPopup = {
  contractAddress: string;
  tokenId: number;
};

const QRCodePopup = ({ contractAddress, tokenId }: PropsPopup) => {
  const isMounted = useIsMounted();
  const { getOrCreateTicket } = useWeb3Modal();
  const contentRef = useRef<HTMLDivElement>(null);
  const { hidePopup } = usePopup();
  const [ticket, setTicket] = useState<TicketType>();
  const { minutes, seconds, timerEnd } = useCountdown(
    ticket?.data?.expirationTime
      ? new Date(ticket.data.expirationTime * 1000)
      : new Date(),
  );

  const ticketSerialized = useMemo(() => JSON.stringify(ticket), [ticket]);

  const updateTicket = (forceCreate: boolean = false) => {
    getOrCreateTicket(contractAddress, tokenId, forceCreate)
      .then((ticket) => {
        if (!isMounted.current) return;
        setTicket(ticket);
      })
      .catch(() => hidePopup());
  };

  useEffect(() => {
    if (!contractAddress || !tokenId) return;
    updateTicket();
  }, [contractAddress, tokenId]);

  return ticket ? (
    <div
      className="fixed z-10 w-screen100% h-screen100% top-0 left-0 flex items-center justify-evenly"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;

        hidePopup();
      }}
    >
      <div
        className="z-100 desktop:h-auto tablet:h-auto mobile:h-100% dark:bg-carbon bg-white relative desktop:w-544px tablet:w-496px mobile:w-100%
                    flex flex-row desktop:px-72px tablet:px-72px desktop:py-72px tablet:py-72px mobile:px-24px
                    mobile:py-24px overflow-auto mobile:items-center"
      >
        <button className="absolute right-20px top-20px" onClick={hidePopup}>
          <VscChromeClose size={25} />
        </button>
        <div className="flex flex-col w-100%" ref={contentRef}>
          {contentRef?.current ? (
            <QRCode
              className={`w-100% h-auto ${timerEnd ? 'opacity-30' : ''}`}
              value={ticketSerialized}
              size={contentRef.current.clientWidth}
            />
          ) : (
            <div className="w-100% after:content-[''] after:block after:pb-100%" />
          )}
          <div className="w-100% font-rnarrow tablet:text-16px mobile:text-14px tablet:mt-24px mobile:mt-20px text-center">
            {timerEnd
              ? 'This QR code is not valid anymore. Please, get the new one.'
              : `This QR code will be valid for ${minutes}m ${seconds}s`}
          </div>
          {timerEnd && (
            <Button
              mode="primary"
              label="Generate New QR Code"
              onClick={() => updateTicket(true)}
              className="w-100% tablet:h-48px mobile:h-60px tablet:mt-48px mobile:mt-30px"
            />
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default QRCodePopup;
