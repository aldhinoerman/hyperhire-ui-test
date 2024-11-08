'use client';
import React from 'react';
import LogoSvg from '@/assets/icons/hyperhire-logo.svg';
import FooterLogoSvg from '@/assets/icons/hyperhire-footer-logo.svg';
import KorSvg from '@/assets/icons/kor.svg';
import TargetSvg from '@/assets/icons/target.svg';

interface IconProps {
  name: 'logo' | 'footer-logo' | 'kor' | 'target';
  className?: string;
}

const icons = {
  logo: LogoSvg,
  'footer-logo': FooterLogoSvg,
  kor: KorSvg,
  target: TargetSvg,
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const SelectedIcon = icons[name];
  return SelectedIcon ? <SelectedIcon className={className} /> : null;
};

export default Icon;
