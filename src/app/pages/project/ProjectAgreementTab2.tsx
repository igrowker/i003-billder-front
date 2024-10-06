import React, { useState } from "react";
import { ReusableButton } from "@/ui/components";
import { Checkbox } from "@/ui/components/inputs/Checkbox";
import { InputField } from "@/ui/components/inputs/InputField";

interface ProjectAgreementTab2Props {
  handleContinue: () => void;
}

export const ProjectAgreementTab2 = ({
  handleContinue,
}: ProjectAgreementTab2Props) => {
  const [detalles, setDetalles] = useState({
    entidad: "",
    alias: "",
    cbu: "",
  });
  const [metodoCobro, setMetodoCobro] = useState(""); // Inicializa como vacío para que no haya opción seleccionada

  // Actualizar los detalles de la cuenta bancaria
  const handleDetallesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDetalles(prevDetalles => ({
      ...prevDetalles,
      [id]: value,
    }));
  };

  // Seleccionar un método de cobro
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setMetodoCobro(id); // Actualiza el método de cobro con solo un seleccionado
  };

  // Verificar si transferencia o depósito está seleccionado
  const isTransferenciaODeposito =
    metodoCobro === "transferencia" || metodoCobro === "deposito";

  return (
    <div className="flex flex-col gap-4 my-6">
      <h1 className="text-xl font-semibold mb-6 text-customOrange">
        Paso 2: Elige el método de cobro
      </h1>
      <div className="flex gap-4">
        <Checkbox
          id="efectivo"
          label="Efectivo"
          checked={metodoCobro === "efectivo"}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="transferencia"
          label="Transferencia"
          checked={metodoCobro === "transferencia"}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          id="deposito"
          label="Depósito"
          checked={metodoCobro === "deposito"}
          onChange={handleCheckboxChange}
        />
      </div>
      <div
        className={`mt-2 ${isTransferenciaODeposito ? "opacity-100" : "opacity-50"}`}
      >
        <p className="text-gray-500 mt-1">
          Si seleccionaste transferencia o depósito, completa los datos de tu
          cuenta bancaria.
        </p>
        <InputField
          id="entidad"
          placeholder="Entidad bancaria"
          value={detalles.entidad}
          onChange={handleDetallesChange}
          disabled={!isTransferenciaODeposito}
        />
        <InputField
          id="alias"
          placeholder="Alias"
          value={detalles.alias}
          onChange={handleDetallesChange}
          disabled={!isTransferenciaODeposito}
        />
        <InputField
          id="cbu"
          placeholder="CBU"
          value={detalles.cbu}
          onChange={handleDetallesChange}
          disabled={!isTransferenciaODeposito}
        />
      </div>

      <div className="my-6">
        <ReusableButton onClick={handleContinue}>Continuar</ReusableButton>
      </div>
    </div>
  );
};
