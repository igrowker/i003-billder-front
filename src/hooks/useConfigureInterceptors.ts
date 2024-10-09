import { httpClient } from "@/api/axios.config";
import { useAuthStore } from "@/store/authStore";
import { getItemFromLocalStorage } from "@/utils/localstorage.util";
import { InternalAxiosRequestConfig } from "axios";
import { useEffect } from "react";

export const useConfigureInterceptors = () => {
  
    const { authStatus, logoutUser, user } = useAuthStore((state) => state);
    
    const requestInterceptor = (config: InternalAxiosRequestConfig) => {
        if ( config.url == '/auth/login' || config.url == '/auth/register' ) return config;
        const token = getItemFromLocalStorage(import.meta.env.VITE_AUTH_KEY) as string | null;
        if ( token === null ) {
            logoutUser();
            return config;
        };

        config.headers.Authorization = `${token}`;
        return config;
    }

    useEffect(() => {
        httpClient.interceptors.request.use(requestInterceptor)
    }, [authStatus, user]);

}

