import React, { HTMLAttributes, useEffect } from 'react';
import './index.css'

interface LoadProps extends HTMLAttributes<HTMLDivElement> {
  paused: boolean
}
const Load: React.FC<LoadProps> = ({className,paused, ...restProps}) => {
  useEffect(() => {
    paused
      ? document.querySelectorAll('.square').forEach((item) => item.classList.add('stop'))
      : document.querySelectorAll('.square').forEach((item) => item.classList.remove('stop'))
  }, [paused]);
  return (
    <>
      <div className="loader">
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