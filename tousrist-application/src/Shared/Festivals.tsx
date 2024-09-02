import CulturalSwiper from '@/Components/navbar/CulturalSwiper';

import festival_1 from '@/assets/festival_1.jpeg';
import festival_2 from '@/assets/festival_2.jpeg';
import festival_3 from '@/assets/festival_3.jpg';
import festival_4 from '@/assets/festival_4.jpeg';
import festival_5 from '@/assets/festival_5.jpg';
import festival_6 from '@/assets/festival_6.jpg';
import festival_7 from '@/assets/festival_7.jpeg';
import festival_8 from '@/assets/festival_8.jpg';

interface SlideContent {
    title: string;
    description: string;
    image: string;
    }
    const festivalData: SlideContent[] = [
        {
          title: "St. Patrick's Festival",
          description: "Held annually in Dublin, St. Patrick's Festival is the largest celebration of Irish culture, featuring parades, music, and street performances. It commemorates Ireland's patron saint and has become a global symbol of Irish heritage.",
          image: festival_1
        },
        {
          title: "Galway International Arts Festival",
          description: "This summer festival is one of Ireland's leading arts events, showcasing a diverse array of performances, including theatre, music, visual arts, and street spectacles in the vibrant city of Galway.",
          image: festival_2
        },
        {
          title: "Fleadh Cheoil",
          description: "Fleadh Cheoil is the world's largest celebration of Irish music and dance, attracting performers and enthusiasts from all over the globe. This annual event is a must-visit for anyone interested in traditional Irish culture.",
          image: festival_3
        },
        {
          title: "Dublin Theatre Festival",
          description: "As one of the oldest theatre festivals in Europe, the Dublin Theatre Festival presents world-class theatre productions, bringing innovative and inspiring performances to the heart of Dublin.",
          image: festival_4
        },
        {
          title: "Cork Jazz Festival",
          description: "The Cork Jazz Festival is Ireland's premier jazz event, attracting top musicians from around the world. The city of Cork comes alive with music, featuring performances in venues ranging from intimate clubs to large concert halls.",
          image: festival_5
        },
        {
          title: "Lisdoonvarna Matchmaking Festival",
          description: "This unique festival in County Clare is one of Europe's oldest matchmaking events. It celebrates the Irish tradition of matchmaking, with live music, dancing, and plenty of opportunities for romance.",
          image: festival_6
        },
        {
          title: "Puck Fair",
          description: "Puck Fair, held in Killorglin, County Kerry, is one of Ireland's oldest and most unusual festivals. It features the crowning of a wild goat as 'King Puck,' along with parades, music, and entertainment.",
          image: festival_7
        },
        {
          title: "Wexford Festival Opera",
          description: "The Wexford Festival Opera is renowned for its unique programming, focusing on rarely performed operas. This internationally acclaimed festival draws opera lovers from all corners of the world.",
          image: festival_8
        },
      ];
      


export default function Festivals () {
  return (
    <div className="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300">
    <CulturalSwiper slides={festivalData} sectionTitle="Top Irish Festivals" />
  </div>
  )
}

