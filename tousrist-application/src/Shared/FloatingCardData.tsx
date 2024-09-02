import React from 'react';
import FloatingCard from '@/Components/navbar/FloatingCard';
import useMediaQuery from '@/hooks/useMediaQuery';

const FloatingCardData: React.FC = () => {
    const isLaptop = useMediaQuery('(min-width: 1024px)');

    const cardData = [
        {
            title: 'Explore Ancient Castles',
            subtitle: 'Journey through Ireland\'s rich history by visiting its majestic castles.',
            description: 'Discover the stories behind the walls of Ireland\'s most iconic castles, from the legendary Blarney Castle to the breathtaking Ashford Castle. These historical sites offer a glimpse into the country\'s storied past.',
            link: '/castles-of-ireland',
            lottieSrc: '/path/to/castle-animation.json',
            bgColor: 'bg-purple-600',
        },
        {
            title: 'Experience Local Culture',
            subtitle: 'Immerse yourself in authentic Irish traditions and festivals.',
            description: 'Participate in traditional music sessions, local festivals, and cultural events that showcase the vibrant spirit of Ireland. From St. Patrick\'s Day parades to local village feasts, experience the heart of Irish culture.',
            link: '/irish-culture-events',
            lottieSrc: '/path/to/culture-animation.json',
            bgColor: 'bg-red-600',
        },
        {
            title: 'Discover Scenic Landscapes',
            subtitle: 'Embark on scenic drives and hikes across Ireland\'s picturesque landscapes.',
            description: 'From the rugged cliffs of Moher to the tranquil lakes of Killarney, Ireland offers some of the most stunning natural beauty in the world. Whether you\'re hiking, biking, or driving, the views will leave you in awe.',
            link: '/scenic-ireland',
            lottieSrc: '/path/to/landscape-animation.json',
            bgColor: 'bg-blue-600',
        },
    ];

    return (
        <div className="relative z-0" style={{ isolation: 'isolate' }}>
            {/* Fixed Heading */}
            <div className="sticky top-0 left-0 w-full h-screen flex items-center text-center justify-center bg-black z-10 text-white">
                <h2 className="text-gray-200 text-6xl font-bold">
                    Uncover Ireland's Treasures
                </h2>
            </div>

            {/* Cards Section */}
            <div className="relative z-20 mt-16 px-4 lg:px-0">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center ${
                            index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                        } mb-16 lg:mb-32`}
                        style={{
                            transform: isLaptop && index % 2 === 0 ? 'translateX(-20%)' : isLaptop ? 'translateX(20%)' : 'none',
                            marginBottom: '50px',
                        }}
                    >
                        <div
                            className={`w-full lg:w-2/5 ${
                                isLaptop && index % 2 === 0 ? 'lg:mr-12' : isLaptop ? 'lg:ml-12' : ''
                            }`}
                        >
                            <FloatingCard
                                title={card.title}
                                subtitle={card.subtitle}
                                description={card.description}
                                lottieSrc={card.lottieSrc}
                                bgColor={card.bgColor}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional 100vh section after cards */}
            <div className="h-screen flex items-center justify-center bg-black z-10 text-white">
                <h2 className="text-gray-200 text-6xl font-bold">
                    Discover More
                </h2>
            </div>
        </div>
    );
};

export default FloatingCardData;
