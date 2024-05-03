import React, { HTMLAttributes, useEffect } from 'react';
import './index.css'

interface LoadProps extends HTMLAttributes<HTMLDivElement> {
  paused: boolean,
  unique_id: number
}
const Load: React.FC<LoadProps> = ({className, unique_id,paused, ...restProps}) => {
  useEffect(() => {
    paused
      ? document.querySelectorAll(`.loader_${unique_id} .square`).forEach((item) => item.classList.add('stop'))
      : document.querySelectorAll(`.loader_${unique_id} .square`).forEach((item) => item.classList.remove('stop'))
  }, [paused]);
  return (
    <>
      <div className={`loader_${unique_id} loader`}>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square last"></div>
        <div className="square clear"></div>
        <div className="square"></div>
        <div className="square last"></div>
        <div className="square clear"></div>
        <div className="square "></div>
        <div className="square last"></div>
      </div>

    </>
  )
}

export default Load