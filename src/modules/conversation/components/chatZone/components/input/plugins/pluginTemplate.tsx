import React from 'react';

interface PluginProps<T> {
  onTrigger: () => Promise<T>;
  onSuccess: (res: T) => void;
  onFail: (err: Error) => void;
  children?: React.ReactNode;
}
const PluginTemplate: React.FC<PluginProps> = (props) => {
  const { onTrigger, onSuccess, onFail, children } = props;
  const handleClick = () => {
    onTrigger()
      .then((res) => {
        onSuccess(res);
      })
      .catch((err) => {
        onFail(err);
      });
  };
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
