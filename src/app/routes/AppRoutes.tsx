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
import { ClientInfoPage } from "../pages/client/ClientInfoPage";

export const AppRoutes = () => {
  const excludeNavbarRoutes: string[] = [""]; // Excluir rutas donde no quieres el BottomNavBar
  const location = useLocation();

  return (
    <div className="mb-16">
      {!excludeNavbarRoutes.includes(location.pathname) && <BottomNavBar />}
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/crear-acuerdo-obra/:projectId"
          element={<ProjectAgreementTabs />}
        />

        {/* Rutas de proyectos y clientes */}
        <Route path="/new-client" element={<NewProjectPage />} />
        <Route path="/client/:clientId/project/:projectId" element={<ProjectInfoPage />} />
        <Route path="/client/:clientId/" element={<ClientInfoPage />} />

        {/* Rutas de presupuestos */}
        <Route path="new-budget/:projectId" element={<CreateBudgetPage />} />

        {/* Ruta de perfil */}
        <Route path="profile" element={<ProfilePage />} />

        {/* Ruta de confirmación */}
        <Route path="/confirmation" element={<ConfirmationPage />} />

        {/* Redirección a Home */}
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
  );
};
