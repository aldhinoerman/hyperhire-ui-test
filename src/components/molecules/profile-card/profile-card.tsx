import { Images } from '@/assets';
import { Avatar } from '@/components/atoms';
import { Card, Tag } from '@/components/molecules';
import Image from 'next/image';
import React from 'react';

interface ProfileCardProps {
  index: number;
  avatar: string;
  flag: string;
  name: string;
  title: string;
  skills: string[];
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ index, avatar, className, name, flag, title, skills }) => {
  return (
    <Card
      className={`transform ${index === 0 ? '!-mr-60 md:!-mr-40' : index === 2 && '!-ml-56 md:!-ml-40'} ${className ? className : ''}`}>
      <div className="min-w-full text-center">
        <div className="relative">
          <Avatar img={avatar} alt={`avatar-${index}`} />
          <Image src={flag} alt={`flag-${index}`} width={25} height={18} className="absolute left-[53%] top-[80%]" />
        </div>

        <div className="py-4">
          <h3 className="text-xl text-black font-bold">{name}</h3>
          <p className="text-info font-semibold">{title}</p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-1">
          {skills?.length > 0 && skills.map((val: string, idxSkill: number) => <Tag key={idxSkill}>{val}</Tag>)}
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
