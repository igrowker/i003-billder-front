import { httpClient } from "@/api/axios.config";
import { User } from "@/interfaces";
import { UserLoginCredentials, UserRegisterCredentials } from "@/interfaces/request";
import { getItemFromLocalStorage, removeItemFromLocalStorage, setItemToLocalStorage } from "@/utils/localstorage.util";
import { AxiosError } from "axios";
import { create } from "zustand";


export enum AuthStatus {
    NotAuthenticated = 'NOT-AUTHENTICATED',
    Authenticated = 'AUTHENTICATED',
    Checking = 'CHECKING',
}


interface AuthStore {
    user: { data: User | null, token: string | null };
    authStatus: AuthStatus,
    registerUser: (credentials: UserRegisterCredentials, navigate: (path: string) => void) => Promise<ResponseBase>;
    loginUser: (credentials: UserLoginCredentials) => Promise<ResponseBase>;
    logoutUser: () => void;
    checkToken: () => Promise<void>;
    editProfile: (credentials: Partial<User>) => Promise<ResponseBase>
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
        editProfile: async (credentials) => {
            try {
                const { data } = await httpClient.put<User>('/Auth/modificar-informacion-usuario', credentials)
                set((prev) => ({
                    user: {
                        data: data,
                        token: prev.user.token
                    }
                }))
                return {
                    hasErrors: false,
                    message: '¡Perfil editado correctamente!'
                }

            }
            catch (error) {
                const err = error as AxiosError
                return {
                    hasErrors: true,
                    message: err.response?.data as string ?? err.message as string
                }
            }
        },

        registerUser: async (credentials, navigate) => {
            try {
                await httpClient.post("/Auth/register", credentials);


                navigate('/auth/login')

                return {
                    hasErrors: false,
                    message: 'Usuario registrado exitosamente'
                };
            }
            catch (err) {
                const error = err as AxiosError
                set({ authStatus: AuthStatus.NotAuthenticated })

                return {
                    hasErrors: true,
                    message: error.response?.data as string ?? error.message
                }
            }
        },
        checkToken: async () => {
            set({ authStatus: AuthStatus.Checking })
            const token = getItemFromLocalStorage(import.meta.env.VITE_AUTH_KEY) as string | null;
            const logoutUser = get().logoutUser;
            try {
                if (token === null || token === '' || token.length < 10) throw new Error('Token no encontrado');
                const { data } = await httpClient.get<User>('Auth/obtener-informacion-usuario');
                set({
                    user: {
                        data: data,
                        token: token
                    },
                    authStatus: AuthStatus.Authenticated
                })
            }
            catch {


                logoutUser();
            }


        },
        logoutUser: () => {
            removeItemFromLocalStorage(import.meta.env.VITE_AUTH_KEY)
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

