import React, { useCallback } from 'react';
import LogoSvg from '@/assets/icons/hyperhire-logo.svg';
import FoterLogo from '@/assets/icons/hyperhire-footer-logo.svg';
import KorSvg from '@/assets/icons/kor.svg';
import TargetSvg from '@/assets/icons/target.svg';

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
      case 'target':
        return <TargetSvg className={className} />;
      default:
        return null;
    }
  }, [name, className]);

  return renderIcon();
};

export default Icon;
