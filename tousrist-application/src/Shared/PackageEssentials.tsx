import React from 'react';
import PackingCard from '@/Components/navbar/PackingCard';

const PackingEssentials: React.FC = () => {
  const packingItems = [
    {
      title: 'Clothing',
      content:
        'Check the weather forecast for your destination. Pack layers, waterproof jackets, comfortable shoes, and suitable clothing for your planned activities.',
    },
    {
      title: 'Travel Documents',
      content:
        'Ensure you carry essential documents like passports, visas, travel insurance, and copies of your bookings.',
    },
    {
      title: 'Electronics',
      content:
        'Bring travel adapters, power banks, and keep your electronics in protective cases.',
    },
    {
      title: 'Health and Hygiene',
      content:
        'Pack a first-aid kit, necessary medications, hand sanitizer, masks, and personal hygiene products.',
    },
  ];

  return (
    <section className="mt-20 py-16 bg-primary-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-8 text-center md:text-left">
          Packing Essentials: What to Bring for Your Trip
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {packingItems.map((item, index) => (
            <PackingCard key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackingEssentials;
