import { ArrowUpIcon, ArrowDownIcon } from "@/assets/icons/"; // Ajusta la ruta según la estructura de tu proyecto

export const IngresosPendientes = () => {
  const ingresos = 500000;
  const pendiente = 700000;

  return (
    <div className="flex justify-around py-4">
      <div className="flex items-center space-x-2 bg-white shadow-md p-4 rounded-lg">
        <div className="bg-black p-2 rounded-md">
          <ArrowUpIcon className="text-white w-6 h-6" />
        </div>
        <div>
          <p className="text-gray-500">Ingresos</p>
          <p className="text-black font-bold">
            ${ingresos.toLocaleString("es-ES")},00
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 bg-white shadow-md p-4 rounded-lg">
        <div className="bg-black p-2 rounded-md">
          <ArrowDownIcon className="text-white w-6 h-6" />
        </div>
        <div>
          <p className="text-gray-500">Pendiente</p>
          <p className="text-black font-bold">
            ${pendiente.toLocaleString("es-ES")},00
          </p>
        </div>
      </div>
    </div>
  );
};
