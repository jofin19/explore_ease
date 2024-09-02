import React from 'react';

type SafetyTipsProps = {
  title: string;
  content: string;
};

const SafetyTips: React.FC<SafetyTipsProps> = ({ title, content }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <h3 className='text-xl md:text-2xl font-semibold text-primary-500 mb-4'>
        {title}
      </h3>
      <p className='text-primary-700 text-base md:text-lg'>{content}</p>
    </div>
  );
};

export default SafetyTips;
