import { Icon } from '@/components/atoms';
import { ServiceCard } from '@/components/organisms';
import { serviceItems } from '@/utils';
import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-whiteblue text-dark">
      <div className="max-w-[1280px] mx-auto py-16 px-5">
        {/* Top Footer */}
        <div className="grid md:grid-cols-[0.75fr_2fr] gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <Icon name="footer-logo" />
            </div>
            <h5 className="font-semibold">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</h5>
            <div className="flex flex-col gap-4">
              <p className="font-bold">010-0000-0000</p>
              <p className="font-bold">aaaaa@naver.com</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <ServiceCard items={serviceItems} />
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="grid md:grid-cols-[0.75fr_2fr] gap-8 mt-12">
          <div className="flex gap-4">
            <div>
              <p>상호명</p>
              <p className="text-light-dark py-2.5">하이퍼하이어</p>
              <p className="font-bold text-light-dark">Hyperhire India Private Limited</p>
            </div>
            <div>
              <p>
                대표 <span className="font-bold">CEO</span>
              </p>
              <p className="text-light-dark py-2.5">김주현</p>
              <p className="font-bold text-light-dark">Juhyun Kim</p>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-4">
              <div>
                <p>
                  사업자등록번호 <span className="font-bold">CIN</span>
                </p>
                <p className="text-light-dark font-bold py-2.5">427-86-01187</p>
                <p className="font-bold text-light-dark">U74110DL2016PTC290812</p>
              </div>
              <div>
                <p>
                  주소 <span className="font-bold">ADDRESS</span>
                </p>
                <p className="text-light-dark py-2.5">
                  서울특별시 강남대로 <span className="font-bold">479,</span> 지하{' '}
                  <span className="font-bold">1층 238호</span>
                </p>
                <p className="font-bold text-light-dark">
                  JD-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
