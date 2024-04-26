import Search from './Search';

const Query = () => {
  return (
    <>
      <div className="relative h-[25vh] w-full ">
        <Search />
        <div
          style={{
            backgroundImage: `url(${'/images/main/breakline.png'})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="relative h-[2vh] w-full"
        ></div>
        <div className="flex h-auto w-full bg-[#F9FAFC] px-[2%] pb-10 xl:px-[10%] relative">
          <div className="h-[60vh] w-full bg-white relative top-[2vh]"></div>
        </div>
      </div>
    </>
  );
};

export default Query;
