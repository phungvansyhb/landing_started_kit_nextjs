import { motion } from 'framer-motion';

interface Props {
  className: string;
  children: React.ReactNode;
}
const InitBasicAnimation = ({ className, children }: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={className}>
      {children}
    </motion.div>
  );
};

export default InitBasicAnimation;
