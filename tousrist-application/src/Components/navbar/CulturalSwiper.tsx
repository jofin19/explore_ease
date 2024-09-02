import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

interface SlideContent {
  title: string;
  description: string;
  image: string;
}

interface CulturalSwiperProps {
  slides: SlideContent[];
  sectionTitle: string;
}

const CulturalSwiper: React.FC<CulturalSwiperProps> = ({ slides, sectionTitle }) => {
  return (
    <div className="bg-black bg-opacity-90 p-6 rounded-none">
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
        {sectionTitle}
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10} // Reduced space for smaller screens
        slidesPerView={1} // Default to 1 slide per view for mobile
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="cursor-pointer"
        onSwiper={(swiper) => {
          // Initialize by making the active slide larger
          swiper.slides[swiper.activeIndex].style.transform = 'scale(1.1)';
        }}
        onSlideChange={(swiper) => {
          // Reset all slides to default size
          swiper.slides.forEach((slide) => {
            slide.style.transform = 'scale(0.9)';
          });
          // Make the active slide larger
          swiper.slides[swiper.activeIndex].style.transform = 'scale(1.1)';
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex justify-center items-center h-[300px] md:h-[400px] lg:h-[500px] transition-transform duration-300">
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-none"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CulturalSwiper;
