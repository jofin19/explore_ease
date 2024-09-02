import React from 'react';

type AccomodationcardProps = {
  image: string;
  price: string;
  title: string;
  location: string;
};

const AccomodationCard: React.FC<AccomodationcardProps> = ({ image, price, title, location }) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className='w-full h-64'>
        <img src={image} alt={title} className='w-full h-48 object-cover' />
      </div>
      <div className='p-4'>
        <div className='text-lg font-semibold text-gray-800 mb-2'>
          {price}
        </div>
        <div className='text-md font-semibold text-gray-800 mb-2'>
          {title}
        </div>
        <div className='text-gray-600'>
          {location}
        </div>
      </div>
    </div>
  );
};

export default AccomodationCard;
