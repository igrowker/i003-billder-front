import { ReactNode } from "react";

interface ProfileCircleProps {
  middleIcon?: ReactNode;
}

export const ProfileCircle = ({ middleIcon }: ProfileCircleProps) => {
  return (
    <div className="bg-gradient-yellow relative my-4 mx-auto w-16 h-16 rounded-full">
      {/* Subir imagen */}
      {middleIcon && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {middleIcon}
        </div>
      )}
    </div>
  );
};
