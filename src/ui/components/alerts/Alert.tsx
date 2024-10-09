import { ReactNode, useRef } from "react";
import { IAlertType } from "../../../interfaces"
import { Tooltip } from "../tooltip/Tooltip";


export interface AlertProps {
    type: IAlertType;
    message: ReactNode | string;
    deleteFunction?: () => void;
}



const setPriorityClasses = (priority: IAlertType) => {
    switch (priority) {
        case 'error':
            return 'bg-red-500 text-white bi bi-x-circle before:text-xl '
        case 'info':
            return 'bg-sky-500 before:text-xl bi bi-info-circle'
        case 'warning':
            return 'bg-yellow-500 text-white bi bi-exclamation-triangle before:text-xl'
        case 'success':
            return 'bg-green-500 bi bi-check2-circle before:text-xl'
    }



}


export const Alert = ({ message, type, deleteFunction  }: AlertProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const autoDestroy = () => {
    ( deleteFunction != undefined  ) && deleteFunction(); 
    ref.current?.remove()
  }
  return (
    <div ref={ref} className={`fadeInUp px-3 py-2  rounded-md shadow-md flex gap-3 items-center ${setPriorityClasses(type)} `} >
        <span className="">{message}</span>
        <div className="ml-auto">
          <Tooltip title="Eliminar alerta" position={{horizontal: "left", vertical: 'middle'}}>
            <button onClick={autoDestroy} className=" text-2xl"><i className="bi bi-x"></i></button>
          </Tooltip>
        </div>

    </div>
  )
}