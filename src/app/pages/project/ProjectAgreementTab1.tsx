import React, { useState } from "react";
import { ReusableButton, ClientInfoCard, UserInfoCard } from "@/ui/components";
import { Project } from "@/interfaces";
import { useAuthStore } from "@/store/authStore";

interface ProjectAgreementTab1Props {
  handleContinue: () => void;
  projectData: Project | undefined;
}

export const ProjectAgreementTab1 = ({
  handleContinue,
  projectData,
}: ProjectAgreementTab1Props) => {
  const [detalles, setDetalles] = useState("");
  const {data: user} = useAuthStore(state => state.user);
  const handleDetallesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetalles(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 my-6">
      <h1 className="text-xl font-semibold mb-6 text-customOrange">
        Paso 1: Confirmar datos
      </h1>

      <ClientInfoCard data={projectData} />
      <UserInfoCard data={user} />

      <div className="mt-2">
        <label htmlFor="" className="text-lg font-semibold">
          Descripción de la obra
        </label>
        <input
          type="text"
          id="detalles"
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customOrange"
          placeholder="Construcción casa (cocina, comedor, baño et.)"
          value={detalles}
          onChange={handleDetallesChange}
        />
      </div>

      <div className="my-6">
        <ReusableButton onClick={handleContinue}>continuar</ReusableButton>
      </div>
    </div>
  );
};
