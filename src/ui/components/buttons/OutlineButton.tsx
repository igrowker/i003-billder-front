import { ButtonHTMLAttributes, ReactNode } from "react";

interface OutLineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const OutlineButton = ({
  children,
  className = "",
  ...attributes
}: OutLineButtonProps) => {
  return (
    <button
      {...attributes}
      type="button"
      className={`${className} flex items-center justify-center w-full p-2 border-2 border-customOrange rounded-lg bg-white text-black font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center space-x-2">{children}</div>
    </button>
  );
};
