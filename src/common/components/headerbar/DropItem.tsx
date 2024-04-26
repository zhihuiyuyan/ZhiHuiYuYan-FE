import { motion } from 'framer-motion';

interface DropItemProps {
  value: string;
}

const DropItem: React.FC<DropItemProps> = ({ value }) => (
  <motion.p
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.1 }}
    className="text-[1.7vh] text-blue-800"
  >
    {value}
  </motion.p>
);

export default DropItem;
