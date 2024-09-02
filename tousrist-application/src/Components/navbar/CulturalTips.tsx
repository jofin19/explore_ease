import React from 'react';

type CulturalTipsProps = {
    icon: React.ReactNode;
    title: string;
    content: string;
};

const CulturalTips: React.FC<CulturalTipsProps> = ({ icon, title, content }) => {
  return (
    <div className='flex items-start p-6 rounded-lg shadow-lg hover:bg-primary-100 transition-colors duration-300'>
        <div className='text-primary-600 text-2xl md:text-3xl mr-4'>
            {icon}
        </div>
        <div>
            <h3 className='text-lg md:text-xl font-bold text-primary-700 mb-2'>{title}</h3>
            <p className='text-primary-500 text-base md:text-lg'>{content}</p>
        </div>
    </div>
  );
};

export default CulturalTips;
