import Image from 'next/image';

const Experience = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-[1vh]">
      <p className="w-[85%] text-[2vh] font-semibold text-blue-800">科研经历</p>
      <div className="h-[65vh] w-[85%] overflow-scroll rounded-[2vh] bg-gray-100 p-2">
        <Image
          src="images/resume.png"
          alt="resume"
          width={850}
          height={650}
          className="w-full h-auto rounded-[1vh]"
        />
      </div>
    </div>
  );
};

export default Experience;
