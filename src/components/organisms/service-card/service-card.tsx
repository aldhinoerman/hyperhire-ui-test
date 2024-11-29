import { BoxIcon, Cta } from '@/components/molecules';
import { IServiceCard } from '@/utils';
import React from 'react';

interface ServiceCardProps {
  items: Array<IServiceCard>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ items }) =>
  items?.length > 0 &&
  items.map((obj: IServiceCard, idx: number) => {
    return (
      <div
        className="flex flex-col justify-between p-4 bg-white w-[135px] min-[375px]:!w-[160px] sm:!w-[235px] xl:!w-[185px] h-[175px]"
        key={idx}>
        <div className="w-10 h-10">
          <BoxIcon icon={obj.icon} />
        </div>
        <p className="font-semibold">{obj.label}</p>
        <Cta label="바로가기" link={obj.link} />
      </div>
    );
  });

export default ServiceCard;
