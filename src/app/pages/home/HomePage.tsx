import { NewProjectIcon, UserCircleIcon, BellIcon } from "@/assets/icons";
import {
  ActionCard,
  IngresosPendientes,
  ProyectCard,
  SearchInput,
} from "@/ui/components/";
import { useNavigate } from "react-router-dom";
import { projects, user } from "@/mock";
import { NotDataCreated } from "@/app/components";

export function HomePage() {
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

      <div className="flex justify-between flex-grow mb-8">
        <ActionCard
          fullWidth
          icon={<NewProjectIcon />}
          label="Nuevo Proyecto"
          onClick={crearNuevoProject}
        />
      </div>

      <div className="">
        <h2 className="font-medium text-2xl mb-2">Mis proyectos</h2>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProyectCard
              key={index}
              data={project}
              onClick={() => navigate(`/project/${project.id}`)}
            />
          ))
        ) : (
          // Si no hay proyectos, muestra un mensaje
          <NotDataCreated text="Aún no creaste proyectos" />
        )}
      </div>
    </div>
  );
}
