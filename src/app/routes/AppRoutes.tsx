import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  NewProjectPage,
  HomePage,
  ProjectInfoPage,
  CreateBudgetPage,
  ProjectAgreementTabs,
  ProfilePage,
} from "@/app/pages/";
import { BottomNavBar } from "@/ui/components";
import ConfirmationPage from "../pages/confirmation/ConfirmationPage";

export const AppRoutes = () => {
  const excludeNavbarRoutes: string[] = [""]; // Excluir rutas donde no quieres el BottomNavBar
  const location = useLocation();

  return (
    <div className="mb-16">
      {!excludeNavbarRoutes.includes(location.pathname) && <BottomNavBar />}
      <Routes>
        {/* Rutas principales */}
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/crear-acuerdo-obra/:projectId"
          element={<ProjectAgreementTabs />}
        />

        {/* Rutas de proyectos */}
        <Route path="/new-project" element={<NewProjectPage />} />
        <Route path="project/:projectId" element={<ProjectInfoPage />} />

        {/* Rutas de presupuestos */}
        <Route path="new-budget/:projectId" element={<CreateBudgetPage />} />

        {/* Ruta de perfil */}
        <Route path="profile" element={<ProfilePage />} />

        {/* Ruta de confirmación */}
        <Route path="/confirmation" element={<ConfirmationPage />} />

        {/* Redirección a Home */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};
