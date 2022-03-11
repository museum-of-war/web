import React from "react";

type PropsEvent = {
  eventData: EventType;
};

const Event = ({ eventData }: PropsEvent) => {
  return (
    <div className="flex flex-row items-top mb-50px">
      <img
        alt="Logo"
        src={eventData.imageUrl}
        className="w-20vw h-20vw mr-10%"
      />
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              {eventData.time}
            </p>
            <p className="font-rlight">#000{eventData.tokenId}</p>
          </div>
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
        <p className="font-rblack ">See Details</p>
      </div>
    </div>
  );
};

export default Event;
