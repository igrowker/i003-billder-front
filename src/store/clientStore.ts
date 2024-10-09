import { httpClient } from "@/api/axios.config";
import { Client } from "@/interfaces/client.interfaces";
import { create } from "zustand";


interface ClientStore {
    getClients: () => Promise<Client[] | []>;
    
}

export const useClientStore = create<ClientStore>(() => ({
    getClients: async () => {
        try {
            const { data } = await httpClient.get<Client[]>('/Cliente/obtener-clientes')
            console.log(data);
            return data
        }   
        
        catch  {
            return []
        }
    }
})
)