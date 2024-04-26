import { HTMLAttributes } from 'react';

export interface PluginProps<T> extends HTMLAttributes<HTMLDivElement>{
  onTrigger?: () => Promise<T>;
  onSuccess?: (name: string, res: T) => void;
  onFail?: (err: unknown) => void;
  children?: React.ReactNode;
  name?: string;
}

const PluginTemplate = <T,>(props: PluginProps<T>) => {
  const { onTrigger, className, onSuccess, name, onFail, children, ...restProps } = props;
  const handleClick = () => {
    onTrigger &&
      onTrigger()
        .then((res) => {
          onSuccess && onSuccess(name as string, res);
        })
        .catch((err) => {
          onFail && onFail(err);
        });
  };

  return (
    <>
      <div
        className={`border-1 ml-6 flex h-12 w-20 cursor-pointer items-center justify-center rounded-lg border-darkGray bg-white text-sm text-mdDarkGrayText transition-all hover:bg-lightGray ${className}`}
        {...restProps}
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
};

export default PluginTemplate;
