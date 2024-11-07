import React, { useCallback } from 'react';
import LogoSvg from '@/assets/icons/hyperhire-logo.svg';

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const renderIcon = useCallback(() => {
    switch (name) {
      case 'logo':
        return <LogoSvg />;
      default:
        return null;
    }
  }, [name]);

  return renderIcon();
};

export default Icon;
