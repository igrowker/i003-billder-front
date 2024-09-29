import { useState } from "react";
import { DocIcon, NewProjectIcon } from "@/assets/icons";
import { UserCircleIcon, SearchIcon } from "@/assets/icons/IconHome";
import ActionCard from "@/ui/components/buttons/ActionCard";
import IngresosPendientes from "@/ui/components/IngresosPendientes";
import BottomNavBar from "@/ui/components/navbar/BottomNavBar";
import ProyectCard from "@/ui/components/ProyectCard";
import Modal from "@/ui/components/modals/Modal";
import { BellIcon } from "@/assets/icons/BellIcon";
// import { useNavigate } from "react-router-dom"; // Para redireccionar en el futuro

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  // const navigate = useNavigate(); // Hook para redirigir
  const projects = [
    {
      title: "Casa San Isidro",
      owner: "María Martínez",
      status: "Presupuesto confirmado",
    },
    {
      title: "Terraza Avellaneda",
      owner: "Pablo Gomez",
      status: "Presupuesto confirmado",
    },
  ];

  const crearNuevoProject = () => {
    alert("Nuevo proyecto clickeado");
  };
  return (
    <div className="container mx-auto p-4 flex flex-col h-screen ">
      <header className="bg-white h-20 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-customOrange rounded-full w-10 h-10 flex justify-center items-center text-white text-xl">
            <UserCircleIcon />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">Hola</h2>
            <span className="text-xl font-semibold">Carlos!</span>
          </div>
        </div>
        <div>
          <button className="text-yellow-500">
            <BellIcon />
          </button>
        </div>
      </header>

      <IngresosPendientes />

      <div className="relative mb-4 shadow-lg">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Buscar"
          className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="flex justify-between ">
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
            }
          }}
        />
      </div>

      <div className="w-full py-2">
        <h1>Mis proyectos</h1>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProyectCard
              key={index}
              title={project.title}
              owner={project.owner}
              status={project.status}
              onClick={() => {
                alert(`Clic en proyecto: ${project.title}`);
                // En el futuro, podrías usar navigate para redirigir a la página de proyecto
                // navigate(`/project/${project.id}`);
              }}
            />
          ))
        ) : (
          // Si no hay proyectos, muestra un mensaje
          <ProyectCard message="Aún no creaste proyectos" />
        )}
      </div>

      <BottomNavBar />
      <Modal
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
      >
        <></>
      </Modal>
    </div>
  );
}

export default HomePage;
