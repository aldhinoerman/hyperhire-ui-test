import React from 'react';

interface AvatarProps {
  img: any;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ img, alt }) => {
  return <img src={img} alt={alt} className="w-20 h-20 rounded-full mx-auto mb-4" />;
};

export default Avatar;
