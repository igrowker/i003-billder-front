import { httpClient } from "@/api/axios.config";
import { Client } from "@/interfaces/client.interfaces";
import { ClientRequest } from "@/interfaces/request";
import { create } from "zustand";


interface ClientStore {
    getClients: () => Promise<void>;
    clients: Client[];
    createClient: (client: ClientRequest) => Promise<void>;
    getClientById: (id: number) => Promise<Client | null >
}

export const useClientStore = create<ClientStore>((set) => ({
    getClients: async () => {
        try {
            const { data } = await httpClient.get<Client[]>('/Cliente/obtener-clientes')
            set({ clients: data })
        }

        catch (err){
            console.log(err);
            
        }
    },
    getClientById: async (id: number) => {
        try {
            const { data } = await httpClient.get<Client>(`/Cliente/obtener-cliente/${id}`);
            return data
        }
        catch {
            // const error = err as AxiosError;
            return null
            
        }
    },
    createClient: async(client) => {
        try {
            await httpClient.post('/Cliente/crear-cliente', client)
        } 
        catch (error) {
            console.log(error)    
        }
    },
    clients: []
})
)