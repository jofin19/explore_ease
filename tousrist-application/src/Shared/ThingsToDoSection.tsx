import React from 'react';
import ThingsToDo from '@/Components/navbar/ThingsToDo';
import actrivity_1 from '@/assets/Activities/actrivity_1.jpg';
import actrivity_2 from '@/assets/Activities/actrivity_2.jpg';
import actrivity_3 from '@/assets/Activities/actrivity_3.jpg';
import actrivity_4 from '@/assets/Activities/actrivity_4.jpg';
import actrivity_5 from '@/assets/Activities/actrivity_5.jpg';
import actrivity_6 from '@/assets/Activities/actrivity_6.jpg';

const thingsToDoData = [
  {
    image: actrivity_1,
    title: 'Explore the Historic Castle',
    description: 'Discover the rich history of the castle and its beautiful surrounding gardens.',
  },
  {
    image: actrivity_2,
    title: 'Kiss the Famous Stone',
    description: 'Engage in the legendary tradition of kissing the stone for good luck.',
  },
  {
    image: actrivity_3,
    title: 'Visit a Nearby City',
    description: 'Explore the nearby city known for its vibrant culture, shops, and history.',
  },
  {
    image: actrivity_4,
    title: 'Take a Scenic Walk',
    description: 'Enjoy a leisurely walk through the picturesque landscapes around the area.',
  },
  {
    image: actrivity_5,
    title: 'Local Dining Experience',
    description: 'Dine at local restaurants offering traditional dishes and friendly atmospheres.',
  },
  {
    image: actrivity_6,
    title: 'Attend a Cultural Event',
    description: 'Participate in or watch local cultural events, such as music or dance performances.',
  },
];

const ThingsToDoSection: React.FC = () => {
  return (
    <div>
      <ThingsToDo
        sectionTitle="Things to Do Nearby"
        sectionSubtitle="Explore these activities near this popular tourist destination"
        activities={thingsToDoData}
      />
    </div>
  );
};

export default ThingsToDoSection;
