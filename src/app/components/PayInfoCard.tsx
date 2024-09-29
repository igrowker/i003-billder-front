import { AddCircleIcon } from "../../assets/icons/"

export const PayInfoCard = () => {
  return (
    <div className="p-2 px-6 pb-4 rounded-md flex gap-2  bg-white shadow-md max-w-[90%] mx-auto min-w-80">
      <div className="flex-grow flex-shrink-0 ">
        <h4>
          <span className="text-gray-700 text-md font-medium">Pagado: </span>
          <span className="text-sm">
            ${150000.00.toLocaleString('ARS', { currency: 'ARS', })}
          </span>
        </h4>
        <h4>
          <span className="text-gray-700 text-md font-medium">Pendiente: </span>
          <span className="text-sm">
            ${250000.00.toLocaleString('ARS', { currency: 'ARS', })}

          </span>
        </h4>
      </div>
      <button className="self-end flex text-sm items-center gap-2 text-customOrange">
        <AddCircleIcon />Añadir pago
      </button>
    </div>
  )
}
