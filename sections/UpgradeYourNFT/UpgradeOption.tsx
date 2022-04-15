import React, { useEffect, useState } from 'react';

type UpgradeOptionProps = {
  onClick: () => void;
  selected: Boolean;
  title: string;
  itemsToUpgrade: number;
  options: string[];
}

const UpgradeOption = ({ onClick, selected, title, itemsToUpgrade, options }: UpgradeOptionProps) => {
  const [checkIcon, setCheckIcon] = useState("/img/check.svg");

  useEffect(() => {
    selected ? setCheckIcon("/img/check-hover.svg") : setCheckIcon("/img/check.svg");
  }, [selected])

  return (
    <div
      onMouseEnter={() => setCheckIcon("/img/check-hover.svg")}
      onMouseLeave={() => selected ? setCheckIcon("/img/check-hover.svg") : setCheckIcon("/img/check.svg")}
      onClick={onClick}
      className={`flex flex-col border-4 p-23px h-250px
        border-solid border-carbon
        ${selected ? "bg-carbon text-white" : "bg-white text-carbon"}
        cursor-pointer hover:bg-carbon hover:text-white
        desktop:mt-50px desctop:w-250px
        tablet:mt-50px tablet:w-300px
        mobile:mt-20px mobile:w-250px`}>
      <div className="flex">
        <p className="font-rblack text-70px leading-70px mr-6">{title[0]}</p>
        <p className="font-rblack text-20px align-top">{title.slice(1, title.length)}</p>
      </div>
      {
        options.map((option, idx) => (
          <div key={idx} className="flex flex-row items-start mb-6 mt-6">
            <img src={checkIcon} alt="check" className="mr-4 mt-4" />
            <p className="ml-6">{option}</p>
          </div>
        ))
      }
      <p className="mt-auto text-14px">{itemsToUpgrade} editions needed</p>
    </div >
  )
}

export default UpgradeOption;
