import { ReactNode } from "react";
import { EnumAlertTypes, IAlertType } from '@/interfaces/';
import { CheckIcon, ExclamationTriangleIcon, InformationCircleIcon } from "@/assets/icons";
import { WarningIcon } from "@/assets/icons/WarningIcon";


export interface FlotatingAlertProps {
    type: IAlertType;
    message: ReactNode | string;
}



const setPriorityClasses = (priority: IAlertType) => {
    switch (priority) {
        case 'error':
            return 'bg-red-500 text-white '
        case 'info':
            return 'bg-sky-500 '
        case 'warning':
            return 'bg-yellow-500 text-white '
        case 'success':
            return 'bg-green-500 '
    }



}


export const FlotatingAlert = ({ message, type }: FlotatingAlertProps) => {

    const finallyIcon = (type == EnumAlertTypes.Success) ? <CheckIcon />
                        : ( type == EnumAlertTypes.Error ) ? <ExclamationTriangleIcon/>
                        : ( type == EnumAlertTypes.Info) ? <InformationCircleIcon/>
                        : <WarningIcon/>
    return (
        <div className={`fadeInUp px-3 py-2  rounded-md shadow-md flex gap-3 items-center ${setPriorityClasses(type)} `} >
            <div className="w-5 h-5">
                { finallyIcon }

            </div>
            <p className="whitespace-pre-line">{message}</p>
        </div>
    )
}
