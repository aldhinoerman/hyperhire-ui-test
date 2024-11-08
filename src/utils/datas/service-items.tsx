import { Icon } from '@/components';
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

export { serviceItems };
