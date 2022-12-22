import React from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { description } from './constants';
import { FormFields, GoogleSheetsForm } from '@components/GoogleSheetsForm';

const FORM_FIELDS: FormFields = {
  '280977728': {
    order: 0,
    type: 'text',
    id: '280977728',
    name: 'Your Nickname in latin letters',
    label: 'Your Nickname in latin letters',
    placeholder: 'e.g. Andy Warhol',
    sendToAnalytics: true,
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

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwJxde9qJVzvkbIOrbhTxfpzfwBRdPexv5SWG6MNPqe28WhOOxp3RxJACfztlyCY7AH/exec';

export const ForArtists: React.FC = () => {
  return (
    <div className="relative desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px pb-36px">
      <Blurb header="For artists" />

      <div className="relative mt-32 tablet:mt-40px grid gap-40px tablet:grid-cols-2 tablet:gap-48px">
        <GoogleSheetsForm
          formFields={FORM_FIELDS}
          scriptUrl={SCRIPT_URL}
          buttonLabel="Apply"
          analyticsContext={{ category: 'artists_form' }}
        />

        <div>
          <p className="whitespace-pre-wrap">{description.en}</p>
          <p className="whitespace-pre-wrap pt-48px">{description.ua}</p>
        </div>
      </div>
    </div>
  );
};
