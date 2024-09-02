import React from 'react';

type CultureItems = {
    image?: string;
    title?: string;
    content?: string;
}

const CultureLast: React.FC<CultureItems> = ({ image, title, content }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-[250px] md:h-[300px] lg:h-[400px]"> {/* Responsive height */}
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <p className='text-base md:text-lg font-semibold'>{content}</p>
            </div>
        </div>
    );
}

export default CultureLast;
