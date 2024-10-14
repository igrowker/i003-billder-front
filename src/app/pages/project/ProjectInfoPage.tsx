import { NotDataCreated, PayInfoCard, IconBlueCircle } from "@/app/components";
import { DocumentItem } from "@/app/components/DocumentItem";
import { AddIcon } from "@/assets/icons/AddIcon";
import { Project } from "@/interfaces";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useBudgetStore } from "@/store/budgetStore";
import { useProjectStore } from "@/store/projectStore";
import { ClientInfoSkeletonCard, FlotatingButton, Modal, ReusableButton } from "@/ui/components/";
import { formaDate } from "@/utils/date.util";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useShallow } from "zustand/shallow";

export const ProjectInfoPage = () => {

  const navigate = useNavigate();
  const { projectId } = useParams();
  const getProjectById = useProjectStore(state => state.getProjectById);
  const { budgets, getBudgets } = useBudgetStore(useShallow(state => ({
    budgets: state.budgets,
    getBudgets: state.getBudgets
  })));
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<Project>();

  const getProject = async () => {
    setIsLoading(true);
    const project = await getProjectById(Number(projectId), (project) => setProject(project));
    await getBudgets(Number(projectId))
    setIsLoading(false)
    if (project === null) return;

  };

  const locationReact = useLocation();
  const navigateReact = useNavigate();

  const goLast = () => {
    const urls = locationReact.pathname.split('/').filter(state => state !== '');
    navigateReact('/' + urls.slice(0, urls.length - 2).join('/'))

  }
  
  useEffect(() => {
    getProject();
    
  }, [projectId]);

  return (
    <ReturnLayout
      returnFunction={goLast}
      title="Proyecto"
      paddingContent={false}
    >

      <div className=" p-4 gap-4 flex  min-h-[115px]">
        {
          (isLoading)
            ? <ClientInfoSkeletonCard />
            : (
              <>
                <IconBlueCircle bgColor="bg-customOrange" />
                <div>
                  <h3 className="font-medium ">Descripcion: {project?.description}</h3>
                  <h3 className="font-medium ">Fecha: <span className="font-normal">{formaDate(project?.fecha as string)}</span></h3>

                </div>
              </>
            )

        }
      </div>
      <div className=" -translate-x-1/2 relative left-1/2">
        <PayInfoCard />
      </div>

      <div className="p-6">
        <h4 className="font-medium text-2xl mb-2">Documentos</h4>
        <div className="grid-cols-1 gap-2 grid">
          {
            (budgets.length === 0)
              ? (
                <NotDataCreated text="Aún no creaste documentos" />
              ) : (
                budgets.map((d, i) => <DocumentItem key={i} title="Presupuesto" status={1} />)
              )
          }
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-medium text-2xl mb-2">Borradores</h4>

        <NotDataCreated text="No hay documentos en curso" />
      </div>
      <FlotatingButton className="w-14 h-14" circle onClick={() => setIsOpen(true)}>
        <AddIcon />
      </FlotatingButton>
      <Modal
        isOpen={isOpen}
        title={"Titulo del proyecto"}
        onClose={() => setIsOpen(false)}
      >
        <div className="space-y-4">
          <p>Elige el tipo de documento</p>
          <ReusableButton
            onClick={() => {
              setIsOpen(false);
              navigate(`new-budget/`);
            }}
          >
            Presupuesto
          </ReusableButton>
          <ReusableButton
            onClick={() => {
              setIsOpen(false);
              navigate(`/crear-acuerdo-obra/${projectId}`);
            }}
          >
            Acuerdo de obra
          </ReusableButton>
        </div>
      </Modal>
    </ReturnLayout>
  );
};
