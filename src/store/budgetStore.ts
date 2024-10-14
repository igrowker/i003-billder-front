import { httpClient } from "@/api/axios.config";
import { Budget } from "@/interfaces/budget.interfaces";
import { ProjectRequest } from "@/interfaces/request";
import { create } from "zustand";

interface ProjectStore {
    budgets: Budget[];
    getBudgets: (projectId: number) => Promise<void>;
    createBudget: (budget: ProjectRequest) => Promise<void>;
    isLoading: boolean;
    // getProjectById: (id: number, setState: (project: Project) => void) => Promise<Project | null>
}

export const useBudgetStore = create<ProjectStore>(set => ({
    budgets: [],
    getBudgets: async (projectId: number) => {
        set({ isLoading: true });
        try {
            const { data } = await httpClient.get<Budget[]>(`/Presupuesto/obtener-presupuestos/`, { params: { budgetId: projectId } });
            set({ budgets: data });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            set({ isLoading: false });
        }
    },
    createBudget: async (budget) => {
        set({ isLoading: true });
        try {
            await httpClient.post("Trabajo/crear-trabajo", budget);
        } catch (error) {
            console.error(error);
        } finally {
            set({ isLoading: false });
        }
    },
    isLoading: false,
}));
