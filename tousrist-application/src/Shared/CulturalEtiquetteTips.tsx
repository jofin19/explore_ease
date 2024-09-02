
import CulturalTips from '@/Components/navbar/CulturalTips';
import React from 'react';
import { FaHandshake, FaUserTie, FaUtensils, FaGavel } from 'react-icons/fa';  // Example icons

const CulturalEtiquetteTips: React.FC = () => {
  const culturalTips = [
    {
      icon: <FaHandshake />,
      title: 'Greet with Respect',
      content: 'Always greet people with a smile and use the appropriate greeting method, whether it be a handshake, bow, or verbal greeting.',
    },
    {
      icon: <FaUserTie />,
      title: 'Dress Modestly',
      content: 'In many cultures, modest dress is a sign of respect. Be mindful of local customs, especially in religious or conservative areas.',
    },
    {
      icon: <FaUtensils />,
      title: 'Mind Your Manners',
      content: 'Observe local etiquette when it comes to table manners, queueing, and other social norms to show respect for the culture.',
    },
    {
      icon: <FaGavel />,
      title: 'Be Aware of Local Laws',
      content: 'Respect local laws and regulations, even if they differ from those in your home country. This helps avoid any legal issues during your trip.',
    },
  ];

  return (
    <section className="pt-20 py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-8 text-center md:text-left">
          Cultural Etiquette: Respecting Local Customs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {culturalTips.map((tip, index) => (
            <CulturalTips key={index} icon={tip.icon} title={tip.title} content={tip.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalEtiquetteTips;
