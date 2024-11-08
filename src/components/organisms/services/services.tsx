'use client';

import { ServiceBox } from '@/components/molecules';
import { IServiceItem } from '@/utils';
import dynamic from 'next/dynamic';
import React from 'react';

interface ServicesProps {
  items: Array<IServiceItem>;
}

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const Services: React.FC<ServicesProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    cssEase: 'ease-in-out',
    arrows: false,
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 md:hidden">
        {items?.length > 0 && items.map((obj: IServiceItem, idx: number) => <ServiceBox title={obj.title} key={idx} />)}
      </div>

      <div className="hidden md:block">
        <Slider {...settings} className="max-w-full">
          {items?.length > 0 &&
            items.map((obj: IServiceItem, idx: number) => <ServiceBox title={obj.title} icon={obj.icon} key={idx} />)}
        </Slider>
      </div>
    </>
  );
};

export default Services;
