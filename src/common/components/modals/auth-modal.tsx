'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoMdLock } from 'react-icons/io';
import { IoPersonCircleOutline } from 'react-icons/io5';

import { useModal } from '@/common/hooks/useModalStore';

const AuthModal: React.FC = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'auth';

  return (
    isModalOpen && (
      <div className="fixed z-10 flex h-full w-full items-center justify-center">
        <div
          className="fixed inset-0 h-full w-full bg-[#919191] opacity-50"
          onClick={onClose}
        ></div>
        <div className="fixed flex h-[63vh] min-w-[50vh] flex-col items-center rounded-[5vh] bg-white shadow-xl">
          <Image
            src="/images/auth/form-top.png"
            alt="form-top"
            width={288}
            height={34}
            className="w-full select-none"
          />
          <div className="absolute top-[12vh] flex items-center justify-center border-[0.5vh] border-[#8F4C0A] bg-[#771F15] p-[0.5vh]">
            <Image
              src="/images/header/logo.png"
              alt="logo"
              width={288}
              height={34}
              className="h-[4vh] w-[4vh] select-none"
            />
          </div>
          <div className="relative top-[14vh] flex w-[50%] items-center justify-center">
            <Image
              src="/images/auth/title-bg.png"
              alt="title-bg"
              width={288}
              height={34}
              className="h-[4vh] w-[25vh] select-none"
            />
            <p className="absolute font-zheng text-[3vh] text-[#84280E]">
              登录用户中心
            </p>
          </div>
          <div className="relative top-[18vh] flex w-full flex-col items-center gap-5">
            <div className="relative flex h-[5vh] w-[70%] items-center rounded-lg border border-[#84280E] bg-[#F9FAFC]">
              <IoPersonCircleOutline className="relative left-3 text-[3.5vh] text-[#9A4F3B]" />
              <input
                className="h-full w-full bg-transparent px-5 text-[1.5vh] outline-none"
                placeholder="请输入邮箱"
              />
            </div>
            <div className="relative flex h-[5vh] w-[70%] items-center rounded-lg border border-[#84280E] bg-[#F9FAFC]">
              <IoMdLock className="relative left-3 text-[3.5vh] text-[#9A4F3B]" />
              <input
                className="h-full w-full bg-transparent px-5 text-[1.5vh] outline-none"
                placeholder="密码"
              />
            </div>
          </div>
          <p className="relative right-2 top-[19vh] w-[70%] text-right text-[1.3vh] text-[#DF7C44]">
            忘记密码
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="relative top-[20vh] h-[5vh] w-[20vh] rounded-3xl bg-[#A43E21] text-[1.7vh] font-semibold text-white"
          >
            登录
          </motion.button>
          <div className="relative top-[21vh] flex gap-2">
            <p className="text-[1.3vh] text-[#878787]">还没有账号？</p>
            <p className="text-[1.3vh] text-[#D24C00]">立即注册</p>
          </div>
        </div>
      </div>
    )
  );
};

export default AuthModal;
