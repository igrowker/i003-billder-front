import { AppRouter } from "@/router/AppRouter";
import { useConfigureInterceptors } from "./hooks/useConfigureInterceptors";
import React, { useEffect, useState } from "react";
import { AlertsProvider } from "./context/AlertsProvider";
import { useAuthStore } from "./store/authStore";
import { SplashScreen } from "./ui/components";

export const App = React.memo(() => {
  useConfigureInterceptors();

  const checkToken = useAuthStore(state => state.checkToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setLoading(false);
    }
    else {
      const handleDOMContentLoaded = () => {
        setLoading(false);
      };

      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

      return () => {
        document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
      };
    }
  }, []);

  return (
    <div className="max-w-[800px]  mx-auto">
      {
        loading ? (
          <SplashScreen />
        ) : (
          <AlertsProvider>
            <AppRouter />
          </AlertsProvider>
        )}
    </div>
  );
});
