import React, { createContext, useContext, useState } from 'react';

export const PreloaderContext = createContext<{
  showPreloader: () => void;
  hidePreloader: () => void;
  preloaderVisible: boolean;
}>({
  showPreloader: () => {},
  hidePreloader: () => {},
  preloaderVisible: true,
});

export const PreloaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preloaderVisible, setPreloaderVisible] = useState<boolean>(false);

  const hidePreloader = () => {
    setPreloaderVisible(false);
  };
  const showPreloader = () => {
    setPreloaderVisible(true);
  };

  return (
    <PreloaderContext.Provider
      value={{
        hidePreloader,
        showPreloader,
        preloaderVisible,
      }}
    >
      <div className="relative">
        {preloaderVisible ? (
          <div
            className="fixed w-screen100% h-screen100% bg-carbon top-0 left-0 right-0 bottom-0 flex items-center justify-center"
            style={{ zIndex: 1000 }}
          >
            <img
              className="w-10% min-w-75px breathing"
              src="/img/pd-logoNoSymbol-black.svg"
            />
          </div>
        ) : null}
        <div
          style={{
            height: preloaderVisible ? '0' : 'initial',
            overflow: preloaderVisible ? 'hidden' : 'initial',
          }}
        >
          {children}
        </div>
      </div>
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => useContext(PreloaderContext);
