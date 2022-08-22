import { IMG_STORAGE } from '@sections/Constants';
import { AuctionCollection, AuctionItemType } from '@sections/types';

const RevivalAuctionData: AuctionItemType[] = [
  {
    name: 'MOUND (Donetsk Academic Regional Drama Theatre, Mariupol)',
    tokenId: 25,
    imageSrc: `${IMG_STORAGE}/original/revival/01_Mariupol_Drama_Theater_(MOUND).png`,
    artist: 'Mykhailo Skop',
    descriptionEnglish:
      'The tragedy of the Mariupol Drama Theater will leave anyone speechless. Its location is terrifying and holy, so any building in its place would be blasphemy. However, the site should not vanish or blend in with an urban environment. A mound should form there, just like the one that was there a thousand years ago.\n\nThe artwork by Mykhailo Skop sends us to the painting by David Burliuk, who was proud of his Cossack origin. A high hill, one that’s visible from airplanes. And the neoclassical facade, a symbol of the tragedy, will peek out in front of the embankment and lead to nowhere.\n\nThe paths around the mound will form concentric circles similar to ones of a shooting target. They will be marked with a tragic inscription in many languages about something that should never be forgotten — how killers targeted children.',
    descriptionUkrainian:
      'Трагедія Маріупольського драматичного театру позбавляє слів. Це місце страхітливе і святе, тому будь-яка будівля тут буде святотатством. Але ця пам’ятка не повинна зникнути або загубитися в міській забудові. Як і тисячі років тому, тут має вирости курган.\n\nРобота Михайла Скопа відсилає нас до спогадів художника Давида Бурлюка, який з гордістю називав себе нащадком запорізьких козаків. Високий пагорб, який буде видно з літака. І неокласичний фасад як символ трагедії визиратиме перед насипом і вестиме в нікуди.\n\nДоріжки довкола кургану мають утворювати концентричні кола на кшталт мішені. Вони нагадуватимуть багатьма мовами про те, що ніколи не повинно забутись — як вбивці поцілили у дітей.',
    startsAt: new Date('2022-08-23T23:00:00.000+03:00'),
  },
  {
    name: 'GARDEN (House of Culture, Irpin)',
    tokenId: 26,
    imageSrc: `${IMG_STORAGE}/original/revival/02_House_of_Culture_Irpin_(GARDEN).png`,
    artist: 'Mykhailo Skop',
    descriptionEnglish:
      'The House of Culture in Irpin is one of the city’s symbols. The main building was destroyed, but its orphaned facade will become a place where new things grow. There, nature will multiply itself; under its shadows, one will enjoy young maidens singing and laughing.\n\nThe artwork was inspired by Maria Sinyakova’s paintings, who praised nature in her art. The Muse of Futurists often filled her works with blossoming gardens, shamelessness, and will — and her blossoming concept of the future rejects the brutal force and roar of metal.\n\nMaria Sinyakova stands against violence, tyranny, masculinity, and hatred, comparing them to a natural disaster that burned Ukrainian gardens and filled rivers with blood. However, both artists believe that any powerful hurricane is powerless against a fragile flower that will sprout through the rubble and bloom with a new dawn.',
    descriptionUkrainian:
      'Будинок культури в Ірпені — один із символів міста. Головна будівля була знищена, але там, де був “осиротілий” фасад, з’явиться нова. Природа відтворить і примножить себе; в її тінях чутимуться пісні й безтурботний спів юних дів.\n\nНатхненням для цієї ілюстрації стали картини Марії Синякової, яка оспівувала природність у своїй творчості. Роботи “музи футуристів” були сповнені квітучих садів, безсоромності й волі. Її концепція майбутнього відкидає брутальну силу й гуркіт металу.\n\nМарія Синякова виступала проти насилля, тиранії, маскулінності й ненависті, прирівнюючи їх до стихійного лиха — саме того, яке випалило наші сади й сповнило ріки кров’ю. Та обидва митці вірять, що навіть наймогутніший ураган безсилий проти найтендітнішої квітки, яка обов’язково проросте крізь завали й розквітне новим світанком.',
    startsAt: new Date('2022-08-23T23:00:00.000+03:00'),
  },
  {
    name: 'SAGE (The National Literary and Memorial Museum of Hryhorii Skovoroda, Skovorodynivka)',
    tokenId: 27,
    imageSrc: `${IMG_STORAGE}/original/revival/03_The_National_Literary_and_Memorial_Museum_of_Hryhorii_Skovoroda_(SAGE).png`,
    artist: 'Mykhailo Skop',
    descriptionEnglish:
      'This artwork was inspired by a recent documentary photo featuring the monument to Hryhoriy Skovoroda, standing still in its ascetic majesty in the middle of his own "home", the National Literary and Memorial Museum of Hryhorii Skovoroda. In the image, the great Ukrainian philosopher looked similar to the Zeus statue in Olympia, where he barely fits in his temple.\n\nThe "temple" of the Ukrainian sage could not withstand the greatness of its owner. It scattered like a globe that split into separate meridians, unable to catch and enslave the wandering genius. Meanwhile, the wisdom of Skovoroda reaches eternity. It spreads itself to the heavenly spheres.\n\nThe image echoes the theatrical sketches of Oleksandr Khvostenko-Khvostov, an avant-garde artist and stage designer.',
    descriptionUkrainian:
      'На це зображення автора надихнуло фото пам’ятника Григорію Сковороді, який стоїть в аскетичній величі посеред власного “дому” — Національного літературно-меморіального музею Г. Сковороди. На зображенні постать великого українського філософа нагадує статую Зевса в Олімпії, який ледве вміщається у власному храмі.\n\n“Храм” українського мудреця не витримав величі свого власника. Він розлетівся, немов земна куля, що розпалася на окремі меридіани, не здатна зловити мандрівного генія. Та мудрість Сковороди сягає вічності й шириться до небесних сфер.\n\nЦя ілюстрація перегукується з театральними замальовками художника-авангардиста й сценографа Олександра Хвостенка-Хвостова.',
    startsAt: new Date('2022-08-23T23:00:00.000+03:00'),
  },
  {
    name: 'TEMPLE (Historical and Local History Museum, Ivankiv)',
    tokenId: 28,
    imageSrc: `${IMG_STORAGE}/original/revival/04_Ivankiv_Historical_and_Local_History_Museum_(TEMPLE).png`,
    artist: 'Mykhailo Skop',
    descriptionEnglish:
      "What is a temple? For Mykhailo Skop, it’s a place where one faces the unusual. That’s why the temple of Artemis is not just a roof resting on Ionic columns ready to be burned down by Herostratus. It is a place of mystery and miracle.\n\nThe Ivankiv Historical and Local History Museum, where Maria Prymachenko's works were stored, is a temple of miraculous beasts. It was burned down by barbarians, but the beasts survived. Sensing danger, they left their home (taken out by locals) and made it unsacred.\n\nIn archival photos, Maria Prymachenko exhibits her works on a fence. This reminded Mykhailo Skop of the Ishtar Gate, decorated with images of mythical creatures, and the fence of the tabernacle, the portable tent temple of the ancient Jews.\n\nDrawing inspiration from Viktor Palmov’s paintings, the artist recreated tabernacle architecture and included the solar beast to guard the collection as a cherub protects the entrance to paradise. The temple is shown from an inverted perspective that challenges the rational perception of space, which should not be understood, but felt.",
    descriptionUkrainian:
      'Що таке храм? Для Михайла Скопа це місце, де людина зустрічається з дивовижним. Тому храм Артеміди — не просто будівля, чий дах спирається на іонічні колони. Це місце таємниць і чудес, яке може будь-якої миті бути спалене черговим Геростратом.\n\nІсторико-краєзнавчий музей в Іванкові, де зберігалися роботи Марії Примаченко, — храм чудесних і небачених звірів. Він згорів від рук варварів, але звірі вижили. Відчувши небезпеку, вони залишили дім (їх забрали місцеві мешканці) й вціліли.\n\n\nНа архівних фотографіях Марія Примаченко експонує свої роботи, прибивши їх до паркана. Це нагадало Михайлові Скопу про Браму Іштар, оздоблену зображеннями міфічних істот, а також огорожу скинії — переносного шатрового храму давніх іудеїв.\n\nЧерпаючи натхнення з картин Віктора Пальмова, митець відтворив архітектуру скинії та включив лик сонячного звіра, який мов вогняний херувим охороняє вхід до музейного зібрання. Храм зображений в оберненій перспективі, що кидає виклик раціональному сприйняттю простору, адже його слід не розуміти, а відчувати.',
    startsAt: new Date('2022-08-23T23:00:00.000+03:00'),
  },
  {
    name: 'MAUSOLEUM (Regional State Administration, Kharkiv)',
    tokenId: 29,
    imageSrc: `${IMG_STORAGE}/original/revival/05_Kharkiv_Regional_State_Administration_(MAUSOLEUM).png`,
    artist: 'Mykhailo Skop',
    descriptionEnglish:
      'The Kharkiv Regional State Administration looked like a rock-hewn fortress. Its windows peeked out between the steep vertical columns supporting the massive structure. The flags and the coat of arms were raised above, declaring that this building was the embodiment of the state.\n\nMykhailo Skop associates the administration with the Mausoleum at Halicarnassus. Although the mausoleum was built to glorify, it spoke of mortality.\n\nThe new sight depicted by the artist is empty inside, so the sky is visible through it. Its columns no longer have to support anything; they rise to the sky, sprouting constructivist elements in an Alexandra Ekster manner.\n\nThe imaginary object is complemented with anti-tank hedgehogs, emphasizing the social changes in Ukraine. In authoritarian states, state buildings are protected from civilians, but in Ukraine, civilians choose to protect state buildings. For them, the Kharkiv Regional State Administration embodies the following words from the Constitution of Ukraine: “The people are the bearers of sovereignty and the only source of power in Ukraine”.',
    descriptionUkrainian:
      'Харківська облдержадміністрація була схожа на висічену зі скелі фортецю. Її вікна визирали між стрімкими вертикалями колон, що підпирали масивну конструкцію. Застиглі в камені знамена і гербовий щит височіли над спорудою, декларуючи, що ця будівля є втіленням держави.\n\nДля Михайла Скопа адміністрація асоціювалася з мавзолеєм у Галікарнасі. Хоча він був споруджений для возвеличення особистості, насправді свідчив про її смертність.\n\nЗображена художником будівля порожня всередині, тому крізь неї видно небо. Її колонам більше не треба нічого підпирати: вони здіймаються до небес, проростаючи елементами конструктивізму у стилі Олександри Екстер.\n\nУявний об’єкт доповнений “лісом” протитанкових їжаків, що підкреслює соціальні зміни в Україні. В авторитарних державах адміністративні будівлі всіляко відмежовуються від людей, але в Україні громадяни захищають їх. Для них Харківська обладміністрація втілює слова з Конституції України: “Носієм суверенітету і єдиним джерелом влади в Україні є народ”.',
    startsAt: new Date('2022-08-23T23:00:00.000+03:00'),
  },
  {
    name: 'COLOSSEUM (House of Culture "Iskra", Mariupol)',
    tokenId: 30,
    imageSrc: `${IMG_STORAGE}/original/revival/06_Palace_of_Culture_Iskra_(COLOSSEUM).png`,
    artist: 'Mykhailo Skop',
    descriptionEnglish:
      'The ruined palace of culture "Iskra" was embodied by cosmic narratives. The most striking examples were mosaics by Valery Lamakh, Ernest Kotkov, and Ivan Lytovchenko. In them, cosmic, iconographic, and ethnic motifs were combined. But however bold experiments in visual language may be, these and similar works are limited by their own materials and the plane on which they were created. This fundamentally contradicts the main features of the cosmos — infinity and movement.\n\nMykhailo Skop personally "blew up" the mosaic, giving it cosmic freedom and the opportunity to be interpreted outside the framework of exclusively Soviet Ukrainian art. Cinders of fireclay pour in a turbulent stream, stars cut through the walls of the building, and the concept of the earth, embodied in an iconographic figure, rises into the sky like an ancient Colossus, marking the moment of a creative spark. The whole visual concept was inspired by Oleksandr Bogomazov\'s artistic legacy.',
    descriptionUkrainian:
      'Зруйнований Палац культури “Іскра” був сповнений космічних наративів. Найяскравішим прикладом цього були мозаїки Валерія Ламаха, Ернеста Коткова та Івана Литовченка. У них поєднувалися космічні, іконографічні та етнічні мотиви. Але якими б сміливими не були експерименти у візуальній мові, ці та аналогічні твори обмежені власними матеріалами й площиною, на яких їх було створено. Це принципово суперечить основній ознаці космосу — нескінченності й руху.\n\nМихайло Скоп дозволив мозаїці “вибухнути”, завдяки чому вона отримує космічну свободу і визволяється від конотацій совкового мистецтва. Бурхливим потоком ллються груди шамоту, зірки прорізають стіни будівлі, а іконографічна персоніфікація землі здіймається в небо мов античний Колос, знаменуючи мить творчої іскри. Ця концепція була натхненна художньою спадщиною Олександра Богомазова.',
    startsAt: new Date('2022-08-23T23:00:00.000+03:00'),
  },
  {
    name: 'LIGHTHOUSE (The Tower of The Fire Station on Zaikivka, Kharkiv)',
    tokenId: 31,
    imageSrc: `${IMG_STORAGE}/original/revival/07_Fire_Station_in_Zaikivka_Kharkiv_(LIGHTHOUSE).png`,
    artist: 'Mykhailo Skop',
    descriptionEnglish:
      "The sight of the fire station damaged by occupiers in Zaikivka (Kharkiv) struck the artist: The building, intended for fire protection, became a victim of burning hatred. However, the structure was not completely destroyed, — its Neo-Gothic watchtower remains standing.\n\nOver the past hundred years, the city of Kharkiv has grown significantly. The tower should not only be an artifact of the past; it must also rise into the sky and transform into a lighthouse. One that cuts through the darkness of hatred and destruction with a powerful lantern of hope.\n\nWhile developing the lighthouse concept, Mykhailo Skop was inspired by the Dzharylgatsky lighthouse, designed by Alexander Eiffel. In addition, the artist turned to the Tower of Tatlin, a grandiose unrealized project of the bridge between heaven and earth, and a symbol of the reunion of people separated by the fall of the Tower of Babel.\n\nThe artwork is a manifesto of the future rising above our past and honors Kharkiv, from which Volodymyr Tatlin's genius emerged and to which it returns a hundred years later.",
    descriptionUkrainian:
      'Образ пошкодженої окупантами пожежної частини на Заїківці в Харкові вразив митця: будівля, призначена для захисту від вогню, сама стала жертвою палкої ненависті. Але все ж її не було знищено — вишукана неоготична вартова вежа залишилась стояти.\n\nЗа останні сто років Харків суттєво виріс. Ця башта не повинна бути лише артефактом минулого, вона має здійматися до небес, перетворюючись на своєрідний маяк, що потужним ліхтарем надії прорізає морок ненависті й руйнувань.\n\nНа цей образ Михайла Скопа надихнув Джарилгацький маяк, спроєктований Олександром Ейфелем. Також автор звернувся до Вежі Татліна — грандіозного нереалізованого проєкту, який втілює міст між небом і землею та символізує об’єднання людей, розділених після падіння Вавилонської вежі.\n\nЦя робота — маніфест майбутнього, що здіймається над нашим минулим і вшановує Харків, з якого вийшов геній Володимира Татліна й у який він повертається через сотню років.',
    startsAt: new Date('2022-08-23T23:00:00.000+03:00'),
  },
  {
    name: 'House of Organ and Chamber Music, Dnipro',
    tokenId: 8,
    imageSrc: `${IMG_STORAGE}/original/revival/01_House_of_Organ_and_Chamber_Music_Dnipro.jpg`,
    artist: 'Zhanna Yenikieieva',
    descriptionEnglish:
      'I come from Dnipro, and this is the city of my becoming. The House of Organ and Chamber Music, also a cathedral, is a special place for my family. My parents discovered this place right after they moved to Ukraine from a Muslim country. They were so fascinated by it, she decided to bring the children there as well; she wanted us to discover more beautiful things.\n\nI believe that in peaceful Ukraine, places like this will interest everyone, and I also want this building to be visited by as many people as possible.',
    descriptionUkrainian:
      'Я родом з Дніпра, і це місто мого становлення. Будинок органної та камерної музики — особливе місце для моєї родини. Батьки знайшли його, щойно переїхали до України з мусульманської країни. Це місце вразило їх, і вагітна мама вирішила приходити сюди, щоб діти ще в утробі долучалися до прекрасного.\n\nЯ вірю, що в мирній Україні такі місця будуть цікавими для всіх, і хочу, щоб цю будівлю відвідала якомога більша кількість людей.',
    startsAt: new Date('2022-08-29T23:00:00.000+03:00'),
  },
  {
    name: 'Regional State Administration, Mykolaiv',
    tokenId: 9,
    imageSrc: `${IMG_STORAGE}/original/revival/02_Regional_State_Administration_Mykolaiv.jpg`,
    artist: 'Zhanna Yenikieieva',
    descriptionEnglish:
      'After the missile attack on Mykolaiv, the Regional State Administration has a huge hole in it, as with the hearts of every Ukrainian. Although we’re all exhausted with the terrible news and sometimes suffocate from hopelessness, I am proud to be a part of a big family that does not give up. I dream every civil service building will be repainted in patriotic and bright colors. This city deserves more light and goodness!',
    descriptionUkrainian:
      "Після ракетного обстрілу Миколаєва у будинку державної адміністрації утворилася діра, як і в серці кожного українця. Ми всі виснажені жахливими новинами й іноді задихаємося від безвиході. Та я горда бути частиною великої сім'ї, яка не здається. Я мрію, щоб кожна держбудівля була перефарбована у яскраві патріотичні кольори. Це місто заслуговує отримувати більше світла й добра!",
    startsAt: new Date('2022-08-29T23:00:00.000+03:00'),
  },
  {
    name: 'Freedom Square, Kharkiv',
    tokenId: 10,
    imageSrc: `${IMG_STORAGE}/original/revival/03_Freedom_Square_Kharkiv.jpg`,
    artist: 'Zhanna Yenikieieva',
    descriptionEnglish:
      'Kharkiv is the first capital of Ukraine. I had dreamed of coming there since I turned 18, but I got to know it just a year before the war.\n\nMy loved one, my friends, and I took a train from Kyiv, went to my favorite artist’s concert, and then to Freedom Square. That day, the air was full of the freedom I’d heard about. No one had the right to destroy Kharkiv!\n\nToday, I dream of coming to Kharkiv to see a reconstructed Freedom Square. Where Ukrainian flags fly around with the help of drones, and citizens hug each other and celebrate peace!',
    descriptionUkrainian:
      'Харків — перша столиця України. Я мріяла побувати там з 18 років, але познайомилася з містом за рік до війни.\n\nЯ, моя кохана людина та друзі поїхали з Києва на концерт улюбленого співака на Площі Свободи. У той день повітря було сповнене свободи, про яку я так багато чула. Ніхто не мав права руйнувати Харків!\n\nСьогодні я мрію приїхати до Харкова й побачити відновлену Площу Свободи, щоб по місту майоріли українські прапори за допомогою дронів, а люди обіймалися й раділи миру.',
    startsAt: new Date('2022-08-29T23:00:00.000+03:00'),
  },
  {
    name: 'State-owned Enterprise "Kharkivstandartmetrologiya" (former Chamber of Weights and Measures), Kharkiv',
    tokenId: 11,
    imageSrc: `${IMG_STORAGE}/original/revival/04_Chamber_of Weights_and_Measures_(State-owned_Enterprise_Kharkivstandartmetrologiya_)_Kharkiv.jpg`,
    artist: 'Zhanna Yenikieieva',
    descriptionEnglish:
      'Few people know where the former Chamber of Weights and Measures in Kharkiv was, even among residents.\n\n“Kharkivstandartmetrologiya”, now a state-owned enterprise, used to be a place where future sellers were taught, and trade was born.\n\nI hope this damaged building comes to life and becomes an actual chamber again, where you can practice and sell whatever you want.',
    descriptionUkrainian:
      'Навіть серед місцевих жителів мало хто знає, що таке Палата мір і ваг у Харкові.\n\nНинішнє держпідприємство “Харківстандартметрологія” колись було місцем, де навчали майбутніх продавців і зароджувалася торгівля.\n\nЯ сподіваюся, що ця сумна будівля оживе й знову перетвориться на справжню палату, де можна буде практикуватися й продавати що завгодно.',
    startsAt: new Date('2022-08-29T23:00:00.000+03:00'),
  },
  {
    name: 'Hotel “Ukraine”, Chernihiv',
    tokenId: 12,
    imageSrc: `${IMG_STORAGE}/original/revival/Hotel_Ukraine_Chernihiv.jpg`,
    artist: 'Zhanna Yenikieieva',
    descriptionEnglish:
      'Chernihiv is a small, cozy city; the buildings in the city center look like chocolate houses. It has a heartwarming atmosphere. One that makes you want to go there on the weekends.\n\nAs the bravest defender, Chernihiv was one of the first to oppose the invaders. My stamps illustrate the new Chernihiv - full of happy people and love, as I dream of seeing the city in new colors!',
    descriptionUkrainian:
      'Чернігів — невелике, затишне місто. Будівлі у його середмісті нагадують шоколадні будиночки. Він має дуже теплу й душевну атмосферу, тому сюди хочеться приїжджати на вихідні.\n\nЧернігів, як найсміливіший захисник, одним із перших дав відсіч загарбникам. Мої марки ілюструють новий Чернігів, сповнений щасливих людей та любові. Я мрію побачити місто у нових барвах!',
    startsAt: new Date('2022-08-29T23:00:00.000+03:00'),
  },
  {
    name: "Regional Children's Library, Chernihiv",
    tokenId: 13,
    imageSrc: `${IMG_STORAGE}/original/revival/Regional_Childrens_Library_Chernihiv.jpg`,
    artist: 'Zhanna Yenikieieva',
    descriptionEnglish:
      'Chernihiv is a small, cozy city; the buildings in the city center look like chocolate houses. It has a heartwarming atmosphere. One that makes you want to go there on the weekends.\n\nAs the bravest defender, Chernihiv was one of the first to oppose the invaders. My stamps illustrate the new Chernihiv - full of happy people and love, as I dream of seeing the city in new colors!',
    descriptionUkrainian:
      'Чернігів — невелике, затишне місто. Будівлі у його середмісті нагадують шоколадні будиночки. Він має дуже теплу й душевну атмосферу, тому сюди хочеться приїжджати на вихідні.\n\nЧернігів, як найсміливіший захисник, одним із перших дав відсіч загарбникам. Мої марки ілюструють новий Чернігів, сповнений щасливих людей та любові. Я мрію побачити місто у нових барвах!',
    startsAt: new Date('2022-08-29T23:00:00.000+03:00'),
  },
  {
    name: 'Shchors cinema, Chernihiv',
    tokenId: 14,
    imageSrc: `${IMG_STORAGE}/original/revival/Shchors_Cinema_Chernihiv.jpg`,
    artist: 'Zhanna Yenikieieva',
    descriptionEnglish:
      'Chernihiv is a small, cozy city; the buildings in the city center look like chocolate houses. It has a heartwarming atmosphere. One that makes you want to go there on the weekends.\n\nAs the bravest defender, Chernihiv was one of the first to oppose the invaders. My stamps illustrate the new Chernihiv - full of happy people and love, as I dream of seeing the city in new colors!',
    descriptionUkrainian:
      'Чернігів — невелике, затишне місто. Будівлі у його середмісті нагадують шоколадні будиночки. Він має дуже теплу й душевну атмосферу, тому сюди хочеться приїжджати на вихідні.\n\nЧернігів, як найсміливіший захисник, одним із перших дав відсіч загарбникам. Мої марки ілюструють новий Чернігів, сповнений щасливих людей та любові. Я мрію побачити місто у нових барвах!',
    startsAt: new Date('2022-08-29T23:00:00.000+03:00'),
  },
  {
    name: 'Regional State Administration, Mykolaiv',
    tokenId: 20,
    imageSrc: `${IMG_STORAGE}/original/revival/01_Mykolaiv_Regional_State_Administration.jpg`,
    artist: 'OTOG STUDIO',
    descriptionEnglish:
      'Olga Otog was born in Mykolaiv. According to her memories, there were always many creative people. However, there wasn’t much to do and there weren’t many exciting places to spend time. In the evening, Mykolaiv’s youth headed to the city center and gathered near the state administration building. The area around was a meeting place for creatives, a playground for skaters, and a cozy corner where anybody could listen to music with friends on the stairs.\n\nThe idea of rebuilding the Mykolaiv Regional State Administration by OTOG STUDIO is to adapt the space to the way young people are used to enjoying it. The exterior of the building should be transformed into an open-air youth leisure center with a built-in skatepark, as well as a place where you can spend your time creatively.',
    descriptionUkrainian:
      'Ольга Отог народилася в Миколаєві. Вона згадує, що в місті завжди було багато творчих людей. Проте там було особливо нічого робити й бракувало цікавих місць. Ввечері миколаївська молодь йшла до центру й збиралася біля будівлі облдержадміністрації. Територія довкола була місцем зустрічі для творчих людей, майданчиком для скейтерів і затишним куточком, де можна було послухати музику з друзями на сходах.\n\nІдея відбудови Миколаївської облдержадміністрації від OTOG STUDIO полягає у тому, щоб адаптувати цей простір до потреб молоді. Екстер’єр будівлі має перетворитися на молодіжний центр дозвілля із вбудованим скейтпарком, а також місце, де можна творчо проводити вільний час.',
    startsAt: new Date('2022-09-02T23:00:00.000+03:00'),
  },
  {
    name: 'Vorontsov Palace, Odessa',
    tokenId: 21,
    imageSrc: `${IMG_STORAGE}/original/revival/02_Vorontsov_Palace_Odessa.jpg`,
    artist: 'OTOG STUDIO',
    descriptionEnglish:
      'The Vorontsov Palace in Odesa is an exquisite residence overlooking the Black Sea. A luxurious park complex and a large white arch with columns. People often take pictures near this white arch at the entrance of the site, and its columns are repainted from time to time because young people secretly paint them with markers and spray cans.\n\nOTOG STUDIO would like to legalize painting on the historical monument and allow people to use the surface of the palace as a canvas. In the artwork, buildings are painted in elements of a traditional Ukrainian ornament, reinterpreted and modernized by OTOG STUDIO.',
    descriptionUkrainian:
      'Воронцовський палац в Одесі — дуже гарна резиденція з видом на Чорне море, парковим комплексом та великою білою аркою з колонами. Люди часто фотографуються біля цієї арки, а її колони часом перефарбовують, бо молодь розмальовує їх маркерами й балончиками.\n\nВ OTOG STUDIO вирішили зробити малювання на історичній пам’ятці “легальним” й дозволити людям використовувати стіни палацу як полотно. У цій роботі будівлі розписані елементами традиційного українського орнаменту, переосмисленого й модернізованого OTOG STUDIO.',
    startsAt: new Date('2022-09-02T23:00:00.000+03:00'),
  },
  {
    name: 'Stadium “Azovstal”, Mariupol',
    tokenId: 22,
    imageSrc: `${IMG_STORAGE}/original/revival/03_Azovstal_Stadium_Mariupol.jpg`,
    artist: 'OTOG STUDIO',
    descriptionEnglish:
      "Today, Mariupol is an almost completely destroyed city undergoing tragic events and suffering great losses. Mariupol was once a seaside resort town, but now it seems like the city will turn into a war memorial forever.\n\nThe Azovstal stadium is a metaphorical place of commemoration and searching for one's future. A stadium is no longer a place for games. On the contrary, a collective calm reigns here. The steel ball in the air, held by magnetic waves, represents the past and future of the city, observed by the world.",
    descriptionUkrainian:
      'Зараз Маріуполь — майже повністю зруйноване місто, яке переживає жахливі події й зазнає великих втрат. Колись це був морський курорт, та здається, що тепер місто назавжди перетвориться на меморіал війни.\n\nСтадіон “Азовсталь” — це метафоричне місце вшанування пам’яті та пошуку майбутнього. Стадіон більше не є місцем для ігор. Навпаки: тут панує колективний спокій. Сталева куля в повітрі, яка тримається на магнітних хвилях, уособлює минуле та майбутнє міста, за якими спостерігають люди.',
    startsAt: new Date('2022-09-02T23:00:00.000+03:00'),
  },
  {
    name: 'Regional Academic Ukrainian Music and Drama Theatre, Lugansk',
    tokenId: 23,
    imageSrc: `${IMG_STORAGE}/original/revival/04_Ukrainian_Theater_Luhansk.jpg`,
    artist: 'OTOG STUDIO',
    descriptionEnglish:
      'Luhansk lies in the east of Ukraine. There, russia is trying to eradicate and destroy Ukrainian culture. At the same time, OTOG STUDIO believes that Ukrainian culture can’t be killed. For them, it resembles a light that can’t be dimmed.\n\nIn the reconstruction concept proposed by the artists, the theater in Luhansk becomes a monument of Ukrainian culture. Daylight enters through a roof hole in the form of a trident. The walls of the theater are transparent, and its stage is formed by many platforms designed for simultaneous performances.',
    descriptionUkrainian:
      'Луганськ знаходиться на сході України, де росія намагається знищити українську культуру. Та в OTOG STUDIO вірять, що нашу культуру неможливо вбити. Для них вона нагадує світло, яке не можна затьмарити.\n\nУ концепції відбудови від креаторів театр у Луганську стає монументом української культури. Денне світло потрапляє в середину крізь отвір у вигляді тризуба. Стіни театру прозорі, а сцена створена з багатьох платформ, де може виступати одночасно велика кількість людей.',
    startsAt: new Date('2022-09-02T23:00:00.000+03:00'),
  },
  {
    name: 'Sergei Prokofiev International Airport, Donetsk',
    tokenId: 24,
    imageSrc: `${IMG_STORAGE}/original/revival/05_Donetsk_International_Airport.jpg`,
    artist: 'OTOG STUDIO',
    descriptionEnglish:
      'The airport in Donetsk is one of the symbols of fierce struggle. The Ukrainian military’s struggle and fight for every piece of their native land in 2014 . We can’t imagine that a new airport would stand in its place, erasing the memory of the events of several years ago. This memory is too traumatic and valuable.\n\nUkraine is known as an agrarian country, and its citizens have always loved working with the land. OTOG STUDIO intends to turn the airport building into a huge garden. In this area, people will be able to grow plants or even fruits and vegetables. This can be a form of collective recreation or mental therapy.',
    descriptionUkrainian:
      'Аеропорт в Донецьку — один із символів запеклої боротьби. Українські військові відстоювали кожен шматочок рідної землі з 2014 року. Ми не можемо уявити, що на цьому місці стоятиме новий аеропорт, який зітре пам’ять про події кількарічної давнини. Ці спогади надто травматичні й значущі.\n\nУкраїна відома як аграрна країна, українці завжди любили працювати із землею. В OTOG STUDIO будівлю аеропорту пропонують перетворити на величезний город. На його території люди вирощуватимуть рослини або навіть фрукти й овочі. Це може стати колективним способом відпочинку чи ментальної терапії.',
    startsAt: new Date('2022-09-02T23:00:00.000+03:00'),
  },
  {
    name: 'Donetsk Academic Regional Drama Theatre, Mariupol',
    tokenId: 15,
    imageSrc: `${IMG_STORAGE}/original/revival/01_Donetsk_Academic_Regional_Drama_Theatre_Mariupol.png`,
    artist: 'Sashko Danylenko',
    descriptionEnglish:
      "This concept conserves the Mariupol Drama Theatre's remains in a gigantic aquarium. Mariupol is a city by the sea, and the water in the aquarium is salty. It symbolizes all the tears shed because of russian aggression. In a way, the theatre is drowning in tears.\n\nMemorial visitors would have a chance to walk down the transparent underwater corridors or completely plunge into the waters. The memorial tower is a lighthouse, where rays of light give hope and pave the way to Mariupol’s bright future.",
    descriptionUkrainian:
      'Цей концепт передбачає своєрідну консервацію залишків маріупольського театру у величезному акваріумі. Маріуполь — місто біля моря, тож вода в акваріумі солона. Це символізує усі сльози, що були пролиті через російську агресію. Театр буквально потонув у сльозах.\n\nВідвідувачі меморіалу матимуть можливість пройтися прозорими підводними коридорами або повністю зануритися у воду. Башта меморіалу — це маяк, світло якого дарує надію і прокладає шлях у світле майбутнє Маріуполя.',
    startsAt: new Date('2022-09-07T23:00:00.000+03:00'),
  },
  {
    name: 'House of Culture, Lozova',
    tokenId: 16,
    imageSrc: `${IMG_STORAGE}/original/revival/02_House_of_Culture_Lozova.png`,
    artist: 'Sashko Danylenko',
    descriptionEnglish:
      "The Lozova House of Culture recovery concept preserves the memory of the horrible day when missiles hit the building. New walls have cracks, and a huge swan rebuilds the concert hall that was damaged the most with the last piece of material in its beak.\n\nA swan from the tire cover symbolizes the city's eclectic culture, and the nation's resistance and freedom from Maidan Uprising times.\n\nAn additional element to the House is a QR code, stylistically embedded in the vyshyvanka ornament. Locals and visitors would be able to scan it, with the link transferring them to a website. There, they would learn about the city’s history, watch videos of its shelling and future reconstruction, explore posters, buy tickets, and more.",
    descriptionUkrainian:
      'Концепція відновлення Лозівського палацу культури зберігає пам’ять про страшний день, коли ракета влучила у будівлю. Нові стіни мають рельєф тріщин, і величезний лебідь відбудовує концертну залу, що постраждала найбільше: він тримає у дзьобі останній фрагмент стіни.\n\nЛебідь з покришки символізує еклектичну культуру міста, а також народний опір і свободу з часів Майдану.\n\nДодатковий елемент оновленого палацу культури — QR-код, стилістично вписаний в орнамент вишиванки. Містяни й відвідувачі зможуть відсканувати його, посилання вестиме на сайт. Там можна буде дізнатися про історію міста, побачити відео обстрілу і подальшої відбудови, ознайомитися з афішею подій, придбати квитки тощо.',
    startsAt: new Date('2022-09-07T23:00:00.000+03:00'),
  },
  {
    name: 'Railway Station, Okhtyrka',
    tokenId: 17,
    imageSrc: `${IMG_STORAGE}/original/revival/03_Railway_Station_Okhtyrka.png`,
    artist: 'Sashko Danylenko',
    descriptionEnglish:
      'The concept implies the complete reconstruction of the building with respect to the history of the Okhtyrka Railway Station that, unlike today, survived shelling in 1943.\n\nThe building is protected by an iron giant composed of coaches and locomotives. This memorial is also devoted to all the heroic workers of Ukrainian railways that risked their lives to help people evacuate.',
    descriptionUkrainian:
      'Концепт передбачає повне відновлення з повагою до історії залізничної станції в Охтирці, яка пережила атаки німців у 1943 році, але не обстріли росіян у наш час.\n\nБудівлю захищає Залізничний титан, складений з частин справжніх вагонів та локомотивів. Цей меморіал також присвячений всім героїчним працівникам “Укрзалізниці”, які ризикували своїми життями, допомагаючи людям евакуюватися.',
    startsAt: new Date('2022-09-07T23:00:00.000+03:00'),
  },
  {
    name: 'The Tower of The Fire Station on Zaikivka, Kharkiv',
    tokenId: 18,
    imageSrc: `${IMG_STORAGE}/original/revival/04_The_Fire_House_with_the_Lookout_Tower_Kharkiv.png`,
    artist: 'Sashko Danylenko',
    descriptionEnglish:
      'Firehouse #4 with the lookout tower in Kharkiv is an architectural site built in 1887. It is a central element of the building that creates a recognizable silhouette. The concept implies new towers in the shape of tremendous fire extinguishers. They complement the silhouette of the building and, together with the lookout tower, create a trident.\n\nInside the towers, there would be spiral stairs and a lift, while the walls would feature art expositions about the heroic work of the rescuers during the war. At the top of the fire extinguisher towers, there would be viewing points.',
    descriptionUkrainian:
      'Пожежна частина №4 з каланчею у Харкові — архітектурна пам’ятка, збудована у 1887 році. Каланча є центральним елементом будівлі, що створює впізнаваний силует. Концепт реконструкції передбачає дві нові башти у формі велетенських вогнегасників. Вони доповнюють силует будівлі й разом з каланчею утворюють тризуб.\n\nВсередині башт будуть гвинтові сходи й ліфт, а на стінах розмістяться експозиції про героїчну роботу рятувальників ДСНС під час війни. На верхньому ярусі башт-вогнегасників будуть оглядові майданчики.',
    startsAt: new Date('2022-09-07T23:00:00.000+03:00'),
  },
  {
    name: 'Historical and Local History Museum, Ivankiv',
    tokenId: 19,
    imageSrc: `${IMG_STORAGE}/original/revival/05_Historical_and_Local_History_Museum_Ivankiv.png`,
    artist: 'Sashko Danylenko',
    descriptionEnglish:
      "The artworks of Maria Prymachenko that were featured in the Historical and Local History Museum in Ivankiv unified the experience of generations, which is why the recovered building looks like a giant tree. The tree symbolically seizes cultural roots, but is also an element of nature, which was the main topic of Prymachenko’s art.\n\nPavilions with exhibits are located in the tree trunk and separate houses on branches, reminiscent of an eco-futuristic settlement. The topic of ecology is an essential element because Maria lived in the 30-kilometer radius of the Chornobyl disaster and even dedicated a number of her works to it. Therefore, the entire concept of the museum is realized from ecological materials and has its sources of green energy. A wind farm, solar panels, and a heat pump are organically included in the general concept of the future village.\n\nColor is the main component of Prymachenko's compositions. Therefore, the entire museum building is made up of bright colors from her paintings. Prymachenko did not like large monotonous planes - she considered them lifeless - so the wall backgrounds are covered in rhythmic rows of small strokes, brackets, and dots. In addition, tourists can reach the museum by electric bus directly from Kyiv, which is brightly painted in the style of the artist's works.",
    descriptionUkrainian:
      'Твори Марії Примаченко, які зберігалися в Історико-краєзнавчому музеї в Іванкові, об’єднують досвід поколінь, тому оновлена будівля музею виконана у формі гігантського дерева. Дерево символічно охоплює коріння культури, але також є елементом природи — головної теми творчості Примаченко.\n\nПавільйони з експозиціями розташовані у стовбурі дерева та в окремих будинках на гілках, що нагадують екофутуристичне поселення. Тема екології є важливим елементом, адже Марія жила у 30-кілометровій зоні Чорнобильської катастрофи й навіть присвятила їй низку своїх робіт. Тому весь концепт музею реалізований з екологічних матеріалів, він також має власні джерела зеленої енергії. Вітряна станція, сонячні батареї та теплова помпа органічно вписані у загальний концепт села майбутнього.\n\nКолір — основний компонент композицій Примаченко, тож вся будівля музею виконана у яскравих кольорах з її картин. Художниця не любила великих однотонних площин, вважаючи їх неживими, тому тло стін всюди вкрите ритмічними рядами дрібних рисок, дужок і крапок. До того ж туристи можуть дістатися музею прямо з Києва на електричному автобусі, яскраво розмальованому у стилі робіт Примаченко.',
    startsAt: new Date('2022-09-07T23:00:00.000+03:00'),
  },
  {
    name: 'House of Culture, Byshiv',
    tokenId: 1,
    imageSrc: `${IMG_STORAGE}/original/revival/1_Byshiv_gif.gif`,
    artist: 'Tamara Safarova',
    descriptionEnglish:
      'The artwork showcases the rebuilt House of Culture in Byshiv with a tree under a dome. It serves as a symbol of the connection between nature and culture through its glorification and reverence.',
    descriptionUkrainian:
      'У цій роботі зображено реконструйований Будинок культури у Бишеві з деревом під куполом. Воно є символом єднання природи з культурою шляхом її оспівування та шанування.',
    startsAt: new Date('2022-09-12T23:00:00.000+03:00'),
  },
  {
    name: 'Olympic Sports Training Center, Chernihiv',
    tokenId: 2,
    imageSrc: `${IMG_STORAGE}/original/revival/2_Stadium_gif.gif`,
    artist: 'Tamara Safarova',
    descriptionEnglish:
      'The artistic concept of the reconstructed Olympic Sports Training Center in Chernihiv implies a floating stadium on the banks of the Desna river.',
    descriptionUkrainian:
      'Художня концепція реконструкції Олімпійського навчально-спортивного центру у Чернігові передбачає плавучий стадіон на березі Десни.',
    startsAt: new Date('2022-09-12T23:00:00.000+03:00'),
  },
  {
    name: 'Police Headquarters, Kharkiv',
    tokenId: 3,
    imageSrc: `${IMG_STORAGE}/original/revival/3_Police_gif.gif`,
    artist: 'Tamara Safarova',
    descriptionEnglish:
      'It is crucial to preserve the administrative purpose of the Police Headquarters building in Kharkiv. Elements that survived should be restored, while the destroyed ones should be rebuilt from scratch according to the principles of the concept. The figure of a policeman is projected on the facade of the building. Architect Zinoviy Yudkevych approvingly contemplates the site from the side.',
    descriptionUkrainian:
      'Важливо зберегти адміністративне призначення будівлі облуправління Нацполіції у Харкові. Елементи, які не дуже постраждали, необхідно реставрувати, зруйновані — відновити згідно з принципами концепції. На фасад будівлі проєктується фігура поліцейського. Архітектор Зіновій Юдкевич схвально споглядає на будівлю зі сторони.',
    startsAt: new Date('2022-09-12T23:00:00.000+03:00'),
  },
  {
    name: 'Kharkiv Institute of Physics and Technology, Kharkiv',
    tokenId: 4,
    imageSrc: `${IMG_STORAGE}/original/revival/4_Institute_gif.gif`,
    artist: 'Tamara Safarova',
    descriptionEnglish:
      'An interactive installation of the Kharkiv Institute of Physics and Technology refers to the first experiment in the Soviet Union and the second in the world, when Ukrainian scientists split the lithium atom nucleus in 1932.',
    descriptionUkrainian:
      'Інтерактивна інсталяція Харківського фізико-технічного інституту відсилає до першого у СРСР та другого у світі досліду, коли у 1932 році українські вчені розщепили ядро атома літію.',
    startsAt: new Date('2022-09-12T23:00:00.000+03:00'),
  },
  {
    name: 'Kuindzhi Art Museum, Mariupol',
    tokenId: 5,
    imageSrc: `${IMG_STORAGE}/original/revival/5_Museum_gif.gif`,
    artist: 'Tamara Safarova',
    descriptionEnglish:
      'The damaged roof of the Kuindzhi Art Museum in Mariupol can be restored to add more light and space with attention to motifs of the original building in 1902. The museum is depicted in moonlight, which was so beloved by Kuindzhi.',
    descriptionUkrainian:
      'Пошкоджений дах Художнього музею імені Куїнджі можна відновити, щоб додати більше світла й простору, як в оригінальній будівлі 1902 року. Музей зображений у місячному сяйві, яке так любив Куїнджі.',
    startsAt: new Date('2022-09-12T23:00:00.000+03:00'),
  },
  {
    name: 'Branch of a State Bank, Mariupol',
    tokenId: 6,
    imageSrc: `${IMG_STORAGE}/original/revival/6_Bank_gif.gif`,
    artist: 'Tamara Safarova',
    descriptionEnglish:
      'Looking at the images, you’ll see the horrifying damages done to the Mariupol Branch of the State Bank. In the future, we should aim to restore the first floor as much as possible. The second floor and the side part should be newly built, but in the tradition of the classical style of the old building. Historically, there have always been financial institutions, so a cozy financial and investment center must appear, with green offices and a cafe with an outdoor terrace for meetings.',
    descriptionUkrainian:
      'Фотографії свідчать про жахливі руйнування, яких зазнала будівля Маріупольського відділення Державного банку. У майбутньому перший поверх необхідно буде реставрувати, а другий і бокову частину — побудувати наново, але у традиціях класичного стилю старовинної будівлі. Історично там завжди знаходилися фінансові установи, тому я уявляю затишний фінансово-інвестиційний центр із зеленими офісами та кафе з відкритою терасою для зустрічей.',
    startsAt: new Date('2022-09-12T23:00:00.000+03:00'),
  },
  {
    name: 'Manor of Koenig, Trostyanets',
    tokenId: 7,
    imageSrc: `${IMG_STORAGE}/original/revival/7_Kenig_gif.gif`,
    artist: 'Tamara Safarova',
    descriptionEnglish:
      'The Manor of Koenig in Trostyanets was almost destroyed. Because it is located in a park, it could be rebuilt into a greenhouse in the future. ',
    descriptionUkrainian:
      'Садиба Кеніга у Тростянці була майже повністю знищена. Оскільки будівля розташовується у парку, в майбутньому її можна перетворити на оранжерею.',
    startsAt: new Date('2022-09-12T23:00:00.000+03:00'),
  },
  {
    name: 'House of Culture "Iskra", Mariupol',
    tokenId: 32,
    imageSrc: `${IMG_STORAGE}/original/revival/01_House_of_Culture_Iskra_Mariupol.tif`,
    artist: 'Bogdana Davydiyk',
    descriptionEnglish:
      'Modernist frieze, mosaics with cosmic motifs, and ceramic panels. Accurate font composition of a sign plate. The goal of the concept was to interpret the dynamics and message of the composition of monumental panels around the House of Culture "Iskra" in Mariupol.',
    descriptionUkrainian:
      'Модерністичний фриз, мозаїки з космічними мотивами, керамічні панно. Дзвінка шрифтова композиція вивіски. Метою концепції було інтерпретувати динаміку і послання монументальних панно в композицію навколо будівлі Палацу культури “Іскра” в Маріуполі.',
    startsAt: new Date('2022-09-16T23:00:00.000+03:00'),
  },
  {
    name: 'Gamper’s House, Mariupol',
    tokenId: 33,
    imageSrc: `${IMG_STORAGE}/original/revival/02_Gampers_House_Mariupol.tif`,
    artist: 'Bogdana Davydiyk',
    descriptionEnglish:
      "Gamper’s House in Mariupol is known for its owner and architecture. It can become empty and turn into ruins hidden behind ivy and other plants if you don't rescue it in time. Do you think this could be possible?",
    descriptionUkrainian:
      'Будинок Гампера у Маріуполі відомий як завдяки своєму власнику, так і завдяки  архітектурі. Він може спорожніти або перетворитися на заховану за плющем й іншими рослинами руїну, якщо вчасно не почати його рятувати. Та чи можливо це?',
    startsAt: new Date('2022-09-16T23:00:00.000+03:00'),
  },
  {
    name: 'Railway Station, Okhtyrka',
    tokenId: 34,
    imageSrc: `${IMG_STORAGE}/original/revival/03_Railway_Station_Okhtyrka.tif`,
    artist: 'Bogdana Davydiyk',
    descriptionEnglish:
      'The tracks become graphic elements and the station itself, too, if you look at this place as a visual image. The Railway Station in Okhtyrka was already damaged during the Second World War and got targeted and destroyed again.',
    descriptionUkrainian:
      'Колії стають графічними елементами, як і сам вокзал, якщо дивитися на це місце наче на візуальний образ. Залізнична станція в Охтирці вже зазнала руйнування в часи Другої світової війни. Тепер вона знову під прицілом і знову зруйнована.',
    startsAt: new Date('2022-09-16T23:00:00.000+03:00'),
  },
  {
    name: 'Shestovytsia Airport, Chernihiv',
    tokenId: 35,
    imageSrc: `${IMG_STORAGE}/original/revival/04_Shestovytsia_Airport_Chernihiv.tif`,
    artist: 'Bogdana Davydiyk',
    descriptionEnglish:
      'The now-defunct Shestovytsia Airport in Chernihiv is a monumental art heritage site. It had a series of mosaic compositions on the facade, which is destroyed today. That is why tracking a record of such sights is crucial because, unfortunately, we never know when we can lose them.',
    descriptionUkrainian:
      'Не діючий нині аеропорт Шестовиця у Чернігові — пам’ятка зі спадщини монументального мистецтва. Його фасад оздоблювала серія мозаїчних композицій, яка була зруйнована. Ось чому фіксувати такі пам’ятки надзвичайно важливо, адже, на жаль, ми не знаємо, коли втратимо їх.',
    startsAt: new Date('2022-09-16T23:00:00.000+03:00'),
  },
  {
    name: 'Municipal Local History Museum, Okhtyrka',
    tokenId: 36,
    imageSrc: `${IMG_STORAGE}/original/revival/05_Municipal_Local_History_Museum_Okhtyrka.tif`,
    artist: 'Bogdana Davydiyk',
    descriptionEnglish:
      "All the shelled houses today are a sign of the damage to material heritage and encroachment on history and one's identification. Municipal Local History Museums like those destroyed in Okhtyrka have been operating for many years, featuring important collected material about the region.",
    descriptionUkrainian:
      'Усі обстріляні будинки свідчать про посягання на матеріальну спадщину, історію й власну ідентифікацію. Міські краєзнавчі музеї, подібні до знищеного в Охтирці, виконують значущу роботу, поширюючи важливі знання про регіон.',
    startsAt: new Date('2022-09-16T23:00:00.000+03:00'),
  },
  {
    name: 'House of Culture, Rubizhne',
    tokenId: 37,
    imageSrc: `${IMG_STORAGE}/original/revival/06_House_of_Culture_Rubizhne.tif`,
    artist: 'Bogdana Davydiyk',
    descriptionEnglish:
      'Today Houses of Culture, including the one in Rubizhne, often become a target. Is displacing our culture and making it a wasteland with lush wild greenery the goal of the occupants?',
    descriptionUkrainian:
      'Сьогодні палаци культури, включаючи будівлю у Рубіжному, часто стають мішенню. Можливо, мета окупантів — витіснити культуру й зробити нашу землю пусткою з буйною зеленню?',
    startsAt: new Date('2022-09-16T23:00:00.000+03:00'),
  },
  {
    name: 'Central House of Culture, Irpin',
    tokenId: 38,
    imageSrc: `${IMG_STORAGE}/original/revival/07_Central_House_of_Culture_Irpin.tif`,
    artist: 'Bogdana Davydiyk',
    descriptionEnglish:
      'The framing of the House of Culture in Irpin received a new visual language. The windows are now highlighted with black spots. But the silhouette still attracts with its graphics. Such sites should be repaired, maintained and brought back to life.',
    descriptionUkrainian:
      'Обрамлення Будинку культури в Ірпені отримало нову візуальну мову. Вікна тепер акцентовані чорними плямами. Але силует все одно приваблює своєю графікою. Такі пам’ятки необхідно відреставрувати й повернути до життя.',
    startsAt: new Date('2022-09-16T23:00:00.000+03:00'),
  },
].map((item) => ({
  isSale: true,
  category: AuctionCollection.TheRevivalProject,
  editions: 400,
  ...item,
}));

export default RevivalAuctionData;
