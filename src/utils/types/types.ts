import React from 'react';

type ButtonVariant = 'primary' | 'link';

type BubbleVariant = 'info' | 'success';

interface INavbar {
  key: string;
  label: string;
}

interface IServiceCard {
  link: string;
  label: string;
  icon: React.ReactNode;
}

interface IServiceItem {
  icon: React.ReactNode;
  title: string;
}

interface IProfileCard {
  flag: string;
  image: string;
  name: string;
  title: string;
  skills: string[];
}

export type { INavbar, ButtonVariant, IServiceCard, BubbleVariant, IServiceItem, IProfileCard };
