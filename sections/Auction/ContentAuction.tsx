import DropdownSelect, { SelectOption } from "@components/DropdownSelect";
import PriceRange from "@components/PriceRange";
import { useState } from "react";

type ContentAuctionProps = {};

const types: SelectOption[] = [
  { text: "On Sale", value: "On Sale" },
  { text: "Sold", value: "Sold" },
  { text: "All Types", value: "All Types" },
];

const categories: SelectOption[] = [
  { text: "All Categories", value: "all" },
  { text: "Category 1", value: "1" },
  { text: "Category 2", value: "2" },
  { text: "Category 3", value: "3" },
  { text: "Category 4", value: "4" },
];

const sortTypes: SelectOption[] = [
  { text: "Ending Soon", value: "Ending Soon" },
  { text: "Recently Added", value: "Recently Added" },
  { text: "Price: Low to High", value: "Price: Low to High" },
  { text: "Price: High to Low", value: "Price: High to Low" },
];

const ContentAuction = ({}: ContentAuctionProps) => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    types[0]?.value
  );
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categories[0]?.value
  );
  const [selectedSort, selSelectedSort] = useState<string | undefined>(
    sortTypes[0]?.value
  );

  const handleChangeType = (v?: string) => setSelectedType(v);
  const handleChangeCategory = (v?: string) => setSelectedCategory(v);
  const handleChangeSort = (v?: string) => selSelectedSort(v);

  return (
    <>
      <div className="flex justify-between mt-72px">
        <div className="flex -mx-10px mb-[57px]">
          <div className="px-10px">
            <PriceRange />
          </div>
          <div className="px-20px">
            <DropdownSelect
              options={types}
              selectedValue={selectedType}
              onChange={handleChangeType}
              className="w-[162px]"
            />
          </div>
          <div className="px-20px">
            <DropdownSelect
              options={categories}
              selectedValue={selectedCategory}
              onChange={handleChangeCategory}
              className="w-[211px]"
            />
          </div>
        </div>
        <DropdownSelect
          options={sortTypes}
          selectedValue={selectedSort}
          onChange={handleChangeSort}
          className="w-[236px]"
        />
      </div>
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
              <img
                alt="Dots"
                src="img/img-big.jpg"
                className="w-100% h-544px"
              />
              <h3 className="font-black text-20px leading-240%">NFT’s name</h3>
              <div className="flex justify-between">
                <div>
                  <p className="text-12px leading-100% opacity-70">
                    Current bid
                  </p>
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
    </>
  );
};

export default ContentAuction;
