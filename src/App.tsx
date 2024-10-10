import { AppRouter } from "@/router/AppRouter";
import { useConfigureInterceptors } from "./hooks/useConfigureInterceptors";
import React, { useEffect } from "react";
import { AlertsProvider } from "./context/AlertsProvider";
import { useAuthStore } from "./store/authStore";

export const App = React.memo(() => {
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
});
