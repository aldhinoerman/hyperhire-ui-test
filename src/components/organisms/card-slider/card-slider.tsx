'use client';
import { ProfileCard } from '@/components/molecules';
import React, { useState } from 'react';
import { IProfileCard } from '@/utils';
import { Button } from '@/components/atoms';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface CardSliderProps {
  items: Array<IProfileCard>;
}

const CardSlider: React.FC<CardSliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Handle previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div className="relative flex justify-center items-center h-full space-x-6">
        <Button variant="link" onClick={handlePrev}>
          <ChevronLeftIcon className="w-8 h-8 text-white" />
        </Button>
        {items?.length > 0 &&
          items.map((obj: IProfileCard, idx: number) => {
            const position = (idx - currentIndex + items.length) % items.length;

            let cardClasses = 'transition-transform duration-500 ease-in-out';

            if (position === 0) {
              // Center/front card
              cardClasses += ' z-20 scale-110';
            } else if (position === 1) {
              // Right card
              cardClasses += ` translate-x-4 z-10 !bg-light-secondary`;
            } else if (position === 2) {
              // Left card
              cardClasses += ' -translate-x-4 z-10 !bg-light-secondary';
            }

            return (
              <ProfileCard
                className={cardClasses}
                avatar={obj.image}
                name={obj.name}
                title={obj.title}
                key={idx}
                skills={obj.skills}
                flag={obj.flag}
                index={idx}
              />
            );
          })}
        <Button variant="link" onClick={handleNext}>
          <ChevronRightIcon className="w-8 h-8 text-white" />
        </Button>
      </div>
    </>
  );
};

export default CardSlider;
