import { AuthStatus, useAuthStore } from "@/store/authStore"
import { Navigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";


interface PrivateRoutesProps {
    children: React.ReactNode;
}

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
    const { authStatus, user } = useAuthStore(useShallow(state => ({ user: state.user, authStatus: state.authStatus })));
    return (authStatus === AuthStatus.Authenticated && user.token !== null) 
            ? children
            : <Navigate to={"/auth/"}/>
}
