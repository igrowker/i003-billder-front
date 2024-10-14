import {
  BudgetCalcTab,
  BudgetConfirmDataTab,
  BudgetViewDocumentTab,
} from "@/app/components";
import { Client, Project } from "@/interfaces";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useClientStore } from "@/store/clientStore";
import { useProjectStore } from "@/store/projectStore";
import { ReusableButton } from "@/ui/components";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface Item {
  nombre: string;
  quantity: number;
  precio: number;
}

enum CreateBudgetTabs {
  Initial = 1,
  Payment = 2,
  End = 3,
}

export const CreateBudgetPage = () => {
  const { projectId } = useParams();

  const [tab, setTab] = useState(CreateBudgetTabs.Initial);
  const [budgetItems, setBudgetItems] = useState<Item[]>([]);

  const [project, setProject] = useState<Project | null>();
  const [client, setClient] = useState<Client | null>();

  const getClientById = useClientStore(state => state.getClientById);
  const getProjectById = useProjectStore(state => state.getProjectById);
  
  const locationReact = useLocation();
  const navigateReact = useNavigate();
  
    const goLast = () => {
      const urls = locationReact.pathname.split('/').filter(state => state !== '');
      navigateReact('/' + urls.slice(0, urls.length - 1).join('/'))
      
    }

  useEffect(() => {
    const fetchProject = async () => {
      await getProjectById(Number(projectId), (project) => setProject(project));
    };

    fetchProject();
  }, [projectId, getProjectById]);

  useEffect(() => {
    if (project && project.clienteId) {
      const fetchClient = async () => {
        const res = await getClientById(project.clienteId);
        setClient(res);
      };

      fetchClient();
    }
  }, [project, getClientById]);

  const phases = [
    {
      phase: CreateBudgetTabs.Initial,
      title: "Confirmá los datos",
      component: <BudgetConfirmDataTab client={client} />,
    },
    {
      phase: CreateBudgetTabs.Payment,
      title: "Realizá el cálculo",
      component: (
        <BudgetCalcTab
          onItemsChange={(items: Item[]) => setBudgetItems(items)}
        />
      ),
    },
    {
      phase: CreateBudgetTabs.End,
      title: "¡Todo listo!",
      component: (
        <BudgetViewDocumentTab budgetItems={budgetItems} client={client} />
      ),
    },
  ];

  const handleGoBack = () => {
    if (tab === CreateBudgetTabs.Initial) {
      goLast();
      return;
    }

    setTab(tab - 1);
  };

  const handleConfirmContinue = () => {
    setTab(tab + 1);
  };

  return (
    <ReturnLayout
      returnFunction={handleGoBack}
      title="Crear presupuesto"
    >
      <div>
        <h4 className="font-medium text-customOrange text-xl mt-4 mb-2">
          Paso {tab}: {phases[tab - 1].title}
        </h4>
        {phases[tab - 1].component}
      </div>
      {tab !== CreateBudgetTabs.End && (
        <ReusableButton onClick={handleConfirmContinue} className="mt-8">
          Continuar
        </ReusableButton>
      )}
    </ReturnLayout>
  );
};
