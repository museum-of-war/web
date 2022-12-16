import React, { Fragment, useCallback, useMemo, useRef, useState } from 'react';
import ReactGA from 'react-ga4';
import Image from 'next/image';
import Blurb from '@sections/AboutProject/Blurb';
import { description } from './constants';
import { isValidURL } from '@utils/url';

interface FormField {
  order: number;
  id: string;
  name: string;
  label: string;
  type: 'checkbox' | 'text' | 'url';
}

interface TextField extends FormField {
  type: 'text' | 'url';
  placeholder: string;
}

interface CheckBoxField extends FormField {
  type: 'checkbox';
  valueToSend: string;
}

const FORM_FIELDS: { [id: string]: TextField | CheckBoxField } = {
  '280977728': {
    order: 0,
    type: 'text',
    id: '280977728',
    name: 'Your Nickname in latin letters',
    label: 'Your Nickname in latin letters',
    placeholder: 'e.g. Andy Warhol',
  },
  '1695571578': {
    order: 1,
    type: 'url',
    id: '1695571578',
    name: 'Link on your portfolio',
    label: 'Link on your portfolio',
    placeholder: 'Paste a link',
  },
  '177827027': {
    order: 2,
    type: 'text',
    id: '177827027',
    name: 'How to contact you',
    label: 'How to contact you',
    placeholder: 'Enter you Telegram nickname or paste a link',
  },
  '392897183': {
    order: 3,
    type: 'checkbox',
    id: '392897183',
    name: 'Are you ready to create an artwork in 3 days?',
    label: "I'm ready to create an artwork in 3 days",
    valueToSend: "I'm ready to create an artwork in 3 days",
  },
};

// HOWTO: https://github.com/levinunnink/html-form-to-google-sheet
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwJxde9qJVzvkbIOrbhTxfpzfwBRdPexv5SWG6MNPqe28WhOOxp3RxJACfztlyCY7AH/exec';

export const ForArtists: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [inputs, setInputs] = useState<{
    [fieldId: string]: string | boolean;
  }>({});

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const data = new FormData();

      Object.entries(inputs).map(([id, value]) => {
        if (FORM_FIELDS[id]?.type !== 'checkbox' || value) {
          const adjustedValue =
            FORM_FIELDS[id]?.type === 'checkbox' && value
              ? (FORM_FIELDS[id] as CheckBoxField).valueToSend
              : value.toString();
          data.append(FORM_FIELDS[id]!.name, adjustedValue);
        }
      });

      ReactGA.send({
        category: 'artists_form',
        action: 'submit',
        label: inputs['280977728'],
      });

      try {
        setLoading(true);
        await fetch(SCRIPT_URL, { method: 'POST', body: data });
        setInputs({});
        alert('Your data has been successfully saved!\nThank you!');
      } catch (e) {
        alert('Sorry! Something went wrong.');
      } finally {
        setLoading(false);
      }
    },
    [inputs],
  );

  const hasError: {
    [fieldId: string]: string | boolean;
  } = useMemo(() => {
    return Object.values(FORM_FIELDS).reduce((aggr, field) => {
      if (
        (field.type === 'text' && !inputs[field.id]?.toString().trim()) ||
        (field.type === 'url' && !isValidURL(inputs[field.id]?.toString()))
      ) {
        return {
          ...aggr,
          [field.id]: true,
        };
      }

      return aggr;
    }, {});
  }, [inputs]);

  return (
    <div className="relative desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px pb-36px">
      <Blurb header="For artists" />

      <div className="relative mt-32 tablet:mt-40px grid gap-40px tablet:grid-cols-2 tablet:gap-48px">
        <form
          onSubmit={onSubmit}
          className="grid gap-16px tablet:gap-24px relative"
        >
          {Object.values(FORM_FIELDS)
            .sort((a, b) => a.order - b.order)
            .map((field) => (
              <Fragment key={field.id}>
                {['text', 'url'].includes(field.type) ? (
                  <label key={field.id} htmlFor={field.id}>
                    <span className="font-rlight text-12px leading-30px tablet:text-14px tablet:leading-48px">
                      {field.label}
                    </span>
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      className={`w-full font-rblack text-16px bg-beige border-4 box-border focus:border-black ${
                        inputs[field.id] !== undefined && hasError[field.id]
                          ? 'border-red-500'
                          : ''
                      } invalid:border-red-500 rounded-[24px] leading-[40px] px-20px tablet:px-24px transition-all duration-1500 outline-none search-input `}
                      placeholder={(field as TextField).placeholder}
                      value={inputs[field.id]?.toString() ?? ''}
                      onChange={({ target: { value } }) => {
                        setInputs({
                          ...inputs,
                          [field.id]: value.replace(/[\u0250-\ue007]/g, ''),
                        });
                      }}
                    />
                  </label>
                ) : null}

                {field.type === 'checkbox' ? (
                  <label
                    key={field.id}
                    htmlFor={field.id}
                    className="flex items-center"
                  >
                    <input
                      id={field.id}
                      name={field.name}
                      className="border-carbon border-2 rounded-[8px] h-32px w-32px accent-carbon"
                      type="checkbox"
                      checked={Boolean(inputs[field.id])}
                      onChange={({ target: { checked } }) => {
                        setInputs({
                          ...inputs,
                          [field.id]: checked,
                        });
                      }}
                    />
                    <span className="ml-16px text-14px leading-20px tablet:text-16px tablet:leading-48px">
                      {field.label}
                    </span>
                  </label>
                ) : null}
              </Fragment>
            ))}
          <button
            className="font-rblack text-16px bg-carbon text-white rounded-full mt-20px px-15px py-18px disabled:opacity-70"
            onClick={onSubmit}
            disabled={!!Object.keys(hasError).length}
          >
            Apply
          </button>

          {isLoading && (
            <div className="absolute inset-0 bg-white opacity-70 flex items-center justify-center">
              <Image
                alt="Loading..."
                className="animate-pulse"
                src="/img/dots-3.png"
                layout="intrinsic"
                width={72}
                height={72}
              />
            </div>
          )}
        </form>
        <div>
          <p className="whitespace-pre-wrap">{description.en}</p>
          <p className="whitespace-pre-wrap pt-48px">{description.ua}</p>
        </div>
      </div>
    </div>
  );
};
