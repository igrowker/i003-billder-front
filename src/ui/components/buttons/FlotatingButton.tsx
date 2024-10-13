import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface FlotatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  position?: `${Position}`;
}

enum Position {
  TopLeft = "topLeft",
  TopRight = "topRight",
  BottomLeft = "bottomLeft",
  BottomRight = "bottomRight",
  BottomCenter = "bottomCenter", 
}

export const FlotatingButton = forwardRef<
  HTMLButtonElement,
  FlotatingButtonProps
>(({ position = "bottomRight", children, className, ...attributes }, ref) => {
  const baseStyles = "rounded-lg shadow-md shadow-black/40 bg-gradient-to-r from-customYellow to-customOrange flex justify-center items-center text-customBlue";

 
  const sizeStyles = "min-h-[45px] w-auto px-4 py-2 mx-5"; 

  const finalButtonPosition = position === Position.TopLeft
    ? "top-[60px] left-2"
    : position === Position.TopRight
    ? "top-[60px] right-2"
    : position === Position.BottomLeft
    ? "bottom-[70px] left-2"
    : position === Position.BottomRight
    ? "bottom-[70px] right-4"
    : "bottom-[20px] left-1/2 transform -translate-x-1/2"; 

  return (
    <button
      ref={ref}
      {...attributes}
      className={`${className} ${baseStyles} ${finalButtonPosition} ${sizeStyles}`} 
    >
      {children}
    </button>
  );
});
