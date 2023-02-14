import { AllDropsData } from '@constants/collections/Warline';
import {
  ExtendedArtistType,
  ExtendedArtistWithArtsType,
} from '@sections/types';

const DROP_EVENTS = AllDropsData.flatMap((drop) => drop.events);
export const ARTISTS = [
  {
    name: 'Danya Shulipa',
    avatar: 'Danya Shulipa.jpg',
    descriptionUa: `Даня Шуліпа Художник, графічний дизайнер. Народився в 1998 році в Костянтинівці, Донецької області, на сході України. 
З 2015 живе в Києві. Працював з українськими та світовими артистами і брендами. Серед інших це Offset, 21 savage & j Cole, Max Barskih, Був частиною команди, що займалася відкриттям київського магазину Off-White. Паралельно робив творчі проекти та концепти.`,
    descriptionEn: `Artist, graphic designer. Born in 1998 in Kostyantynivka, Donetsk region, in the east of Ukraine
Since 2015 live in Kyiv. Danya worked with Ukrainian and international artists and brands. Among others are Offset, 21 savage & j Cole, Max Barskih. Danya also was part of the team involved in the opening of the Off-White store in Kyiv. At the same time, he made creative projects and concepts.`,
    id: 'danya_shulipa',
  },
  {
    name: 'Oleg Savin',
    avatar: 'Oleg Savin.jpg',
    descriptionUa:
      "Олег Савін (спр. ім'я Олег Кучеренко). Народився 26 січня 1992 року в Києві. Український художник працює в техніці живопису. У 2021 році закінчив Київську державну академію декоративно-прикладного мистецтва та дизайну імені Михайла Бойчука за спеціальністю «станковий живопис»",
    descriptionEn:
      'Oleg Savin (aka Oleg Kucherenko). Was born on January 26, 1992 in Kyiv. Ukrainian artist working in the technique of painting. In 2021 graduated from the Kyiv State Academy of Decorative Arts and Design named after Mykhailo Boychuk with a degree in easel painting.',
    id: 'oleg_savin',
  },
  {
    name: 'Olga Smirnova',
    avatar: 'Olga Smirnova.jpg',
    descriptionUa:
      'Ольга Смірнова - ілюстраторка та колажистка з Києва. За 8 років роботи у сфері дитячої книжкової ілюстрації вона оформила більше 20 книжок для українських, польських та китайських видавництв. Ольгу захоплює поєднання різних медіа при створенні своїх робіт, останні 1,5 роки вона активно експериментує і досліджує колаж як техніку і як форму мистецького самовираження. ',
    descriptionEn:
      "Olga Smirnova is an illustrator and collage artist from Kyiv. For 8 years of work in the field of children's book illustration, she created illustrations for more than 20 books of Ukrainian, Polish and Chinese publishing houses. Olga is fascinated by the combination of different media when creating her works, for the past 1.5 years she has been actively experimenting and exploring collage both as a technique and as a form of artistic expression.",
    id: 'olga_smirnova',
  },
  {
    name: 'Klimenkova Yelyzaveta',
    avatar: 'Lisa Klimenkova.jpg',
    descriptionUa:
      'Народилася в 1999 році в Харкові. З 2015 по 2018 рік навчалася у Харківському художньому училищі. 2018 року вступила до Харківської мистецької академії на спеціальність книжкова ілюстрація. Диплом бакалавра отримувала 2022 року вже під час війни у Львові.До війни працювала у різноманітних виставкових проектах, волонтерила на фестивалях. Зараз я перебуваю в Ужгороді на резиденції Undercover Residence від проекту Artist at risk.',
    descriptionEn:
      "I was born in 1999 in Kharkov. From 2015 to 2018 studied at the Kharkov Art College. In 2018, entered the Kharkiv Art Academy with a degree in book illustration. I eceived my bachelor's degree in 2022 already during the war in Lviv.Before the war, I worked in various exhibition projects and volunteered at festivals. Now I am in Uzhgorod at the residence Undercover Residence from the project Artist at risk.",
    id: 'klimenkova_yelyzaveta',
  },
  {
    name: 'Dima Gavriliv',
    avatar: 'dima_gavriliv.jpg',
    descriptionUa:
      'Мене звати Діма, 17 років, проживаю в місті Новояворівськ Львівської області. Коли я закінчив школу, мене хвилювало питання, що робити далі. І я натрапив на 3D графіку, якою займаюся вже рік. Завдяки чому я можу тепер висловлювати свої думки через творчість і допомагати країні в тому числі',
    descriptionEn:
      'My name is Dima, 17 years old, live in the city of Novoyavorivsk in the Lviv Region. When I finished school, the question that bothered me of what to do next. And I came across 3D graphics, which I have been doing for a year.Thanks to this I can now express my thoughts through creativity and help the country as well',
    id: 'dima_gavriliv',
  },
  {
    name: 'Dmitriy Shepil',
    avatar: 'Shepil Dmitriy.png',
    descriptionUa: '',
    descriptionEn:
      'My name is Dmitriy and I am a motion designer based in Ukraine. I specialise on 3D animation, branding and CG.',
    id: 'dmitriy_shepil',
  },
  {
    name: 'Harkavets Iryna\nmarginai_',
    avatar: 'marginai_.png',
    descriptionUa:
      'Ірина Гарькавець, marginai_. Ілюстратор та аніматор з Харкова, Україна. Випускниця з відзнакою у ХДАДМ. Я дослідниця новітнього мистецтва, автор короткометражних фільмів "Обіцянка", "Від недавна до давно", "Війна, яка завжди поруч", що здобули безліч лаурелей на кінофестивалях по всьому світу.',
    descriptionEn:
      'Iryna Harkavets, marginai_. Illustrator and animator from Kharkiv, Ukraine. Graduated with honors from the Kharkiv State Academy of Design and Fine Arts. I am a researcher of contemporary art, author of short films "Promise", "From Recent to Long ago", "The war that is always around", which won many prizes at film festivals around the world.',
    id: 'marginai_',
  },
  {
    name: 'Anna Voda',
    avatar: 'Anna Voda.jpeg',
    descriptionUa: `
2022 - гуртова виставка Be Brave Art Show, Остін, Техас.
2022 - гуртова виставка Green Hill Gallery.
2022 - гуртова виставка, CLB Berlin. 
2022 - Playboy UA, митці під час війни, війсковий випуск.
2022 - Meta History, нфт проект.
2022 - Forbes UA, друга обкладинка, війсковий випуск.
2022 - The Shed gallery, Мальмо, Шведція. Группова виставка в підтримку України.
2020 - Вересневий випуск, арт for Playboy UA.
2019 - колоаборації з брендами Ria Keburia, Naked letters, Kofta studio.
2018 - MOMA Тбилиси, Mercedes-Benz Fashion Week, виставка робіт та перфоманс в колаборації  з Ria Keburia Gallery.
2017 - гуртова виставка «ARTWHOART6»
2016 - гуртова виставка «ARTWHOART5»
2015 - гуртова виставка «THE NEW WAVE/UNCUT ll» Msk Eastside Gallery
2014 - працювала художником та художником декоратором в Visionar.
2004 - 2010 - Харківский педагогічний універсітет ім.Г.С. Сковороди. Художній факультет, Станкова графіка. Магістр.
2000-2004 - Харківский універсітет управління. Факультет  Менеджменту та маркетингу.
1986 - народилась в м. Харків, Україна
`,
    descriptionEn: `
2022- group exhibition Be brave art show ATX. Austin, Texas
2022 - group exhibition, Green Hill Gallery, Berlin.
2022 - group Exhibition, CLB Berlin.
2022 - Playboy UA, artist in war, war edition.
2022 - Forbes UA, second cover, war edition.
2022 - member of Meta History. Nft project.
2022 - The Shed gallery, Malmo, Sweden. Group Exhibition for support Ukraine.
2020 - September, painting for Playboy UA.
2019 - collaboration with fashion brands and communities : Ria Keburia, Naked letters, Kofta studio.
2018 - MOMA Tbilisi, Mercedes-Benz Fashion Week, art performance with Ria Keburia Gallery.
2017 - group exhibition «ARTWHOART6»
2016 - group exhibition «ARTWHOART5»
2015 - group exhibition «THE NEW WAVE/UNCUT ll» Msk Eastside Gallery
2014 - Bal de Fleurs & charity dinner L’Etincelle, France, fashion show
2014 - artist-decorator, set designer in Visionar Msk.
2004 - 2010 - Kharkiv State Pedagogical University. G.S. Skovorody , faculty artistic graphic , easel graphics
2000-2004 - Kharkov Institute of Management, faculty economic, accounting and auditing
1986 - born in Kharkov, Ukraine`,
    id: 'anna_voda',
  },
  {
    name: 'Margarita Marushevska',
    avatar: 'Margarita Marushevska.jpg',
    descriptionUa:
      "My name is Margarita, I'm a visual artist from Kyiv, Ukraine, but my home is in the occupied city of Luhansk. I work as a graphic designer at Leo Burnett Ukraine since 2020. I practise traditional arts, such as linocut and mixed graphics, and I work with digital illustration and collage as well.",
    descriptionEn:
      'Мене звуть Маргарита, я художниця та дизайнерка з Києва, але мій дім знаходиться в окупованому росією місті Луганську. Я працюю графічною дизайнеркою в рекламній агенції Leo Burnett Ukraine з 2020 року. Я займаюсь графікою та друкованими техніками, а також діджитальною ілюстрацією та колажами.',
    id: 'margarita_marushevska',
  },
  {
    name: 'Sveta Gavrilenko',
    avatar: 'Sveta Gavrilenko.jpeg',
    descriptionUa: `Света Гавриленко народилася в 1990 році в Криму. З 2007 по 2011 навчалася в Кримському художньому училищі імені І. Самокіша на відділі живопису. З 2011 по 2012 навчалася в Києві, в Національній академії мистецтва і архітектури. Повернувшись до Криму, Свєта заснувала студію живопису, в якій з тих пір викладає. У 2016 році брала участь у резиденції "Muzychi expended history project"" під керівництвом Алевтини Кохідзе. А з 2017 по 2018 навчалася на курсі «Філософія мистецтва» А. Г. Великанова в навчальному центрі Музею «Гараж» у Москві.
       
Зараз живе в Ялті.`,
    descriptionEn: `Sveta Gavrilenko was born in 1990 in Crimea. From 2007 to 2011 she studied at the Crimean Art School named after I. Samokish, at the painting department. From 2011 to 2012 she studied in Kiev, at the National Academy of Art and Architecture. On returning to Crimea, Sveta founded a painting studio in which she has been teaching since. In 2016, she participated in the "Muzychi expended history project" residence under the supervision of Alevtina Kokhidze. And from 2017 to 2018 she studied at the course "Philosophy of Art" by A.G. Velikanov at the educational center of the Garage Museum in Moscow.

At the moment, based in Yalta.`,
    id: 'sveta_gavrilenko',
  },
  {
    name: 'Mara Kava',
    avatar: 'Mara Kava.jpeg',
    descriptionUa: `
Я ілюстраторка з Києва. Працюю у техніці естампу та в діджитал.
Навчалась в Харківському художньому училищі та в Львівській академії друкарства. 
Зараз працюю з українськими медіа та кінодокументалістами: створюю афіші, беру участь у створенні документальної анімації. Від недавна роблю перші спроби в створенні особистих NFT колекцій."`,
    descriptionEn: `I am an illustrator from Kyiv. I work in the technique of printing and digital. 
I studied at the Kharkiv Art School and the Lviv Academy of Printing. 
Now I work with Ukrainian media and film documentaries: I create posters, participate in the creation of documentary animation.
Recently, I have been making my first attempts at creating personal NFT collections.`,
    id: 'mara_kava',
  },
  {
    name: 'Valerii Kolor',
    avatar: 'ZDESROY (Valerii Kolor).jpeg',
    descriptionUa: '',
    descriptionEn: `
Valery Kolor with artist name ZDESROY.
Born in 1987 in the industrial Ukrainian city name is Dnipro.

Even before elementary school, the future artist caught fire with drawing.
His mother Tatyana Lagutenko became the inspiration and impetus to art. 
From childhood, they painted together on the walls, furniture and doors of their apartment.

In the late 90s, Valery became interested in hip-hop and the first graffiti magazine fell into his hands.
After which he got into the local street graffiti movement.
Despite the adrenaline and courage from the graffiti actions, the artist was more admired by the works of foreign artists in the style of realism, experimenial.
I looked at these works and could not understand how they do it with graffiti cans.
By 2012, Valery seriously took up the development of his art.
Until 2016, there was the most active period in learning different techniques and searching for a style.
During this period, he created the largest number of works, for which he was recognized as the most active street artist in Ukraine.
ZDESROY made a lot of graffiti, murals, public arts.

During the 2020 lockdown, ZDESROY reimagined its creativity and took to the streets with social street art.
Now he uses in his works such material as concrete.
With my work, I kind of had a dialogue with my viewers.
This gave a positive result and very hooked on the local politics who staged a real hunt for the ZDESROYs works to destroy them as soon as possible.

Now the artist has a large workshop in the city of Dnipro and integrates styles and techniques into one whole.
The motives of the works are now aimed at covering the war in Ukraine, maintaining the spirit of Ukrainians`,

    id: 'valerii_kolor',
  },
  {
    name: 'PASKA',
    avatar: 'PASKA.jpeg',
    descriptionUa: '',
    descriptionEn: `
Anastasia Pasechnik is a multi-artist from Kharkov.
Anastasia graduated from the Kotlyarevsky University of the Arts as an actress of dramatic theater and cinema.  She studied art history and theater set design at the University.

Anastasia's style is inspired by her favorite artists Rene Magritte and Picasso. Vivid ""primitivism"" with a particular manner of presentation and a good composition and combination of colors.
She finds inspiration for her work in literature or in a short philosophical phrase that can be expressed in a drawing.

Personal exhibitions:
"The Promised Life" - Kiev 2020.
"Circus"" - Kiev 2021
"The Promised Life" - Kharkiv 2021`,
    id: 'paska',
  },
  {
    name: 'mitya lapko',
    avatar: 'mitya.lapko.jpg',
    descriptionUa: 'Моушн дизайнер з Києва ',
    descriptionEn: 'Motion-designer from Kyiv',
    id: 'mitya_lapko',
  },
  {
    name: 'Khrystyna Vlasenko',
    avatar: 'Khrystyna Vlasenko.jpg',
    descriptionUa: `Я ілюстраторка з Києва. Вчилась в НАОМА на вільний графіці. Зараз займаюся графічним дизайном та ілюстрацією.`,
    descriptionEn: `I'm illustrator based in Kyiv. I studied graphics at National Academy of Fine Arts and Architecture. Now I work as graphic designer and illustrator.`,
    id: 'khrystyna_vlasenko',
  },
  {
    name: 'Alina Shevchuk',
    avatar: 'LINA SHA ( Alina Shevchuk ).jpeg',
    descriptionUa: `Аліна Шевчук народилась 17 лютого 1996 року в місті Черкаси, Україна.
Ще з дитинства має схильність до творчості: образотворче мистецтво, поезія. 
В 2013 році, після закінчення школи, переїхала до Києва. Вищу освіту отримала в КНУБА, спеціалізація - містобудування і архітектура. 
В 2018 році, після отримання бакалавра, почала працювати в кіноіндустрії, в департаменті костюму і стилю. Аліна працює над художнім оформленням костюмів для фільмів, серіалів і реклами. Першим проектом став х/ф «Захар Беркут». 
Наразі і далі працює на знімальному майданчику, але має намір повернутись до спеціальності архітектора.
Любить спорт, здоровий і активний спосіб життя, а також свого мінібультерєра на ім’я Буч. 
`,
    descriptionEn: `Alina Shevchuk was born in 1996 in Cherkasy, Ukraine.
Since childhood, Alina has felt an urge for creativity through visual arts and poetry.
In 2013 she enrolled at KNUBA, specializing in urban planning and architecture.
In 2018, after getting a bachelor's degree, she started her work in the film industry in the costume and style department. She worked as an assistant costume designer for films, sitcoms, and advertising. Her first significant project was ""The Rising Hawk"" movie.
Alina works on the set sporadically but tends to return as a landscape architect.
She likes a healthy and active lifestyle, and her mini bullterrier named Butch.`,
    id: 'alina_shevchuk',
  },
  {
    name: 'Barbalat Kateryna',
    avatar: 'Kateryna Barbalat.png',
    descriptionUa: `Я креативниця з Києва (Україна). Працюю одночасно як графічна дизайнерка і креативна копірайтерка. `,
    descriptionEn: `I'm creative from Kyiv, Ukraine. I work as freelance graphic designer and creative copywriter. `,
    id: 'barbalat_kateryna',
  },
  {
    name: 'Anna Golub',
    avatar: 'Anna Golub.JPG',
    descriptionUa: `Графічний дизайнер. Народилася в Україні, живу у Києві та Кривому Розі.`,
    descriptionEn: `Graphic designer. Was born in Ukraine. I live in Kiyv and Kryvyi Rig.`,
    id: 'anna_golub',
  },
  {
    name: 'Anton Abo',
    avatar: 'Anton Abo.jpg',
    descriptionUa: `Антон Або – київський графічний дизайер, ілюстратор, арт директор та викладач із досвідом роботи в області моди, візуальних комунікацій та ілюстрації. Член колективу «ОRKA». Арт-директор та співвласник бренду M0D44.`,
    descriptionEn: `Anton Abo is a Kyiv based graphic designer, illustrator, art director and lecturer with experience working in fashion, visual communication and illustration. Member of Orka Collective. Art-director and co-owner of M0D44 brand.`,
    id: 'anton_abo',
  },
  {
    name: 'Kos Reed',
    avatar: 'Kos Reed.jpg',
    descriptionUa: `My name is Kostiantyn. I am from Kyiv. Now I work as a 3D character artist.`,
    descriptionEn: `Мене звати Костянтин. Я з Києва. Зараз я працюю як 3D character artist.`,
    id: 'kos_reed',
  },
  {
    name: 'Tina Tykhonenko',
    avatar: 'Tihotak.jpeg',
    descriptionUa: `Тихоненко Інна  (творчий псевдонім Тіна - скорочення від імені та прізвища) 
Народилась в м. Корсунь-Шевченківський
Виросла в м. Сміла, навчалась на кафедрі дизайну в м.Черкаси,  за спеціальністю - промисловий дизайн,  працювала в сфері фотографії та займалась живописом, згодом переїхала до міста Одеси. 
Разом з колегами створювали заходи для художників, які допомагали підтримувати свої навики малюнку, та знаходити однодумців, приймала участь у колективних виставках присвячених місту і людям, почала більше приділяти часу ілюстрації, до 24-го лютого готувала персональну виставку. 
Після, зосередилась на цифровому мистецтві, яке могло б допомагати нашій країні. Малювала епізоди із життя українців. 
Приймала участь в проекті - Meta history: Museum of War, співпрацюю з брендами одягу, які сприяють розвитку національної айдентинки, підтримую волонтерські організації. 
Зараз залишаюсь в Одесі, та  намагаюсь бути корисною як в арт сфері, так і в інших.`,
    descriptionEn: `Born in 1986
Tykhonenko Inna (creative pseudonym Tina - abbreviation of first and last name), an artist.
I was born in Ukraine, in the Korsun-Shevchenkivskyi town, grew up in Smila, graduated from the department of design of Cherkasy State Technological University (majoring in industrial design), and later I’ve moved to Odesa city. 
Here everything contributed to my creative development, and I have become a part of a local creative community.
Together with colleagues, we created events for artists that help to maintain and develop their drawing skills and find more like-minded people. I participated in collective exhibitions dedicated to the life of the city and its inhabitants. 
I continuously devote much of my time to illustrations. After the start of the war, I prepared the exhibition of works dedicated to the dramatic change in the lives of Ukrainians after February 24.
After that, I focused on digital art that could help our country.
I took part in the «Meta history: Museum of War» project. 
Now I’ve focused on cooperation with clothing brands that contribute to the development of national identity, and I support volunteer organizations.
Now I’m staying in Odesa and doing my best to be useful not only in the art sphere.`,
    id: 'tina_tykhonenko',
  },
  {
    name: 'Zhannet Podobed',
    avatar: 'Zhannet Podobed.jpeg',
    descriptionUa: `
Жаннет Подобед - художниця, яка працює в різних медіа.

Досліджуючи двозначність і походження через повтори та варіації, Жаннет хоче, щоб глядач став частиною мистецтва як додатковий компонент. Мистецтво – це експеримент: важливо мати можливість доторкнутися до твору, а також взаємодіяти з ним.

Її роботи представлені з метою не дати ідеалістичний погляд на особистість, а розкопати те, що було поховано в основах самості. Енергія самості та її емоційні та духовні вібрації завжди важливі.

Використовуючи концептуальний підхід, вона знаходить, що рух розкриває вроджену незручність, властиву людській природі, емоції, первісну дикість, інстинкти, які перегукуються з нашою вразливістю. Художниця також розглядає рух як метафору людини, яка вічно шукає себе.

В основі її робіт лежать надихаючі ситуації: бачення, що відображають відчуття незаперечності та безтурботного споглядання, у поєднанні з тонкими деталями дивних чи ексцентричних елементів. Взявши як предмет зображення внутрішню природу, коментуючи повсякденну естетику, вона створює напружені особисті моменти, майстерно створені за допомогою правил і упущень, прийняття та відмови, заманюючи глядача по колу.

Застосовуючи абстракцію, вона заманює глядача у світ постійної рівноваги та інтервалу, що формулює потік щоденних подій. Зображуються моменти, які існують лише для того, щоб пробити людську природу, щоб прояснити наше існування та знайти поетичний зміст усередині нас. Іноді виникає бентежна краса. Притаманна їм візуальна спокусливість, поряд з лаконічністю експозицій, ще більше ускладнює сприйняття їх різноманітних верств сенсу.

Її роботи не посилаються на відомі форми. Результати деконструюються настільки, що зміст зміщується і можлива інтерпретація стає багатогранною.

Жаннет Подобід наразі живе та працює в Одесі.
`,
    descriptionEn: `
Zhannet Podobed is an artist who works in a variety of media.

By examining the ambiguity and origination via retakes and variations, Zhannet wants the viewer to become part of the art as a kind of added component. Art is entertainment: to be able to touch the work, as well as to interact with the work is important.

Her artworks are presented with the aim not to provide an idealistic view on the personality but to excavate that which is buried in the foundations of the self. The energy of self and its emotional and spiritual vibrations are always important.

With a conceptual approach, she finds that movement reveals an inherent awkwardness, the intrinsic human nature, emotions, the primordial wildness, instincts that echoes our own vulnerabilities. The artist also considers movement as a metaphor for the self ever-seeking man.

Her works are based on inspiring situations: visions that reflect a sensation of indisputability and serene contemplation, combined with subtle details of odd or eccentric elements. By taking intrinsic nature as subject matter while commenting on the everyday aesthetic, she creates intense personal moments masterfully created by means of rules and omissions, acceptance and refusal, luring the viewer round and round in circles.

By applying abstraction, she seduces the viewer into a world of ongoing equilibrium and the interval that articulates the stream of daily events. Moments are depicted that only exist to punctuate the human nature in order to clarify our existence and to find poetic meaning inside us. At times, disconcerting beauty emerges. The inherent visual seductiveness, along with the conciseness of the exhibitions, further complicates the reception of their manifold layers of meaning.

Her works don't reference recognizable forms. The results are deconstructed to the extent that meaning is shifted and possible interpretation becomes multifaceted.

Zhannet Podobed currently lives and works in Odesa.
`,
    id: 'zhannet_podobed',
  },
  {
    name: 'Alisa Gots',
    avatar: 'Alisa Gots.jpeg',
    descriptionUa: `Аліса Гоц — художниця-графік, 1988 року народження, працює в Києві, Україна.
У 2012 році закінчила магістратуру Інституту поліграфії НТУУ КПІ за спеціальністю «художник-графік».
Почала свою практику в майстерні Володимира Іванова- Ахметова. У 2013 році разом із Ніною Савенко та Тарасом Каблуком заснувала незалежну літографську майстерню Lithography30, де всі троє працюють переважно в техніці літографії на камені.
Сьогодні це єдина незалежна літографічна майстерня в Україні, яка діє як мистецьке об’єднання та як відкрита освітня платформа, де люди можуть навчатися цій техніці.
Проекти та серії робіт, над якими працює Аліса Гоц, пов’язані переважно з особистими переживаннями, створеними на основі певних психологічних станів та емоційних періодів. Багато робіт митця – це спосіб залишити в пам’яті особисті переживання та розгадати їх суть.
Брала участь у багатьох виставках та заходах як у рамках «Літографії 30», так і самостійно.`,
    descriptionEn: `Alisa Gots is a graphic artist born and works in Kyiv, Ukraine in 1988.
In 2012, she had a master's degree in the Printing Institute at NTUU KPI, specializing in graphic artist.
She began her practice in the workshop of Vladimir Ivanov- Akhmetov. In 2013, together with Nina Savenko and Taras Kabluk, she founded the independent lithographic workshop Lithography30, where all three work mainly in the technique of lithography on stone.
Today it is the only independent lithographic workshop in Ukraine that operates as an art association and as an open educational platform where people can learn the this technique.
The projects and series of works on which Alisa Gots works are mainly related to personal experiences, created on the basis of certain psychological states and emotional periods. Many of the artist's works are a way to leave personal experiences in memory and unravel their essence. Often these experiences are compared with the situation in the country and the world.`,
    id: 'alisa_gots',
  },
  {
    name: 'Julie Grechukh',
    descriptionUa: '',
    descriptionEn: `I'm Julie, illustrator from Lviv, Ukraine. I have been working in this sphere for almost 3 years now. Usually I create positive and bright illustrations for children's books and toys. But after the war in Ukraine started I have drewn lots of patriotic and war illustrations to express my feelings and solidarity with people of Ukraine, as well as to promote Ukraine around the world.`,
    id: 'julie_grechukh',
  },
  {
    name: 'Machneva Kateryna',
    avatar: 'bombini.jpg',
    descriptionUa: `Привіт, мене звати Катерина.
Я графічна дизайнерка, ілюстраторка та каліграфиня з Києва.`,
    descriptionEn: `Hi, I’m Kateryna Machneva.
I’m a Graphic Designer, Illustrator and Calligrapher based in Kyiv, Ukraine.`,
    id: 'machneva_kateryna',
  },
  {
    name: 'Nika Kurilenko',
    avatar: 'Nika Kurilenko.jpg',
    descriptionUa: `Ніка Куріленко - ілюстраторка і графічна дизайнерка, що народилася 26 січня 2001 року в Києві. З 13-ти років вчилася малювати на графічному планшеті та брала участь у проєктах друзів як художник. Закінчила художню школу та КНУБА, навчається на графічному факультеті Projector Institute. Наразі працює в коміксному проєкті @bloome__ua. Створювала ілюстрації для Yamaha, Kalush та Kukurudza.`,
    descriptionEn: `Nika Kurilenko is an illustrator and graphic designer from Kyiv, born on January 26, 2001. From the age of 13, she’s been learning digital art and participated in friends' projects as an artist. Graduated from art school and KNUCA, studies at the graphic faculty of Projector Institute. Currently working at @bloome__ua. Created illustrations for Yamaha, Kalush and Kukurudza.`,
    id: 'nika_kurilenko',
  },
  {
    name: 'AlgorithmAB',
    avatar: 'AlgorithmAB.png',
    descriptionUa: `Я почав вчитися малювати у віці чотирьох років, і з того часу я малюю форми, кольори, текстури, людей, ідеї та архітектурні простори. Я все життя був художником і близько 15 років архітектором. Моє послання таке: про естетику та якість ніколи не слід забувати, незважаючи ні на що`,
    descriptionEn: `I started learning to draw at the age of four, and since then I have been drawing shapes, colors, textures, people, ideas, and architectural spaces. I have been an artist all my life and for about 15 years an architect. My message is: aesthetics and quality should never be forgotten no matter what`,
    id: 'algorithm_ab',
  },
  {
    name: 'Yu Andriichuk',
    avatar: 'yuseless.me.png',
    descriptionUa: `Народилася 1995 року в Житомирі. Магістр образотворчого мистецтва (Університеті мистецтв у Познані), зараз навчається в аспірантурі Інституту антропології та етнології Університету Адама Міцкевича. Професійно займається ілюстрацією, як хобі - аналоговою фотографією (середній формат), а в науковій роботі цікавиться темами на перетині food, animal та women's studies. Напротязі найближчих років прагне розробити та активно використовувати метод дослідження, який передбачає практичне застосування навичок зі сфери образотворчого мистецтва в міждисциплінарних дослідженнях, і намалювати кілька коротеньких історій.`,
    descriptionEn: `Born in 1995 in Zhytomyr, Ukraine. Master of Fine Arts (University of the Arts in Poznań), currently studying at the graduate school of the Institute of Anthropology and Ethnology of Adam Mickiewicz University. She is engaged in illustration and analog photography (medium format), and in scientific work she is interested in topics from the intersection of food, animal and women's studies. For the next few years, she aims to develop and apply a research method that involves the practical application of skills from the field of visual arts in interdisciplinary projects, and draw several short stories.`,
    id: 'yu_andriichuk',
  },
  {
    name: 'Irene Neyman',
    avatar: 'Irene Neyman.PNG',
    descriptionUa: `
Привіт, я Ірен! Допитливий та динамічний ілюстратор та графічний дизайнер родом з України, який створює сильний візуальний та емоційний зв'язок між дизайном та брендом.

Я вкладаю серце і душу в кожну зі своїх ілюстрацій, адже я занурена в цю сферу з дитинства. Моє прагнення мати хобі, яке було б моєю роботою, стало настільки сильним, що я почала поглинати якнайбільше інформації, пов'язаної з ілюстрацією, щоб точніше зрозуміти, чого я хочу. Саме тому я вирішила повністю змінити напрямок свого життєвого шляху і пов'язати своє життя з ілюстрацією.

За останні 4+ роки кожен із проектів мав сильний вплив на мене, на творчі здібності та кар'єрне зростання, тому я прагнула використати будь-які можливості для накопичення нового досвіду.

Я часто малюю персонажів, тому що мене багато в чому надихають люди та їхня здатність робити наше життя яскравішим та дивовижним. Я також шукаю натхнення у подорожах, музиці, культурах та книгах.

Моє найбільше переконання в тому, що людина може досягти абсолютно всього сама — головне її бажання! Це позиція, яку я дотримувався раніше і продовжуватиму дотримуватися, оскільки вона допомогла мені дізнатися про все, що я знаю, і стати тим, хто я є.
`,
    descriptionEn: `
Hi, I'm Irene! Curious and dynamic self-made illustrator & graphic designer originally from Ukraine, who creates a strong visual and emotional connection between designs and brands.

I put my heart and soul into every one of my pieces, because I have been immersed in illustrating since I was a child. My longing to have a hobby that would be my job became so strong that I began to absorb as much information as possible in order to understand what exactly I want. That's why I decided to completely change the course of my life journey and to connect my life with a career in the arts.

Over the past 4+ years, each of projects has had a strong impact on both my artistic abilities as well as my career growth, which is why I strived to use all opportunities as a way to accumulate new successful experiences. 

I often draw characters, because I'm largely inspired by people and their ability to make our life brighter and more colorful. I also look for inspiration from travel, music, cultures and books.

My biggest belief is that a human being can achieve absolutely everything on his own — the main thing is his desire! This is the position I have kept before and will continue to keep, as it helped me learn everything that I know and became who I am.
`,
    id: 'irene_neyman',
  },
  {
    name: 'Yana Svyatkina',
    avatar: 'Yana Sviatkina.jpg',
    descriptionUa: `
Яна Святкіна, р.н. 1979, мешкає в Києві
Біографія
Освіта: вивчала бізнес-адміністрування в менеджменті в Міжнародному християнському університеті, Київ; вивчала базову та концептуальну фотографію, а також композицію та колір (курс Єльського університету) у Школі фотографії Марущенка, Київ; закінчила курс ""Ілюстрація: засоби вираження"" в школі Projector, відвідувала численні приватні курси малювання та ілюстрації.
Протягом свого творчого шляху я спробувала акторську майстерність, фотографію, а згодом, в решті решт малюнок та живопис. Я вважаю, що такий різноманітний досвід збагачує мої роботи. Більшість життєвого часу працювала у сферах, не пов’язаних безпосередньо з мистецтвом, проте приймала участь у різноманітних групових фотовиставках в Києві і за кордоном, в ілюстративній сфері переважно створювала роботи на приватні замовлення.`,
    descriptionEn: `
Yana Sviatkina, b. 1979, lives in Kyiv
Biography
Education: studied Business Administration in Management at International Christian University, Kyiv; studied basic and conceptual photography, Composition and Color (Yale University course) at Maruschenko School of Photography, Kyiv; completed course Illustration: means of Expression at Projector School, took numerous private courses in drawing and illustration. During my artistic journey I have tried acting, photography and then finally drawing and painting. I believe such diverse experiences enrich my works. Most of the time worked in areas not connected with art directly, however took part in various group photography exhibitions, in illustrative area mostly created works for private commissions.
`,
    id: 'yana_svyatkina',
  },
  {
    name: 'Olena Kalinina',
    avatar: 'creblur.png',
    descriptionUa: `Олена, 23. Мульти-дисциплінарний митець, захоплююся експериментальним мистецтвом та міксом ілюстрації, анімації, графічного дизайну.`,
    descriptionEn: `Olena, 23. Multi-disciplinary creative, who is passionate about experimental art and the mix of illustration, animation and graphic design.`,
    id: 'olena_kalinina',
  },
  {
    name: 'Olena Dziura',
    avatar: 'Olena Dziura.png',
    descriptionUa: `Я - уродженка м. Рівного. За освітою - дизайнер-графік, проте зараз працюю як UI/UX дизайнер. З дитинства займаюсь ілюстрацією та мріяла оформлювати дитячі книжки, проте, на даний момент творчість - це лише моє хобі.`,
    descriptionEn: `I was born in Rivne. As a student, I studied graphic design  but now I work as a UI/UX designer. As a child I used to draw and wanted to make illustrations for childrens' book. However at the moment creativity is only my hobby.`,
    id: 'olena_dziura',
  },
  {
    name: 'Erlikh Dima',
    avatar: 'Erlikh_Dima.png',
    descriptionUa: `
НАРОДИВСЯ 01.02.1989 В М ОДЕСА, УКРАЇНА.
ХУДОЖНИК, КУРАТОР, МЕНЕДЖЕР СОЦІАЛЬНО-КУЛЬТУРНИХ ПРОЕКТІВ, ГРОМАДСЬКИЙ ДІЯЧ.
ОСВІТА:
В 2013 РОЦІ ЗАКІНЧИВ МІЖНАРОДНИЙ ГУМАНІТАРНИЙ УНІВЕРСИТЕТ (МДУ) ЗІ СТУПЕНЕМ БАКАЛАВРА, ФАКУЛЬТЕТ ДИЗАЙНУ
В 2011 РОЦІ ЗАКІНЧИВ ОХУ ІМ. ГРЕКОВА М.Б. ФАКУЛЬТЕТ ХУДОЖНЬОГО ОФОРМЛЕННЯ (ХО)
C 2013 ЗАНИМАЮСЬ ИСКУССТВОМ В ТАКИХ МЕДИА КАК: ЖИВОПИСЬ, ГРАФИКА, ИНСТАЛЛЯЦИЯ, СКУЛЬПТУРА
`,
    descriptionEn: `
BORN:
01.02.1989 IN ODESSA, UKRAINE.
EDUCATION:

INTERNATIONAL HUMANITIES UNIVERSITY (MSU) ENDED BECAUSEOF BACCALA, FACULTY OF DESIGN, IN 2013
IN 2011, Odessa art school M.B.Grekova
IN 2013 USED BY ART IN SUCH MEDIA AS: PICTURE, GRAPHICS,INSTALLATION, SCULPTURE`,
    id: 'erlikh_dima',
  },
  {
    name: 'Anastasiia Taraskevych',
    avatar: 'taraskevych.jpeg',
    descriptionUa: `Ілюстратор із міста Дніпро.
Малюю мінімалістичні ілюстрації для душі та бізнесу.`,
    descriptionEn: `Illustrator based in Dnipro.
I draw minimalistic illustrations for the soul and business.`,
    id: 'anastasiia_taraskevych',
  },
  {
    name: 'Anya Kislaya',
    avatar: 'Anya Kislaya.jpg',
    descriptionEn: `
Born in Kherson, Ukraine, Anya Kislaya obtained Master’s degree in Fine Arts. After working at State University of Kherson she left for Kyiv to become an illustrator at game production company.  Before the full-scale invasion, she lived in Kherson
Since 2009 she takes active part in exhibitions and group projects as well as workshops and art residences. In her creative work she appeals to the role of women in society, their limitations of freedom and rights as well as the conception of “beauty"". Anya works with graphics, painting, installation, photography and video.

EDUCATION
MFA diploma with distinction in Fine Arts, Kherson State University, Kherson, Ukraine 2005 - 2011
Academic Lyceum of Kherson State University. Major: Fine Arts. 2003 – 200

TRAINING
Participation in student program of exchange  in order to get new knowledge in the academy Jan Dlugasha, Department of Fine Art, Czestochowa, Poland  

OTHER EXPERIENCE
Exhibitions

Participation in the exhibition ""Sisters"", Art Gallery Insha, (Kherson, Ukraine) Spring 2021
Participation in the exhibition ""The price of love"", Art Gallery Insha, (Kherson, Ukraine) Spring 2020
Participation in the exhibition Ball Ball, A4, Karas Gallery (Kiev, Ukraine), winter 2019
Participation in the exhibition “Biennale of Contemporary Art Bread”, Khlebzavod space (Kiev, Ukraine), winter 2019
Participation in Feminnale, Kyrgyz National Museum of Fine Arts. Gapara Atiyeva, (Bishkek, Kyrgyzstan), Fall 2019
Participation of Ma Quarter '19 Festival on the New in Feminist Discourse, Art Studio Passage, (Lviv, Ukraine), Fall 2019
Participation in the exhibition ""AGE"", art space 8 Pier, (Mykolaiv, Ukraine), autumn 2019
 Participation in the exhibition ""Waves of Reality"", IPSM Gallery, (Kiev, Ukraine), Fall 2019
 Participation in the Art Exhibition of the International Festival ""Paradzhanov"", Levandivka Cinema, (Lviv, Ukraine) summer 2019
Participation in the art festival ""Deconstruction"" in Svirzhsky castle in the installation department, (Svirzh, Ukraine), summer 2019 
Participation in the group exhibition ""Fable of freedom"" in the Zbarazsky castle, (Zbarazh, • Ukraine), summer 2019
Participation in the StreetArt in UrbanCAD Festival (Kherson, Ukraine), spring 2019 
Participation in Art Projekt Worpswede Wirtschaft, exhibition in several cities of Germany, winter 2016
Exhibition, Art project Feldman, Feldman’s park (Kharkiv, Ukraine) Autumn 2015
Exhibition, National Union of Artists, (Kherson, Ukraine)  Autumn 2014
Exhibition Strannoe, First Art-Residence, (Kherson, Ukraine) Summer 2014
Exhibition Complex of Ukrainian, Art Gallery Arteriya (Odessa, Ukraine) Winter 2014
Exhibition to the day of painter, National Union of Artists (Kyiv, Ukraine) Autumn 2013
Festival GogolFest, Kyiv, Ukraine) Autumn 2013
Young Art of a Young Country, National Union of Artists, (Kyiv, Ukraine) Summer 2013
Solo Exhibition, Oil Painting Exhibition Ukraine, Kherson, Art Gallery “ Folding» (Kherson, Ukraine) Summer 2013
Exhibition, National Union of Artists, (Kherson, Ukraine) Summer 2013
Exhibition, Festival Terra future, Kherson’s Museum O. Shovkunenko, (Kherson, Ukraine) Autumn 2012
Exhibition, National Union of Artists, (Kherson, Ukraine) Autumn 2012
Exhibition, Festival Terra future, Kherson’s shoes Factory, (Kherson, Ukraine)        Autumn 2011
MFA Thesis Exhibition, Student Spring, Exhibition Hall of the Kherson Artists Union,
(Kherson, Ukraine) Spring 2011
Charity Exhibition, Art Gallery Blue cat, (Kherson, Ukraine) Spring 2011
Exhibition, National Union of Artists, Students Spring, (Kherson, Ukraine) Spring 2010
Exhibition, Festival visual art Sunflowers, Art Gallery Blue cat, (Kherson, Ukraine) Spring 2009
Exhibition, Festival Young Artists Creative suitcase, Exhibition Hall of House culture, (Rivne, Ukraine) Autumn 2008"
`,
    descriptionUa: `
Анья Кисла народилася в Херсоні, Україна. Отримала ступінь магістра образотворчого мистецтва. Після роботи в Херсонському державному університеті поїхала до Києва, щоб стати ілюстратором у компанії з виробництва ігор. До повномасштабного вторгнення проживала в Херсоні
З 2009 року бере активну участь у виставках і групових проектах, а також майстер-класах і арт-резиденціях. У своїй творчості вона звертається до ролі жінки в суспільстві, обмеження її свободи та прав, а також до поняття «краса». Аня працює з графікою, живописом, інсталяцією, фотографією та відео. До повномасштабного вторгнення проживала в Херсоні`,
    id: 'anya_kislaya',
  },
  {
    name: 'Mark Bushuiev',
    avatar: 'Mark Bushuiev.png',
    descriptionUa: `Марк Бушуєв – художник, дизайнер досвідчений у створенні цифрових та традиційних творів образотворчого мистецтва, а також розробки айдентики. Засновник дизайн-агенції Red Eye Depot.

В минулому працював у медіа галузі, будучи задіяним у зйомках реаліті-шоу та багатьох YouTube-проектів в якості звукорежисера чи оператора. 

А нині вкладає усі свої сили та креатив у мистецтво та дизайн. 
`,
    descriptionEn: `Mark Bushuev is an artist and designer experienced in creating digital and traditional works of art, as well as developing brand identity. Founder of the Red Eye Depot design agency.

In the past, he worked in the media industry, being involved in the filming of reality shows and many YouTube projects as a sound engineer or cameraman.

And now he invests all his energy and creativity in art and design.`,
    id: 'mark_bushuiev',
  },
  {
    name: 'Yulya Nikolaieva',
    avatar: 'Yulya.jpg',
    descriptionUa: '',
    descriptionEn: `Yulya Nikolaieva is an illustrator and motion designer from Ukraine. She has been working for around 7 years and creating editorial blogs, books, and promo animations.
She is looking for inspiration and themes for personal working on the street and she loves to show in compositions dynamics and people communications.

Clients were Discovery, Exadel, American House in Kyiv, startups: Naviga Global, Be.live, and IO technologies.`,
    id: 'yulya_nikolaieva',
  },
  {
    name: 'Milak Karina',
    avatar: 'Milak Karina.jpg',
    descriptionUa: `Я дизайнер та художник з досвідом роботи більше 5 років. Я вивчаю всі напрямки, починаючи від олівця, акварельного чи олійного живопису завершуючи 3D візуалізацією та анімацією. Також маю досвід роботи з сайтами та мобільними додатками, оформлення фірмового стилю. Найбільше полюбляю 2D та 3D графіку, хочу створювати неймовірне оточення та персонажів для комп'ютерних ігор, фільмів, мультиків, реклами! Працюю щодня задля покращення своїх навиків та вмінь, маю попереду грандіозні плани. Вже працюю над цікавими NFT проєктами, комп'ютерною грою та власною колекцією NFT присвячену Героям України.`,
    descriptionEn: `I am a designer and artist with more than 5 years of experience. I study all directions, starting from pencil, watercolor or oil painting, ending with 3D visualization and animation. I also have experience working with websites and mobile applications, corporate identity design. I love 2D and 3D graphics the most, I want to create incredible environments and characters for computer games, movies, cartoons, advertisements! I work every day to improve my skills and abilities, I have big plans ahead. I am already working on interesting NFT projects, a computer game and my own NFT collection dedicated to the Heroes of Ukraine.`,
    id: 'milak_karina',
  },
  {
    name: 'Jutta Kivilompolo',
    avatar: 'jutta ulrika.jpeg',
    descriptionUa: ``,
    descriptionEn: `I'm a Finnish Illustrator and Art Director working for clients all around the world. I love edgy colours, rich messy patterns and interesting compositions. I get inspired by the nature, beautiful people, dreams and urban phenomena. 

I love working for both, digital and traditional platforms, making everything beyond magazine illustrations / book design to user interfaces and interior illustration.`,
    id: 'jutta_ulrika',
  },
  {
    name: 'Bezkorovainyi Oleksii aka eviltorn',
    avatar: 'eviltorn.jpg',
    descriptionUa: `Привіт. Я Безкоровайний Олексій. Діджитал митець із Київа зі школи мріяв створити свій фаллаут і серію коміксів по ньому, тож вистроїв свою майбутню кар'єру навколо професійного і напівпрофесійного геймдеву.
За плечима близько 14 років роботи в великих і не дуже великих компаніях в якості графічного дизайнера, іллюстратора,художніка.
Наразі активно займаюсь НФТ, і підтримкою українських художників новачків.`,
    descriptionEn: `Hello. I am Bezkorovayn Oleksiy. A digital artist from Kyiv dreamed of creating his Fallout and a series of comics based on it since school, so he built his future career around professional and semi-professional game development. He has about 14 years of work in large and not so large companies as a graphic designer, illustrator, and artist. Currently, I am actively involved in the NFT and support of Ukrainian novice artists.`,
    id: 'eviltorn',
  },
  {
    name: 'Sheverev Dmytro',
    avatar: 'shesvit.png',
    descriptionUa: `Народився у Києві, виріс у Києві, живу у Києві. Моє оточення - вся Україна, моє натхнення - всі ці люди. Не уявляю себе тою людиною, якою я зараз є, без продавчинь у магазинах, поліцейських біля метро, лікарів у лікарнях, без всіх своїх вчителів, коллег, друзів і рідних. Те що мене оточує формує мене, але саме я надаю значення всьому що мене оточує. Мої роботи - це те що ми відчували та забули, те що ми відчуваємо та не зізнаємось, те що ми ще відчуємо та зараз цього не бачимо. Моя ідея - гуманізм, моя ціль - спокій та усмішки.`,
    descriptionEn: `Born in Kyiv, grew up in Kyiv, live in Kyiv. My environment is all of Ukraine, my inspiration is all these people. I can't imagine myself as the person I am now without saleswomen in stores, police officers near the subway, doctors in hospitals, without all my teachers, colleagues, friends and relatives. What surrounds me shapes me, but it is I who give meaning to everything that surrounds me. My works are what we have felt and forgotten, what we feel and do not admit, what we will still feel and now do not see. My idea is humanism, my goal is peace and smiles.`,
    id: 'shesvit',
  },
  {
    name: 'Surenzh',
    avatar: 'surenzh.jpeg',
    descriptionUa: `Кажуть, що «дизайнер це творець сенсу та форми», — цим я і займаюсь, розробляю концепції які розповідають історію. Це problem-solving процес що перетворює суть проекту в скульптурну візуальну форму. Я ARTivist, тож вірю що сучасні технології та цифрове мистецтво можуть кардинально змінити світ. Тому я захоплююсь своєю роботою, і тому беру участь в волонтерській дизайнерській діяльності.`,
    descriptionEn: `As one said, "designer is a creator of meaning and form" — and that's exactly who I am. I develop concepts that tell stories, it is a problem-solving process which transforms the project's attitude into the hewn, visual form of its essence. I am an ARTivist who believes that modern technologies and digital art can bring profound changes to the world. That's why I am passionate about my work and that's why I take part in design volunteering.`,
    id: 'surenzh',
  },
  {
    name: 'Serhii Mirchuk',
    avatar: 'Serhii Mirchuk.jpg',
    descriptionUa: `Ілюстратор та 2D дизайнер з Вінниці.`,
    descriptionEn: `I'm an illustrator and 2d designer based in Vinnytsia.`,
    id: 'serhii_mirchuk',
  },
  {
    name: 'Katalina Maievska',
    avatar: 'Katalina Maievska.jpg',
    descriptionUa: `Народилась та жила в мирному любому Києві. Навчалась на менеджера, але насправді хотіла стати дизайнером. Ось і стала. Зараз працюю на перемогу України як тільки можу.`,
    descriptionEn: `I was born and lived in peaceful Kiev. I was studying to be a manager, but I really wanted to become a designer. So I became. Now I am working for the victory of Ukraine as much as I can.`,
    id: 'katalina_maievska',
  },
  {
    name: 'Natasha Steshenko',
    avatar: 'Natasha Steshenko.jpg',
    descriptionUa: `Народилася: Канів, Україна, 1990
Освіта: НТУУ КПІ, Видавничо-поліграфічний інститут, кафедра графіки.
Персональні виставки:
2020 – "Простір для сенсу", Аукціонний дім Корнерз, Київ
2021 – "Простір для сенсу", бар Гніздо, Київ
2021 – "Ізометрія реальності", галерея Portal 11, Київ`,
    descriptionEn: `Born: Kaniv, Ukraine , 1990
Education: Kyiv Polytechnic University at the Department of Graphic Arts
Solo exhibitions:
2020 – "Space for Sence", Auction house "Corners", Kyiv, Ukraine
2021 – "Space for Sence", Gnezdo bar, Kyiv, Ukraine
2021 – "Isometry of Reality", gallery "Portal 11", Kyiv, Ukraine
`,
    id: 'natasha_steshenko',
  },
  {
    name: 'Anna Babysheva',
    avatar: 'Anna Babysheva.jpg',
    descriptionUa: `Художник і ілюстратор з 2016 року.
Маю диплом психолога та викладача англійської мови. Троє дітей. Половина моєї сім'ї в Україні (наша бабуся ще в Києві, вона 96 років тому, до нас приїхала наша двоюрідна сестра і ми могли зустрітися тут, у Тбілісі) і половина знаходиться в Росії. Ми переїхали до Грузії в кінці лютого, тому що ми проти ВІЙНИ і зараз намагаємося почати нове життя.`,
    descriptionEn: `Artist and illustrator since 2016. 
Have the diploma of psychologist & the teacher of English. Three children. Half of my family is in Ukraine (our grandma is still in Kyiv, she's 96 y.o., our cousin came to us and we could meet here, in Tbilisi) and half is in Russia. We moved to Georgia in the end of February because we are against WAR and now are trying to start a new life.`,
    id: 'babysheva_anna',
  },
  {
    name: 'Dasha Podoltseva',
    avatar: 'Dasha_Podoltseva.jpg',
    descriptionUa: `Даша Подольцева — українська графічна дизайнерка, художниця. Народилася у Києві. Закінчила Києво-Могилянську академію. Вивчала академічний малюнок та живопис у майстерні Олександра Тітова. Навчалась у літній школі Central Saint Martins / University of Arts London, школі плаката Петра Банкова. Випускниця школи урбаністики Canactions Studio 1. Співзасновниця проєкту Серія__, присвяченого українським панелькам. Працює з такими темами, як публічний простір, предметний світ та “тимчасові незручності”. Серед вибраних виставок: “Ким я є?”, Одеса, Харків, Ужгород, Івано-Франківськ, Київ (2019-2020), “Лабіринт пам’яті”, Мистецький арсенал, Київ (2020), “VNGRDR”, PostPlayLab, Київ (2020), “Різні разом”, Мистецький арсенал, Київ (2021), B.I International Poster Art Biennale, Корея (2021), “Stand With Ukraine”, UCLA Design Media Arts, Лос-Анджелес (2022), “Голоси”, Український дім, Київ (2022), “Fragile Architecture. SERIA___”, VN Residence, Цюрих (2022).`,
    descriptionEn: `Ukrainian graphic designer, visual artist. Co-founder of the «Seria» project. Her works were exhibited by the 4th Block Graphic Designers Association, Boston, MA; “STAND WITH UKRAINE!” exhibition in Tbilisi, Georgia; «18th International Biennale of Theatre Posters 2022» in Rzeszów, Poland, «Piazza Ucraina» within the program of «La Biennale di Venezia, Giardini della Biennale», Venice, Italy; «Ukrainian War Time Posters Exhibition», Ukrainian House Art Centre, Kyiv Ukraine; «Stand With Ukraine» show, UCLA Design Media Arts, Los Angeles, California, USA`,
    id: 'dashapodoltseva',
  },
  {
    name: 'Taras Seniv',
    avatar: 'Taras_Seniv.jpg',
    descriptionUa: `Привіт світ! Мене звати Тарас Сенів. Я архітектор, який закоханий в графічний дизайн. Брендинг, ілюстрації, графіка, веб-дизайн. На це все я згідний - лиш би Україна отримала перемогу!`,
    descriptionEn: `Hello world! My name is Taras Seniv. I am an architect who is in love with graphic design. Branding, illustrations, graphics, web design. I agree with all of this - if only Ukraine would win!`,
    id: 'senivtaras',
  },
  {
    name: 'Sveta Bilyk',
    avatar: 'Sveta_Bilyk.png',
    descriptionUa: `Я 3D і VR художник з України, зараз живу в Парижі.

Я досліджую, як зберегти баланс між минулим, сьогоденням і майбутнім.
Минуле для мене - це знати своє коріння, поважати, зберігати та примножувати національну спадщину, до якої ти належиш.
Сьогодення - це психічне здоров'я кожного з нас та турбота про внутрішній світ. Я вірю, що ми поширюємо те, чим самі наповнені.
Наше майбутнє залежить від наших стосунків з природою. Воно можливе лише тоді, коли ми знайдемо спосіб бути в гармонії з навколишнім середовищем.`,
    descriptionEn: `I\`m a 3D and VR artist from Ukraine, currently based in Paris.

I explores how to keep the balance between past, present and future.
The past for me knowing your roots, respecting, preserving and multiplying the national heritage you belong to.
The present is about the mental health of each of us and taking care of the inner world. I believe that we spread what we are full of.
Our future depends on our relations with nature. It is possible only if we find a way to be in harmony with nature.
`,
    id: 'svetabilyk',
  },
  {
    name: 'Oksana Tsukanova aka carrot4all',
    avatar: 'Oksana_Tsukanova.png',
    descriptionUa: `Ілюстраторка: Цуканова Оксана aka @carrot4all

До 2014 року жила у Луганську. Останні 8 років моїм домом стала Полтава.

Як ілюстраторка я знайшла себе у малюванні оточуючого середовища, природи та рослинного світу. Цю свою любов до природи та рослинного світу я реалізую у створенні дизайну патернів та орнаментів.

Техніка (стиль) всіх ілюстрацій які я створила з початку повномасштабної війни в Україні відрізняється від того, що я робила до цього. На цей стиль ілюстрації мене надихнули традиційні техніки друку, такі як ліногравюра, естамп та ін. З 24 лютого я не могла намалювати нічого звичного для мене, у спосіб звичній для мене… Тож ця техніка “вирізання з плями невизначеної форми” (взамін малювання лінією) лягла на  мій стурбований розум тоді як дуже природня, та залишається такою і понині.`,
    descriptionEn: `Illustrator: Tsukanova Oksana aka @carrot4all

Lived in Luhansk till July 2014. Last 8 years my hometown has been Poltava.

As an artist and illustrator I found myself in drawing surroundings, nature and plants and transform this love to pattern design.
Technique for all illustrations I’ve created since the beginning of the full scale war in Ukraine  was inspired by traditional hand printing techniques, such as linocut, etching, stamping ets. Since February 24 I couldn’t create anything I used to in a way I used to… So for my troubled mind this technique of cutting out from a random shape (not drawing in the traditional way) felt right and it still does.`,
    id: 'carrot4all',
  },
  {
    name: 'VLAD',
    avatar: 'eneftenko.png',
    descriptionUa: `Це моє давнє заняття, котре зараз набуло нового змісту та сподіваюсь буде корисним тут.

Люблю цікаве й в різних його втіленнях.`,
    descriptionEn: `This is my old pastime which now has an another meaning and I hope will be useful here. 

I like interesting and in its various avatars.`,
    id: 'eneftenko',
  },
  {
    name: 'Olha Dubrovina',
    avatar: 'doljastar.png',
    descriptionUa: `Ілюстраторка та графічна дизайнерка, співзасновниця об’єднання ілюстраторів “ВМІЮ”.
Створює цифрових персонажів для брендів та перетворює їх у стікери чи інший необхідний мерч.
В захваті від людських облич та яскравих персонажів, тому малювати стилізовані портрети або скетчеві репортажі особливе задоволення. Ну і фешн ілюстрація – це любов:)
Проєкти/виставки, в яких брала участь
-- Видання Stranger’s Guide: Discover the Ukraine that was—and the one that will be. https://strangersguide.com/issue/ukraine-guide/
-- Аудіовізуальне видання «The World Stands with Ukraine», разом із «Митцем миру» @unesco Германом Макаренком та оркестром @kyivclassic (@artit).
-- SupportUkraineGallery (NFT)
-- «113днів війни» (Steinbarg Gallery&Cafe, Чернівці, Україна)
-- «Коли говорять гармати - музи не мовчать!» (галерея Мадам Палмгрен, Львів, Україна)
-- #ZATURNIKETOM (Метро, Київ, Україна)
`,
    descriptionEn: `Illustrator and graphic designer, co-founder of the association of illustrators ""VMIYU"".
Creates digital characters for brands and turns them into stickers or other necessary merch.
Delighted in human faces and bright characters, drawing stylized portraits or sketch reports is a special pleasure. Well, fashion illustration is love:)
Projects/exhibitions in which she participated:
-- Edition Stranger's Guide: Discover the Ukraine that was—and the one that will be. https://strangersguide.com/issue/ukraine-guide/
-- Audiovisual publication ""The World Stands with Ukraine"", together with @unesco ""Artist of Peace"" Herman Makarenko and the @kyivclassic (@artit) orchestra.
-- SupportUkraineGallery (NFT)
-- ""113 Days of War"" (Steinbarg Gallery&Cafe, Chernivtsi, Ukraine)
-- ""When the guns speak - the muses are not silent!"" (Madame Palmgren Gallery, Lviv, Ukraine)
-- #ZATURNIKETOM (Metro, Kyiv, Ukraine)
`,
    id: 'doljastar',
  },
  {
    name: 'Abrosimova',
    avatar: 'abrosimova.jpeg',
    descriptionUa: `Ольга Абросімова – молода українська художниця, яка працює в стилі сучасного живопису та портрета.  Її картини торкаються актуальних тем.  Тут вибухи почуттів і фіксація моментів, які нерозривно пов'язані зі свідомістю сучасного покоління.  Натхненна фламандськими натюрмортами, художниця використовує у своїх роботах темний фон і велику кількість яскравих об’єктів і акцентів.
 Ольга народилася в 1993 році в Харкові, Україна.  Зараз живе і працює в Києві.  Закінчила Національний юридичний університет, отримавши ступінь магістра права.
 Тоді ж у неї з’явилася пристрасть до малювання, яка визначила її подальше життя.
 Її картини про задоволення, почуття, мрії, бажання та пристрасті.  Її картини про залежності, політичні погляди, споживчі стосунки, гріховне осудження та бажання здаватися кращим.
 Її картини про спокуси, слабкість, гонитву за удачею.
 Її картини про особистість.`,
    descriptionEn: `Olha Abrosimova is a young Ukrainian artist who works in modern painting style and portraiture. Her paintings touch upon relevant topics. There is an explosions of feelings and recording of moments that are inextricably linked with consciousness of modern generation. Inspired by Flemish still-life paintings the artist uses a dark background and a large number of bright objects and accents in her works.
Olha was born in 1993 in Kharkov, Ukraine. Now she lives and works in Kyiv. She graduated from National Law University having received a master's degree in law.
At the same time, she gained a passion for drawing that predetermined her future life.
Her paintings are about satisfaction, feelings, dreams, desires and passions. Her paintings are about addictions, political views, consumer relations, sinful condemnation and desire to seem better.
Her paintings are about temptations, weakness, pursuit of good luck.
Her paintings are about personality.`,
    id: 'abrosimova',
  },
  {
    name: 'Kesan Oksana Khyzhniak',
    avatar: 'kesan_oksanakhyzhniak.jpg',
    descriptionEn: `OKSANA KHYZHNIAK @kesan.oksanakhyzhniak (born in 1968,
Zaporizhzhya, Ukraine) is a Ukrainian watercolorist, art teacher,
master of Petrykivka painting, illustrator. After college art and craft
Oksana follow discover art. The artist prefers watercolors but does
not stop experimenting with other techniques and styles. Petrykivka
painting, land art, dress decoration, murals, illustration, collaboration
with music. Since 2015 Kesan has been a member of IWS
(International Watercolor Society). Starting with fine art landscapes
and flowers, her work has evolved into more abstract images. ""I came
to abstraction as a more comprehensive and emotionally precise
style"" she says.
At the moment Oksana is working on two projects:
* Initially, the project ""my abstract visible world"" is a general idea, a
large format triptych, several smaller paintings and knitted details for
the project.
*On December 31, work on the Calendar 2022 series ends. The series
of watercolor works Calendar 2022 is a sublimation of impressions
from the surrounding diversity, a self-exploration of inspiration.
Every day a new work is posted on my Instagram page. Furthermore
this is a creative search for new watercolor painting techniques, color
combinational solutions in the intended 30x30 cm format.
Since March 2022, Oksana has been able to work in Sweden at Misschiefsthanks to the collaboration with Artist at
Risks @artistsatrisk and @swan_residency_network.
Oksana has been exhibited in Ukraine as well as internationally. Her
paintings are in collections in Ukraine, France, Sweden, Germany,
Israel, Norway, UAE, USA, Czech, Poland, Italy and Greece.
`,
    id: 'kesan_oksanakhyzhniak',
  },
  {
    name: 'PaulinaRez',
    avatar: 'paulina_rez.jpeg',
    descriptionUa: `Мене звати Пауліна , я з України, мені 21 рік. За освітою я психолог, але моя душа завжди лежала до малювання. С початку війни я зрозуміла, що хочу займатися тим, що мені найбільше подобається. Я малюю вже 5 місяців та на данний момент працюю над двома колекціями.`,
    descriptionEn: `My name is Paulina, I am from Ukraine, I am 21 years old.  I am a psychologist by education, but my soul has always been drawn to drawing.  Since the beginning of the war, I realized that I want to do what I like the most.  I've been drawing for 5 months now and I'm currently working on two collections.`,
    id: 'paulina_rez',
  },
  {
    name: 'Philipp Kapustin',
    avatar: 'phill_kapustin.jpg',
    descriptionUa: `Доброго дня, мене звати Філіп Капустін.

Я сучасний український митець. Займаюся живописом, ілюстрацією та створюю інсталяції. Протягом багатьох років я рухався до власного художнього стилю, натхненний роботами старих майстрів кубізму та модернізму, таких як Малевич та Пікассо.
 
Я малював і розвивав навички сучасного цифрового митця, та завдяки цьому симбіозу я створив свій власний унікальний стиль. Старе і нове, геометрія і органіка. Моя мета — створити і принести в цей світ щось нове і неповторне - Цифровий Неоубізм.`,
    descriptionEn: `Hello, my name is Philipp Kapustin.

I am a modern Ukrainian artist and crypto artist. I am engaged in painting, illustration and create installations. Over the years I have been moving towards my own artistic style inspired by the works of the old masters of Cubism and Modernism such as Malevich and Picasso. 

I drew and developed the skills to be a modern digital artist, and through this symbiosis I created my own unique style. Old and new, geometry 

and organicity. My goal is to create and bring something new and unique to this world — Digital Neoubism.`,
    id: 'phill_kapustin',
  },
  {
    name: 'Albert Nikogosyan & 36pm',
    avatar: '36pm.jpg',
    descriptionEn: `Hi, I'm Albert Nikogosyan, or 36pm - a crypto artist with ADHD in the genre of META ABSTRACT ⍫ Selected Artist: NFT.NYC23 ⌂ The NFT Magazine ⌂ MONOGRAMA - 1st GLOBAL ARTIVIST COLLECTIVE ⌂`,
    id: '36pm',
  },
  {
    name: 'Alex Deer',
    avatar: 'alex_deer.jpg',
    descriptionUa: `Харків. Район Жуковського. Разбитий дім.

Київська область. Погріб. Сусідьски діти сплять на моєму дощевику.

50 смс, відправлених мамі. ""Ми живі"". Жодне з них не доходить до адресата.

Моє життя останній рік досить мінливе та непередбачуванне. Мені важко розповісти про себе словами. Віддаю перевагу художній мові.`,
    descriptionEn: `Kharkiv. Zhukovsky neighborhood. A broken home.

Kyiv region. Cellar. Neighbor children sleep on my raincoat.

50 text messages sent to my mother. ""We are alive"". None of them send the recipient.

My life has been quite changeable and unpredictable for the past year. It is difficult for me to describe myself in words. I prefer artistic language.`,
    id: 'alex_deer',
  },
  {
    name: 'Daria Ivashchenko',
    avatar: 'divashchenko_art.jpg',
    descriptionUa: `Українська мисткиня, яка працює в техніці живопису. Вона розкриває сутність природних тем у своїх творах, звертаючись до флори та фауни на суші та під водою. Вона також працює з образами та асоціаціями глибокої підсвідомості та ідентичності, пізнаючи при цьому свій внутрішній світ та його взаємодію із зовнішнім. Оскільки людина є невід’ємною частиною всього живого на Землі. Ці глибокі підсвідомі зв’язки стають ідеями для творів мисткині.

Дар’я працює переважно в реалізмі, чудово передаючи кольори та форми.
Її художня практика здебільшого характеризується використанням металу, символізуючи мінливість та непостійність. Вивчає здатність поверхонь відображати реальність і відтворює це у своїх роботах.

Картини знаходяться в приватних колекціях багатьох країн: України, Англії, Америки, Австрії, Швейцарії, Іспанії, Німеччини та Греції.

Бере участь у виставках у галереях та музеях.
Роботи прикрашають Офіс Президента України, Володимира Зеленського.`,
    descriptionEn: `The Ukrainian artist, that works in the painting technique. She reveals the essence of natural themes in her artworks, addressing flora and fauna on land and under water. She also works with images and associations of the deep subconscious and identity, getting to know her inner world and its interaction with the external one in the process. As the human is an inseparable part of all life on Earth. These deep subconscious connections become ideas for the artist's artworks. 

Daria works mostly in realism, perfectly conveying colors and shapes.
Her artistic practice is mostly characterized by the use of metal leaves, a symbol of variability and impermanence. Studies the ability of surfaces to reflect reality and reproduces this in her artworks.

Paintings are in private collections in many countries: Ukraine, England, America, Austria, Switzerland, Spain, Germany and Greece.

Participate in exhibitions in different galleries and museums.
Decorate The Office of the President of Ukraine.`,
    id: 'divashchenko_art',
  },
  {
    name: 'Zlezlo',
    avatar: 'zlezlo.jpeg',
    descriptionUa: `Мене звуть Оля, мені 22 роки. Я цифровий  художник із Одеси. Своєю творчістю я розкриваю унікальну красу жінок. З недавніх пір у моїй творчості почали з'являтися українські мотиви, тож я хочу привернути увагу до своєї культури та популяризувати Україну.`,
    descriptionEn: `My name is Olya, I'm 22 years old. I am an artist from Odessa. I draw digital art. With my art I show the unique beauty of women. Recently Ukrainian motifs started to appear in my art, so I want to draw attention to my culture and to popularize Ukraine.`,
    id: 'zlezlo',
  },
  {
    name: 'Crevol',
    avatar: 'crevol.jpg',
    descriptionUa: `Привіт, ось моя історія:

Творцем я себе бачив ще з дитячих років, коли я майстрував різні конструкції з підручних засобів, малював по стінах та асфальту всім чим можна, та дражнив своїх вчителів карикатурами на тему: “Що може трапитись поганого зі злою вчителькою:)”
Що було помічено моїми батьками, які прийняли рішення віддати мене в художню школу де мені прищепили ще більшу любов до мистецтва…
Далі був інститут мистецтв в якому я навчався на графічного дизайнера і синхронно з цим розвивав декілька мікробізнесів, що на жаль мене перетворило більше на менеджера який намагався вгодити замовникам, і тоді я ще не  бачив в ілюстрації та Арті чогось глобального в чому можна самореалізуватись(
Поки не натрапив на тему NFT, яка спочатку здавалась ефемерною, але з часом заглибившись все це, я побачив можливість самореалізації як творця та переходу до створення того що прагну та бачу тільки Я, без сторонніх нав'язувань трендів, думок та ідей замовників, аудиторії.

Але це все тривало не довго, тому що як в кожної творчої людини настає період затяжної Депресії як в мене виникла через провал мого “Фріланс стартапу” та великі фінансові проблеми, розібравшись з якими я спочатку поїхав не відпочинок, який на жаль не дав мені можливості вийти з цього стану, але смішне те що в той час (ще до війни) я випадково отримав повістку від військкомату, та хотів  відкупитись, вже маючи на руках необхідну суму, у мене раптом з'явилась думка, що це можливість перебудувати своє життя на новий лад, та абстрагуватись від усього, що було до цього, виховати в собі дисципліну та мужність стояти за себе, своїх близьких та свої ідеї!

Тому я вирішив піти в армію…
Що стало максимально складним випробуванням яке я ще досі долаю:)
Тому, що прийшлось пройти через жорстку, морально та фізично складну систему виховання з мене військового, який готовий до усіх випробувань у житті й тоді було геть не до творчості(

Але минав час і я почав шукати можливість повернутись до мистецтва, спочатку я влаштувався зв'язківцем в штаб зв'язку, де отримав доступ до ПК та інтернету.
У вільний від служби час творив свої перші NFT та розвивався в цій сфері більш поглиблено.Саме  головне я прийняв рішення, що надалі я себе бачу в основному в статусі художника і далі працюватиму в цьому напрямку.

Але тут як і усіх Українців мене застала війна, яка змусила поміняти зручний робочий стіл у Штабі на сидіння в БТР (Бронетранспортері), де я відповідав за зв'язок екіпажів які їхали на бойові виїзди під час визволення Києва, та на виконання інших бойових завдань, і тоді було геть не до творчості(((

З часом виїздів поменшало і почалась польова робота, тому я у вільний час намагався малювати в невеличкому дешевому блокноті, ескізи для майбутніх робіт від руки й навіть документував це все в фото на різноманітних фонах наслідків війни, що можна знайти в соцмережах за тегом #war_background та відео (https://www.instagram.com/reel/Cg-B6J4MiQG/) данні скетчі мотивували багатьох художників які були в тилу, творити й не здаватись попри усе що відбувається, та давало мені сили самому.

На цей момент я вже як 4 місячці несу військову службу в тилу, та розумію, що це ідеальна можливість окрім службових завдань, допомагати хлопцям які нас міняли та несуть службу на фронті зараз, різними шляхами, а саме закупляти амуніцію та все необхідне для їх бойової діяльності.
Шляхом волонтерства, зборів, продажу власного мистецтва, особистими коштами та іншими можливими засобами забезпечити моїх побратимів!!!

Тому творю і не зупиняюсь за для Перемоги, попри обмежені технічні ресурси та мало вільного часу)`,
    descriptionEn: `Art came to me in childhood. I always created some kind of drawings from the materials at hand and visited art school. When I got older, I studied to be a graphic designer. Later I found myself in the NFT space. It was a great opportunity for self-realization. 
At that time, I joined the army and there I began to look for an opportunity to return to art. At first, I got a job as a signalman at the communications headquarters, where I got access to a PC and the Internet. In my spare time, I created my NFTs and tried to work in this field more harder. In these circumstances I made the most important choice -  in the future, I will be an artist and will continue to work in this direction.

On the 24th of February, I was caught by the war, which forced me to exchange a comfortable desk at the headquarters for a seat in an armoured personnel carrier (APC), where I was responsible for the communication of crews that went on combat missions during the liberation of Kyiv and other combat tasks.

Now when I have some free time I try to draw in a small, cheap notebook, sketches for future works by hand, and document all this in photos on various backgrounds of the consequences of the war, which can be found on social networks under the tag #war_background (https://www.instagram.com/reel/Cg-B6J4MiQG/). These sketches motivate many artists to create and not give up despite everything that is happening (and it gives strength to me too). By selling my own art, I help our military to buy necessary ammunition and other things. Therefore, I create and won't stop for our victory!`,
    id: 'crevol',
  },
  {
    name: 'Alina Kolomiichenko',
    avatar: 'alikolomichenko.jpeg',
    descriptionUa: `Я українська художниця і працюю в техніці олійного живопису. Я зображую людей та їх індивідуальний світ. Мене зачаровує краса та характер людини. Моя мета - вловити гру кольору і світла, створити гармонійні картини, сповнені енергії. Летючі мазки фарби перетворюються на інтуїтивний процес. Кожна картина має свою історію, до якої може доторкнутися глядач.`,
    descriptionEn: `I’m Ukrainian artist and work in oil painting technique. I show people and their individual world. I am fascinated by the humans beauty and their characters. My goal is to capture the play of colours and light, to create harmonious pictures full of energy. The flying strokes of paint turn into an intuitive process. Each picture has its own story that can be touched by the viewer.`,
    id: 'alikolomichenko',
  },
  {
    name: 'Morgans',
    avatar: 'morgganss.jpg',
    descriptionUa: `Митець-самоучка, що працює у змішаній техніці (традиційна і цифрова). Ніколи не вивчав мистецтво професійно, але навчаюся на практиці щодня. Хочу показати світ своїми очима і принести нові ідеї. Відкрита до всього людина, що зображує життя простіше ніж воно здається.`,
    descriptionEn: `Self-taught artist working in mixed media technic (traditional and digital). Never studied art professionally but learn practically every day, hard work over fancy university. Want to show the world through my eyes and bring new ideas into the world. Open-minded person showing the life simpler.`,
    id: 'morgganss',
  },
  {
    name: 'Ozzy',
    avatar: 'ozzy.jpeg',
    descriptionUa: `Мене звати Ольга, я художниця з Дніпра.  Я малюю останні два роки.  За освітою  юрист, але знайти себе в цій професії не змогла.  Малювання повністю розкриває моє серце, і я із задоволенням ділюся з іншими тим, що приходить до мене із Всесвіту.  Я навчився малювати самостійно.  Люблю працювати аквареллю та акрилом.  Крім того, в останні півтора року  почала вивчати цифрове малювання.  Мені дуже близька тема розкриття через мистецтво жіночності, природи, магії.  Тому мої малюнки в основному присвячені жінкам.`,
    descriptionEn: `My name is Olga, I am an artist from Dnipro.  I have been painting for the last two years.  I am a lawyer by education, but I could not find myself in this profession.  Drawing fully reveals my heart, and I am happy to share with others what comes to me from the universe.  I taught myself to draw.  I like to work with watercolor and acrylic.  In addition, in the last year and a half, I started learning digital painting.  The topic of disclosure through the art of femininity, nature, magic is very close to me.  Therefore, my drawings are mainly dedicated to women.`,
    id: 'ozzy',
  },
  {
    name: 'Taya Ferdinand',
    avatar: 'tayaferdinand.jpg',
    descriptionUa: `Тая — художниця, народилася в Миколаєві. Вона створює фігуративне цифрове мистецтво та описує свій стиль як магічний реалізм. Магічний реалізм часто стирає межі між реальністю та фантазією, а в її творчості вона стирається на духовному рівні. Її мистецтво — це складні емоції та стан душі, які передаються за допомогою яскравих кольорів і світла.`,
    descriptionEn: `Taya is a visual artist, born in Mykolaiv, Ukraine. She creates figurative digital art and describe her style as magical realism. Magical realism often blurs the lines between reality and fantasy and in her work it is blurred on the spiritual level. Her art is about complex emotions and state of mind, communicated with the help of vibrant colours and light.`,
    id: 'tayaferdinand',
  },
  {
    name: 'Sonia Wag',
    avatar: 'wag_sonia.jpeg',
    descriptionUa: `Привіт! Я діджитал художниця. Малюю в стилі дарк, фентезі, кібер та аніме.`,
    descriptionEn: `Hi! I’m a digital illustrator from Ukraine. I create art in dark, fantasy, cyber and anime style.`,
    id: 'wag_sonia',
  },
  {
    name: 'Alice Zhuravel',
    avatar: 'alice_zhuravel.jpg',
    descriptionUa: `Соціальний дослідниця та художниця з Харкова. З 2018 по 2022 працювала в арт-дирекшені, дизайні, фотографії та 3D.
З лютого 2022 року працює в гуманітарній сфері й створила соціальну ініціативу, спрямовану на обізнанність про різноманіття, рівность та інклюзію в українському суспільстві.`,
    descriptionEn: `Social researcher and visual artist from Kharkiv. From 2018 till 2022, she worked in art direction, design, photography, and 3D.
Since February 2022, she has been working in the humanitarian field and also created a social initiative aimed at demonstrating and growing diversity, equality, and inclusion in Ukrainian society.`,
    id: 'alice_zhuravel',
  },
  {
    name: 'Oleksii Gnievyshev',
    avatar: 'gnievyshev.jpg.webp',
    descriptionUa: `Мистецтво – це шлях до нашої підсвідомості, наших почуттів, переживань і внутрішніх сил. Кожна картина – це вікно в інший світ, з якого можна щось взяти для себе. Я вважаю, що сила мистецтва неймовірно велика. Це може допомогти нам підійти до такого фундаментального явища, як просвітлення. Про нього чули всі, але мало хто міг навіть почати його розуміти. Завдяки багаторічній роботі над собою та творчому пошуку я зрозуміла, що через мистецтво є шлях. У моїх картинах переплетені в одне ціле всі мої знання, підсвідомість, усвідомлені сновидіння, медитація та багато іншого. Я впевнений, що таке пробудження, на яке здатний мозок і дух, може значно змінити наше суспільство. Це принесе мир, взаєморозуміння та процвітання.
Олексій Гнєвишев — високопрофесійний художник, майстер реалістичного живопису. Народився в Україні 1991 року. Він успішно закінчив Київську академію мистецтв і 5 років навчався у приватного викладача Володимира Багалики. З 2014 року живе і працює в Брюлі, Німеччина. Його картини знаходяться в приватних колекціях і музеях по всьому світу.`,
    descriptionEn: `Art is the way to our subconscious, our feelings, experiences and inner powers. Each picture is a window into another world from which you can take something for yourself. I believe that the power of art is incredibly great. It can help us approach a phenomenon as fundamental as enlightenment. Everyone heard of him, but few could even begin to understand him. Thanks to many years of work on myself and creative search, I realized that there is a way through art. In my paintings all my knowledge, subconscious, lucid dreaming, meditation and much more are intertwined into a whole. I am confident that such an awakening, which the brain and spirit are capable of, can greatly transform our society. It will bring peace, understanding and prosperity.
Oleksii Gnievyshev is a highly professional artist, master of realistic painting. He was born in Ukraine in 1991. He successfully graduated from the Kiev Academy of Arts and studied with a private teacher Vladimir Bagalika for 5 years. Since 2014 he lives and works in Brühl, Germany. His paintings are in private collections and museums around the world.`,
    id: 'oleksii_gnievyshev',
  },
  {
    name: 'Stanislav Lunin',
    avatar: 'lunin.jpg.webp',
    descriptionUa: `Я український концепт-художник зі Львова. Я створюю плакати "Символів Супротиву" з озброєними жінками. Зараз працюю в техніці комп’ютерної графіки. Я створюю роботи, які зупиняють час і фіксують історію війни в Україні, яку можна розповісти всьому світу мовою мистецтва.`,
    descriptionEn: `I am a Ukrainian concept artist from Lviv. I create posters with symbols of resistance against armed women. The technique in which I currently work is Computer Graphics. I create works that stop time and record a story of the war in Ukraine that can be told to the whole world in the language of art.`,
    id: 'stanislav_lunin',
  },
  {
    name: 'Roman Chalyi',
    avatar: 'chalyi.jpg.webp',
    descriptionUa: `Роман Чалий закінчив Харківське державне художнє училище та Харківську державну академію дизайну і мистецтв. Працював в українських студіях Plarium, Room8Studio та 4A Games. З 2020 року працює фріланс концепт-художником. Створює дизайни персонажів, середовища та ключові кадри. Співпрацює з такими студіями як Aaron Sims Creative, Nickelodeon, Riot Games та багатьма іншими.`,
    descriptionEn: `Roman Chaliy graduated from the Kharkiv State School of Art and the Kharkiv State Academy of Design and Arts. Worked in Ukrainian studios such as Plarium, Room8Studio and 4A Games. Since 2020, he has been working as a freelance concept artist. Creates character designs, environments and keyframes. Cooperates with such studios as Aaron Sims Creative, Nickelodeon, Riot Games and many others.`,
    id: 'roman_chalyi',
  },
  {
    name: 'Karina Kuts',
    avatar: 'kuts.jpeg',
    descriptionUa: `Каріна Куц — художник ілюстратор. Мистецький шлях почала ледь не зі свого першого ковтку повітря. З дитинства малювала на усіх придатних до кольорових олівців поверхнях, будь то шпалери, чи важливі батьківські документи. Отримала ступінь бакалавра веб-дизайну в Мистецькому інституті художнього моделювання та дизайну ім. Сальвадора Далі, а також диплом спеціаліста з вільної графіки та ілюстрації книги у Національній академії образотворчого мистецтва і архітектури (НАОМА). Саме ілюстрування книг вважає своєю найзаповітнішою мрією.  

Має спільний проект з українським видавництвом настільних ігор Wanted Games – карткову гру Hanafuda (Koi-koi). Працювала дизайнером в компанії My Gift, а також художником ювелірного дому.`,
    descriptionEn: `Karina Kuts is an illustrator. She began her artistic journey almost from her first breath of air. Since childhood, she drew on all surfaces suitable for colored pencils, be it wallpaper or important parental documents. She received a bachelor's degree in web design at the Art Institute of Artistic Modeling and Design named after Salvador Dali, as well as a specialist diploma in free graphics and book illustration at the National Academy of Fine Arts and Architecture. She considers book illustration to be her most cherished dream.

Has a joint project with the Ukrainian board game publisher Wanted Games - the Hanafuda (Koi-koi) card game. She worked as a designer at the My Gift company, as well as an artist of a jewelry house.`,
    id: 'karina_kuts',
  },
  {
    name: 'Alex Twin',
    avatar: 'twin.png.webp',
    descriptionUa: `Олександр Близнюк. Український цифровий художник з Рівненщини. Працюю в ігровій та кіноіндустрії протягом 12 років. Приймав yчасть в розробці мультфільмів для Netflix, а також таких ігрових проектів як HALO, Prey, PUBG, Call of Duty, Apex Legends, та ін.`,
    descriptionEn: `Oleksandr Blyzniuk. Ukrainian CG artist from Rivne region. I have been working in the game and film industry for 12 years. Worked on some cartoons on Netflix and games such as HALO, Prey, PUBG, Call of Duty, Apex Legends, etc.`,
    id: 'alex_twin',
  },
  {
    name: 'Oleksandr Borodin',
    avatar: 'borodin.jpg',
    descriptionUa: `Мене звати Олександр Бородін. Мені 32. Народився у Харкові. Я самонавчаний цифровий художник. Можу працювати як в 2D так і в 3D. Працюю в геймдеві з 2013 року у ролі концепт-артисту та ліда.
Маю захоплення від відеоігор, фотографії та велосипедів. Також полюбляю простоту та локонічність.`,
    descriptionEn: `My name is Oleksandr Borodin. I'm 32. Born in Kharkiv. I'm self-developed cg-artist. I able to do stuff in 2D and 3D. I've working in gamedev since 2013 on concept-artists or lead/supervising positions. 
Passioned by video-games, photos and cycling. Also love simplicity and laconicism.`,
    id: 'alex_twin',
  },
].sort((a1, a2) => a1.name.localeCompare(a2.name)) as ExtendedArtistType[];

export const ARTISTS_WITH_ARTS = ARTISTS.map(
  (artist) =>
    ({
      ...artist,
      arts: DROP_EVENTS.filter((event) =>
        event.ArtistName.includes(artist.name),
      ),
    } as ExtendedArtistWithArtsType),
);
