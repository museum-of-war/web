import React, { createContext, useContext, useState } from 'react';
import { Dialog } from '@mui/material';
import ContainerDimensions from 'react-container-dimensions';

export const VideoContext = createContext<{
  VideoElement: React.FC<{
    videoSrc?: string;
    posterSrc?: string;
    name?: string;
    classNames?: string;
    styles?: React.CSSProperties;
  }>;
}>({
  VideoElement: () => null,
});

export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [videoData, setVideoData] = useState<{
    videoSrc?: string;
    posterSrc?: string;
    name?: string;
  }>({
    videoSrc: undefined,
    posterSrc: undefined,
    name: undefined,
  });

  const VideoElement = ({
    videoSrc,
    posterSrc,
    name,
    classNames,
    styles,
  }: {
    videoSrc?: string;
    posterSrc?: string;
    name?: string;
    classNames?: string;
    styles?: React.CSSProperties;
  }) => (
    <p
      className={`${classNames} relative self-center`}
      style={styles}
      onClick={() => {
        setModalOpen(!!videoSrc);
        setVideoData({ videoSrc, posterSrc, name });
      }}
    >
      {!!videoSrc && (
        <svg
          data-bbox="22.5 22.5 155 155"
          viewBox="0 0 200 200"
          height="100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          fill="#fff"
          className="play-button cursor-pointer absolute m-auto left-0 top-0 right-0 bottom-0 z-[1]"
        >
          <g>
            <path d="M100 177.5c-42.8 0-77.5-34.7-77.5-77.5S57.2 22.5 100 22.5s77.5 34.7 77.5 77.5-34.7 77.5-77.5 77.5zm0-150.6c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1c-.1-40.3-32.8-73-73.1-73.1zm-15.2 99.6v-53l46 26.5-46 26.5zm4.4-45.4v37.7l32.7-18.9-32.7-18.8z" />
          </g>
        </svg>
      )}
      {videoSrc?.includes('youtube') && !posterSrc ? (
        <iframe
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="m-auto h-100% w-100%"
        />
      ) : posterSrc ? (
        <img
          src={posterSrc}
          width="100%"
          height="auto"
          alt={name + ' Poster'}
          className={`${
            !!videoSrc ? 'cursor-pointer' : ''
          } object-contain desktop:max-h-300px`}
          onClick={() => setModalOpen(!!videoSrc)}
        />
      ) : null}
    </p>
  );

  return (
    <VideoContext.Provider
      value={{
        VideoElement,
      }}
    >
      {children}
      <Dialog
        open={modalOpen}
        disablePortal
        fullWidth
        maxWidth="lg"
        onClose={() => setModalOpen(false)}
      >
        <ContainerDimensions>
          {({ width }) =>
            videoData.videoSrc?.includes('youtube') ? (
              <iframe
                src={videoData.videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="m-auto h-100% w-100%"
                style={{ minHeight: (width / 16) * 9 }}
              />
            ) : (
              <video
                src={videoData.videoSrc}
                autoPlay
                style={{ minHeight: (width / 16) * 9 }}
              />
            )
          }
        </ContainerDimensions>
      </Dialog>
    </VideoContext.Provider>
  );
};

export const useVideoModal = () => useContext(VideoContext);
