import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  img: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ img, alt }) => {
  return <Image src={img} alt={alt} className="rounded-full mx-auto mb-4" width={80} height={80} />;
};

export default Avatar;
