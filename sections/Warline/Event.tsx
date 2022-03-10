import React from "react";

type PropsEvent = {
  eventData: EventType;
};

const Event = ({ eventData }: PropsEvent) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between ">
        <p className="font-rblack text-32px">{eventData.time}</p>
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
  );
};

export default Event;
