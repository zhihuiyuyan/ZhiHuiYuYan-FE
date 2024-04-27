'use client';

import Image from 'next/image';

import { ContactCardProps } from './contact.config';

const ContactCard: React.FC<ContactCardProps> = (props) => {
  const { textColor, bgColor, icon, name, detail } = props;
  return (
    <>
      <div className="relative mt-12 h-28 w-44 rounded-sm border-2 border-brown shadow-transparent transition-all hover:scale-105 hover:shadow">
        <div className="h-26 absolute left-1/2 top-0 w-20 -translate-x-1/2 -translate-y-1/2 bg-white p-2 transition-all hover:w-20">
          <div className="relative  mx-auto h-14 w-14 rounded-full border-2 border-brown p-0.5 transition-all hover:scale-90">
            <div className={`h-full w-full rounded-full ${bgColor}`}></div>
            <Image
              alt="image"
              src={icon}
              width={22}
              height={22}
              className="absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110"
            ></Image>
          </div>
        </div>
        <p
          className={`mx-auto mt-10 cursor-pointer ${textColor} w-full  text-center`}
        >
          {name}
        </p>
        <p className="mx-auto mt-2 w-full cursor-pointer text-center text-sm text-brown">
          {detail}
        </p>
      </div>
    </>
  );
};

export default ContactCard;
