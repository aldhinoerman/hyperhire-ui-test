'use client';
import { BubbleChat } from '@/components/molecules';
import { Benefits, CardSlider, Services } from '@/components/organisms';
import { heroServices, IProfileCard } from '@/utils';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface HeroProps {
  profiles: IProfileCard[];
}

const Hero: React.FC<HeroProps> = ({ profiles }) => {
  return (
    <section id="hero" className="px-5 py-16">
      {/* Top Hero */}
      <div className="grid md:grid-cols-2 gap-3.5">
        <div className="mt-10">
          <div className="mb-8 animate-fadeIn delay-300">
            <BubbleChat label="풀타임, 파트타임" />
          </div>
          <h1 className="text-5xl animate-fadeInUp xl:whitespace-pre-wrap">{`최고의 실력을 가진\n외국인 인재를 찾고 계신가요?`}</h1>
          <h2 className="text-2xl my-4 animate-fadeInUp xl:whitespace-pre-wrap">
            {`법률 및 인사관리 부담없이\n1주일 이내에 원격으로 채용해보세요.`}
          </h2>
          <h3 className="hidden md:block underline text-lg">개발자가 필요하신가요?</h3>

          <Benefits />
        </div>
        <div>
          <div className="mb-8 flex justify-center animate-fadeIn">
            <BubbleChat
              variant="success"
              arrowPosition="center"
              label={
                <div className="flex items-center gap-2">
                  <CurrencyDollarIcon className="text-light-success w-6 h-6" /> 월 100만원
                </div>
              }
            />
          </div>
          <div>
            <CardSlider items={profiles} />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="animate-fadeIn mt-16">
        <Services items={heroServices} />
        <div className="mt-4 md:hidden">
          <p className="underline text-yellow font-bold">개발자가 필요하신가요?</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
