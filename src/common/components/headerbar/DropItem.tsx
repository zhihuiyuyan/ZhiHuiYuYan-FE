import { motion } from 'framer-motion';

interface DropItemProps {
  value: string;
}

const DropItem: React.FC<DropItemProps> = ({ value }) => (
  <motion.p
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.1 }}
    className="text-[#0B489B] text-[1.7vh]"
  >
    {value}
  </motion.p>
);

export default DropItem;
