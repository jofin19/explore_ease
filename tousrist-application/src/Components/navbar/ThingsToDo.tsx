import React from 'react';

type ThingsToDoItem = {
  image: string;
  title: string;
  description: string;
};

type ThingsToDoProps = {
  sectionTitle: string;
  sectionSubtitle: string;
  activities: ThingsToDoItem[];
};

const ThingsToDo: React.FC<ThingsToDoProps> = ({ sectionTitle, sectionSubtitle, activities }) => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-500">{sectionTitle}</h2>
            <p className="text-gray-600">{sectionSubtitle}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={activity.image} alt={activity.title} className="w-full h-48 md:h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-primary-500 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
