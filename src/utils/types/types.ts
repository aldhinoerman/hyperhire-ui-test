import React from 'react';

type ButtonVariant = 'primary' | 'link';

interface INavbar {
  key: string;
  label: string;
}

interface IServiceCard {
  link: string;
  label: string;
  icon: React.ReactNode;
}

export type { INavbar, ButtonVariant, IServiceCard };
