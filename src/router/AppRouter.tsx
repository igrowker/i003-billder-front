import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "@/auth/routes/AuthRoutes";
import { AppRoutes } from "@/app/routes/AppRoutes";
import { PrivateRoutes, PublicRoutes } from "./";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoutes>
            <AppRoutes />
          </PrivateRoutes>
        }
      />
      <Route
        path="/auth/*"
        element={
          <PublicRoutes>
            <AuthRoutes />
          </PublicRoutes>
        }
      />
    </Routes>
  );
};
