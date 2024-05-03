interface ProfileInput {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

const ProfileInput: React.FC<ProfileInput> = ({
  label,
  value,
  setValue,
  placeholder,
}) => {
  return (
    <div className="relative flex h-[3vh] w-[60%] items-center border-b-2 border-red-800">
      <p className="absolute text-nowrap text-[1.5vh] font-semibold text-blue-800">
        {label}:
      </p>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="h-full w-full bg-transparent px-12 text-center text-[1.5vh] outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default ProfileInput;
