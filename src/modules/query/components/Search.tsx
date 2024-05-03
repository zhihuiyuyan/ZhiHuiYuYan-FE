'use client'

import SearchBar from '@/common/components/elements/SearchBar';
import { usePaperInfo, usePersonInfo } from '@/common/hooks/useInfo';
import { usePaperOrScholarSelected } from '@/common/hooks/useIsPaperOrScholarSelected';

const Search: React.FC = () => {
  const {PaperOrScholarSelected} = usePaperOrScholarSelected()
  const store = PaperOrScholarSelected === '论文' ? usePaperInfo() : usePersonInfo()
  const {setFilteredList, setSearch, search, filters, sort, pageSize, curPage, } = store
  const handleSubmit = (val: string) => {
    setSearch(val)
    // @ts-ignore
    setFilteredList({filters, search: val, sort, pageSize, page: curPage, name: PaperOrScholarSelected === '论文' ? 'paper' : 'scholar'})
  }

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
        <SearchBar onSubmit={(val) => handleSubmit(val)} type="advanced" />
      </div>
    </>
  );
};

export default Search;
