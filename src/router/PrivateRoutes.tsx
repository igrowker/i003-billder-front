import { AuthStatus, useAuthStore } from "@/store/authStore"
import { getItemFromLocalStorage, setItemToLocalStorage } from "@/utils/localstorage.util";
import { useEffect, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useShallow } from "zustand/shallow";


interface PrivateRoutesProps {
    children: React.ReactNode;
}

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
    const { authStatus, user } = useAuthStore(useShallow(state => ({ user: state.user, authStatus: state.authStatus })));
    const location = useLocation();
    const lastNavigationKey = "last_billder_navigation_path"

    const lastNavigation = useMemo(() => getItemFromLocalStorage(lastNavigationKey) ?? '/', [location.pathname]);

    useEffect(() => {
        setItemToLocalStorage(lastNavigationKey, location.pathname)
    }, [location.pathname]);

    return (authStatus === AuthStatus.Authenticated && user.token !== null)
        ? children
        : <Navigate to={user.token === null ? "/auth" : lastNavigation } /> 
}
