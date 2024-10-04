import { useState } from "react";
import {
  DocIcon,
  NewProjectIcon,
  UserCircleIcon,
  BellIcon,
} from "@/assets/icons";
import {
  ActionCard,
  IngresosPendientes,
  Modal,
  ProyectCard,
  ReusableButton,
  SearchInput,
} from "@/ui/components/";
import { useNavigate } from "react-router-dom";
import { projects, user } from "@/mock";
import { Project } from "@/app/types";
import { NotDataCreated } from "@/app/components";

export function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [createDocument, setCreateDocument] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>();
  const navigate = useNavigate();

  const crearNuevoProject = () => {
    navigate("/new-project");
  };

  return (
    <div className="  p-4 flex flex-col  ">
      <header className="bg-white h-20 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-customOrange rounded-full w-10 h-10 flex justify-center items-center text-white text-xl">
            <UserCircleIcon />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">Hola</h2>
            <span className="text-xl font-semibold">{user?.name}!</span>
          </div>
        </div>
        <div>
          <button className="text-yellow-500">
            <BellIcon />
          </button>
        </div>
      </header>

      <IngresosPendientes />

      <SearchInput />

      <div className="flex justify-between mb-8">
        <ActionCard
          icon={<NewProjectIcon />}
          label="Nuevo Proyecto"
          onClick={crearNuevoProject}
        />
        <ActionCard
          icon={<DocIcon />}
          label="Crear Documento"
          onClick={() => {
            if (projects.length === 0) {
              setShowModal(true);
            } else {
              setCreateDocument(!createDocument);
            }
          }}
        />
      </div>
      {createDocument && (
        <div className="text-customOrange py-4">
          Selecciona el proyecto para el cual vas a crear el documento
        </div>
      )}
      <div className="">
        <h2 className="font-medium text-2xl mb-2">Mis proyectos</h2>
        {
          (projects.length > 0)
            ? (
              projects.map((project, index) => (
                <ProyectCard
                  key={index}
                  title={project.title}
                  owner={project.owner}
                  status={project.status}
                  onClick={() => {
                    if (createDocument) {
                      setShowDocumentModal(true);
                      setSelectedProject(project);
                    } else {
                      navigate(`/project/${project.id}`);
                    }
                  }}
                />
              ))
            ) : (
              // Si no hay proyectos, muestra un mensaje
              <NotDataCreated text="Aún no creaste proyectos" />
            )}
      </div>

      <Modal isOpen={showDocumentModal} title={selectedProject?.title}>
        <div className="space-y-4">
          <p>Elige el tipo de documento</p>
          <ReusableButton
            onClick={() => {
              setShowDocumentModal(false);
            }}
          >
            Presupuesto
          </ReusableButton>
          <ReusableButton
            onClick={() => {
              setShowDocumentModal(false);
              navigate("/crear-acuerdo-obra", { state: selectedProject });
            }}
          >
            Acuerdo de obra
          </ReusableButton>
        </div>
      </Modal>

      <Modal
        children={<></>}
        isOpen={showModal}
        title="Es necesario crear un proyecto primero"
        footer={
          <div className="flex gap-10">
            <button
              className="text-customOrange"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              className="text-customOrange"
              onClick={() => {
                setShowModal(false);
                crearNuevoProject();
              }}
            >
              Crear nuevo proyecto
            </button>
          </div>
        }
      />
    </div>
  );
}
