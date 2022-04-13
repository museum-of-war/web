import React, { createContext, useContext, useEffect, useState } from 'react';
import EventPopup from '@sections/Warline/EventPopup';

export const PopupContext = createContext<{
  showPopup: (data: any | null) => void;
  hidePopup: () => void;
}>({
  showPopup: () => {},
  hidePopup: () => {},
});

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [popupData, setPopupData] = useState<any>(null);

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

  const hidePopup = () => setPopupData(null);

  return (
    <PopupContext.Provider
      value={{
        showPopup: setPopupData,
        hidePopup,
      }}
    >
      {children}
      {popupData ? (
        <>
          <div className="fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70" />
          <EventPopup {...popupData} />
        </>
      ) : null}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
