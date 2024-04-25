import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <motion.div whileTap={{ scale: 0.9 }} className="absolute left-[5%]">
      <Link
        href="/"
        passHref
        className="flex items-center justify-center gap-2"
      >
        <Image
          src="/images/header/logo.png"
          alt="logo"
          width={25}
          height={25}
          className="h-[3vh] w-[3vh] select-none"
        />
        <p className="h-[4vh] w-[110%] select-none font-zheng text-[2.5vh] text-white">
          智慧语研
        </p>
      </Link>
    </motion.div>
  );
};

export default Logo;
