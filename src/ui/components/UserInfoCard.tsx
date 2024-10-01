import { User } from "@/app/types";
import { PencilIcon } from "@/assets/icons/PencilIcon";

interface UserInfoProps {
  data: User;
  onClick?: () => void;
}

const UserInfoCard = ({ data, onClick }: UserInfoProps) => {
  return (
    <div
      className="bg-white shadow-lg rounded-2xl p-6 mb-6 w-full cursor-pointer hover:bg-gray-100 transition-all"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">Mis datos:</h3>
        <PencilIcon />
      </div>

      <div className="flex flex-col">
        <>
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-gray-500 mt-1">{data.dni}</p>
          <p className="text-gray-400 mt-1">Estado: {data.ciudad}</p>
        </>
      </div>
    </div>
  );
};

export default UserInfoCard;
