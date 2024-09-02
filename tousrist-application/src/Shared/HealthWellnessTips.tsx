import HealthTips from '@/Components/navbar/HealthTips';
import { FaWater, FaRunning, FaAppleAlt, FaBed } from 'react-icons/fa'; // Example icons
import React from 'react';

const HealthWellnessTips: React.FC = () => {
  const healthTips = [
    {
      icon: <FaWater />,
      title: 'Stay Hydrated',
      content: 'Drink plenty of water, especially in hot climates or during long flights, to keep your body hydrated and refreshed.',
    },
    {
      icon: <FaRunning />,
      title: 'Exercise Regularly',
      content: 'Incorporate light exercises or stretches into your daily routine, even during travel, to stay active and energized.',
    },
    {
      icon: <FaAppleAlt />,
      title: 'Eat Healthy',
      content: 'Opt for nutritious meals, including local fruits and vegetables, and be mindful of food safety while exploring new cuisines.',
    },
    {
      icon: <FaBed />,
      title: 'Get Enough Rest',
      content: 'Ensure you get sufficient sleep and rest to recharge your body and mind, especially when traveling across time zones.',
    },
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-8 text-center md:text-left">Health & Wellness Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {healthTips.map((tip, index) => (
            <HealthTips key={index} icon={tip.icon} title={tip.title} content={tip.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthWellnessTips;
