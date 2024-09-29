import { CheckCircleIcon, DeleteCircleIcon, ClockIcon } from "../../assets/icons";

export interface DocumentItemProps {
  title: string;
  status: 1 | 2 | 3,
}

enum DocumentStatus {
  InProgress = 1,
  Declined = 2,
  Accepted = 3
}


export const DocumentItem = ({ status, title }: DocumentItemProps) => {




    const finalDescription = (status == DocumentStatus.Accepted) ? 'Aprobado'
                            : (status == DocumentStatus.InProgress) ? 'En espera de aprobación'
                            : (status == DocumentStatus.Declined) && 'Rechazado'





    return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center text-customOrange">
        <h4 className=" text-lg font-medium">{title}</h4>
        {
          (status == DocumentStatus.InProgress) && <ClockIcon />
        }
        {
          (status == DocumentStatus.Accepted) && <CheckCircleIcon />
        }
        {
          (status == DocumentStatus.Declined) && <DeleteCircleIcon  />
        }
      </div>
      <h4 className="text-gray-600">{finalDescription}</h4>
    </div>
    )
}
