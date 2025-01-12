import React from 'react';
import { Icon } from '@/components/atoms/icon';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { CubeIcon } from '@heroicons/react/24/outline';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/solid';
import { CodeBracketIcon } from '@heroicons/react/24/solid';

const serviceItems = [
  {
    link: '#',
    label: '해외 개발자 원격 채용',
    icon: <CodeBracketIcon />,
  },
  {
    link: '#',
    label: '외국인 원격 채용 (비개발)',
    icon: <UserIcon />,
  },
  {
    link: '#',
    label: '한국어 가능 외국인 채용',
    icon: <Icon name="kor" className="w-6 h-6" />,
  },
  {
    link: '#',
    label: '해외 개발자 활용 서비스',
    icon: <Cog6ToothIcon />,
  },
];

const heroServices = [
  {
    icon: <ComputerDesktopIcon className="w-4 h-4" />,
    title: '한국어 능력',
  },
  {
    icon: <PhotoIcon className="w-4 h-4" />,
    title: '업무 수행 능력',
  },
  {
    icon: <CubeIcon className="w-4 h-4" />,
    title: '겸업 여부',
  },
  {
    icon: <Icon name="target" />,
    title: '평판 조회',
  },
];

export { serviceItems, heroServices };
