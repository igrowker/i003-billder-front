import {
  BudgetCalcTab,
  BudgetConfirmDataTab,
  BudgetViewDocumentTab,
} from "@/app/components";
import { Client, Project } from "@/interfaces";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useClientStore } from "@/store/clientStore";
import { useProjectStore } from "@/store/projectStore";
import { Modal, ReusableButton } from "@/ui/components";
import { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState(CreateBudgetTabs.Initial);
  const [budgetItems, setBudgetItems] = useState<Item[]>([]);

  const [project, setProject] = useState<Project | null>();
  const [client, setClient] = useState<Client | null>();

  const getClientById = useClientStore(state => state.getClientById);
  const getProjectById = useProjectStore(state => state.getProjectById);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await getProjectById(Number(projectId));
      setProject(res);
    };

    fetchProject();
  }, [projectId, getProjectById]);

  // Obtener el cliente una vez que el proyecto esté disponible
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
      component: <BudgetViewDocumentTab budgetItems={budgetItems} client={client} />,
    },
  ];

  const [isPending, startTransition] = useTransition();

  const handleChangeTab = () => {
    if (tab === CreateBudgetTabs.End) return;

    if (tab === CreateBudgetTabs.Payment) {
      // Muestra el modal al intentar continuar desde la fase 2
      setShowModal(true);
    } else {
      startTransition(() => {
        setTab(tab + 1);
      });
    }
    if (isPending) return;
  };

  const handleGoBack = () => {
    if (tab === CreateBudgetTabs.Initial) {
      navigate(-1);
      return;
    }
    startTransition(() => {
      setTab(tab - 1);
    });
  };

  const handleConfirmContinue = () => {
    setShowModal(false);
    startTransition(() => {
      setTab(tab + 1);
    });
  };

  return (
    <ReturnLayout
      returnFunction={() => handleGoBack()}
      title="Crear presupuesto"
    >
      <div>
        <h4 className="font-medium text-customOrange text-xl mt-4 mb-2">
          Paso {tab}: {phases[tab - 1].title}
        </h4>
        {phases[tab - 1].component}
      </div>
      {tab !== CreateBudgetTabs.End && (
        <ReusableButton onClick={handleChangeTab} className="mt-8">
          Continuar
        </ReusableButton>
      )}
      {showModal && (
        <Modal
          isOpen={showModal}
          title="¿Guardar borrador?"
          onClose={() => setShowModal(false)}
          footer={
            <div className="flex gap-10">
              <button
                className="text-customOrange"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="text-customOrange"
                onClick={handleConfirmContinue}
              >
                Guardar
              </button>
            </div>
          }
          showCloseButton={false}
        >
          <p>Decide si guardar este cálculo como un borrador o eliminarlo</p>
        </Modal>
      )}
    </ReturnLayout>
  );
};
