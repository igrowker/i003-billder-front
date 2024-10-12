import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ReusableButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...attributes }, ref) => {
    return (
      <button
        ref={ref}
        {...attributes}
        className={`${className ? className : ""} disabled:bg-customBlue/80 disabled:cursor-not-allowed w-full bg-customBlue text-customWhite py-2 px-4 rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue transition duration-300`}
      >
        {children}
      </button>
    );
  }
);
