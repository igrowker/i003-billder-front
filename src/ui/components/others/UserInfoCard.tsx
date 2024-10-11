import { PencilIcon } from "@/assets/icons/";
import { User } from "@/interfaces";

interface UserInfoProps {
  data: Partial<User>;
  onClick?: () => void;
}

export const UserInfoCard = ({ data, onClick }: UserInfoProps) => {
  return (
    <div className=" bg-white p-4 shadow-md rounded-lg">
      <div className="flex justify-between">
        <h3 className="font-medium text-sm self-end">Mis datos</h3>
        <button onClick={onClick}>
          <PencilIcon />
        </button>
      </div>
      <h2 className="font-medium text-xl">{data.fullName}</h2>
      <div className="text-gray-700 text-sm flex flex-col gap-1">
        <p>
          <span className="uppercase">DNI: </span> <span>{data?.dni}</span>
        </p>
        <p>{data?.email}</p>
        <p>
          {data?.address},{data.city}
          {data?.country}
        </p>
      </div>
    </div>
  );
};
