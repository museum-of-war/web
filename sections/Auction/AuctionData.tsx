import { FIRST_DROP_ADDRESS, PROSPECT_100_ADDRESS } from "@sections/Constants";
import { AuctionCategories, AuctionItemType } from "@sections/types";
import WarlineData from "@sections/Warline/WarlineData";

const AuctionData: Array<AuctionItemType> = [
    ...WarlineData[0]!.events.slice(0, 4).map(event => ({
        name: `Day ${event.DayNo}, ${event.Time}`,
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.firstDrop,
        contractAddress: FIRST_DROP_ADDRESS,
        tokenId: +event.Tokenid,
        imageSrc: "img/original/" + event.ImageType,
        artist: event.ArtistName,
        descriptionEnglish: event.DescriptionEnglish,
        descriptionUkrainian: event.DescriptionUkrainian,
    })),
    {
        name: "PROSPECT 100 #2",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 2,
        imageSrc: "img/original/prospect100/2.jpg",
        artist: "Alexandra Lytle",
        descriptionEnglish: "\"Unlikely Allies\" embodies the hope that peace and unity overcomes any ambiguity through stereotypes, barriers and what society portrays as good or bad.\n" +
            "The common nightingale, the official animal of Ukraine, is featured throughout this piece as the fighters against all odds, working together with an unlikely ally, the wolf to join them in their fight for justice.\n" +
            "These two species typically never interact in the natural world - here they are coming together for the greater good and justice. I hope this piece inspires, questions and gives a sense of mystery with its unique feeling of depth. The piece is meant to encourage but also question opposing opinions about the natural order and what society thinks you should be taught based on past narratives or democratic rules.",
    },
    {
        name: "PROSPECT 100 #3",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 3,
        imageSrc: "img/original/prospect100/3.jpg",
        artist: "Carl Knapper",
        descriptionEnglish: "Four small solitary Ukrainian coloured balloons, lifting the might of a mobile Russian tank, stopping it in its tracks. A simple visual representation using ink on canvas, illustrating the strength and courage of the Ukrainian people...‘Defying the Odds’.",
    },
    {
        name: "PROSPECT 100 #4",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 4,
        imageSrc: "img/original/prospect100/4.jpg",
        artist: "Craig Howell",
        descriptionEnglish: "The inspiration to create this artwork was reading \"Putin is at war with children. In Ukraine, where his missiles hit kindergartens and orphanages\" I immediately thought the “Bitter Memories of Childhood” monument to memorialize the Holodomor. The monument is to memorialize the Holodomor endured by the Ukrainian people in 1932-33. The Holodomor was a manmade famine in the Ukrainian SSR and adjacent Cossack territories between 1932 and 1933. During the famine millions of Ukrainians and Cossacks died of starvation in a peacetime catastrophe unprecedented in the history of Ukraine. I wanted to capture the absolute beauty of the monument with the tragedy current invasion of Vladimir Putin. It made me think of a quote by Jimmy Carter, the 39th president of the United States, \"We will not learn to live together in peace by killing each other's children.” I hope I captured the beauty and heartache that the Ukrainian people have endured and the world has painfully watch unfold.",
    },
    {
        name: "PROSPECT 100 #5",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 5,
        imageSrc: "img/original/prospect100/5.jpg",
        artist: "Flo Meissner",
        descriptionEnglish: "For me, there is nothing more heartbreaking than seeing children suffering from war and hearing the news that kindergartens and orphanages are bombed. This artwork refers to the sources „Putin is at war with children“ (02.03) and „More than 840 children wounded by Russian invasion“ (05.03). It shows the skeleton of a small child in tears with it‘s bones shattered. In one hand it holds a withering flower, symbolizing the beautiful life before the war, which has faded. In the other hand is hope. Hope for peace and for this war to end soon. Concluded with a simple yet powerful message: NO TO WAR.",
    },
    {
        name: "PROSPECT 100 #6",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 6,
        imageSrc: "img/original/prospect100/6.jpg",
        artist: "Jona Schmidt",
        descriptionEnglish: "In Germany the Ukraine war has sparked a conversation about our dependeny on Russian gas - mainly used for heating and industry. People are calling to „freeze for freedom“, trying to reduce the gas needed to be bought from russia. Germany‘s gas orders are funding the Russian military manchinery - which sparked the question for me: are we heating with blood? This thought led me to imagine a bloody hand turning on a heater. In my submission I suggest this image in an abstract form trough a gradient mapped image. Without directly showing scenes the the dilemma is communicated - the colors also suggest the view of an infrared camera that visualizes heat.",
    },
    {
        name: "PROSPECT 100 #7",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 7,
        imageSrc: "img/original/prospect100/7.jpg",
        artist: "Jordan Fretz",
        descriptionEnglish: "My work was inspired by the Ukraine government official “Dmytro Kuleba” asking the US with assistance in more sanctions and pressure on Russia. Other articles also were lesser inspiration but relevant also was the EU, Japan, Switzerland, etc. who also imposing sanctions and closing their airspace to Russia, all leading to the downward spiral of the Ruble/ pipeline and Russian Economy.",
    },
    {
        name: "PROSPECT 100 #8",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 8,
        imageSrc: "img/original/prospect100/8.jpg",
        artist: "Kamil Przybylski",
        descriptionEnglish: "„Putin sought to shake the foundations of free world. Instead, he met with a wall of strength. Ukrainians”\n" +
            "The illustration shows the initial state of the siege of Ukraine. The rules have been broken and the dark pawns (Russia) have started playing their own game instead of the white ones, but not on their own territory. Ukraine's most famous buildings indicate the location of the action. People are dying on the battlefield, but the Ukrainians are not giving up. They rise again to fight, stronger. They can count on the support of other European Union and NATO countries who are watching the chess game. They cannot join in, but they are helping in other ways. A symbolic pawn, the Motherland statue, stands guard.",
    },
    {
        name: "PROSPECT 100 #9",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 9,
        imageSrc: "img/original/prospect100/9.jpg",
        artist: "Nathan Zerafa",
        descriptionEnglish: "This jet is made of paper.\n" +
            "But what if it were steel...\n" +
            "And carried bombs...\n" +
            "Over the heads of the ones you love...\n" +
            "This NFT titled ‘Paper Planes’ draws inspiration from the symbolic demonstration that happened on the 6th of March, at the Solomon R. Guggenheim Museum. The paper planes connote the fighter jets, casting a shadow over Ukraine.",
    },
    {
        name: "PROSPECT 100 #10",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 10,
        imageSrc: "img/original/prospect100/10.png",
        artist: "Luke Dixon",
        descriptionEnglish: "Russian bomb fell on a residential building in Chernihiv and didn't EXPLODE!",
    },
    {
        name: "PROSPECT 100 #11",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 11,
        imageSrc: "img/original/prospect100/11.jpg",
        artist: "Stephen Sidney",
        descriptionEnglish: "The work takes inspiration from all the brave individuals who have stayed in Ukraine to aid. The scene depicts a father saying goodbye to his family fleeing from the war by train.\n" +
            "The image is a part of a larger series of work titled ‘X-Ray Crisis’ in which I have been depicting scenes of conflict and human compassion since the Kazakhstan uprising.\n" +
            "The X-Ray imagery is to see through the politics and misinformation of conflict to the human element/cost. Underneath our exterior differences we are anatomically and often spiritually the same.\n" +
            "Despite the intentionally ominous and oppressive black and red palette the work aims to invoke a sense of compassion, unity, and hope.",
    },
    {
        name: "PROSPECT 100 #12",
        endsIn: new Date("2022-04-24T23:00:00.000+03:00"),
        category: AuctionCategories.prospect100,
        contractAddress: PROSPECT_100_ADDRESS,
        tokenId: 12,
        imageSrc: "img/original/prospect100/12.jpg",
        artist: "Tanya Dare",
        descriptionEnglish: "Inspired by sources depicting both the physical and mental harm deployed on young children, as a result of this war. This digital art piece aims to communicate that ‘they shouldn’t have to know’; that this conflict is robbing them of their deserved childhood liveliness. The subject of the piece displays a childrens shape sorter toy without the usual shapes, but rather the imagery of war and violence - toys of bombs, bomber planes, explosions and bullets, with the bomb sorted into the wrong slot. It grapples with the idea that children shouldn’t have to understand the structure of war when they are so young, but it is the unfortunate reality of what these children will remember.",
    }
];

export default AuctionData;
