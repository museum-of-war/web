import React, { useEffect, useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import { useIsMounted } from '@hooks/useIsMounted';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { TicketInfoType, TicketType } from '@sections/types';
import { useCountdown } from '@hooks/useCountdown';

const CLEAR_INTERVAL = 5 * 1000; // 5 seconds

const QRVerifier = () => {
  const isMounted = useIsMounted();
  const { verifyTicket } = useWeb3Modal();
  const [ticket, setTicket] = useState<TicketInfoType>();
  const [error, setError] = useState<string>();
  const [clearDate, setClearDate] = useState<Date>(new Date(0));
  const infoRef = useRef<HTMLDivElement>(null);
  const { timerEnd } = useCountdown(clearDate);

  useEffect(() => {
    if (!timerEnd) return;
    setTicket(undefined);
    setError(undefined);
  }, [timerEnd]);

  const verifyData = async (data: string) => {
    const ticket = JSON.parse(data) as TicketType;
    try {
      const ticketInfo = await verifyTicket(ticket);
      if (!isMounted.current) return;
      setTicket(ticketInfo);
      setError(undefined);
    } catch (e) {
      setTicket(undefined);
      setError((e as Error).message ?? 'Unknown error');
      console.error(e);
    } finally {
      setClearDate(new Date(+new Date() + CLEAR_INTERVAL));
      infoRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dateToString = (date: Date): string => date.toLocaleString();

  return (
    <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
      <p
        className="border-carbon border-b-4
        mobile:text-38px mobile:leading-40px
        tablet:text-70px tablet:leading-72px
        desktop:text-80px desktop:leading-100px
        font-rblack mb-10px"
      >
        VERIFY QR-CODE
      </p>
      <div className="relative flex flex-col desktop:flex-row tablet:gap-[48px] mobile:gap-[40px] pt-[40px]">
        <QrReader
          className="flex-1"
          constraints={{ facingMode: 'environment' }}
          onResult={(result) => {
            if (!!result) verifyData(result?.getText()).then(() => {});
          }}
        />
        <div
          className="desktop:w-[544px] mobile:w-full box-border flex flex-col tablet:gap-[48px] mobile:gap-[40px] text-[14px] tablet:text-[16px] font-rnarrow"
          ref={infoRef}
        >
          {error || ticket ? (
            <p className="font-rblack text-[27px] tablet:text-[32px]">
              {error ? 'Not verified' : 'Verified'}
            </p>
          ) : (
            <p>Point your camera at the QR code to scan it.</p>
          )}
          {error ? (
            <p>{error}</p>
          ) : ticket ? (
            <div className="flex flex-col tablet:gap-[24px] mobile:gap-[10px]">
              {Object.entries(ticket).map(([attribute, value]) => (
                <div className="flex flex-col" key={attribute}>
                  <p className="opacity-70 text-[12px]">{attribute}</p>
                  <p className="text-[14px] tablet:text-[16px]">
                    {value instanceof Date ? dateToString(value) : value}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default QRVerifier;
