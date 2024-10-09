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
    registerUser: (credentials: UserRegisterCredentials) => Promise<void>;
    loginUser: (credentials: UserLoginCredentials) => Promise<void>;
    logoutUser: () => void;
    checkToken: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>(

    (set) => ({
        loginUser: async (credentials) => {
            set({ authStatus: AuthStatus.Checking })
            try {
                const { data } = await httpClient.post<{ token: string }>("/Auth/login", credentials);
                setItemToLocalStorage(import.meta.env.VITE_AUTH_KEY, data.token);
                set({ user: { token: data.token, data: null } })
                set({ authStatus: AuthStatus.Authenticated })
            }
            catch {
                set({ authStatus: AuthStatus.NotAuthenticated })
            }
        },

        registerUser: async (credentials) => {
            try {
                await httpClient.post("/Auth/register", credentials);



            }
            catch {
                set({ authStatus: AuthStatus.NotAuthenticated })

            }
        },
        checkToken: async () => {
            const token = getItemFromLocalStorage(import.meta.env.VITE_AUTH_KEY) as string | null;
            if (token === null || token === '') {
                set({
                    authStatus: AuthStatus.NotAuthenticated,
                    user: {
                        data: null,
                        token: null
                    }
                })
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
                user: { data: null, token: "" }
            })
        },
        authStatus: AuthStatus.Checking,
        user: {
            data: null,
            token: null
        },

    })
);

