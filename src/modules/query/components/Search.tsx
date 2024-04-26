import SearchBar from '@/common/components/elements/SearchBar';

const Search: React.FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${'/images/main/main-bg.png'})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative left-0 top-0 flex h-full w-full items-center justify-center"
      >
        <SearchBar type="advanced" />
      </div>
    </>
  );
};

export default Search;
