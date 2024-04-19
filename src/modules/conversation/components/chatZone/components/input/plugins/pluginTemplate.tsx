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
<<<<<<< HEAD
      <div className='w-20 cursor-pointer hover:bg-lightGray text-sm text-mdDarkGrayText rounded-lg bg-white ml-6 flex justify-center items-center border-1 border-darkGray' onClick={handleClick}>{children}</div>
=======
      <div
        className="border-1 mx-8 flex w-20 cursor-pointer items-center justify-center rounded-lg border-darkGray bg-white hover:bg-lightGray"
        onClick={handleClick}
      >
        {children}
      </div>
>>>>>>> ca5206f5062e425dab883871230483575503e543
    </>
  );
};
export default PluginTemplate;
