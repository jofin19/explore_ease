import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import bannerImage1 from '@/assets/banner-image1.jpg';
import bannerImage2 from '@/assets/banner-image2.jpg';
import bannerImage3 from '@/assets/banner-image3.jpg';
import bannerLine from '@/assets/banner-line.webp';
import bannerRegularLeftShape from '@/assets/banner-regular-left-shape.webp';
import bannerSolidLeftShape from '@/assets/banner-solid-left-shape.webp';
import bannerShapeLeft from '@/assets/banner-shape-left.webp';
import bannerShapeRightLine from '@/assets/banner-shape-right-line.webp';
import bannerShapeRight from '@/assets/banner-shape-right.webp';
import bannerRightLine1 from '@/assets/banner-right-line1.webp';
import bannerRightLine2 from '@/assets/banner-right-line2.webp';
import bannerRightLine3 from '@/assets/banner-right-line3.webp';
import bannerRightLine4 from '@/assets/banner-right-line4.webp';

type BannerProps = {
  title: string;
  subtitle: string;
  buttonText: string;
};

const Banner: React.FC<BannerProps> = ({ title, subtitle, buttonText }) => {
  const [backgroundImage, setBackgroundImage] = useState(bannerImage1);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    const images = [bannerImage1, bannerImage2, bannerImage3];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="banner-area relative overflow-hidden h-screen">
      <div
        className="absolute inset-0 transition-transform duration-[500ms] ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)',
          animation: 'zoomIn 5s ease-in-out infinite alternate',
        }}
      >
        <style>{`
          @keyframes zoomIn {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }
        `}</style>
      </div>

      {/* Banner Line */}
      <div className="banner__line absolute top-20 left-10 z-20">
        <img src={bannerLine} alt="shape" className="w-[69px] h-[54px]" />
      </div>

      <div className="relative w-full h-full">
        <div data-aos="slide-left" data-aos-duration="2s" data-aos-delay=".3s" className="absolute top-[15%] left-[0%] z-10">
          <img src={bannerRegularLeftShape} alt="shape" className="w-[240px] h-[460px]" />
        </div>
        <div data-aos="slide-left" data-aos-duration="2s" data-aos-delay=".9s" className="absolute top-[10%] left-[0%] z-10">
          <img src={bannerSolidLeftShape} alt="shape" className="w-[260px] h-[510px]" />
        </div>
        <div className="absolute top-[60%] left-[0%] z-10" data-aos="fade-left">
          <img src={bannerShapeLeft} alt="shape" className="w-[410px] h-[350px]" />
        </div>
        <div data-aos="slide-right" data-aos-duration="3s" data-aos-delay=".3s" className="absolute top-0 right-[10%] z-10">
          <img src={bannerShapeRightLine} alt="shape" className="w-[360px] h-[370px]" />
        </div>
        <div data-aos="slide-right" data-aos-duration="2s" data-aos-delay=".3s" className="absolute top-[70%] right-[0%] z-10">
          <img src={bannerShapeRight} alt="shape" className="w-[340px] h-[380px]" />
        </div>
        <div data-aos="slide-right" data-aos-duration="2s" data-aos-delay=".9s" className="absolute top-[0%] right-[2%] z-10">
          <img src={bannerRightLine1} alt="shape" className="w-[120px] h-[450px]" />
        </div>
        <div data-aos="slide-right" data-aos-duration="2s" data-aos-delay=".7s" className="absolute top-[0%] right-[10%] z-10">
          <img src={bannerRightLine2} alt="shape" className="w-[150px] h-[450px]" />
        </div>
        <div data-aos="slide-right" data-aos-duration="2s" data-aos-delay=".5s" className="absolute top-[0%] right-[5%] z-10">
          <img src={bannerRightLine3} alt="shape" className="w-[180px] h-[450px]" />
        </div>
        <div data-aos="slide-right" data-aos-duration="2s" data-aos-delay=".3s" className="absolute top-[0%] right-[0%] z-10">
          <img src={bannerRightLine4} alt="shape" className="w-[201px] h-[437px]" />
        </div>

        {/* Text Content */}
        <div className="container mx-auto flex flex-col items-center justify-center h-full text-white z-30 px-4 sm:px-2">
          <h1
            data-animation="slideInRight"
            data-duration="2s"
            data-delay=".5s"
            className="text-6xl md:text-5xl sm:text-3xl font-bold leading-tight text-center md:leading-tight sm:leading-tight z-20"
          >
            {title}
          </h1>
          <p
            data-animation="slideInRight"
            data-duration="2s"
            data-delay=".7s"
            className="mt-6 text-center text-lg max-w-2xl md:text-base sm:text-sm md:mt-4 sm:mt-3 z-20"
          >
            {subtitle}
          </p>
          <a
            data-animation="slideInRight"
            data-duration="2s"
            data-delay=".9s"
            href="/"
            className="btn-one mt-10 bg-primary-500 text-white px-8 py-4 rounded-lg shadow-lg text-lg md:px-6 md:py-3 md:text-base sm:px-4 sm:py-2 sm:text-sm z-20"
          >
            {buttonText}
          </a>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="banner__dot-wrp absolute bottom-5 left-0 right-0 flex justify-center z-20">
        <div className="dot-light banner__dot swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
          <span className="swiper-pagination-bullet"></span>
          <span className="swiper-pagination-bullet"></span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
