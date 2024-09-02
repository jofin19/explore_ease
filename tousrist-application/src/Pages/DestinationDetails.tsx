import React from 'react';
import CultureFirst from '@/Components/navbar/CultureFirst';
import CultureLast from '@/Components/navbar/CultureLast';
import { useLocation, useNavigate } from 'react-router-dom';
import AccomodationSEctionData from '@/Shared/AccomodationSEctionData';
import ThingsToDoSection from '@/Shared/ThingsToDoSection';

const DestinationDetails: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Check if location.state exists
    if (!location.state) {
        navigate('/'); // Redirecting to the home page, for example
        return null; // Prevents rendering the rest of the component
    }

    // Destructure properties safely after checking location.state
    const { title, description, imageSrc, additionalImages } = location.state as {
        title: string;
        description: string;
        imageSrc: string;
        additionalImages?: string[];
    };

    return (
        <div className='bg-white' > {/* Adds padding on both sides */}
        <div className='bg-primary-100'>
            <CultureFirst title={title} content={description} image={imageSrc} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 px-6">
                {additionalImages && additionalImages.map((image, index) => (
                    <CultureLast key={index} image={image} />
                ))}
            </div>
            <AccomodationSEctionData />
            <ThingsToDoSection/>
        </div>
    );
};

export default DestinationDetails;
