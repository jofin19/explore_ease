import React, { useState, useEffect, useRef } from "react";

interface VideoIrelandProps {
  videoSrc: string;
  label: string;
  title: string;
  description: string;
}

const VideoIreland: React.FC<VideoIrelandProps> = ({
  videoSrc,
  label,
  title,
  description,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && !isMobile) {
        const rect = videoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const videoVisibleHeight = windowHeight - rect.top;
        const progress = Math.min(Math.max(videoVisibleHeight / rect.height, 0), 1);
        setScrollY(progress);
      }
    };

    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="relative w-full h-screen overflow-hidden mt-20 mb-20 0">
        <div ref={videoRef} className="relative w-full h-full">
          {/* Video Section */}
          <div className="w-full h-2/3 " >
            <video
              className="w-full h-full object-cover "
              src={videoSrc}
              playsInline
              autoPlay
              muted
              loop
            />
          </div>

          {/* Text Section */}
          <div className="w-full h-1/3 flex flex-col mt-12 justify-center text-center  items-center p-6 bg-white">
            <div className="mb-2 text-lg text-primary-500">{label}</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
              {title}
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // For non-mobile (desktop/tablet) views
  const startTransitionAt = 0.9;
  const adjustedScrollY = Math.max(scrollY - startTransitionAt, 0) * (1 / (1 - startTransitionAt)); // Adjust the scrollY to fit the 0.9 to 1 range
  const videoScale = 1 - adjustedScrollY * 0.2; // Gradually scale down from 100% to 80%
  const videoTranslateX = adjustedScrollY * 8; // Gradually move the video to the left
  const videoMarginTop = adjustedScrollY * 10; // Gradually increase margin-top
  const textOpacity = adjustedScrollY * 2; // Gradually increase the opacity of the text
  const textTranslateY = Math.max(1 - scrollY, 0) * 50; // Move text from bottom center to top

  return (
    <div className="relative w-full h-screen overflow-clip mt-20 mb-20">
      <div
        ref={videoRef}
        className="relative w-full h-full flex"
        style={{
          transition: "transform 0.5s ease-out",
        }}
      >
        {/* Video Section */}
        <div
          className="absolute top-0 left-0 h-full"
          style={{
            transform: `scale(${videoScale}) translateX(-${videoTranslateX}%)`,
            transition: "transform 0.5s ease-out, margin-top 0.5s ease-out",
            width: `calc(100% - ${adjustedScrollY * 20}%)`, // Shrinks from 100% to 80%
            height: "100vh",
            marginTop: `${videoMarginTop}vh`, // Adds margin-top as it shrinks
            marginLeft: `${adjustedScrollY * 2}%`, // Reduce margin as it shrinks
          }}
        >
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoSrc}
            playsInline
            autoPlay
            muted
            loop
          />
        </div>

        {/* Text Section */}
        <div
          className="absolute bottom-0 right-0 flex justify-center items-center  p-6"
          style={{
            opacity: adjustedScrollY > 0 ? textOpacity : 0,
            transform: adjustedScrollY > 0
              ? `translateY(${textTranslateY}%)`
              : "translateY(100%)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            width: adjustedScrollY > 0 ? "50%" : "0%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
          }}
        >
          <div>
            <div className="mb-2   text-lg text-primary-500">{label}</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
              {title}
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIreland;
