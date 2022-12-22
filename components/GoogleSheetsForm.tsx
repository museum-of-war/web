import React, { Fragment, useCallback, useMemo, useState } from 'react';
import ReactGA from 'react-ga4';
import Image from 'next/image';
import { isValidURL } from '@utils/url';
import { AnalyticsContext } from 'types';

export interface FormField {
  order: number;
  id: string;
  name: string;
  label: string;
  type: 'checkbox' | 'text' | 'url';
  sendToAnalytics?: boolean;
}

export interface TextField extends FormField {
  type: 'text' | 'url';
  placeholder: string;
}

export interface CheckBoxField extends FormField {
  type: 'checkbox';
  valueToSend: string;
}

export type FormFields = Record<string, TextField | CheckBoxField>;

interface GoogleSheetsFormProps {
  formFields: FormFields;
  // HOWTO: https://github.com/levinunnink/html-form-to-google-sheet
  scriptUrl: string;
  buttonLabel: string;
  analyticsContext: AnalyticsContext;
}

export const GoogleSheetsForm = ({
  formFields,
  scriptUrl,
  buttonLabel,
  analyticsContext,
}: GoogleSheetsFormProps) => {
  const [isLoading, setLoading] = useState(false);
  const [inputs, setInputs] = useState<{
    [fieldId: string]: string | boolean;
  }>({});

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const data = new FormData();
      const analyticsData: string[] = [];

      Object.entries(inputs).map(([id, value]) => {
        if (formFields[id]?.type !== 'checkbox' || value) {
          const adjustedValue =
            formFields[id]?.type === 'checkbox' && value
              ? (formFields[id] as CheckBoxField).valueToSend
              : value.toString();
          if (formFields[id]?.sendToAnalytics) {
            analyticsData.push(String(value));
          }
          data.append(formFields[id]!.name, adjustedValue);
        }
      });

      ReactGA.send({
        category: analyticsContext.category,
        action: 'submit',
        label: analyticsData.join('_'),
      });

      try {
        setLoading(true);
        await fetch(scriptUrl, { method: 'POST', body: data });
        setInputs({});
        alert('Your data has been successfully saved!\nThank you!');
      } catch (e) {
        alert('Sorry! Something went wrong.');
      } finally {
        setLoading(false);
      }
    },
    [analyticsContext.category, formFields, inputs, scriptUrl],
  );

  const hasError: {
    [fieldId: string]: string | boolean;
  } = useMemo(() => {
    return Object.values(formFields).reduce((aggregated, field) => {
      if (
        (field.type === 'text' && !inputs[field.id]?.toString().trim()) ||
        (field.type === 'url' && !isValidURL(inputs[field.id]?.toString()))
      ) {
        return {
          ...aggregated,
          [field.id]: true,
        };
      }

      return aggregated;
    }, {});
  }, [formFields, inputs]);

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-16px tablet:gap-24px relative"
    >
      {Object.values(formFields)
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
        {buttonLabel}
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
  );
};
