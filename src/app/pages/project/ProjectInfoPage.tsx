import { NotDataCreated, PayInfoCard, IconBlueCircle } from "@/app/components";
import { DocumentItem, DocumentItemProps } from "@/app/components/DocumentItem";
import { WhatsappIcon } from "@/assets/icons/";
import { AddIcon } from "@/assets/icons/AddIcon";
import { Project } from "@/interfaces";
import { ReturnLayout } from "@/layouts/ReturnLayout";
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
  



  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<Project | undefined>();
  const projects = [] as Project [];
  useEffect(() => {
    const selectedProject = projects.find(p => p.id === Number(projectId));
    setProject(selectedProject);
  }, [projectId]);

  return (
    <ReturnLayout
      backgroundColor="bg-customOrange"
      returnFunction={() => navigate(-1)}
      title="Proyecto"
      paddingContent={false}
    >
      <div className="bg-customOrange p-4 gap-4 flex min-h-[200px]">
        <IconBlueCircle />
        <div>
          <div className="flex gap-2">
            <h4 className="font-medium text-lg">{project?.description}</h4>
            <button>
              <WhatsappIcon />
            </button>
          </div>
          <div className="text-gray-700 text-sm">
            <div className="mt-1 flex gap-4 ">
              <p>{project?.description}</p>
              <p>
                <span>DNI:</span> <span>{project?.description}</span>
              </p>
            </div>
            <p>{project?.description}</p>
            <p>
              <span>{project?.description}</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" -translate-y-1/2 -translate-x-1/2 relative left-1/2">
        <PayInfoCard />
      </div>

      <div className="p-6">
        <h4 className="font-medium text-2xl mb-2">Documentos</h4>
        <div className="grid-cols-1 gap-2 grid">
          {draft.length === 0 ? (
            <NotDataCreated text="Aún no creaste documentos" />
          ) : (
            draft.map((d, i) => <DocumentItem key={i} {...d} />)
          )}
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
