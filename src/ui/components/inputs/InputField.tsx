interface InputFieldProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  disabled?: boolean;
}

export const InputField = ({
  id,
  value,
  onChange,
  placeholder,
  disabled,
}: InputFieldProps) => {
  return (
    <input
      type="text"
      id={id}
      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customOrange mt-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
