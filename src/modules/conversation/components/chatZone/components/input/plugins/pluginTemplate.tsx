import React from 'react';

export interface PluginProps<T> {
  onTrigger?: () => Promise<T>;
  onSuccess?: (res: unknown) => void;
  onFail?: (err: unknown) => void;
  children?: React.ReactNode
}
const PluginTemplate: React.FC<PluginProps<string>> = (props) => {
  const {onTrigger, onSuccess, onFail, children} = props
  const handleClick = () => {
    onTrigger && onTrigger().then(res => {
      onSuccess && onSuccess(res)
    }).catch(err => {
      onFail && onFail(err)
    })
  }
  return (
    <>
      <div className='w-20 cursor-pointer hover:bg-lightGray rounded-lg bg-white mx-8 flex justify-center items-center border-1 border-darkGray' onClick={handleClick}>{children}</div>
    </>
  )
}
export default PluginTemplate