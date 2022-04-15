import Button from "@components/Button";
import DropdownSelect, { SelectOption } from "@components/DropdownSelect";
import PriceRange from "@components/PriceRange";
import { useViewPort } from "@hooks/useViewport";
import { useState } from "react";
import TabletDrawer from "./TabletDrawer";

type ContentAuctionProps = {};

export const types: SelectOption[] = [
  { text: "On Sale", value: "On Sale" },
  { text: "Sold", value: "Sold" },
  { text: "All Types", value: "All Types" },
];

export const categories: SelectOption[] = [
  { text: "All Categories", value: "all" },
  { text: "Category 1", value: "1" },
  { text: "Category 2", value: "2" },
  { text: "Category 3", value: "3" },
  { text: "Category 4", value: "4" },
];

export const sortTypes: SelectOption[] = [
  { text: "Ending Soon", value: "Ending Soon" },
  { text: "Recently Added", value: "Recently Added" },
  { text: "Price: Low to High", value: "Price: Low to High" },
  { text: "Price: High to Low", value: "Price: High to Low" },
];

const FilterSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 16C5.34315 16 4 17.3431 4 19C4 20.6569 5.34315 22 7 22C8.65685 22 10 20.6569 10 19C10 17.3431 8.65685 16 7 16ZM7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44772 20 7 20C7.55228 20 8 19.5523 8 19C8 18.4477 7.55229 18 7 18Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 20C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18L7 18L3 18C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20L7 20L21 20ZM7 20C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18C7.55229 18 8 18.4477 8 19C8 19.5523 7.55229 20 7 20Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11L12 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L12 13L21 13ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 6C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4L7 4L3 4C2.44772 4 2 4.44771 2 5C2 5.55228 2.44772 6 3 6L7 6L21 6ZM7 6C6.44772 6 6 5.55228 6 5C6 4.44771 6.44772 4 7 4C7.55229 4 8 4.44771 8 5C8 5.55228 7.55229 6 7 6Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2C5.34315 2 4 3.34315 4 5C4 6.65685 5.34315 8 7 8C8.65685 8 10 6.65685 10 5C10 3.34315 8.65685 2 7 2ZM7 4C6.44772 4 6 4.44771 6 5C6 5.55228 6.44772 6 7 6C7.55228 6 8 5.55228 8 5C8 4.44772 7.55229 4 7 4Z"
      fill="white"
    />
  </svg>
);

const ContentAuction = ({}: ContentAuctionProps) => {
  const { isTablet } = useViewPort();

  const [selectedType, setSelectedType] = useState<string | undefined>(
    types[0]?.value
  );
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categories[0]?.value
  );
  const [selectedSort, selSelectedSort] = useState<string | undefined>(
    sortTypes[0]?.value
  );
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });

  const handleChangeType = (v?: string) => setSelectedType(v);
  const handleChangeCategory = (v?: string) => setSelectedCategory(v);
  const handleChangeSort = (v?: string) => selSelectedSort(v);
  const toggleDrawer = () => setOpen((state) => !state);
  const closeDrawer = () => setOpen(false);
  const openDrawer = () => setOpen(true);
  const handleChangeRange =
    (type: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue((state) => ({
        ...state,
        [type]: e.target.value,
      }));

  return (
    <>
      <div className="flex justify-between mt-72px">
        {!isTablet ? (
          <div className="flex -mx-10px mb-[57px]">
            <div className="px-10px">
              <PriceRange
                value={value}
                setValue={setValue}
                handleChange={handleChangeRange}
              />
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
        ) : (
          <Button
            mode="primary"
            label={
              <div className="flex align-center">
                <span className="mr-16px">Filters</span>
                <span>
                  <FilterSvg />
                </span>
              </div>
            }
            onClick={openDrawer}
          />
        )}
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
      <TabletDrawer
        toggleDrawer={toggleDrawer}
        closeDrawer={closeDrawer}
        isOpen={open}
        selectedType={selectedType}
        handleChangeType={handleChangeType}
        selectedCategory={selectedCategory}
        handleChangeCategory={handleChangeCategory}
        value={value}
        setValue={setValue}
        handleChangeRange={handleChangeRange}
      />
    </>
  );
};

export default ContentAuction;
