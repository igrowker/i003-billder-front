import { BriefcaseIcon } from "@/assets/icons/IconHome";

interface ProyectCardProps {
  title?: string;
  owner?: string;
  status?: string;
  message?: string;
  onClick?: () => void;
}

const ProyectCard = ({
  title,
  owner,
  status,
  message,
  onClick,
}: ProyectCardProps) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full cursor-pointer hover:bg-gray-100 transition-all"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        {title && <BriefcaseIcon />}
        <div className="flex flex-col items-center w-full">
          {message ? (
            <div className="p-4 w-full">
              <p className="text-center text-gray-500 font-semibold mt-2">
                {message}
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-500">{owner}</p>
              <p className="text-gray-400">Estado: {status}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
