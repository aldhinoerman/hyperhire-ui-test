import { ButtonVariant } from '@/utils';
import { BUTTON_VARIANT } from '@/utils/enum';
import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, children, link, className, ...rest }) => {
  return (
    <>
      {link && variant !== 'link' ? (
        <Link href={link}>
          <button
            className={`outline-none border-none transition-colors duration-300 ease-in-out ${variant ? BUTTON_VARIANT[variant] : ''} ${className ? className : ''}`}
            {...rest}>
            {children}
          </button>
        </Link>
      ) : link && variant === 'link' ? (
        <Link href={link}>
          <button
            className={`outline-none border-none ${variant ? BUTTON_VARIANT[variant] : ''} ${className ? className : ''}`}
            {...rest}>
            {children}
          </button>
        </Link>
      ) : (
        <button
          className={`outline-none border-none transition-colors duration-300 ease-in-out ${variant ? BUTTON_VARIANT[variant] : ''} ${className ? className : ''}`}
          {...rest}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
