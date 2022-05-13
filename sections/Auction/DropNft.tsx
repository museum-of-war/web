import Button from '@components/Button';
import { useViewPort } from '@hooks/useViewport';

type DropNftProps = {
  desc: string;
  buttonLabel: string;
  className?: string;
  handleClick: () => void;
};

const DropNft = ({
  className,
  desc,
  buttonLabel,
  handleClick,
}: DropNftProps) => {
  const { isMobile } = useViewPort();

  return (
    <div className={`text-center ${className} font-rlight`}>
      <p className="font-rblack tablet:text-32px mobile:text-27px tablet:mb-24px mobile:mb-20px">
        That’s it...
      </p>
      <p className="tablet:text-16px mobile:text-14px leading-150% desktop:w-[40%] mobile:w-full my-0 mx-[auto]">
        {desc}
      </p>
      <Button
        mode="custom"
        label={buttonLabel}
        onClick={handleClick}
        className={`bg-white text-carbon tablet:mt-48px mobile:mt-36px ${
          isMobile && 'w-full'
        }`}
      />
    </div>
  );
};

export default DropNft;
