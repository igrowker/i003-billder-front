import { Project } from "@/app/types";
import { PencilIcon } from "@/assets/icons/PencilIcon";

interface ClientInfoProps {
  data: Partial<Project> | undefined ;
  onClick?: () => void;
}

export const ClientInfoCard = ({ data, onClick }: ClientInfoProps) => {
  return (
    <div className=" bg-white p-4 shadow-md rounded-lg">
      <div className="flex justify-between">
        <h3 className="font-medium text-sm self-end">Cliente</h3>
        <button onClick={onClick}>
          <PencilIcon />
        </button>
      </div>
      <h3 className="font-medium text-xl">{data?.owner}</h3>
      <div className="text-gray-700 text-sm flex flex-col gap-1">
        <p>
          <span className="uppercase">DNI: </span> <span>{data?.dni}</span>
        </p>
        <p>{data?.email}</p>
        <p>
          {data?.direccion},{data?.pais}
        </p>
      </div>
    </div>
  );
};
