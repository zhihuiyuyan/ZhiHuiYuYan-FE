interface RightColumnProps {
  className?: string;
}

const RightColumn: React.FC<RightColumnProps> = ({ className }) => {
  return <div className={className}>RightColumn</div>;
};

export default RightColumn;
