"use client"
import Search from './Search';
import Columns from './columns';
import { useState } from 'react';

const Query = () => {
  const [submit, setSubmit] = useState<boolean>(false)
  return (
    <>
      <div className="relative h-[25vh] w-full ">
        <Search onSubmit={() => {setSubmit(true)}}/>
        <div
          style={{
            backgroundImage: `url(${'/images/main/breakline.png'})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="relative h-[2vh] w-full"
        ></div>
        <Columns submit={submit}/>
      </div>
    </>
  );
};

export default Query;
