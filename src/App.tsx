import { AppRouter } from "@/router/AppRouter";
import { useConfigureInterceptors } from "./hooks/useConfigureInterceptors";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { AlertsProvider } from "./context/AlertsProvider";

export const App = () => {
  useConfigureInterceptors();
  const checkToken = useAuthStore(state => state.checkToken)
  useEffect(() => {
    checkToken()
  }, []);
  return (
    <div className="max-w-[800px]  mx-auto">
      <AlertsProvider>
        <AppRouter />
      </AlertsProvider>
    </div>
  );
};
