import React from 'react';
import DestinationImage from '@/assets/DestinationImage.jpg';
import DestinationSecondPic from '@/assets/DestinationSecond.jpg';

const DestinationFirst: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="relative">
        {/* Image section */}
        <figure className="relative w-full h-[60vh] md:h-screen overflow-hidden">
          {/* Adjusted height for smaller screens */}
          <img
            className="w-full h-full object-cover"
            src={DestinationImage}
            alt="Explore Ireland"
          />
        </figure>

        {/* Card section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 z-10 bg-white bg-opacity-90 shadow-lg p-6 md:p-8 max-w-lg md:max-w-2xl w-full">
          {/* Reduced padding for smaller screens */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Discover the Beauty of Ireland
          </h1>
          <div className="text-gray-700 text-sm md:text-base">
            {/* Adjusted font size for smaller screens */}
            <p>
              Ireland is a land of breathtaking landscapes, vibrant culture, and rich history. From the rugged cliffs of Moher to the bustling streets of Dublin, there's something for everyone in this enchanting country.
            </p>
            <p className="mt-2">
              Explore ancient castles, stroll through picturesque villages, and enjoy the warm hospitality of the Irish people. Ireland is waiting for you to discover its hidden gems.
            </p>
            <p className="mt-2">
              Start your journey today and experience the magic of the Emerald Isle.
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col lg:flex-row py-10 md:py-20 mt-20">
        {/* Flex direction adjusted to column on small screens */}
        {/* Content Section */}
        <div className="container mx-auto mt-8 px-4">
          <header>
            <h1 className="text-3xl md:text-5xl text-primary-500 font-bold">
              Ireland
            </h1>
            <div className="text-base md:text-lg text-gray-600 mt-2">
              <nav aria-label="breadcrumb" className="inline-block">
                <ol className="flex space-x-2">
                  <li>
                    <a href="#" className="text-primary-500 hover:underline">
                      Home
                    </a>
                  </li>
                  <li>/</li>
                  <li>
                    <span className="text-gray-500">Destination</span>
                  </li>
                </ol>
              </nav>
            </div>
          </header>

          {/* Black Card */}
          <div className="mt-8 p-4 bg-black text-white shadow-lg rounded-md max-w-full md:max-w-md flex items-center">
            {/* Adjusted max-width for responsiveness */}
            <div className="flex gap-4 md:gap-7 p-5">
              <img
                src={DestinationSecondPic}
                alt="Dublin Bridge"
                className="rounded-full w-12 h-12 md:w-14 md:h-14"
              />
              <h4 className="font-semibold text-base md:text-lg">
                Check out this year's Best in Travel winners
              </h4>
            </div>
            <div className="ml-4">
              <a href="#" className="text-white text-sm font-semibold">
                &rarr;
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 p-6 max-w-full md:max-w-md">
            <p className="text-gray-700 text-base md:text-lg leading-loose">
              Discover the stunning landscapes, rich history, and vibrant culture of this remarkable destination. Whether you're exploring ancient landmarks or enjoying the local cuisine, there's something for everyone to enjoy.
            </p>
          </div>

          {/* Button Section */}
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Adjusted button layout for small screens */}
            <a
              href="#"
              className="text-center py-3 px-4 bg-green-100 text-green-700 font-semibold rounded-md shadow hover:bg-green-200"
            >
              Best Time to Visit
            </a>
            <a
              href="#"
              className="text-center py-3 px-4 bg-red-100 text-red-700 font-semibold rounded-md shadow hover:bg-red-200"
            >
              Best Places to Visit
            </a>
          </div>
        </div>

        {/* Right Side Section */}
        <div className="lg:ml-12 md:ml-12 mt-12 lg:mt-0 p-4 rounded-lg shadow-md text-center bg-blue-50 flex flex-col justify-between max-w-full md:max-w-xs mx-auto">
          {/* Adjusted layout for responsiveness */}
          <header className="mb-4">
            <h3 className="text-lg font-semibold text-primary-500">
              Get Customized Travel Plans
            </h3>
            <p className="mt-1 text-gray-700 text-sm md:text-base">
              Let our experts help you plan the perfect trip to Ireland. From itineraries to hidden gems, we’ve got you covered.
            </p>
            <p className="mt-2 text-gray-700 text-sm md:text-base">
              Enjoy tailored experiences and local insights that will make your journey truly unforgettable.
            </p>
          </header>
          <div className="mt-auto">
            <a
              href="#"
              className="block bg-primary-500 text-white font-semibold py-2 px-4 rounded hover:bg-primary-600"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationFirst;
