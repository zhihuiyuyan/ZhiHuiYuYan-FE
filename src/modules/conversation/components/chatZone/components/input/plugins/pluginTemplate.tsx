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
      <div
        className="border-1 mx-8 flex w-20 cursor-pointer items-center justify-center rounded-lg border-darkGray bg-white hover:bg-lightGray"
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
};
export default PluginTemplate;
