import { NotDataCreated, PayInfoCard, IconBlueCircle } from "@/app/components";
import { DocumentItem, DocumentItemProps } from "@/app/components/DocumentItem";
import { AddIcon } from "@/assets/icons/AddIcon";
import { Project } from "@/interfaces";
import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useProjectStore } from "@/store/projectStore";
import { FlotatingButton, Modal, ReusableButton } from "@/ui/components/";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProjectInfoPage = () => {
  const draft = [
    { title: "Presupuesto", status: 1 },
    { title: "Acuerdo de obra", status: 2 },
    { title: "Materiales", status: 3 },
  ] as DocumentItemProps[];

  const navigate = useNavigate();
  const { projectId } = useParams();
  const getProjectById = useProjectStore(state => state.getProjectById);

  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<Project>();

  const getProject = async () => {
    const project = await getProjectById(Number(projectId));
    console.log("🚀 ~ getProject ~ project:", project);
    if (project === null) return;
    setProject(project);
  };

  useEffect(() => {
    getProject();
  }, [projectId]);

  return (
    <ReturnLayout
      returnFunction={() => navigate(-1)}
      title="Proyecto"
      paddingContent={false}
    >
      <div className=" p-4 gap-4 flex ">
        <IconBlueCircle bgColor="bg-customOrange" />
        <div>{project?.description}</div>
      </div>
      <div className=" -translate-x-1/2 relative left-1/2">
        <PayInfoCard />
      </div>

      <div className="p-6">
        <h4 className="font-medium text-2xl mb-2">Documentos</h4>
        <div className="grid-cols-1 gap-2 grid">
          {
            draft.length === 0 ? (
              <NotDataCreated text="Aún no creaste documentos" />
            ) : (
              draft.map((d, i) => <DocumentItem key={i} {...d} />)
            )
          }
        </div>
        {/* <NotDataCreated  text="Aún no creaste documentos" /> */}
      </div>
      <div className="p-6">
        <h4 className="font-medium text-2xl mb-2">Borradores</h4>

        <NotDataCreated text="No hay documentos en curso" />
      </div>
      <FlotatingButton onClick={() => setIsOpen(true)}>
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
              navigate(`/new-budget/${projectId}`);
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
