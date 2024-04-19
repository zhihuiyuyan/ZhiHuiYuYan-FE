'use client';

import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoMdLock } from 'react-icons/io';
import {
  IoPersonCircleOutline,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5';

import { useModal } from '@/common/hooks/useModalStore';

const AuthModal: React.FC = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'auth';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLogin, setIsLogin] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('登录成功:', response.data);
        onClose();
      } else {
        console.log(
          '登录失败，状态码:',
          response.status,
          '响应数据:',
          response.data
        );
      }

      return response;
    } catch (error) {
      console.error('请求出错:', error);
    }
  };

  const handleButtonClick = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 1000);
    setCountdown(60);
    setTimeout(() => {
      setCountdown(0);
    }, 60000);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown]);

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
          {isLogin && (
            <div className="relative top-[5vh] flex items-center justify-center border-[0.5vh] border-[#8F4C0A] bg-[#771F15] p-[0.5vh]">
              <Image
                src="/images/header/logo.png"
                alt="logo"
                width={288}
                height={34}
                className="h-[4vh] w-[4vh] select-none"
              />
            </div>
          )}
          <div className="relative top-[7vh] flex w-[50%] items-center justify-center">
            <Image
              src="/images/auth/title-bg.png"
              alt="title-bg"
              width={288}
              height={34}
              className="h-[4vh] w-[25vh] select-none"
            />
            <p className="absolute font-zheng text-[3vh] text-[#84280E]">
              {isLogin ? '登录用户中心' : '注册用户中心'}
            </p>
          </div>
          <div className="relative top-[11vh] flex w-full flex-col items-center gap-5">
            <div className="relative flex h-[5vh] w-[70%] items-center rounded-lg border border-[#84280E] bg-[#F9FAFC]">
              <IoPersonCircleOutline className="relative left-3 text-[3.5vh] text-[#9A4F3B]" />
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="h-full w-full bg-transparent px-5 text-[1.5vh] outline-none"
                placeholder="请输入邮箱"
                required
              />
            </div>
            <div className="relative flex h-[5vh] w-[70%] items-center rounded-lg border border-[#84280E] bg-[#F9FAFC]">
              <IoMdLock className="relative left-3 text-[3.5vh] text-[#9A4F3B]" />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="h-full w-full bg-transparent px-5 text-[1.5vh] outline-none"
                placeholder="请输入密码"
                required
              />
            </div>
            {!isLogin && (
              <div className="relative flex h-[5vh] w-[70%] justify-between">
                <div className="flex w-[60%] items-center rounded-lg border border-[#84280E] bg-[#F9FAFC]">
                  <IoShieldCheckmarkOutline className="relative left-3 text-[3.5vh] text-[#9A4F3B]" />
                  <input
                    className="h-full w-full bg-transparent px-5 text-[1.5vh] outline-none"
                    placeholder="请输入验证码"
                  />
                </div>
                <motion.button
                  whileTap={countdown ? undefined : { scale: 0.9 }}
                  className={`h-[5vh] w-[35%] rounded-xl ${countdown ? 'bg-[#C4C4C4]' : 'bg-[#A43E21]'} text-[1.5vh] font-semibold text-white`}
                  onClick={handleButtonClick}
                  disabled={!!countdown}
                >
                  {isSending
                    ? '发送中...'
                    : countdown > 0
                      ? `${countdown}秒后再发送`
                      : '获取验证码'}
                </motion.button>
              </div>
            )}
          </div>
          {isLogin && (
            <p className="relative right-2 top-[12vh] w-[70%] cursor-pointer text-right text-[1.3vh] text-[#DF7C44]">
              忘记密码
            </p>
          )}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`relative ${isLogin ? 'top-[13vh]' : 'top-[17vh]'} h-[5vh] w-[20vh] rounded-3xl bg-[#A43E21] text-[1.7vh] font-semibold text-white`}
            onClick={handleLogin}
          >
            {isLogin ? '登录' : '注册'}
          </motion.button>
          <div
            className={`relative ${isLogin ? 'top-[14vh]' : 'top-[18vh]'} flex gap-2`}
          >
            <p className="text-[1.3vh] text-[#878787]">
              {isLogin ? '还没有账号？' : '已有账号？'}
            </p>
            <p
              className="cursor-pointer text-[1.3vh] text-[#D24C00]"
              onClick={() => setIsLogin(!isLogin)}
            >
              立即{isLogin ? '注册' : '登录'}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default AuthModal;
