import { Project } from "@/app/types";
import { PencilIcon } from "@/assets/icons/PencilIcon";

interface ClientInfoProps {
  data: Partial<Project>;
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
      <h3 className="font-medium text-xl">{data.owner}</h3>
      <div className="text-gray-700 text-sm flex flex-col gap-1">
        <p ><span className="uppercase">DNI: </span> <span>{data?.dni}</span></p>
        <p>{data?.email}</p>
        <p>
          {data?.direccion},
          {data?.pais}
        </p>
      </div>
    </div>
  );
};


    // <div
    //   className="bg-white shadow-lg rounded-2xl p-6 mb-6 w-full cursor-pointer hover:bg-gray-100 transition-all"
    //   onClick={onClick}
    // >
    //   <div className="flex justify-between items-start mb-4">
    //     <h3 className="text-xl font-semibold">Cliente</h3>
    //     <PencilIcon />
    //   </div>

    //   <div className="flex flex-col">
    //         <p className="text-lg font-semibold">{data.title}</p>
    //         <p className="text-gray-500 mt-1">{data.owner}</p>
    //         <p className="text-gray-400 mt-1">Estado: {data.status}</p>
    //   </div>
    // </div>