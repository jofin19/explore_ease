import React from 'react';
import AccomodationCard from '@/Shared/AccomodationCard';

type AccomodationData = {
  image: string;
  price: string;
  title: string;
  location: string;
};

type AccomodationSectionProps = {
  sectionTitle: string;
  sectionSubtitle: string;
  accommodations: AccomodationData[];
};

const Accomodation: React.FC<AccomodationSectionProps> = ({ sectionTitle, sectionSubtitle, accommodations }) => {
  return (
    <section className="py-8 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-300">{sectionTitle}</h2>
            <p className="text-primary-200">{sectionSubtitle}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {accommodations.map((accommodation, index) => (
            <AccomodationCard
              key={index}
              image={accommodation.image}
              price={accommodation.price}
              title={accommodation.title}
              location={accommodation.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomodation;
