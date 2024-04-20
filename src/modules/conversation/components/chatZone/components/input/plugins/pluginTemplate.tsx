import React from 'react';

export interface PluginProps<T> {
  onTrigger?: () => Promise<T>;
  onSuccess?: (name: string, res: T) => void;
  onFail?: (err: unknown) => void;
  children?: React.ReactNode,
  name?: string,
}
const PluginTemplate= <T,>(props: PluginProps<T>) => {
  const {onTrigger, onSuccess, name, onFail, children} = props
  const handleClick = () => {
    onTrigger && onTrigger().then(res => {
      onSuccess && onSuccess(name as string, res)
    }).catch(err => {
      onFail && onFail(err)
    })
  }
  return (
    <>
      <div className='w-20 cursor-pointer h-12 hover:bg-lightGray text-sm text-mdDarkGrayText rounded-lg bg-white ml-6 flex justify-center items-center border-1 border-darkGray' onClick={handleClick}>{children}</div>
    </>
  );
};
export default PluginTemplate;
