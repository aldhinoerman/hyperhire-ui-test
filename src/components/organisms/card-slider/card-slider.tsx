'use client';
import { ProfileCard } from '@/components/molecules';
import React from 'react';
import dynamic from 'next/dynamic';

interface CardSliderProps {
  items: Array<any>;
}

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const CardSlider: React.FC<CardSliderProps> = ({ items }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <>
      <Slider {...settings}>{items?.length > 0 && items.map((obj, idx: number) => <ProfileCard key={idx} />)}</Slider>
      {/* <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 z-10"
          onClick={() => document.querySelector('.swiper-button-prev')?.click()}>
          ❮
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 z-10"
          onClick={() => document.querySelector('.swiper-button-next')?.click()}>
          ❯
        </button> */}
    </>
  );
};

export default CardSlider;
