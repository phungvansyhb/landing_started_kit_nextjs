import { PreImage } from '../../common/PreImage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import BtnFindOut from '../../common/BtnFindOut';

interface Props {
  title: string;
  description: string;
  className: string;
}

const InfoCard = ({ title, description, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`flex flex-col justify-start items-start p-3 cursor-pointer overflow-hidden border-collapse ${className}`}
      style={{ border: '1px solid #222442' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? '' : '#141523',
        color: isHovered ? '#fff' : '',
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <PreImage
        src='https://c4.wallpaperflare.com/wallpaper/624/21/247/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg'
        width={50}
        height={50}
        alt='solution'
        className='mb-10 rounded-lg'
      />
      <div className='w-full h-full flex flex-col justify-between items-start gap-5'>
        <motion.h1
          initial={{ marginTop: '100px' }}
          animate={{ marginTop: isHovered ? '0' : '100px' }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className='text-2xl uppercase mt-20'
        >
          {title}
        </motion.h1>
        {isHovered && (
          <motion.p
            initial='hidden'
            animate={isHovered ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, display: 'block' },
              hidden: { opacity: 0, display: 'none' },
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className='none'
          >
            {description}
          </motion.p>
        )}
      </div>
      <BtnFindOut cls={'text-white'} />
    </motion.div>
  );
};

export default InfoCard;
