import { httpClient } from "@/api/axios.config";
import { Project } from "@/interfaces";
import { ProjectRequest } from "@/interfaces/request";
import { create } from "zustand";


interface ProjectStore {
    projects: Project[];
    getProjects: (clientId: number) => Promise<void>;
    createProject: (project: ProjectRequest) => Promise<void>;
    isLoading: boolean;

}


export const useProjectStore = create<ProjectStore>((set) => ({
    getProjects: async (clientId: number) => {
        set({ isLoading: true })
        try {
            const { data } = await httpClient.get<Project[]>('/Trabajo/obtener-trabajos', { params: { customerId: clientId } });
            set({ projects: data, isLoading: false })
        }
        catch (error) {
            console.log(error)
            set({ isLoading: false })

        }
    },
    createProject: async (project) => {
        set({ isLoading: true })
        try {
            await httpClient.post('Trabajo/crear-trabajo', project)
        }
        catch (error) {
            console.error(error);
        }
        finally {
            set({ isLoading: false })
        }
    },
    isLoading: false,
    projects: []
})) 