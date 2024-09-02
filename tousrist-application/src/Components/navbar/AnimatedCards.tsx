import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AnimatedCardsProps {
    title: string;
    description: string;
    imageSrc: string;
    additionalImages: string[];
}

const AnimatedCards: React.FC<AnimatedCardsProps> = ({ title, description, imageSrc, additionalImages }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/destination-details', { state: { title, description, imageSrc, additionalImages } });
    };

    return (
        <div
            className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 mt-10'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                <img
                    src={imageSrc}
                    alt={title}
                    className={`w-full h-64 object-cover transition-transform duration-500 ${isHovered ? 'blur-sm' : 'blur-0'}`}
                />
                <div
                    className={`absolute inset-0 flex flex-col justify-center items-center p-6 bg-indigo-800 bg-opacity-75 text-white transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    <h3 className='text-2xl font-bold mb-4'>{title}</h3>
                    <p className='text-gray-300 mb-4'>{description}</p>
                    <button onClick={handleClick} className='inline-block text-lg font-semibold text-indigo-300 hover:text-indigo-500'>
                        Read More 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnimatedCards;
