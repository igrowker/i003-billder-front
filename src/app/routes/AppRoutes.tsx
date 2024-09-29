import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import BottomNavBar from "@/ui/components/navbar/BottomNavBar";
import { NewProjectPage } from "@/app/pages/project/NewProjectPage";
import { ProjectInfoPage } from "@/app/pages/project/ProjectInfoPage";
import HomePage from "@/auth/pages/HomePage";

export const AppRoutes = () => {
  const excludeNavbarRoutes: string[] = [];
  const location = useLocation();

  return (
    <div className="mb-16">
      {!excludeNavbarRoutes.includes(location.pathname) && <BottomNavBar />}
      <Routes>
        {/* Coloca tus rutas para las paginas principales */}
        {/* <Route path="path de la ruta" element={<Pagina />} /> */}
        <Route path="/home" element={<HomePage />} />

        {/* region Proyectos rutas */}
        <Route path="new-project" element={<NewProjectPage />} />
        <Route path="project/:projectId" element={<ProjectInfoPage />} />
        {/* endregion  */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};
