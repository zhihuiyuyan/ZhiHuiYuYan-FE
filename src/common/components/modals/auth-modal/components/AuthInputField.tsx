interface AuthInputFieldProps {
  icon: React.ReactNode;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  className?: string;
}

const AuthInputField: React.FC<AuthInputFieldProps> = ({
  icon,
  value,
  setValue,
  placeholder,
  className,
}) => {
  return (
    <div
      className={`relative flex h-[5vh] w-[70%] items-center rounded-lg border border-red-800 bg-gray-100 ${className}`}
    >
      <div className="relative left-3 text-[3.5vh] text-red-800">{icon}</div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="h-full w-full bg-transparent px-5 text-[1.5vh] outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default AuthInputField;
