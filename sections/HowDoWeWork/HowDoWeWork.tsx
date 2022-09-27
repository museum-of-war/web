import Blurb from '@sections/AboutProject/Blurb';
import React from 'react';
import { data, TextData } from './constants';

export const HowDoWeWork: React.FC = () => {
  return (
    <div className="relative desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px pb-36px">
      <Blurb header="How we work" />

      <div className="relative mt-12px tablet:mt-64px grid gap-32px tablet:grid-cols-2 tablet:gap-48px">
        {data.map((block, index) => (
          <div key={index}>
            <h4 className="font-rblack text-27px leading-30px tablet:text-32px tablet:leading-24px ">
              {index + 1}
            </h4>
            <div className="mt-10px tablet:mt-24px grid gap-20px tablet:grid-cols-2 tablet:gap-48px">
              <TextBlock data={block.en} />
              <TextBlock data={block.ua} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TextBlock = ({ data }: { data: TextData }) => {
  const { text, list } = data;
  return (
    <div>
      <p className="whitespace-pre-wrap">{text}</p>
      {list ? (
        <ul className="list-disc list-inside">
          {list?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
