type BreaklineProps = {
  className?: string;
  [propName: string]: string | undefined;
};

const Breakline: React.FC<BreaklineProps> = ({ className = '', ...others }) => {
  return (
    <div
      className={`my-4 border border-gray-300 dark:border-neutral-700 ${className}`}
      data-testid="breakline"
      {...others}
    ></div>
  );
};

export default Breakline;
