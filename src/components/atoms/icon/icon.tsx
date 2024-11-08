import React, { useCallback } from 'react';
import LogoSvg from '@/assets/icons/hyperhire-logo.svg';
import FoterLogo from '@/assets/icons/hyperhire-footer-logo.svg';
import KorSvg from '@/assets/icons/kor.svg';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const renderIcon = useCallback(() => {
    switch (name) {
      case 'logo':
        return <LogoSvg className={className} />;
      case 'footer-logo':
        return <FoterLogo className={className} />;
      case 'kor':
        return <KorSvg className={className} />;
      default:
        return null;
    }
  }, [name]);

  return renderIcon();
};

export default Icon;
