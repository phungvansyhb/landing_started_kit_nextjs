import { IWhyUsData, WhyUsData } from '@/shared/mock/whyUs';
import { useState } from 'react';
import ContentWhyUs from './ContentWhyUs';
import IconNGS from './IconNGS';

const WhyUs = () => {
  const [selectedIcon, setSelectedIcon] = useState<IWhyUsData>(WhyUsData[0]);
  return (
    <>
      <section className='mx-auto mt-20 px-32 py-10'>
        <div className='w-full flex justify-between items-center'>
          <div className='w-full z-40 float-right'>
            <IconNGS selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
          </div>
          <div className='w-full flex flex-col justify-between items-center gap-3'>
              <h2 className='w-full pr-32 text-2xl font-thin text-left float-left'>Điều gì tạo nên NGS</h2>
              <h1 className='w-full pr-32 text-3xl text-left float-left'>Tại sao nên chọn đồng hành cùng chúng tôi!</h1>
            <div className='w-full mt-5'>
              <ContentWhyUs selectedIcon={selectedIcon && selectedIcon} setSelectedIcon={setSelectedIcon} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
