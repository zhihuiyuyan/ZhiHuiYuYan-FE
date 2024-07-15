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

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/common/components/elements/Avatar';
import { useIsLogined } from '@/common/hooks/useIsLogined';
import { useModal } from '@/common/hooks/useModalStore';

import AuthInputField from './AuthInput';
import ProfileInputField from './ProfileInput';

const AuthModal: React.FC = () => {
  const { isOpen, onClose, type } = useModal();
  const { setIsLogined } = useIsLogined();

  const [isRegistered, setIsRegistered] = useState(false);

  const isModalOpen = isOpen && type === 'auth';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const [avatar, setAvatar] = useState('');
  const [gender, setGender] = useState('');
  const [institution, setInstitution] = useState('');
  const [name, setName] = useState('');

  const [preview, setPreview] = useState<string | null>(null);

  const [isLogin, setIsLogin] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://10.130.115.25:8888/auth/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem('token', response.data.data.token);
        setIsLogined(true);
        onClose();
      }

      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('请求出错:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'http://10.130.115.25:8888/auth/register',
        {
          email: email,
          password: password,
          verification_code: verificationCode,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        setIsLogined(true);
        setIsRegistered(true);
      }

      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('请求出错:', error);
    }
  };

  const handleVerification = async () => {
    try {
      setIsSending(true);
      setTimeout(() => {
        setIsSending(false);
      }, 1000);
      setCountdown(60);
      setTimeout(() => {
        setCountdown(0);
      }, 60000);

      const response = await axios.post(
        'http://10.130.115.25:8888/auth/verification',
        { email: email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data.message);
      }

      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('请求出错:', error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://10.130.115.25:8888/user/update',
        {
          avatar: avatar,
          gender: gender,
          institution: institution,
          name: name,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data.message);
      }

      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('请求出错:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        handleUploadImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setPreview(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleUploadImage = async (file: File) => {
    try {
      const response = await axios.post(
        'https://picui.cn/api/v1/upload',
        {
          file: file,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        setAvatar(response.data.data.links.url);
      }

      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('请求出错:', error);
    }
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
          className="fixed inset-0 h-full w-full bg-gray-500 opacity-50"
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
          {!isRegistered && isLogin && (
            <div className="relative top-[5vh] flex items-center justify-center border-[0.5vh] border-[#8F4C0A] bg-red-800 p-[0.5vh]">
              <Image
                src="/images/header/logo.png"
                alt="logo"
                width={288}
                height={34}
                className="h-[4vh] w-[4vh] select-none"
              />
            </div>
          )}
          {isRegistered && (
            <Avatar className="relative top-[5vh] h-[10vh] w-[10vh] rounded-full bg-gray-200">
              {preview && <AvatarImage src={preview} />}
              <AvatarFallback>
                <p className="text-[1.5vh] text-gray-600">设置头像</p>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute h-full w-full cursor-pointer text-[1.5vh] text-gray-600 opacity-0"
                  placeholder="设置头像"
                  onChange={handleImageChange}
                />
              </AvatarFallback>
            </Avatar>
          )}
          {!isRegistered && (
            <div className="relative top-[7vh] flex w-[50%] items-center justify-center">
              <Image
                src="/images/auth/title-bg.png"
                alt="title-bg"
                width={288}
                height={34}
                className="h-[4vh] w-[25vh] select-none"
              />
              <p className="absolute font-zheng text-[3vh] text-red-800">
                {isLogin ? '登录用户中心' : '注册用户中心'}
              </p>
            </div>
          )}
          <div
            className={`relative top-[11vh] flex w-full flex-col items-center gap-5 ${isRegistered && 'gap-7'}`}
          >
            {isRegistered ? (
              <>
                <ProfileInputField
                  label="姓名"
                  value={name}
                  setValue={setName}
                  placeholder="请输入姓名"
                />
                <ProfileInputField
                  label="性别"
                  value={gender}
                  setValue={setGender}
                  placeholder="请输入性别"
                />
                <ProfileInputField
                  label="所属机构"
                  value={institution}
                  setValue={setInstitution}
                  placeholder="请输入机构"
                />
              </>
            ) : (
              <>
                <AuthInputField
                  icon={<IoPersonCircleOutline />}
                  value={email}
                  setValue={setEmail}
                  placeholder={'请输入邮箱'}
                />
                <AuthInputField
                  icon={<IoMdLock />}
                  value={password}
                  setValue={setPassword}
                  placeholder={'请输入密码'}
                />
                {!isLogin && (
                  <div className="relative flex h-[5vh] w-[70%] justify-between">
                    <AuthInputField
                      icon={<IoShieldCheckmarkOutline />}
                      value={verificationCode}
                      setValue={setVerificationCode}
                      placeholder={'请输入验证码'}
                      className="!w-[60%]"
                    />
                    <motion.button
                      whileTap={countdown ? undefined : { scale: 0.9 }}
                      className={`h-[5vh] w-[35%] rounded-xl ${countdown ? 'bg-gray-300' : 'bg-red-800'} text-[1.5vh] font-semibold text-white`}
                      onClick={handleVerification}
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
              </>
            )}
          </div>
          {!isRegistered && isLogin && (
            <p className="relative right-2 top-[12vh] w-[70%] cursor-pointer text-right text-[1.3vh] text-red-700">
              忘记密码
            </p>
          )}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`relative ${isRegistered ? 'top-[15vh]' : isLogin ? 'top-[13vh]' : 'top-[17vh]'} h-[5vh] w-[20vh] rounded-3xl bg-[#A43E21] text-[1.7vh] font-semibold text-white`}
            onClick={
              isRegistered
                ? handleUpdateProfile
                : isLogin
                  ? handleLogin
                  : handleRegister
            }
          >
            {isLogin && !isRegistered ? '登录' : '注册'}
          </motion.button>
          {!isRegistered && (
            <div
              className={`relative ${isLogin ? 'top-[14vh]' : 'top-[18vh]'} flex gap-2`}
            >
              <p className="text-[1.3vh] text-gray-400">
                {isLogin ? '还没有账号？' : '已有账号？'}
              </p>
              <p
                className="cursor-pointer text-[1.3vh] text-red-700"
                onClick={() => setIsLogin(!isLogin)}
              >
                立即{isLogin ? '注册' : '登录'}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default AuthModal;
