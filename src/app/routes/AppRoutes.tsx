import { Route, Routes, useLocation } from "react-router-dom";
import {
  HomePage,
  ProjectInfoPage,
  CreateBudgetPage,
  ProjectAgreementTabs,
  ProfilePage,
  ClientInfoPage,
  ConfirmationPage,
  NewClientPage,
  NewProjectPage

} from "@/app/pages/";
import { BottomNavBar } from "@/ui/components";
import { NotFoundPage } from "../pages/NotFoundPage";

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
        <Route path="/new-client" element={<NewClientPage />} />
        <Route path="/client/:clientId/new-project" element={<NewProjectPage />} />
        <Route path="/client/:clientId/project/:projectId" element={<ProjectInfoPage />} />
        <Route path="/client/:clientId/" element={<ClientInfoPage />} />

        {/* Rutas de presupuestos */}
        <Route path="new-budget/:projectId" element={<CreateBudgetPage />} />

        {/* Ruta de perfil */}
        <Route path="profile" element={<ProfilePage />} />

        {/* Ruta de confirmación */}
        <Route path="/confirmation" element={<ConfirmationPage />} />

        {/* Redirección a Home */}
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
};
