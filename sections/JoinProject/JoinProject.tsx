import { usePopup } from '@providers/PopupProvider';
import Ambassadors from '@sections/AboutProject/Ambassadors';
import Blurb from '@sections/AboutProject/Blurb';
import { openInNewTab } from '@sections/utils';
import { useCallback } from 'react';
import {
  intro,
  opportunities,
  Opportunity,
  ourResults,
  projectsWeSupport,
  whoHelpsUs,
} from './constants';

export const JoinProject: React.FC = () => {
  const { showPopup, hidePopup } = usePopup();

  const scrollToForm = useCallback(() => {
    console.log('scrollToForm');
  }, []);

  const onSelectOpportunity = useCallback(
    (opportunity: Opportunity) => {
      showPopup('text', {
        text: opportunity.details.description,
        buttons: opportunity.details.links.map((link) => {
          return {
            label: link.label,
            onClick: () => {
              if (link.url) {
                openInNewTab(link.url);
              } else if (link.action === 'open_form') {
                hidePopup();
                scrollToForm();
              }
            },
          };
        }),
      });
    },
    [hidePopup, scrollToForm, showPopup],
  );

  return (
    <div className="desktop:container mx-auto px-24px tablet:px-72px desktop:px-132px">
      <Blurb english={intro.en} ukrainian={intro.uk} />

      <Blurb classNames="mt-40px tablet:mt-48px" header="Join us" />

      <div className="mt-12px tablet:mt-32px grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-16px tablet:gap-32px">
        {opportunities.map((opportunity, index) => (
          <button
            key={index}
            className="py-24px px-16px border-4 border-transparent text-left hover:border-carbon hover:cursor-pointer"
            onClick={() => onSelectOpportunity(opportunity)}
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

      <Blurb classNames="mt-60px tablet:mt-[120px]" header="Who helps us" />

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
                <div key={item.title}>
                  <img
                    className={
                      item.imgClassName ??
                      'max-h-[64px] max-w-[240px] w-full object-contain object-left'
                    }
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                  />

                  {/* <h3 className="font-rblack text-14px tablet:text-16px">
                    {item.title}
                  </h3> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Ambassadors />
    </div>
  );
};
