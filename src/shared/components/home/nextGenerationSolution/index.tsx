import { NGSDataGSL } from 'src/shared/mock/nextGenerationSolution';
import { motion } from 'framer-motion';
import TitleSection from '../../common/TitleSection';
import Background from '../../icon/nextGenerationSolution/Background';
import InfoCard from './InfoCard';

const NextGenerationSolution = () => {
  return (
    <section className='px-32 py-24 mt-10'>
      <TitleSection
        title='Giải pháp'
        description='Cung cấp các giải pháp số cho doanh nghiệp của bạn'
        findMore={true}
        className="flex justify-between items-center"
      />
      <div className='w-full min-h-[350px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 bg-[var(--blue-color-500)] overflow-hidden'>
        {NGSDataGSL.map((item, idx) => (
          <div className='relative w-full h-full' key={idx}>
            <motion.div
              className='absolute top-0 left-0 w-full h-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Background />
            </motion.div>
            <InfoCard className={'absolute top-0 left-0 w-full h-full'} title={item.title} description={item.des} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextGenerationSolution;
