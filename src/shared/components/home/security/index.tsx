import { motion } from 'framer-motion';
import TitleSection from '../../common/TitleSection';
import Background from '../../icon/security/Background';
import SecurityCard from './SecurityCard';

const Security = () => {
  return (
    <section className='mt-10'>
      <div className='w-full min-h-[1000px]'>
        <div className='relative w-full h-full'>
          <motion.div
            className='absolute top-0 left-0 w-full h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Background />
          </motion.div>
          <div className='absolute top-0 left-0 w-full px-32'>
            <TitleSection
              title='Bảo mật'
              description='Bảo vệ doanh nghiệp của bạn khỏi các nguy cơ an ninh mạng'
              findMore={true}
              className="flex flex-col justify-center items-start gap-5"
            />
            <div className='flex flex-col justify-between items-end gap-5'>
            <div className='flex justify-end items-end gap-10'>
              <SecurityCard />
              <SecurityCard />
            </div>

            <div className='flex justify-end items-end gap-10'>
              <SecurityCard />
              <SecurityCard />
              <SecurityCard />
            </div>
            <div className='flex justify-end items-end gap-10'>
              <SecurityCard />
              <SecurityCard />
              <SecurityCard />
              <SecurityCard />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
