import { DataCalendarIcon } from "@/assets/icons/DataCalendarIcon";
import { ReusableButton } from "@/ui/components";
import { useState } from "react";

interface ProjectAgreementTab3Props {
  handleContinue: () => void;
}

export const ProjectAgreementTab3 = ({
  handleContinue,
}: ProjectAgreementTab3Props) => {
  const [inputType, setInputType] = useState("text"); // Estado para controlar el tipo de input

  return (
    <div className="flex flex-col gap-4 my-6">
      <h1 className="text-xl font-semibold mb-6 text-customOrange">
        Paso 3: Ingresa plazo de entrega
      </h1>

      <div>
        <p className="text-gray-500 mt-1">
          Si seleccionaste transferencia o depósito, completa los datos de tu
          cuenta bancaria.
        </p>
        <input
          type="text"
          id="plazo"
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customOrange mt-2"
          placeholder="Plazo de entrega"
        />
        <div className="relative">
          <input
            type={inputType} // Usamos el estado para cambiar el tipo del input
            id="fecha"
            className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customOrange mt-2"
            placeholder="Fecha de entrega"
            onFocus={() => setInputType("date")}
            onBlur={() => setInputType("text")}
          />
          {inputType === "text" && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <DataCalendarIcon />
            </span>
          )}
        </div>
      </div>

      <div className="my-6">
        <ReusableButton onClick={handleContinue}>Continuar</ReusableButton>
      </div>
    </div>
  );
};
