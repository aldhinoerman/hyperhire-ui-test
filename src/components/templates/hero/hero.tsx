import { Images } from '@/assets';
import { BubbleChat } from '@/components/molecules';
import { Benefits, CardSlider, Services } from '@/components/organisms';
import { heroServices } from '@/utils';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Hero = () => {
  const cardsData = [
    {
      name: 'Abhishek Gupta',
      title: '마케팅 - 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      image: 'https://via.placeholder.com/100',
      flag: Images.Flag.src,
    },
    {
      name: 'Abhishek Gupta',
      title: '마케팅 - 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      image: 'https://via.placeholder.com/100',
      flag: Images.Flag.src,
    },
    {
      name: 'Abhishek Gupta',
      title: '마케팅 - 2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      image: 'https://via.placeholder.com/100',
      flag: Images.Flag.src,
    },
  ];
  return (
    <section id="hero">
      {/* Top Hero */}
      <div className="grid md:grid-cols-2 gap-3.5">
        <div className="mt-10">
          <div className="mb-8 animate-fadeIn delay-300">
            <BubbleChat label="풀타임, 파트타임" />
          </div>
          <h1 className="text-5xl animate-fadeInUp">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
          <h2 className="text-2xl my-4 animate-fadeInUp">
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
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
            <CardSlider items={cardsData} />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="animate-fadeIn my-16">
        <Services items={heroServices} />
        <div className="mt-4">
          <p className="underline text-yellow font-bold md:hidden">개발자가 필요하신가요?</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
