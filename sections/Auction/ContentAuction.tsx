type ContentAuctionProps = {};

const ContentAuction = ({}: ContentAuctionProps) => {
  return (
    <div className="flex flex-wrap -mx-24px">
      {[1, 2, 3, 4, 5, 6].map((i, index) => (
        <div
          className={`${
            index === 0 || index === 1 ? "laptop:w-1/2" : "laptop:w-1/4"
          } ${
            index === 0 ? "tablet:w-full" : "tablet:w-1/2"
          } mobile:w-full flex flex-col p-14px`}
          key={i}
        >
          <div className="p-10px hover:border-4 hover:border-white hover:border-solid hover:cursor-pointer">
            <img alt="Dots" src="img/img-big.jpg" className="w-100% h-544px" />
            <h3 className="font-black text-20px leading-240%">NFT’s name</h3>
            <div className="flex justify-between">
              <div>
                <p className="text-12px leading-100% opacity-70">Current bid</p>
                <p className="tablet:text-16px mobile:text-14px leading-150%">
                  0.15 ETH
                </p>
              </div>
              <div>
                <p className="text-12px leading-100% opacity-70">Ends in</p>
                <p className="tablet:text-16px mobile:text-14px leading-150%">
                  13h 45m 20s
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentAuction;
