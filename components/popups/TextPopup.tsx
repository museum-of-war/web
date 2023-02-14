import Button from '@components/Button';
import { usePopup } from '@providers/PopupProvider';
import { VscChromeClose } from 'react-icons/vsc';
import { TranslatedString } from 'types';

interface TextPopupProps {
  text: TranslatedString;
  buttons?: {
    label: string;
    onClick: () => void;
  }[];
}

export const TextPopup = ({ text, buttons }: TextPopupProps) => {
  const { hidePopup } = usePopup();

  return (
    <div
      className="fixed z-10 w-screen100% h-screen100% top-0 left-0 flex items-center justify-evenly"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        hidePopup();
      }}
    >
      <div
        className="z-100 desktop:h-auto tablet:h-auto mobile:h-100% relative desktop:w-[640px] tablet:w-544px mobile:w-100%
                    desktop:px-72px tablet:px-72px desktop:py-72px tablet:py-72px mobile:px-24px
                    mobile:py-24px overflow-auto bg-white"
      >
        <button className="absolute right-20px top-20px" onClick={hidePopup}>
          <VscChromeClose size={25} />
        </button>

        <div className="mt-24px flex flex-col tablet:flex-row gap-24px">
          <p className="font-rlight text-16px">{text.en}</p>
          <p className="font-rlight text-16px">{text.uk}</p>
        </div>

        {buttons?.length && (
          <div className="mt-24px flex flex-wrap gap-16px">
            {buttons.map(({ label, onClick }) => (
              <Button
                mode="secondary"
                key={label}
                onClick={onClick}
                label={label}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
