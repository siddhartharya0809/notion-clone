"use client"

import React, { useState } from 'react';

// Import the correct images for each slide
import CommunityMeetupImgOne from "../../public/images/community-slide-01.png";
import CommunityMeetupImgTwo from "../../public/images/community-slide-02.png";
import CommunityMeetupImgThree from "../../public/images/community-slide-03.png";
import CommunityMeetupImgFour from "../../public/images/community-slide-04.png";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use the correct images for each slide
  const slides = [
    CommunityMeetupImgOne,
    CommunityMeetupImgTwo,
    CommunityMeetupImgThree,
    CommunityMeetupImgFour,
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-[68%] max-md:w-full max-md:ml-0">
      <section className="relative bg-stone-100 flex-grow flex flex-col items-stretch w-full pt-6 px-9 rounded-xl border-2 border-solid border-stone-100 max-md:max-w-full max-md:mt-6 max-md:px-5 overflow-hidden">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}>
        ←
        </button>
        <div className="flex-shrink-0 h-[607px] overflow-hidden relative">
          <div
            className="flex transition-transform duration-300 ease-in-out transform"
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(-${(currentSlide / totalSlides) * 100}%)`,
            }}
          >
            {slides.map((image, index) => (
              <div
                key={index}
                className="w-full h-[607px] flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 border-2  text-white p-2 rounded-full" onClick={nextSlide}>
        →
        </button>
        <h2 className="text-neutral-900 text-center text-base leading-6 tracking-normal mt-4">
          Community meet-up in Tokyo
        </h2>
        <div className="self-center flex w-14 max-w-full items-stretch gap-2 mt-3.5 max-md:justify-center">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? 'bg-zinc-950' : 'bg-black bg-opacity-40'
              } flex-shrink-0 h-2 flex-col flex-1`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SliderComponent;
