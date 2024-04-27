"use client"

import Image from 'next/image';
import React from 'react';
import { ContactCardProps } from './contact.config';


const ContactCard: React.FC<ContactCardProps> = (props) => {
  const {textColor, bgColor, icon, name, detail} = props
  return (
    <>
      <div className='border-brown border-2 transition-all hover:scale-105 hover:shadow shadow-transparent relative w-44 h-28 mt-12 rounded-sm'>
        <div className='w-20 h-26 transition-all hover:w-20 bg-white absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 p-2'>
          <div className='w-14  h-14 rounded-full transition-all hover:scale-90 border-2 border-brown p-0.5 relative mx-auto'>
            <div className={`w-full h-full rounded-full ${bgColor}`}></div>
            <Image alt='image' src={icon} width={22} height={22} className='absolute top-1/2  transition-all hover:scale-110 left-1/2 -translate-x-1/2 -translate-y-1/2'></Image>
          </div>
        </div>

        <p className={`mt-10 mx-auto cursor-pointer ${textColor} text-center  w-full`}>{name}</p>
        <p className='text-brown mt-2 mx-auto cursor-pointer text-center w-full text-sm'>{detail}</p>
      </div>
    </>
  )
}

export default ContactCard