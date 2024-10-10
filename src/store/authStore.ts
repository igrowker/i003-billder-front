import { httpClient } from "@/api/axios.config";
import { User } from "@/interfaces";
import { UserLoginCredentials, UserRegisterCredentials } from "@/interfaces/request";
import { getItemFromLocalStorage, setItemToLocalStorage } from "@/utils/localstorage.util";
import { create } from "zustand";


export enum AuthStatus {
    NotAuthenticated = 'NOT-AUTHENTICATED',
    Authenticated = 'AUTHENTICATED',
    Checking = 'CHECKING',
}


interface AuthStore {
    user: { data: User | null, token: string | null };
    authStatus: AuthStatus,
    registerUser: (credentials: UserRegisterCredentials) => Promise<ResponseBase>;
    loginUser: (credentials: UserLoginCredentials) => Promise<ResponseBase>;
    logoutUser: () => void;
    checkToken: () => Promise<void>;
}

interface ResponseBase { hasErrors: boolean; message: string }
export const useAuthStore = create<AuthStore>(

    (set, get) => ({
        loginUser: async (credentials) => {
            set({ authStatus: AuthStatus.Checking })
            try {
                const { data } = await httpClient.post<{ token: string }>("/Auth/login", credentials);
                setItemToLocalStorage(import.meta.env.VITE_AUTH_KEY, data.token);
                await get().checkToken();
                return {
                    hasErrors: false,
                    message: 'Sesión iniciada exitosamente'
                }
            }
            catch {
                set({ authStatus: AuthStatus.NotAuthenticated })
                return {
                    hasErrors: true,
                    message: 'Error al iniciar sesión'
                }
            }
        },

        registerUser: async (credentials) => {
            set({ authStatus: AuthStatus.Checking })
            try {

                await httpClient.post("/Auth/register", credentials);
                set({ authStatus: AuthStatus.NotAuthenticated })
                
                return {
                    hasErrors: false,
                    message: 'Usuario registrado exitosamente'
                };
            }
            catch {
                set({ authStatus: AuthStatus.NotAuthenticated })
                return {
                    hasErrors: true,
                    message: 'Error al registrar usuario'
                }
            }
        },
        checkToken: async () => {
            const token = getItemFromLocalStorage(import.meta.env.VITE_AUTH_KEY) as string | null;
            const { logoutUser } = get();
            if (token === null || token === '' || token.length < 10) {
                logoutUser();
                return;
            };
            const { data } = await httpClient.get<User>('Auth/obtener-informacion-usuario');

            set({
                user: {
                    data: data,
                    token: token
                },
                authStatus: AuthStatus.Authenticated
            })

        },
        logoutUser: () => {
            set({
                authStatus: AuthStatus.NotAuthenticated,
                user: { data: null, token: null }
            });
        },
        authStatus: AuthStatus.Checking,
        user: {
            data: null,
            token: null
        },

    })
);

