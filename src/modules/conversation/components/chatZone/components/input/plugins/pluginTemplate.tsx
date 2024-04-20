export interface PluginProps<T> {
  onTrigger?: () => Promise<T>;
  onSuccess?: (name: string, res: T) => void;
  onFail?: (err: unknown) => void;
  children?: React.ReactNode;
  name?: string;
}

const PluginTemplate = <T,>(props: PluginProps<T>) => {
  const { onTrigger, onSuccess, name, onFail, children } = props;
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
        className="text-mdDarkGrayText border-1 ml-6 flex h-12 w-20 cursor-pointer items-center justify-center rounded-lg border-darkGray bg-white text-sm hover:bg-lightGray"
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
};

export default PluginTemplate;
