import { Images } from '@/assets';
import { Avatar } from '@/components/atoms';
import { Card } from '@/components/molecules';
import React from 'react';

const ProfileCard = () => {
  return (
    <Card>
      <div className="min-w-full text-center">
        <div>
          <Avatar img={Images.ProfilePhoto.src} alt="image-flag" />
        </div>
        <h3 className="text-xl text-black font-bold">Abhishek Gupta</h3>
        <p className="text-info font-semibold">
          마케팅 <span className="font-bold">· 2y+</span>
        </p>
      </div>
    </Card>
  );
};

export default ProfileCard;
