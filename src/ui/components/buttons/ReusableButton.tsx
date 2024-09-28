import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;


}

const ReusableButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, className , ...attributes }, ref) => {
  return (
    <button ref={ref} {...attributes} className={`${className ? className : ''} w-full bg-customBlue text-customWhite py-2 px-4 rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue transition duration-300`}>
      {children}
    </button>
  );
});

export default ReusableButton;
