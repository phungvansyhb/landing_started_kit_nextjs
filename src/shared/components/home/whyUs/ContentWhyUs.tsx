import { IWhyUsData, WhyUsData } from '@/shared/mock/whyUs';
import { motion } from 'framer-motion';
interface Props {
  setSelectedIcon: any;
  selectedIcon: IWhyUsData;
}
const ContentWhyUs = ({ setSelectedIcon, selectedIcon }: Props) => {
  const contentAnimated = {
    active: {
      borderColor: '#723AD4',
      color: '#fff',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    inactive: {
      borderColor: '#C2C0BF',
      color: '#C2C0BF',
      opacity: 0.8,
    },
  };
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <motion.div className='w-full flex justify-start items-start text-sm lg:text-lg mt-5'>
        {WhyUsData.map((item, idx) => {
          return (
            <motion.div
              key={idx}
              initial='inactive'
              animate={selectedIcon === item ? 'active' : 'inactive'}
              variants={contentAnimated}
              onClick={() => setSelectedIcon(item as IWhyUsData)}
              className={`px-5 border-b-4 cursor-pointer ${
                idx === 0 ? 'rounded-l-sm' : idx === WhyUsData.length - 1 ? 'rounded-r-sm' : ''
              }`}
            >
              {item.title}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div className='text-sm lg:text-lg mt-10 text-[#C2C0BF]'>
        {selectedIcon ? selectedIcon.description : ''}
      </motion.div>
    </div>
  );
};

export default ContentWhyUs;
