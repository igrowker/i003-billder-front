import { httpClient } from "@/api/axios.config";
import { Client } from "@/interfaces/client.interfaces";
import { ClientRequest } from "@/interfaces/request";
import { create } from "zustand";


interface ClientStore {
    getClients: () => Promise<void>;
    clients: Client[];
    createClient: (client: ClientRequest) => Promise<void>;
    getClientById: (id: number) => Promise<Client | null>;
    isLoading: boolean;
}

export const useClientStore = create<ClientStore>((set) => ({
    getClients: async () => {
        set({ isLoading: true })
        try {

            const { data } = await httpClient.get<Client[]>('/Cliente/obtener-clientes')
            set({ clients: data, isLoading: false })
        }

        catch (err) {
            console.log(err);
            set({ isLoading: false })

        }
    },
    getClientById: async (id: number) => {
        set({ isLoading: true })

        try {
            const { data } = await httpClient.get<Client>(`/Cliente/obtener-cliente/${id}`);
            return data
        }
        catch {
            // const error = err as AxiosError;
            return null

        }
        finally {
            set({ isLoading: false })

        }
    },
    createClient: async (client) => {
        try {
            await httpClient.post('/Cliente/crear-cliente', client)
        }
        catch (error) {
            console.log(error)
        }
    },
    clients: [],
    isLoading: false,
})
)