import CulturalSwiper from '@/Components/navbar/CulturalSwiper';
import artist_1 from '@/assets/artist_1.jpg';
import artist_2 from '@/assets/artist_2.jpg';
import artist_3 from '@/assets/artist_3.jpeg';
import artist_4 from '@/assets/artist_4.jpeg';
import artist_5 from '@/assets/artist_5.jpeg';
import artist_6 from '@/assets/artist_6.jpeg';
import artist_7 from '@/assets/artist_7.jpeg';
import artist_8 from '@/assets/artist_8.jpeg';

interface SlideContent {
    title: string;
    description: string;
    image: string;
}

const artistData: SlideContent[] = [
  {
    title: "James Joyce",
    description: "James Joyce was a novelist and poet, known for his avant-garde modernist works, particularly 'Ulysses' and 'A Portrait of the Artist as a Young Man'. His work revolutionized narrative methods and language, influencing the entire course of 20th-century literature.",
    image: artist_1
  },
  {
    title: "W.B. Yeats",
    description: "W.B. Yeats was one of the foremost figures of 20th-century literature, a poet and playwright, and a key figure in the Irish Literary Revival. His work ranges from early romantic poems to more modernist approaches.",
    image: artist_2
  },
  {
    title: "Seamus Heaney",
    description: "Seamus Heaney was an Irish poet, playwright, and translator. He received the Nobel Prize in Literature in 1995 and is recognized for his significant contribution to poetry, with works that draw heavily on his rural upbringing.",
    image: artist_3
  },
  {
    title: "Samuel Beckett",
    description: "Samuel Beckett was a playwright, novelist, and poet, best known for his play 'Waiting for Godot'. His works are characterized by bleak, tragicomic themes and deep existential questioning.",
    image: artist_4
  },
  {
    title: "Jack B. Yeats",
    description: "Jack B. Yeats, the brother of W.B. Yeats, was one of Ireland’s most important painters. His works capture the Irish spirit, landscapes, and life, moving from early realistic works to a more expressionistic style.",
    image: artist_5
  },
  {
    title: "Louis le Brocquy",
    description: "Louis le Brocquy was a prominent Irish painter whose work is held in high esteem globally. He is best known for his series of 'Portrait Heads' of literary figures such as W.B. Yeats and James Joyce.",
    image: artist_6
  },
  {
    title: "Francis Bacon",
    description: "Although born in Ireland, Francis Bacon is often associated with British art. He was a figurative painter known for his bold, grotesque, emotionally raw imagery. His work has had a profound impact on modern art.",
    image: artist_7
  },
  {
    title: "John Lavery",
    description: "Sir John Lavery was an Irish painter best known for his portraits and wartime works. His paintings provide a vivid record of the early 20th century, from society portraits to scenes of Irish independence.",
    image: artist_8
  },
];

export default function Artist() {
  return (
    <div className="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300">
      <CulturalSwiper slides={artistData} sectionTitle="Most Popular Irish Artist" />
    </div>
  );
}
