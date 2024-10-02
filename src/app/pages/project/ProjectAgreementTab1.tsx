import React, { useState } from "react";
import { ReusableButton } from "@/ui/components";
import ClientInfoCard from "@/ui/components/ClientInfoCard";
import { Project } from "@/app/types";
import UserInfoCard from "@/ui/components/UserInfoCard";
import { user } from "@/mock";

interface ProjectAgreementTab1Props {
  handleContinue: () => void;
  projectData: Project;
}

const ProjectAgreementTab1 = ({
  handleContinue,
  projectData,
}: ProjectAgreementTab1Props) => {
  const [detalles, setDetalles] = useState("");

  const handleDetallesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetalles(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 my-6">
      <h1 className="text-2xl font-semibold mb-6 text-customOrange">
        Paso 1: Confirmar datos
      </h1>

      <ClientInfoCard data={projectData} />
      <UserInfoCard data={user} />

      <div className="mt-2">
        <input
          type="text"
          id="detalles"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customOrange"
          placeholder="Detalles"
          value={detalles}
          onChange={handleDetallesChange}
        />
      </div>

      <div className="my-16">
        <ReusableButton onClick={handleContinue}>continuar</ReusableButton>
      </div>
    </div>
  );
};

export default ProjectAgreementTab1;
