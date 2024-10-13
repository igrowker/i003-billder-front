import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface FlotatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  position?: `${Position}`;
  circle?: boolean
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
>(({ position = "bottomRight", children, className, circle = true, ...attributes }, ref) => {
  const baseStyles = `${circle ? 'rounded-full' : 'rounded-lg'} shadow-md fixed shadow-black/40 bg-gradient-to-r from-customYellow to-customOrange flex justify-center items-center text-customBlue`;


  const sizeStyles = " px-4 py-2 ";

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
