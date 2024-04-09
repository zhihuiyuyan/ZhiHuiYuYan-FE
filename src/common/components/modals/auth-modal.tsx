'use client';

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
        <div className="fixed h-[70vh] w-[30%] rounded-[5vh] bg-white shadow-xl"></div>
      </div>
    )
  );
};

export default AuthModal;
