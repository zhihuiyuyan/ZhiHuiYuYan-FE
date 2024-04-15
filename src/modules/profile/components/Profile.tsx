import BreaklineDashed from '@/common/components/elements/BreaklineDashed';

const Profile = () => {
  return (
    <>
      <div className="flex h-[92vh] w-full items-center justify-center bg-[#F9FAFC]">
        <div className="relative flex h-[88vh] w-[60%] min-w-[50vh] flex-col items-center rounded-[3vh] bg-white">
          <div className="relative flex h-[14vh] w-full items-center">
            <div className="relative left-[7.5%] top-[1vh] h-[9vh] w-[9vh] rounded-full bg-[#E7E7E7]"></div>
            <p className="absolute left-[18.5%] top-[4vh] text-[2vh] font-semibold">
              姓名
            </p>
            <div className="absolute left-[18.5%] top-[8vh] flex items-center gap-[2vh] text-[1.5vh] text-[#0B489B]">
              <p>性别：女</p>
              <BreaklineDashed className="h-[2vh] border-r-2 border-[#B9B9B9]" />
              <p>机构：</p>
            </div>
            <div className="absolute right-[10%] flex gap-[3vh]">
              <button className="h-[5vh] w-[12vh] rounded-[1vh] bg-[#841710] text-white text-[1.7vh]">
                我的关注
              </button>
              <button className="h-[5vh] w-[12vh] rounded-[1vh] bg-[#841710] text-white text-[1.7vh]">
                浏览历史
              </button>
            </div>
          </div>
          <BreaklineDashed className="relative w-[85%] border-t-2 border-[#B9B9B9]" />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
