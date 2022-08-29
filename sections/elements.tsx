import React from 'react';

export const RoundLogo = ({ size, src }: { size: number; src?: string }) =>
  src ? (
    <div
      className="border-4 border-white bg-carbon"
      style={{
        width: size + 8,
        height: size + 8,
        borderRadius: '50%',
        top: -size / 2,
        left: 0,
        right: 0,
        margin: 'auto',
        position: 'absolute',
      }}
    >
      <img
        src={src}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
        }}
      />
    </div>
  ) : null;
