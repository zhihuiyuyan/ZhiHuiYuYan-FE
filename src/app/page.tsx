import { NextPage } from 'next';
import Image from 'next/image';

const HomePage: NextPage = () => {
  return (
    <>
      <div className="relative h-[25vh] w-full">
        <Image
          src="/images/main/main-bg.png"
          alt="main-bg"
          width={1015}
          height={626}
          className="relative top-1 h-full w-full select-none"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <input className="h-[5vh] w-[35%] rounded-l-lg border-2 border-[#841710] text-lg outline-none px-3" />
          <button className="h-[5vh] w-[8%] rounded-r-lg bg-[#841710] text-white">
            检索
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
