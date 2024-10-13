import { IconBlueCircle, NotDataCreated } from "@/app/components";
import { PersonIcon, WhatsappIcon } from "@/assets/icons";
import { Client } from "@/interfaces/client.interfaces";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useClientStore } from "@/store/clientStore";
import { useProjectStore } from "@/store/projectStore";
import { FlotatingButton, ProyectCard } from "@/ui/components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useShallow } from "zustand/shallow";

export const ClientInfoPage = () => {
  const navigate = useNavigate();
  const { clientId } = useParams();
  const getClientByid = useClientStore(state => state.getClientById);
  const { getProjects, projects } = useProjectStore(
    useShallow(state => ({
      getProjects: state.getProjects,
      projects: state.projects,
    }))
  );

  const [client, setClient] = useState<Client | null>(null);

  const getClientAndProjects = async () => {
    const client = await getClientByid(Number(clientId));
    setClient(client);
    getProjects(Number(clientId));
  };

  useEffect(() => {
    getClientAndProjects();
  }, [clientId]);

  return (
    <ReturnLayout
      backgroundColor="bg-customOrange"
      returnFunction={() => navigate("/")}
      title="Cliente"
      canEdit={{
        isEditing: true,
        onClick: () => {},
      }}
      paddingContent={false}
    >
      <div className="bg-customOrange p-4 gap-4 flex shadow-sm">
        <IconBlueCircle icon={<PersonIcon />} />
        <div>
          <div className="flex gap-2 items-center ">
            <h4 className="font-medium text-lg">{client?.nombre}</h4>
            <Link
              className="cursor-pointer"
              to={`https://wa.me/${client?.telefono}`}
              target="_blank"
            >
              <WhatsappIcon />
            </Link>
          </div>
          <div className="text-gray-700 text-sm">
            <div className="mt-1 flex gap-4 ">
              <p>
                <span>DNI:</span> <span>{client?.dni}</span>
              </p>
            </div>
            <p>{client?.email}</p>
            <p>
              <span>
                {client?.direccion}, {client?.ciudad}, {client?.provincia}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h4 className="font-medium text-2xl mb-2">Proyectos</h4>
        <div className="grid-cols-1  grid">
          {projects.length === 0 ? (
            <NotDataCreated text="Aún no tienes proyectos" />
          ) : (
            projects.map((project, i) => (
              <ProyectCard
                key={i}
                data={project}
                onClick={() => navigate(`project/${project.id}`)}
              />
            ))
          )}
        </div>
      </div>

      <FlotatingButton position="bottomRight">
        <Link to="new-project" className="flex items-center">
          <span className="ml-2">Añadir Proyecto</span>
        </Link>
      </FlotatingButton>
    </ReturnLayout>
  );
};
