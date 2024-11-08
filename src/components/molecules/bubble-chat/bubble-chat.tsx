import { BubbleVariant } from '@/utils';
import React from 'react';

interface BubbleChatProps {
  variant?: BubbleVariant;
  label: string | React.ReactNode;
  arrowPosition?: 'left' | 'center';
}

const BubbleChat: React.FC<BubbleChatProps> = ({ variant, label, arrowPosition = 'left' }) => {
  return (
    <div
      className={`relative inline-block bg-white rounded-lg py-2 px-4 text-center ${variant === 'success' ? 'text-success' : 'text-blue'} font-semibold`}>
      {label}
      <div
        className={`absolute bottom-[-6px] ${arrowPosition && arrowPosition === 'center' ? 'left-1/2' : 'left-10'} transform -translate-x-1/2 w-3 h-3 bg-white rotate-45`}></div>
    </div>
  );
};

export default BubbleChat;
