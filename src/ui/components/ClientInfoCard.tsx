import { Project } from "@/app/types";
import { PencilIcon } from "@/assets/icons/PencilIcon";

interface ClientInfoProps {
  data: Project;
  onClick?: () => void;
}

const ClientInfoCard = ({ data, onClick }: ClientInfoProps) => {
  return (
    <div
      className="bg-white shadow-lg rounded-2xl p-6 mb-6 w-full cursor-pointer hover:bg-gray-100 transition-all"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">Cliente</h3>
        <PencilIcon />
      </div>

      <div className="flex flex-col">
        {!data.message ? (
          <>
            <p className="text-lg font-semibold">{data.title}</p>
            <p className="text-gray-500 mt-1">{data.owner}</p>
            <p className="text-gray-400 mt-1">Estado: {data.status}</p>
          </>
        ) : (
          <div className="p-4 w-full">
            <p className="text-center text-gray-500 font-semibold mt-2">
              {data.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientInfoCard;
