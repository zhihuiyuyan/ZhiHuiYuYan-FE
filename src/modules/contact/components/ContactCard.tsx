'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { ContactCardProps } from './contact.config';

const ContactCard: React.FC<ContactCardProps> = (props) => {
  const { textColor, bgColor, icon, name, detail } = props;

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05, shadow: '#000000' }}
        className="relative mt-12 w-44 rounded-sm border-2 border-brown pb-[1vh] shadow-transparent transition-all"
      >
        <div className="h-26 absolute left-1/2 top-0 w-20 -translate-x-1/2 -translate-y-1/2 bg-white p-2 transition-all hover:w-20">
          <motion.div
            whileHover={{ scale: 0.9 }}
            className="relative  mx-auto h-14 w-14 rounded-full border-2 border-brown p-0.5 transition-all"
          >
            <div className={`h-full w-full rounded-full ${bgColor}`}></div>
            <Image
              alt="image"
              src={icon}
              width={22}
              height={22}
              className="absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110"
            ></Image>
          </motion.div>
        </div>
        <p
          className={`mx-auto mt-10 cursor-pointer ${textColor} w-full  text-center`}
        >
          {name}
        </p>
        <p className="mx-auto my-2 w-full cursor-pointer text-center text-sm text-brown">
          {detail}
        </p>
      </motion.div>
    </>
  );
};

export default ContactCard;
