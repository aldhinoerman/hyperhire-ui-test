import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  img: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ img, alt }) => {
  return <Image src={img} alt={alt} className="w-20 h-20 rounded-full mx-auto mb-4" />;
};

export default Avatar;
