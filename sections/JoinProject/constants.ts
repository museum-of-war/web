import { HTMLAttributes } from 'react';
import { TranslatedString } from 'types';

export const intro = {
  en: 'META HISTORY Museum is the largest charitable NFT project in Ukraine that explores commercial opportunities of digital art and the use of web3 technologies in charity.\n\nWe welcome any kind of desire to help our project, which now exists on a volunteer basis thanks to the enthusiasm of people pursuing to help Ukraine.',
  uk: 'META HISTORY museum ― найбільший благодійний NFT-проект в Україні, що досліджує комерційні можливості цифрового мистецтва і використання технологій web3 у благодійності.\n\nМи вітаємо бажання у будь-який спосіб допомогти нашому проекту, що існує на волонтерських засадах, завдяки ентузіазму людей, які прагнуть допомогти Україні.',
};

export interface Opportunity {
  icon: string;
  title: TranslatedString;
  description: TranslatedString;
  details: {
    description: TranslatedString;
    links: {
      label: string;
      url?: string;
      action?: 'open_form';
    }[];
  };
}

export const opportunities: Opportunity[] = [
  {
    icon: '',
    title: {
      en: 'Artist',
      uk: 'Митець',
    },
    description: {
      en: 'Creating a work for one of the collections',
      uk: 'Створити роботу для однієї з колекцій',
    },
    details: {
      description: {
        en: 'Capture one of events from the war in Ukraine in an artwork that will become a part of the unique historical NFT collection – “Warline”. Please learn more about our way of cooperation with the artists and join by filling out the form.',
        uk: 'Зафіксуйте одну із подій війни в Україні у мистецькому творі, що увійде до унікальної історичної NFT-колекції Warline. Дізнайтесь більше про те, як ми співпрацюємо з митцями, і долучайтесь, заповнивши форму.',
      },
      links: [
        {
          label: 'Join',
          url: 'https://metahistory.gallery/for-artists',
        },
      ],
    },
  },
  {
    icon: '',
    title: {
      en: 'Web3 Specialist',
      uk: 'Фахівець у web3',
    },
    description: {
      en: 'Strengthening the project with your expertise',
      uk: 'Підсилити проєкт своєю експертизою',
    },
    details: {
      description: {
        en: 'Improve our self-story for the world. Offer us an idea, plan, content creation, services for advertising setting up or distribution. Please fill out the form to tell us about your capabilities, experience, or knowledge that will be useful for us.',
        uk: 'Зробіть кращою нашу розповідь про себе світу. Запропонуйте нам ідею, план, створення контенту або послуги з налаштування чи поширення реклами. Розкажіть нам про свої можливості, досвід чи знання, що будуть нам корисні, заповнивши форму.',
      },
      links: [
        {
          label: 'Fill a form',
          action: 'open_form',
        },
      ],
    },
  },
  {
    icon: '',
    title: {
      en: 'Collector',
      uk: 'Колекціонер',
    },
    description: {
      en: 'Contributing to the reconstruction of Ukraine through purchasing NFT',
      uk: 'Зробити внесок на відбудову України, придбавши NFT',
    },
    details: {
      description: {
        en: 'Purchase the artwork from our collections. Find out what makes it special and why its value will increase from reading our plans. Please fill out the form to get an answer to your questions from the project team.',
        uk: 'Придбайте твір мистецтва з наших колекцій. Зʼясуйте, чим вони особливі, і чому їх цінність зросте, ознайомившись з нашими планами. Отримайте відповідь на запитання від команди проекту, заповнивши форму.',
      },
      links: [
        {
          label: 'Whitepaper',
          url: 'https://metahistory.gallery/about-us', // TODO: UPDATE ME
        },
      ],
    },
  },
  {
    icon: '',
    title: {
      en: 'Influencer',
      uk: 'Інфлюенсер',
    },
    description: {
      en: 'Informing your audience about the project',
      uk: 'Розказати про проєкт своїй аудиторії',
    },
    details: {
      description: {
        en: 'Tell your audience about us. Create with us content in any format or receive from us the material for posting. Please let us know your terms and conditions and suggestions through filling out the form.',
        uk: 'Розкажіть про нас вашій аудиторії. Створіть разом з нами контент у будь-якому форматі або отримайте від нас матеріал для розміщення. Повідомте нам про ваші умови і пропозиції, заповнивши форму.',
      },
      links: [
        {
          label: 'Fill a form',
          action: 'open_form',
        },
      ],
    },
  },
  {
    icon: '',
    title: {
      en: 'Investor',
      uk: 'Інвестор',
    },
    description: {
      en: 'Financing the project’s improvement',
      uk: 'Профінансувати покращення проєкту',
    },
    details: {
      description: {
        en: 'Implement with us the plan to turn META HISTORY into one of the world’s leading charity NFT projects. Take a look at some of our next steps on the roadmap. Please fill out the form on the website to meet the project team who will tell you about its future in much more detail.',
        uk: 'Реалізуйте разом з нами план перетворення META HISTORY на один з провідних благодійних NFT-проектів у світі. Погляньте на деякі з наших подальших кроків у дорожній карті. Познайомтесь з командою проекту, що розкаже значно більше про його майбутнє, заповнивши форму на сайті.',
      },
      links: [
        {
          label: 'Roadmap',
          url: '/roadmap',
        },
        {
          label: 'Fill a form',
          action: 'open_form',
        },
      ],
    },
  },
];

export const ourResults = {
  en: 'After being founded in March 2022, the project has raised more than $1 million in ETH cryptocurrency. 500 ETH were received by Serhiy Prytula Charity Foundation, which focuses on helping the Ukrainian Defense Forces and those affected by the war.\n\nMore than 300 ETH went to the Aid for Ukraine Fund established by the Ministry of Digital Transformation together with the cryptocurrency platform KUNA and Blockchain Company Everstake with the aim of financing cyber defense, information counteraction to Russian propaganda, and technical assistance for the Armed Forces.\n\nIn the fall of 2022, the project – together with the Ministry of Culture and Information Policy of Ukraine – began raising funds for the restoration of iconic cultural monuments affected by the war.',
  uk: 'З моменту створення у березні 2022-го року до сьогодні проєкт зібрав понад $1 млн у криптовалюті ETH. 500 ETH отримав Благодійний фонд Сергія Притули, що спеціалізується на допомозі Силам оборони України та постраждалим від війни.\n\nПонад 300 ETH надійшло фонду Aid for Ukraine, який був створений Міністерством цифрової трансформації разом з криптовалютою платформою KUNA та блокчейн компанією Everstake, для фінансування кіберзахисту, інформаційної протидії російській пропаганді та технічної допомоги ЗСУ.\n\nВосени 2022-го року проєкт спільно з Міністерством Культури та інформаційної політики України розпочав збір коштів на відновлення знакових культурних памʼяток, що постраждали внаслідок війни.',
};

interface Project {
  src: string;
  alt: string;
  link: string;
}
export const projectsWeSupport: Project[] = [
  {
    src: '/img/partners/Serhiy Prytula Charity Foundation.svg',
    alt: 'Serhiy Prytula Charity Foundation',
    link: 'https://prytulafoundation.org/',
  },
  {
    src: '/img/partners/united24.webp',
    alt: 'United24',
    link: 'https://u24.gov.ua/',
  },
  {
    src: '/img/partners/Logo_of_Ministry_of_Culture_of_Ukraine.svg',
    alt: 'Ministry of Culture and Information Policy of Ukraine',
    link: 'https://mkip.gov.ua/',
  },
];

export const whoHelpsUs: {
  sectionTitle: TranslatedString;
  items: {
    src: string;
    imgClassName?: HTMLAttributes<HTMLDivElement>['className'];
    title: string;
    description: TranslatedString;
  }[];
}[] = [
  {
    sectionTitle: {
      en: 'Artists who created art for us',
      uk: 'Митці, що створили для нас арт',
    },
    items: [
      {
        src: '/img/avatars/bondar.jpg.webp',
        imgClassName:
          'rounded-full w-[90px] h-[90px] tablet:w-[120px] tablet:h-[120px]',
        title: 'Waone Manzhos',
        description: {
          en: 'is a multidisciplinary artist, one of participants of the “Interesni Kazki” project, known for his bright surrealistic murals of huge sizes',
          uk: 'Мультидисциплінарний артист, учасник арт-проекту Interesni Kazki, відомого своїми яскравими сюрреалістичними муралами величезних розмірів',
        },
      },
      {
        src: '/img/avatars/bondar.jpg.webp',
        imgClassName:
          'rounded-full w-[90px] h-[90px] tablet:w-[120px] tablet:h-[120px]',
        title: 'Mishel & Nicol Feldman',
        description: {
          en: 'Street artists working mainly with public spaces of Ukrainian and European capitals. They also work with animation, paintings, clay, and merchandise design',
          uk: 'Стріт-арт художниці, що працюють переважно з публічними просторами української та європейських столиць. А також з анімацією, полотнами, глиною та мерч-дизайном',
        },
      },
      {
        src: '/img/avatars/bondar.jpg.webp',
        imgClassName:
          'rounded-full w-[90px] h-[90px] tablet:w-[120px] tablet:h-[120px]',
        title: 'Danya Shulipa',
        description: {
          en: 'Artist and designer, member of “The Trouble Tribe',
          uk: 'Художник і дизайнер, учасник The Trouble Tribe',
        },
      },
      {
        src: '/img/avatars/bondar.jpg.webp',
        imgClassName:
          'rounded-full w-[90px] h-[90px] tablet:w-[120px] tablet:h-[120px]',
        title: 'Irene Neyman',
        description: {
          en: 'Illustrator who creates characters and images for mass media, apps, websites, and brands',
          uk: 'Ілюстратор, що створює персонажів та зображення для ЗМІ, додатків, веб-сайтів, брендів',
        },
      },
    ],
  },
  {
    sectionTitle: {
      en: 'Agencies that cooperate with us',
      uk: 'Агенції, що співпрацюють з нами',
    },
    items: [
      {
        src: '/img/partners/kindustry.png',
        title: 'Kindustry',
        description: {
          en: 'Kindustry is an advisory group developing innovative brand platforms, progressive concepts and experiences, while collaborating with iconic global brands',
          uk: 'Kонсультативна група, що розробляє інноваційні бренд-платформи, прогресивні концепції та досвід і співпрацює з культовими глобальними брендам',
        },
      },
      {
        src: '/img/partners/market_across.png',
        title: 'MarketAcross',
        description: {
          en: 'A leading international PR and marketing agency in the blockchain field',
          uk: 'Провідна міжнародна PR та маркетингова агенція у сфері блокчейн',
        },
      },
      {
        src: '/img/partners/crowdcreate.png',
        title: 'CrowdCreate',
        description: {
          en: 'Best agency in the crypto sphere (according to Forbes), the best marketing agency (according to Box Mining), and the best marketing agency in the crypto sphere (according to Coinbureau)',
          uk: 'Краща агенція в крипто-сфері за версією Forbes, краща маркетингова агенція за версією Box Mining, краща маркетингова агенція в крипто-сфері за версією Coinbureau',
        },
      },
      {
        src: '/img/partners/superheroes.png',
        title: 'Superheroes',
        description: {
          en: 'A consortium of independent Ukrainian agencies providing marketing, branding, web development, content creation and event organization for leading Ukrainian and international brands',
          uk: 'Консорціум незалежних українських агенцій, що забезпечують маркетинг, брендинг, веб-розробку, створення контенту та організацію заходів для провідних українських та міжнародних брендів',
        },
      },
    ],
  },
  {
    sectionTitle: {
      en: 'Institutions that support us',
      uk: 'Інституції, що нас підтримують',
    },
    items: [
      {
        src: '/img/partners/Logo_Ministry_Digital.png',
        title: 'Ministry of Digital Transformation',
        description: {
          en: 'A part of the state government responsible for the formation and implementation of state policy in the field of digitalization, open data, and national electronic information resources',
          uk: 'Частина уряду держави, що відповідає за формування і реалізацію державної політики у сфері діджиталізації, відкритих даних, національних електронних інформаційних ресурсів',
        },
      },
      {
        src: '/img/partners/Logo_of_Ministry_of_Culture_of_Ukraine.png',
        title: 'Ministry of Culture of Ukraine',
        description: {
          en: 'A part of the government responsible for state policy in the field of culture, language, arts, information independence and security, museums, protection of cultural heritage, circulation of cultural values, and promotion of Ukraine in the world',
          uk: 'Частина уряду, що відповідає за державну політику у сфері культури, мови, мистецтв, інформаційної незалежності і безпеки, музейної справи, охорони культурної спадщини, обігу культурних цінностей та популяризацію України у світі',
        },
      },
      {
        src: '/img/partners/blockchain_association.png',
        title: 'Blockchain Association of Ukraine',
        description: {
          en: 'A non-profit organization established to actively promote and facilitate integration of blockchain technology into the Ukrainian economy',
          uk: 'Некомерційна організація, створена для активного поширення та сприяння інтеграції технології блокчейн в економіку України',
        },
      },
      {
        src: '/img/partners/united24.webp',
        title: 'UNITED24',
        description: {
          en: 'An initiative of the President of Ukraine Volodymyr Zelenskyy, aimed to become the main window for collecting donations in support of Ukraine. The funds are transferred to the accounts of the National Bank of Ukraine and directed by the relevant ministries to the most important state needs',
          uk: 'Ініціатива Президента України Володимира Зеленського, призначена стати головним вікном для збору пожертв на підтримку України. Кошти надходять на рахунки Національного банку України та спрямовуються профільними міністерствами на найголовніші потреби держави',
        },
      },
    ],
  },
];
