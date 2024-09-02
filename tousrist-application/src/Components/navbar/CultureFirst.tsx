import React from 'react';

type CultureFirstProps = {
  image: string;
  title: string;
  content: string;
  reverse?: boolean;
}

const CultureFirst: React.FC<CultureFirstProps> = ({ image, title, content, reverse }) => {
  return (
    <div className="px-8 lg:px-16"> {/* This container adds padding/margin on the left and right */}
      <div className={`flex flex-col lg:flex-row md:flex-row items-center justify-center pt-40 pb-20 ${reverse ? 'lg:flex-row-reverse md:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className='lg:w-1/2 md:w-1/2'>
          <div className="w-full h-80 lg:h-96 sm:h-70 sm:w-full sm:pb-10 xs:pb-20"> {/* Set a fixed height for the image container */}
            <img src={image} alt="Irish Culture Image" className="w-full h-full  object-cover rounded-lg shadow-md" />
          </div>
        </div>

        {/* Content Section */}
        <div className='lg:w-1/2 md:w-1/2 p-4 text-justify '>
          <h2 className='text-3xl font-bold text-primary-500 mb-4'>{title}</h2>
          <p className='text-gray-700 text-lg leading-relaxed'>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default CultureFirst;
