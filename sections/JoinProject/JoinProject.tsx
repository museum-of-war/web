import { FormFields, GoogleSheetsForm } from '@components/GoogleSheetsForm';
import { usePopup } from '@providers/PopupProvider';
import Ambassadors from '@sections/AboutProject/Ambassadors';
import Blurb from '@sections/AboutProject/Blurb';
import { openInNewTab } from '@sections/utils';
import { useRouter } from 'next/router';
import { useCallback, useRef } from 'react';
import {
  Details,
  intro,
  opportunities,
  ourResults,
  projectsWeSupport,
  whoHelpsUs,
} from './constants';

const FORM_FIELDS: FormFields = {
  '2809757728': {
    order: 0,
    type: 'text',
    id: '2809757728',
    name: 'Your name in latin letters',
    label: 'Your name in latin letters',
    placeholder: 'e.g. Andy Warhol',
    sendToAnalytics: true,
  },
  '1778247027': {
    order: 1,
    type: 'text',
    id: '1778247027',
    name: 'How to contact you',
    label: 'How to contact you',
    placeholder: 'Enter you Telegram nickname or paste a link',
  },
  '1778270227': {
    order: 2,
    type: 'text',
    id: '1778270227',
    name: 'Subject',
    label: 'Subject',
    placeholder: 'Sponsorship',
  },
  '1778270327': {
    order: 3,
    type: 'text',
    id: '1778270327',
    name: 'Message',
    label: 'Message',
    placeholder: 'Write your message here',
  },
};

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwHgeGn0SLJ0T4AkWAEreZvlmf0jiIR6t6pmKuGqf0lYfUsiN5QnIFWTpQkIyhWy0I5HQ/exec';

export const JoinProject: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { showPopup, hidePopup } = usePopup();

  const scrollToForm = useCallback(() => {
    console.log('scrollToForm');
    formRef.current?.scrollIntoView();
  }, []);

  const onOpenDetails = useCallback(
    (details: Details) => {
      showPopup('text', {
        text: details.description,
        buttons: details.links?.map((link) => {
          return {
            label: link.label,
            onClick: () => {
              if (link.url) {
                if (link.url.startsWith('http')) {
                  openInNewTab(link.url);
                } else {
                  hidePopup();
                  router.push(link.url);
                }
              } else if (link.action === 'open_form') {
                hidePopup();
                scrollToForm();
              }
            },
          };
        }),
      });
    },
    [hidePopup, router, scrollToForm, showPopup],
  );

  return (
    <div className="desktop:container mx-auto px-24px tablet:px-72px desktop:px-132px">
      <Blurb english={intro.en} ukrainian={intro.uk} />

      <Blurb
        classNames="mt-40px tablet:mt-48px"
        header="We invite you to join our project"
      />

      <div className="mt-12px tablet:mt-32px grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-16px tablet:gap-32px">
        {opportunities.map((opportunity, index) => (
          <button
            key={index}
            className="py-24px px-16px border-4 border-carbon tablet:border-transparent text-left hover:border-carbon hover:cursor-pointer"
            onClick={() => onOpenDetails(opportunity.details)}
          >
            <span className="font-rblack text-27px leading-30px tablet:text-32px tablet:leading-24px ">
              {index + 1}
            </span>
            <div className="mt-10px tablet:mt-24px grid gap-20px tablet:grid-cols-2 tablet:gap-32px">
              <div>
                <h4 className="font-rblack text-20px">
                  {opportunity.title.en}
                </h4>
                <p className="mt-2 tablet:mt-4">{opportunity.description.en}</p>
              </div>
              <div>
                <h4 className="font-rblack text-20px">
                  {opportunity.title.uk}
                </h4>
                <p className="mt-2 tablet:mt-4">{opportunity.description.uk}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Blurb
        classNames="mt-60px tablet:mt-[120px]"
        header="Your help is important"
        english={ourResults.en}
        ukrainian={ourResults.uk}
      />

      <div className="mt-24px flex flex-col tablet:flex-row gap-32px tablet:gap-56px tablet:items-center">
        {projectsWeSupport.map((partner, idx) => (
          <a
            key={idx}
            className="new_md:grayscale new_md:hover:grayscale-0 transition-all duration-300 ease-in"
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-h-[80px] max-w-[240px]"
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
            />
          </a>
        ))}
      </div>

      <Blurb
        classNames="mt-60px tablet:mt-[120px]"
        header="We are supported by"
      />

      <div className="mt-24px">
        {whoHelpsUs.map((section, idx) => (
          <div key={idx} className="mb-60px tablet:mb-100px">
            <h3 className="font-rblack text-18px tablet:text-24px">
              {section.sectionTitle.en}
            </h3>
            <h4 className="mb-12px tablet:mb-24px text-14px tablet:text-18px">
              {section.sectionTitle.uk}
            </h4>

            <div className="mt-16px grid grid-cols-2 tablet:grid-cols-3 new_md:grid-cols-4 gap-24px tablet:gap-32px items-center">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="hover:cursor-pointer"
                  onClick={() => onOpenDetails(item)}
                >
                  <img
                    className={
                      item.imgClassName ??
                      'max-h-[64px] max-w-[240px] w-full object-contain object-left'
                    }
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                  />

                  <h3 className="mt-16px font-rblack text-14px tablet:text-16px">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Ambassadors />

      <div id="form">
        <Blurb classNames="mt-60px tablet:mt-[120px]" header="Contact us" />

        <div className="mt-24px mb-120px flex">
          <div ref={formRef} className="tablet:max-w-[50%]">
            <GoogleSheetsForm
              formFields={FORM_FIELDS}
              scriptUrl={SCRIPT_URL}
              buttonLabel="Send"
              analyticsContext={{ category: 'join_project_form' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
