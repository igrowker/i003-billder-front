import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { NewProjectPage, HomePage, ProjectInfoPage, CreateBudgetPage } from "@/app/pages/";
import { BottomNavBar } from "@/ui/components";
import ProjectAgreementTabs from "../pages/project/ProjectAgreementTabs";

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
        <Route path="/crear-acuerdo-obra" element={<ProjectAgreementTabs />} />

        {/* region Proyectos rutas */}
        <Route path="/new-project" element={<NewProjectPage />} />
        <Route path="project/:projectId" element={<ProjectInfoPage />} />
        {/* endregion  */}
        {/* region Presupuestos rutas */}
        <Route path="new-budget"  element={<CreateBudgetPage/>} />
        {/* endregion  */}

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};
