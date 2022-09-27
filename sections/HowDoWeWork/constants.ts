export interface TextData {
  text?: string;
  list?: string[];
}

interface Data {
  en: TextData;
  ua: TextData;
}

export const data: Data[] = [
  {
    en: {
      text: 'Receive a tweet and an event to illustrate as a reply',
    },
    ua: {
      text: 'Отримайте у відповідь твіт та подію, які треба проілюструвати',
    },
  },
  {
    en: {
      text: 'Create art on the theme of the event, which conveys its essence as much as possible. Use any type of style: statics/motion, 3D/2D, engraving/watercolor, collage, etc.',
    },
    ua: {
      text: 'Створіть арт на тему події, який максимально передає її сутність. Стиль виконання вільний: статика/моушен, 3D/2D, гравюра/акварель, колаж, тощо.',
    },
  },
  {
    en: {
      text: 'Insert a tweet with rounded corners into your artwork. It shoud take up about 1/9 of the illustration',
    },
    ua: {
      text: 'Вставте твіт з заокругленими кутами на вашу роботу. Він має займати до 1/9 зображення',
    },
  },
  {
    en: {
      text: 'Make sure that your artwork fits the following technical requirements:',
      list: [
        'Proportion: square',
        'Format: jpg, png, gif, svg, eps, pdf, mp4, avi',
        'File size: up to 50MB',
      ],
    },
    ua: {
      text: 'Переконайтесь, що ваша робота відповідає наступним технічним вимогам:',
      list: [
        'Пропорція: квадрат',
        'Формат: jpg, png, gif, svg, eps, pdf, mp4, avi',
        'Розмір файлу: до 50МБ',
      ],
    },
  },
];
