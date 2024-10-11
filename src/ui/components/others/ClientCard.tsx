import { Client } from "@/interfaces/client.interfaces";
import { MouseEvent } from "react";
import { IconBlueCircle } from "../../../app/components/IconBlueCircle";
import { PersonIcon, ThreePointsIcon } from "@/assets/icons";

interface ClientCardProps {
  onClick: (e: MouseEvent) => void;
  client: Client;
}

export const ClientCard = ({ client, onClick }: ClientCardProps) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full cursor-pointer hover:bg-gray-100 transition-all"
      onClick={onClick}
    >
      <div className="flex justify-between items-center gap-2">
        <IconBlueCircle icon={<PersonIcon />} />

        {/* {JSON.stringify(client)} */}

        <div className="flex flex-col w-full ml-2">
          <h3 className="text-lg font-semibold">{client.nombre}</h3>
          <p className="text-gray-500">{client.descripcion}</p>
        </div>
        <ThreePointsIcon />
      </div>
    </div>
  );
};
