import React from "react";
import { useViewPort } from "@hooks/useViewport";
import { EventType } from "@sections/types";
import { VscChromeClose } from "react-icons/vsc";

type PropsPopup = {
  eventData: EventType;
  dayNo: number;
  date: string;
};

const Popup = ({ eventData, dayNo, date }: PropsPopup) => {
  const { isMobile, isTablet } = useViewPort();

  return isMobile ? (
    <div className="flex flex-col items-top mb-60px">
      <img alt="Logo" src={eventData.imageUrl} className="w-100%" />
      <div className="mt-20px flex flex-col justify-between">
        <div>
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              {eventData.time}
            </p>
            <p className="font-rlight">#000{eventData.tokenId}</p>
          </div>
          <p className="font-rnarrow pt-15px"> {eventData.description}</p>
          <div className="flex flex-row items-center justify-between pt-5px">
            <p className="font-rlight ">{eventData.username}</p>
            <img
              alt="Logo"
              src={"img/warline-TwitterLogo.png"}
              className="w-50px"
            />
          </div>
        </div>
        <p className="font-rblack mt-15px ">See Details</p>
      </div>
    </div>
  ) : isTablet ? (
    <div>
      <div className="absolute z-10 w-screen90% min-h-screen90% bg-white top-5% left-5%  flex flex-row px-7% py-10%	">
        <VscChromeClose size={25} className="absolute right-20px top-20px" />
        <div className="w-100%">
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {dayNo}, {eventData.time}
            </p>
            <p className="font-rlight text-24px">#000{eventData.tokenId}</p>
          </div>
          <div className="flex flex-row items-center justify-between pt-30px ">
            <div>
              <p className="font-rlight text-16px">Author</p>
              <p className="pt-5px font-rnarrow text-18px">Nickname</p>
            </div>
            <div className="pr-10%">
              <p className="font-rlight text-16px ">Owner</p>
              <p className="pt-5px font-rnarrow text-18px">
                0x4EFesagas12...0x4E
              </p>
            </div>
          </div>
          <img
            alt="Logo"
            src={eventData.imageUrl}
            className="w-100% mt-10%"
            // max-w-400px max-h-400px
          />
          <div className="bg-beige px-3% py-2% mt-8%">
            <p className="font-rnarrow pt-15px"> {eventData.description}</p>
            <div className="flex flex-row items-center justify-between pt-15px">
              <p className="font-rlight ">{eventData.username}</p>
              <img
                alt="Logo"
                src={"img/warline-TwitterLogo.png"}
                className="w-50px"
              />
            </div>
          </div>
          <p className="font-rlight text-24px mt-8%">Description</p>
          <p className="pt-2% font-rnarrow text-18px">
            To preserve the memory of the real events of that time, to spread
            truthful information among the digital community and in the world
            and to collect donations for the support of Ukraine.
          </p>
          <p className="pt-2% font-rnarrow text-18px">
            Зберегти пам'ять про реальні події цього часу, розповсюдити правдиву
            інформацію серед діджитал-спільноти та й у світі та зібрати
            благодійні внески на підтримку України.
          </p>
        </div>
      </div>

      <div className=" fixed w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70	"></div>
    </div>
  ) : (
    <div>
      <div className="absolute z-10 w-screen90% min-h-screen90% bg-white top-5% left-5%  flex flex-row px-5% py-3%	">
        <VscChromeClose size={25} className="absolute right-20px top-20px" />
        <div className="w-35%">
          <img
            alt="Logo"
            src={eventData.imageUrl}
            className="w-90% pr-5%"
            // max-w-400px max-h-400px
          />
        </div>
        <div className="w-65%">
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {dayNo}, {eventData.time}
            </p>
            <p className="font-rlight text-24px">#000{eventData.tokenId}</p>
          </div>
          <div className="flex flex-row items-center justify-between pt-30px ">
            <div>
              <p className="font-rlight text-16px">Author</p>
              <p className="pt-5px font-rnarrow text-18px">Nickname</p>
            </div>
            <div className="pr-10%">
              <p className="font-rlight text-16px ">Owner</p>
              <p className="pt-5px font-rnarrow text-18px">
                0x4EFesagas12...0x4E
              </p>
            </div>
          </div>

          <div className="bg-beige px-3% py-2% mt-5%">
            <p className="font-rnarrow pt-15px"> {eventData.description}</p>
            <div className="flex flex-row items-center justify-between pt-15px">
              <p className="font-rlight ">{eventData.username}</p>
              <img
                alt="Logo"
                src={"img/warline-TwitterLogo.png"}
                className="w-50px"
              />
            </div>
          </div>
          <p className="font-rlight text-24px mt-5%">Description</p>
          <p className="pt-2% font-rnarrow text-18px">
            To preserve the memory of the real events of that time, to spread
            truthful information among the digital community and in the world
            and to collect donations for the support of Ukraine.
          </p>
          <p className="pt-2% font-rnarrow text-18px">
            Зберегти пам'ять про реальні події цього часу, розповсюдити правдиву
            інформацію серед діджитал-спільноти та й у світі та зібрати
            благодійні внески на підтримку України.
          </p>
        </div>
      </div>

      <div className=" fixed w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70	"></div>
    </div>
  );
};

export default Popup;
