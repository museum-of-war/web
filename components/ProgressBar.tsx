type ProgressBarProps = {
  progress: number;
};

const WIDTH = 40;
const HEIGHT = 10;
const PADDING = 8;
const BORDER_RADIUS = 6;

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className="absolute top-0 left-0 pointer-events-none bg-black bg-opacity-50"
      style={{
        padding: PADDING,
        borderBottomRightRadius: BORDER_RADIUS,
      }}
    >
      <div
        className="relative"
        style={{
          width: WIDTH,
          height: HEIGHT,
        }}
      >
        <div
          className="absolute top-0 left-0 bottom-0 right-0 border border-white box-border"
          style={{
            borderRadius: BORDER_RADIUS,
          }}
        />
        <div
          className="absolute top-0 left-0 bottom-0 overflow-hidden"
          style={{
            width: `${Math.round(progress * 100)}%`,
          }}
        >
          <div
            className="absolute top-0 bottom-0 bg-white border border-transparent box-border bg-clip-padding"
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
