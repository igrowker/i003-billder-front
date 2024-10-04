import { ProjectCircle } from "@/app/components";
import { ThreePointsIcon } from "@/assets/icons/";

interface ProyectCardProps {
  title: string;
  owner?: string;
  status?: string;
  onClick?: () => void;
}

export const ProyectCard = ({
  title,
  owner,
  status,
  onClick,
}: ProyectCardProps) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full cursor-pointer hover:bg-gray-100 transition-all"
      onClick={onClick}
    >
      <div className="flex justify-between items-center gap-2">
        <ProjectCircle />

        <div className="flex flex-col w-full ml-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{owner}</p>
          <p className="text-gray-400 text-sm">Estado: {status}</p>
        </div>
        <ThreePointsIcon />
      </div>
    </div>
  );
};
