import { ThreePointsIcon } from "../../assets/icons/ThreePointsIcon"
import { ProjectCircle } from "./ProjectCircle"

// interface ProjectItemProps {

// }
//agregar props cuando la api sea consumida y las interfaces para proyectos sean creadas
export const ProjectItem = () => {
  return (
    <div className="flex cursor-pointer w-max px-4 py-4 gap-2 shadow-md  min-w-[325px] h-max bg-white rounded-2xl">
      <ProjectCircle />
      <div className="flex flex-col  flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium text-xl">Casa San Isidro</h3>
          <ThreePointsIcon color="text-gray-500" />
        </div>
        <h3 className=" text-md text-gray-800">María Martinez</h3>
        <h3 className=" text-sm text-gray-600 mt-2">Estado: <span>Presupuesto confirmado</span></h3>

      </div>
    </div>
  )
}
