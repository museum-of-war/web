import { useEffect, useMemo, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Button from '@components/Button';
import DropdownSelect from '@components/DropdownSelect';
import NftCard from '@components/NftCard';
import PriceRange from '@components/PriceRange';
import { useViewPort } from '@hooks/useViewport';
import TabletDrawer from './TabletDrawer';
import AuctionData from '@sections/Auction/AuctionData';
import {
  FilterSvg,
  OptionType,
  OptionSortType,
  OptionCategoriesValues,
  OptionCategory,
} from './cosntants';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useAppRouter } from '@hooks/useAppRouter';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import { AuctionCollection } from '@sections/types';

const SCROLL_BUFFER_ITEMS = 10;

type ContentAuctionProps = {
  collection?: AuctionCollection;
};

const ContentAuction = ({ collection }: ContentAuctionProps) => {
  const { isTablet, isMobile, isDesktop } = useViewPort();
  const [data, setData] = useState<any[]>(
    AuctionData.filter((d) =>
      collection ? d.category === collection : true,
    ).map((datum) => ({
      ...AuctionCollectionData[datum.category],
      ...datum,
    })),
  );
  const [isCollection, setIsCollection] = useState<boolean>(false);
  const { getAuctionInfo } = useWeb3Modal();
  const { push } = useAppRouter();

  useEffect(() => {
    setIsCollection(!!collection);
    setSelectedCategory(
      collection ?? OptionCategoriesValues[OptionCategory.All],
    );
  }, [collection]);

  useEffect(() => {
    const getEnrichedData = async () => {
      const filteredData = AuctionData.filter((d) =>
        collection ? d.category === collection : true,
      );
      try {
        const response = await Promise.all(
          filteredData.map((datum) => {
            return AuctionCollectionData[datum.category].contractAddress
              ? getAuctionInfo(
                  AuctionCollectionData[datum.category].contractAddress,
                  datum.tokenId,
                  AuctionCollectionData[datum.category].version,
                  datum.externalBid,
                )
              : {};
          }),
        );

        setData(
          response.map((datum, index) => ({
            ...AuctionCollectionData[filteredData[index]!.category],
            ...filteredData[index],
            ...datum,
          })),
        );
      } catch (error) {
        console.error(error);
      }
    };

    getEnrichedData();
  }, [collection]);

  const [open, setOpen] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string | undefined>(
    OptionType.All,
  );
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    OptionCategoriesValues[OptionCategory.All],
  );
  const [selectedSort, selSelectedSort] = useState<string | undefined>(
    OptionSortType.EndingSoon,
  );
  const [priceRange, setPriceRange] = useState<{ from: string; to: string }>({
    from: '',
    to: '',
  });

  const filteredData = useMemo(() => {
    let result = data;

    if (data.length === 0) return [];

    if (selectedCategory !== OptionCategoriesValues[OptionCategory.All]) {
      result = result.filter((datum) => datum.category === selectedCategory);
    }

    if (selectedType === OptionType.ComingSoon) {
      result = result.filter((datum) => !datum.fullInfo);
    } else if (
      selectedType === OptionType.OnSale ||
      selectedType === OptionType.Sold
    ) {
      result = result.filter((datum) => {
        const isOnSale = datum.fullInfo
          ? !datum.isSold
          : new Date() <= datum.endsIn;
        if (selectedType === OptionType.OnSale) return isOnSale;
        else return !isOnSale;
      });
    } else if (selectedType === OptionType.WithoutBids) {
      result = result.filter((datum) =>
        typeof datum?.hasBid !== 'undefined' ? !datum.hasBid : true,
      );
    }

    if (priceRange.from !== '') {
      result = result.filter((datum) => +datum.bid >= +priceRange.from);
    }

    if (priceRange.to !== '') {
      result = result.filter((datum) => +datum.bid <= +priceRange.to);
    }

    if (selectedSort === OptionSortType.EndingSoon) {
      result = result.sort((datumA, datumB) =>
        new Date(datumA.endsIn) > new Date(datumB.endsIn) ? -1 : 1,
      );
    } else if (selectedSort === OptionSortType.RecentlyAdded) {
      result = result.sort((datumA, datumB) =>
        new Date(datumA.startsAt) > new Date(datumB.startsAt) ? -1 : 1,
      );
    } else if (selectedSort === OptionSortType.LowToHigh) {
      result = result.sort((datumA, datumB) =>
        +datumA.bid < +datumB.bid ? -1 : 1,
      );
    } else if (selectedSort === OptionSortType.HighToLow) {
      result = result.sort((datumA, datumB) =>
        +datumA.bid > +datumB.bid ? -1 : 1,
      );
    }

    return result;
  }, [data, selectedType, selectedCategory, priceRange, selectedSort]);

  const [itemsShown, setItemsShown] = useState(SCROLL_BUFFER_ITEMS);

  const handleChangeType = (v?: string) => setSelectedType(v);
  const handleChangeCategory = (v?: string) => {
    push(`/auction/collection/${v}`);
    setSelectedCategory(v);
  };
  const handleChangeSort = (v?: string) => selSelectedSort(v);
  const toggleDrawer = () => setOpen((state) => !state);
  const closeDrawer = () => setOpen(false);
  const openDrawer = () => setOpen(true);

  const getItemStyle = (index: number) => {
    const result: React.CSSProperties = {};

    if (isDesktop) {
      if (index < 2 || isCollection) {
        result.width = 'calc((100% - 48px) / 2)';
      } else {
        result.width = 'calc((100% - 144px) / 4)';
      }
      if (index === 0) {
        result.marginRight = 48;
      } else if (isCollection) {
        result.marginRight = (index - 1) % 2 ? 48 : 0;
      } else {
        result.marginRight = (index - 1) % 4 ? 48 : 0;
      }

      result.marginTop = 72;

      return result;
    }

    if (isTablet) {
      if (index === 0) {
        result.width = '100%';
        result.marginRight = 0;
      } else {
        result.width = 'calc((99% - 48px) / 2)';
        result.marginRight = index % 2 ? 48 : 0;
      }

      result.marginTop = 72;

      return result;
    }

    result.width = '100%';
    result.marginRight = 0;
    result.marginTop = 30;

    return result;
  };

  return (
    <>
      <div className="flex justify-between desktop:mt-[0px] tablet:mt-72px mobile:mt-[24px]">
        {!isTablet && !isMobile ? (
          <div className="flex tablet:mb-[57px] desktop:mb-0">
            <div className="pr-20px">
              <PriceRange value={priceRange} setValue={setPriceRange} />
            </div>
            <div className="px-20px">
              <DropdownSelect
                options={Object.values(OptionType).map((value) => ({
                  text: value,
                  value,
                }))}
                selectedValue={selectedType}
                onChange={handleChangeType}
                className="min-w-[200px]"
              />
            </div>
            {isCollection ? null : (
              <div className="px-20px">
                <DropdownSelect
                  options={Object.values(OptionCategory).map((value) => ({
                    text: value,
                    value: OptionCategoriesValues[value],
                  }))}
                  selectedValue={selectedCategory}
                  onChange={handleChangeCategory}
                />
              </div>
            )}
          </div>
        ) : (
          <Button
            mode="primary"
            label={
              <div className="flex items-center justify-between">
                <span className="mr-16px">
                  {isMobile ? 'Filters and Sorting' : 'Filters'}
                </span>
                <span>
                  <FilterSvg />
                </span>
              </div>
            }
            onClick={openDrawer}
            className={isMobile ? 'mobile:w-full h-48px' : ''}
          />
        )}
        {!isMobile && (
          <DropdownSelect
            options={Object.values(OptionSortType).map((value) => ({
              text: value,
              value,
            }))}
            selectedValue={selectedSort}
            onChange={handleChangeSort}
            className="w-[236px]"
          />
        )}
      </div>
      <div className="flex flex-wrap">
        {filteredData.map(
          (item, index) =>
            index < itemsShown && (
              <InView
                as="div"
                onChange={(inView) =>
                  inView &&
                  setItemsShown((itemsShown) =>
                    Math.max(itemsShown, index + SCROLL_BUFFER_ITEMS + 1),
                  )
                }
                className={`mobile:px-24px tablet:px-0 desktop:px-0 ${
                  isDesktop ? 'zoom-hover' : ''
                }`}
                key={item.index}
                style={getItemStyle(index)}
              >
                <NftCard
                  breakpoints={[
                    {
                      lowerBound: 'tablet',
                      ratio: index >= 1 ? 0.5 : 1,
                    },
                    {
                      lowerBound: 'desktop',
                      ratio: index >= 2 && !isCollection ? 0.25 : 0.5,
                    },
                  ]}
                  orderIndex={index}
                  index={item.index}
                  imageSrc={item.imageSrc}
                  animationSrc={item.animationSrc}
                  name={item.name}
                  startsAt={item.startsAt}
                  endsIn={item.endsIn}
                  contractAddress={item.contractAddress}
                  tokenId={item.tokenId}
                  isSale={item.isSale}
                  isCollection={isCollection}
                  version={item.version}
                  externalBid={item.externalBid}
                />
              </InView>
            ),
        )}
      </div>
      {filteredData.length > itemsShown && (
        <p className="text-center text-24px font-bold">Loading...</p>
      )}
      {(isTablet || isMobile) && (
        <TabletDrawer
          toggleDrawer={toggleDrawer}
          closeDrawer={closeDrawer}
          isOpen={open}
          selectedType={selectedType}
          handleChangeType={handleChangeType}
          selectedCategory={selectedCategory}
          handleChangeCategory={handleChangeCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          isCollection={isCollection}
        />
      )}
    </>
  );
};

export default ContentAuction;
