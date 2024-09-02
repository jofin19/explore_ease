import React from 'react';
import AnimatedCards from '@/Components/navbar/AnimatedCards';

import Ireland_image_1 from '@/assets/Ireland_image_1.jpg';
import Ireland_image_2 from '@/assets/Ireland_image_2.jpg';
import Ireland_image_3 from '@/assets/Ireland_image_3.jpg';
import Ireland_image_4 from '@/assets/Ireland_image_4.jpg';
import Ireland_image_5 from '@/assets/Ireland_image_5.jpg';
import Ireland_image_6 from '@/assets/Ireland_image_6.jpg';
import clif_1 from '@/assets/Clif/clif_1.jpg';
import clif_2 from '@/assets/Clif/clif_2.jpg';
import clif_3 from '@/assets/Clif/clif_3.jpg';
import clif_4 from '@/assets/Clif/clif_4.jpg';
import clif_5 from '@/assets/Clif/clif_5.jpg';
import clif_6 from '@/assets/Clif/clif_6.jpg';

import castle_1 from '@/assets/Castle/castle_1.jpg';
import castle_2 from '@/assets/Castle/castle_2.jpg';
import castle_3 from '@/assets/Castle/castle_3.jpg';
import castle_4 from '@/assets/Castle/castle_4.jpg';
import castle_5 from '@/assets/Castle/castle_5.jpg';
import castle_6 from '@/assets/Castle/castle_6.jpg';

import giant_1 from '@/assets/causeway/giant_1.jpg';
import giant_2 from '@/assets/causeway/giant_2.jpg';
import giant_3 from '@/assets/causeway/giant_3.jpg';
import giant_4 from '@/assets/causeway/giant_4.jpg';
import giant_5 from '@/assets/causeway/giant_5.jpg';
import giant_6 from '@/assets/causeway/giant_6.jpg';


import kerry_1 from '@/assets/kerry/kerry_1.jpg';
import kerry_2 from '@/assets/kerry/kerry_2.jpg';
import kerry_3 from '@/assets/kerry/kerry_3.jpg';
import kerry_4 from '@/assets/kerry/kerry_4.jpg';
import kerry_5 from '@/assets/kerry/kerry_5.jpg';
import kerry_6 from '@/assets/kerry/kerry_6.jpg';


import blarney_1 from '@/assets/blarney/blarney_1.jpg';
import blarney_2 from '@/assets/blarney/blarney_2.jpg';
import blarney_3 from '@/assets/blarney/blarney_3.jpg';
import blarney_4 from '@/assets/blarney/blarney_4.jpg';
import blarney_5 from '@/assets/blarney/blarney_5.jpg';
import blarney_6 from '@/assets/blarney/blarney_6.jpg';

import rock_1 from '@/assets/rock/rock_1.jpg';
import rock_2 from '@/assets/rock/rock_2.jpg';
import rock_3 from '@/assets/rock/rock_3.jpg';
import rock_4 from '@/assets/rock/rock_4.jpg';
import rock_5 from '@/assets/rock/rock_5.jpg';
import rock_6 from '@/assets/rock/rock_6.jpg';


const Card: React.FC = () => {
    const cardData = [

        {
            title: "Blarney Castle",
            description: "The Cliffs of Moher are one of Ireland's most iconic natural attractions, rising 700 feet above the Atlantic Ocean. Offering breathtaking views, they stretch for about 14 kilometers along the western coast of County Clare.",
            imageSrc: Ireland_image_1,
            additionalImages: [
                clif_1,
                clif_2,
                clif_3,
                clif_4,
                clif_5,
                clif_6
            ]
        },
        {
            title: "Cobh",
            description: "Located in the heart of Ireland's capital, Dublin Castle is a major government complex and historical site. With origins dating back to the 13th century, it has played a pivotal role in Irish history and offers guided tours showcasing its rich heritage.",
            imageSrc: Ireland_image_2,
            additionalImages: [
                castle_1,
                castle_2,
                castle_3,
                castle_4,
                castle_5,
                castle_6
            ]
        },
        {
            title: "Downpatrick Head",
            description: "A UNESCO World Heritage site, the Giant's Causeway in Northern Ireland features about 40,000 interlocking basalt columns, the result of an ancient volcanic eruption. It is steeped in myth and legend, making it a must-see for visitors.",
            imageSrc: Ireland_image_3,
            additionalImages: [
                giant_1,
                giant_2,
                giant_3,
                giant_4,
                giant_5,
                giant_6
            ]
        },
        {
            title: "Malahide Castle",
            description: "The Ring of Kerry is a scenic drive around the Iveragh Peninsula in southwest Ireland. It offers stunning landscapes, including rugged coastlines, rolling green hills, and charming villages. It's a favorite for those seeking to experience Ireland's natural beauty.",
            imageSrc: Ireland_image_4,
            additionalImages: [
                kerry_1,
                kerry_2,
                kerry_3,
                kerry_4,
                kerry_5,
                kerry_6
            ]
        },
        {
            title: "A Tiny Hidden Beach",
            description: "Located near Cork, Blarney Castle is a medieval stronghold famous for the Blarney Stone. Legend has it that kissing the stone grants the gift of eloquence. The castle and its beautiful gardens attract visitors from around the world.",
            imageSrc: Ireland_image_5,
            additionalImages: [
                blarney_1,
                blarney_2,
                blarney_3,
                blarney_4,
                blarney_5,
                blarney_6
            ]
        },
        {
            title: "Killiney Hill",
            description: "The Rock of Cashel is one of Ireland's most spectacular archaeological sites. Situated in County Tipperary, it includes a collection of medieval buildings, including a round tower, high cross, and a cathedral, perched on a limestone hilltop.",
            imageSrc: Ireland_image_6,
            additionalImages: [
                rock_1,
                rock_2,
                rock_3,
                rock_4,
                rock_5,
                rock_6
            ]
        },
    ];

    return (
        <div className='flex flex-wrap justify-center'>
            {cardData.map((card, index) => (
                <AnimatedCards
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageSrc={card.imageSrc}
                    additionalImages={card.additionalImages}
                />
            ))}
        </div>
    );
};

export default Card;
