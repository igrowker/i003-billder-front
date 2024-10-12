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
}

export const FlotatingButton = forwardRef<
  HTMLButtonElement,
  FlotatingButtonProps
>(({ position = "bottomRight", children, className, ...attributes }, ref) => {
  const topLeft = "top-[60px] left-2",
    topRight = "top-[60px] left-2",
    bottomLeft = "top-[60px] left-2",
    bottomRight = "bottom-[70px] right-4";

  const finalButtonPosition =
    position == Position.TopLeft
      ? topLeft
      : position == Position.TopRight
        ? topRight
        : position == Position.BottomLeft
          ? bottomLeft
          : position == Position.BottomRight && bottomRight;

  return (
    <button
      ref={ref}
      {...attributes}
      className={`${className}  fixed rounded-full ${finalButtonPosition} shadow-md shadow-black/40 bg-gradient-yellow min-h-14 min-w-14 flex justify-center items-center`}
    >
      {children}
    </button>
  );
});
