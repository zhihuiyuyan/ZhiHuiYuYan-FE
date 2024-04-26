import Search from './Search';
import Columns from './columns';

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
        <Columns />
      </div>
    </>
  );
};

export default Query;
