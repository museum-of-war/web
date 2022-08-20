import React, { createContext, useContext, useEffect, useState } from 'react';
import EventPopup from '@components/popups/EventPopup';
import BidPopup from '@components/popups/BidPopup';
import SignInPopup from '@components/popups/SignInPopup';
import QRCodePopup from '@components/popups/QRCodePopup';

const POPUPS_MAP = {
  event: EventPopup,
  bid: BidPopup,
  signIn: SignInPopup,
  qrCode: QRCodePopup,
};

export const PopupContext = createContext<{
  showPopup: (name: keyof typeof POPUPS_MAP, data: any | null) => void;
  hidePopup: () => void;
  activePopupName: string | null;
}>({
  showPopup: () => {},
  hidePopup: () => {},
  activePopupName: null,
});

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [popupData, setPopupData] = useState<any>(null);
  const [activePopupName, setActivePopupName] = useState<
    keyof typeof POPUPS_MAP | null
  >(null);

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === 'Escape') {
        setPopupData(null);
      }
    };

    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [setPopupData]);

  useEffect(() => {
    if (popupData) {
      // @ts-ignore
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      // @ts-ignore
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [popupData]);

  const hidePopup = () => {
    setPopupData(null);
    setActivePopupName(null);
  };
  const showPopup = (popupName: keyof typeof POPUPS_MAP, popupData: any) => {
    setPopupData(popupData);
    setActivePopupName(popupName);
  };
  const Component = activePopupName ? POPUPS_MAP[activePopupName] : null;

  return (
    <PopupContext.Provider
      value={{
        showPopup,
        hidePopup,
        activePopupName,
      }}
    >
      {children}
      {popupData && Component ? (
        <>
          <div className="fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70" />
          <Component {...popupData} />
        </>
      ) : null}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
