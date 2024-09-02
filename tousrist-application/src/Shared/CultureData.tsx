import React from 'react';
import CultureLast from '@/Components/navbar/CultureLast';
import Culture_1 from '@/assets/Culture_1.jpg';
import Culture_2 from '@/assets/Culture_2.jpg';
import Culture_3 from '@/assets/Culture_3.jpg';
import Culture_4 from '@/assets/Culture_4.jpg';
import Culture_5 from '@/assets/Culture_5.jpg';
import Culture_6 from '@/assets/Culture_6.jpg';

const CultureData: React.FC = () => {
  // Define the array with all the data
  const cultureItems = [
    {
      image: Culture_1,
      title: "Dramatic Irish Cliffs",
      content: "These towering cliffs offer a breathtaking view of the Atlantic Ocean, a popular spot for both tourists and locals."
    },
    {
      image: Culture_2,
      title: "Traditional Irish Pub",
      content: "A cozy pub in the heart of Dublin where locals gather to enjoy live music and a pint of Guinness."
    },
    {
      image: Culture_3,
      title: "Celtic Ruins",
      content: "Ancient ruins that tell the story of Ireland's rich history, dating back to the Celtic era."
    },
    {
      image: Culture_4,
      title: "Colorful Coastal Town",
      content: "A vibrant coastal town known for its colorful houses and lively harbor, perfect for a relaxing getaway."
    },
    {
      image: Culture_5,
      title: "Irish Countryside",
      content: "Rolling green hills and serene landscapes that define the idyllic Irish countryside."
    },
    {
      image: Culture_6,
      title: "Historic Castle",
      content: "A majestic castle that stands as a testament to Ireland's medieval past, offering a glimpse into the life of Irish royalty."
    }
  ];

  return (
    <div className="p-8">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
        {cultureItems.map((item, index) => (
          <CultureLast 
            key={index}
            image={item.image} 
            title={item.title} 
            content={item.content} 
          />
        ))}
      </div>
    </div>
  );
}

export default CultureData;
