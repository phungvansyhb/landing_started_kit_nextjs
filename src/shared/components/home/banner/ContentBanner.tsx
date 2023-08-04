import { AnimatePresence, motion } from 'framer-motion';
import { Data } from '.';
import BtnFindOut from '../../common/BtnFindOut';
import InitBasicAnimation from '../../common/InitBasicAnimation';
export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordAnimation = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};
interface Props {
  selectedTab: Data;
}

const ContentBanner = ({ selectedTab }: Props) => {
  return (
    <InitBasicAnimation className='min-h-screen flex flex-col justify-center items-center gap-10 leading-[90%] lg:left-0 lg:px-12 lg:items-start'>
      <div className='text-left text-3xl lg:text-6xl'>
        <h1 className='inline-block pr-2 text-3xl lg:text-6xl'>Cải tiến</h1>
        <AnimatePresence mode='wait'>
          <motion.span variants={staggerChildren} animate='animate'>
            {selectedTab
              ? selectedTab.title.split(' ').map((word, idx) => (
                  <motion.div key={idx} className='inline-block' variants={wordAnimation}>
                    <motion.span animate='animate' className='inline-block lowercase'>
                      {word + '\u00A0'}
                    </motion.span>
                  </motion.div>
                ))
              : ''}
          </motion.span>
        </AnimatePresence>
      </div>
      <motion.div className='w-[80%] text-sm lg:text-lg mt-5'>{selectedTab ? selectedTab.description : ''}</motion.div>
      <BtnFindOut cls={'bg-[#fff]'} colorSvg={'#000'} />
    </InitBasicAnimation>
  );
};

export default ContentBanner;
