import React from 'react';

interface PluginProps<T> {
  onTrigger: () => Promise<T>;
  onSuccess: (res: T) => void;
  onFail: (err: Error) => void;
  children?: React.ReactNode
}
const PluginTemplate: React.FC<PluginProps> = (props) => {
  const {onTrigger, onSuccess, onFail, children} = props
  const handleClick = () => {
    onTrigger().then(res => {
      onSuccess(res)
    }).catch(err => {
      onFail(err)
    })
  }
  return (
    <>
      <div className='w-20 cursor-pointer hover:bg-lightGray rounded-lg bg-white mx-8 flex justify-center items-center border-1 border-darkGray' onClick={handleClick}>{children}</div>
    </>
  )
}
export default PluginTemplate