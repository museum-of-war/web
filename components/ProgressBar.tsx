type ProgressBarProps = {
  progress: number;
};

const WIDTH = 100;
const HEIGHT = 8;
const BORDER_RADIUS = 6;

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      style={
        {
          mixBlendMode: 'plus-lighter', // This value is not yet supported by Tailwind or typing
        } as any
      }
    >
      <div
        className={`relative border border-white box-content border-opacity-75`}
        style={{
          width: WIDTH,
          height: HEIGHT,
          borderRadius: BORDER_RADIUS,
        }}
      >
        <div
          className={`absolute top-0 left-0 bottom-0 overflow-hidden`}
          style={{
            width: `${Math.round(progress * 100)}%`,
          }}
        >
          <div
            className={`absolute top-0 bottom-0 bg-white opacity-75`}
            style={{
              width: WIDTH,
              borderRadius: BORDER_RADIUS,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
