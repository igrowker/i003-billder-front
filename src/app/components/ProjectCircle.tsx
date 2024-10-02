import { BriefcaseIcon } from "@/assets/icons";



export const ProjectCircle = () => {
  return (
    <div className="relative  bg-customBlue min-w-14 min-h-14 w-14 max-w-14 max-h-14 h-14 rounded-full text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <BriefcaseIcon />
      </div>
    </div>
  );
};
