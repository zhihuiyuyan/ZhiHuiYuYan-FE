import React, { HTMLAttributes, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
interface PaginationProps extends HTMLAttributes<HTMLDivElement>{
  pageSize: number,
  dataLength: number,
  onChosen?: (index: number) => void;
}
const Pagination: React.FC<PaginationProps> = (props) => {
  const {pageSize, dataLength, onChosen, ...restProps} = props
  const [currentSelect, setCurrentSelect] = useState<number>(1);
  const [inputMode, setInputMode] = useState<boolean>(false)
  const handleLeft = () => {
    const next = currentSelect - 1
    if(next) {
      onChosen && onChosen(next)
      setCurrentSelect(next)
    }
  }
  const handleRight = () => {
    const next = currentSelect + 1
    if(next < dataLength) {
      onChosen && onChosen(next)
      setCurrentSelect(next)
    }
  }
  const handleInput = (e: any) => {
     console.log(e.key);
     if(e.key === 'Enter') {
       handleBlur(e)
     }
  }
  const handleBlur = (e: any) => {
    const next = Number(e.target.value)
    if(next < dataLength / pageSize && next > 0) {
      onChosen && onChosen(next)
      setCurrentSelect(next)
    }
    setInputMode(false)
  }
  return (
    <div {...restProps}>
      <div className="join">
        <button className="join-item btn" onClick={handleLeft}>«</button>
        <button className="join-item btn flex">第{!inputMode ? <span onClick={() => setInputMode(true)}  className='p-2 w-[4vw] text-center'>{currentSelect}</span> : <input onKeyDown={handleInput} className='bg-transparent text-center w-[4vw] p-2 inline outline-0' onBlur={handleBlur} defaultValue={currentSelect} type="text"/>}页</button>
        <button className="join-item btn" onClick={handleRight}>»</button>
      </div>
    </div>
  )
}

export default Pagination;
