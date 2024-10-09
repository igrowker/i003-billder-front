import { IconBlueCircle } from "@/app/components";
import { Project } from "@/app/types";
import { ThreePointsIcon } from "@/assets/icons/";

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
        <IconBlueCircle />

        <div className="flex flex-col w-full ml-2">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-gray-500">{data.owner}</p>
          <p className="text-gray-400 text-sm">Estado: {data.status}</p>
        </div>
        <ThreePointsIcon />
      </div>
    </div>
  );
};
