import React, { useState } from 'react';

interface FloatingCardProps {
    title: string;
    subtitle: string;
    description: string;
    lottieSrc: string;
    bgColor: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ title, subtitle, description, lottieSrc, bgColor }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCard = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div 
            className={`relative overflow-hidden shadow-lg ${bgColor} transform transition-all duration-500 hover:scale-105`}
            style={{
                width: '100%',
                maxWidth: '400px', // Restrict the maximum width
                height: 'auto', // Auto height to maintain aspect ratio
                aspectRatio: '4 / 3', // Maintains the card aspect ratio
                borderRadius: '10px',
                cursor: 'pointer',
                margin: 'auto', // Center the card
            }}
            onMouseEnter={toggleCard}
            onMouseLeave={toggleCard}
        >
            <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${isExpanded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                {React.createElement('lottie-player', {
                    src: lottieSrc,
                    background: 'transparent',
                    speed: '1',
                    loop: true,
                    autoplay: true,
                    className: 'w-full h-full',
                })}
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{title}</h3>
            </div>

            <div className={`absolute inset-0 p-6 bg-opacity-90 bg-white transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                <h4 className="text-xl font-bold mb-4">{subtitle}</h4>
                <p className="mb-4">{description}</p>
            </div>
        </div>
    );
};

export default FloatingCard;
