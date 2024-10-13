import React, { useState } from "react"; // Importa useState
import { PencilIcon } from "@/assets/icons/PencilIcon";
import { Client } from "@/interfaces";

interface ClientInfoProps {
  data: Partial<Client> | undefined;
  onClick?: () => void;
}

export const ClientInfoCard = ({ data, onClick }: ClientInfoProps) => {
 
  const [isEditable, setIsEditable] = useState(false);

 
  const handleEditClick = () => {
    setIsEditable(!isEditable); 
    if (onClick) {
      onClick(); 
    }
  };

  
  const handleSaveClick = () => {
    
    console.log("Datos guardados");
    setIsEditable(false); 
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="flex justify-between">
        <h3 className="font-medium text-sm self-end">Cliente</h3>
        <button onClick={handleEditClick}>
          <PencilIcon />
        </button>
      </div>
      <h3 className="font-medium text-xl">
        {isEditable ? (
          <input
            type="text"
            defaultValue={data?.nombre}
            className="border-b border-gray-300 focus:outline-none focus:border-blue-500" // Estilo con solo línea inferior
          />
        ) : (
          data?.nombre
        )}
      </h3>
      <div className="text-gray-700 text-sm flex flex-col gap-1">
        <p>
          <span className="uppercase">DNI: </span>
          {isEditable ? (
            <input
              type="text"
              defaultValue={data?.dni}
              className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          ) : (
            <span>{data?.dni}</span>
          )}
        </p>
        <p>
          {isEditable ? (
            <input
              type="email"
              defaultValue={data?.email}
              className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          ) : (
            data?.email
          )}
        </p>
        <p>
          {isEditable ? (
            <>
              <input
                type="text"
                defaultValue={data?.direccion}
                className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
              ,
              <input
                type="text"
                defaultValue={data?.pais}
                className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </>
          ) : (
            <>
              {data?.direccion}, {data?.pais}
            </>
          )}
        </p>
      </div>
      {isEditable && ( 
        <button
          onClick={handleSaveClick}
          className="mt-4 bg-customBlue text-white rounded px-4 py-2 hover:bg-blue-600" // Estilos para el botón
        >
          Guardar
        </button>
      )}
    </div>
  );
};
