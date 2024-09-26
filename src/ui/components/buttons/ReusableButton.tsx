import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const ReusableButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "w-full bg-customBlue text-customWhite py-2 px-4 rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue transition duration-300",
}) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default ReusableButton;
