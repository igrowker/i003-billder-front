import { AuthStatus, useAuthStore } from "@/store/authStore"
import { setItemToSessionStorage } from "@/utils/sessionstorage.util";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useShallow } from "zustand/shallow";


interface PrivateRoutesProps {
    children: React.ReactNode;
}

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
    const { authStatus, user } = useAuthStore(useShallow(state => ({ user: state.user, authStatus: state.authStatus })));
    const locationReact = useLocation();
    const navigationLSKey = "LAST_BILLDER_NAVIGATION";

    useEffect(() => {
        const automatlySaveURL = () => {
            if (authStatus !== AuthStatus.Checking ) { 

                setItemToSessionStorage(navigationLSKey, locationReact.pathname);
            }
        };
        automatlySaveURL()
    }, [locationReact]);

    return (authStatus === AuthStatus.Authenticated && user.token !== null)
        ? children
        : <Navigate to={"/auth" } /> 
}
