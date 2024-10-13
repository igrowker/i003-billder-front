import { BriefcaseIcon } from "@/assets/icons";
import { ReactNode } from "react";

interface IconBlueCircleProps {
  icon?: ReactNode;
  bgColor?: string;
}

export const IconBlueCircle = ({ icon = <BriefcaseIcon /> , bgColor = "bg-customBlue" }: IconBlueCircleProps) => {
  return (
    <div className={`relative ${bgColor}  min-w-14 min-h-14 w-14 max-w-14 max-h-14 h-14 rounded-full text-white`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {icon}
      </div>
    </div>
  );
};
