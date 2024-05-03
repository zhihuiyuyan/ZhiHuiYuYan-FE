import React, { HTMLAttributes } from 'react';
import './index.css'
const Load: React.FC<HTMLAttributes<HTMLDivElement>> = ({className, ...restProps}) => {
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