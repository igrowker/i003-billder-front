import { IconBlueCircle } from "@/app/components";
import { ThreePointsIcon } from "@/assets/icons/";
import { Project } from "@/interfaces";
import { formaDate } from "@/utils/date.util";

interface ProyectCardProps {
  data: Project;
  onClick?: () => void;
}

export const ProyectCard = ({ data, onClick }: ProyectCardProps) => {
  
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full cursor-pointer hover:bg-gray-100 transition-all"
      onClick={onClick}
    >
      <div className="flex justify-between items-center gap-2">
        <IconBlueCircle bgColor="bg-customOrange" />

        <div className="flex flex-col w-full ml-2">
          <h3 className="text-lg font-semibold">{data?.description}</h3>
          <p className="text-gray-500">{formaDate(data?.fecha)}</p>
          <p className="text-gray-400 text-sm">Estado: {data?.estado}</p>
        </div>
        <ThreePointsIcon />
      </div>
    </div>
  );
};
