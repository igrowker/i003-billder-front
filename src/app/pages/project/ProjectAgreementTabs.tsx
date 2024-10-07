import { ReturnLayout } from "@/layouts/ReturnLayout";
import { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectAgreementTab1 } from "./ProjectAgreementTab1";
import { ProjectAgreementTab3 } from "./ProjectAgreementTab3";
import { ProjectAgreementTab4 } from "./ProjectAgreementTab4";
import { ProjectAgreementTab2 } from "./ProjectAgreementTab2";
import { Project } from "@/app/types";
import { projects } from "@/mock";

enum ProjectTabs {
  Initial = 1,
  paymentMethod = 2,
  paymentTerms = 3,
  EndTab = 4,
}

export const ProjectAgreementTabs = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState(ProjectTabs.Initial);

  const [projectData, setProjectData] = useState<Project | undefined>();

  const navigate = useNavigate();
  const { projectId } = useParams();

  useEffect(() => {
    const selectedProject = projects.find(p => p.id === Number(projectId));
    setProjectData(selectedProject);
  }, [projectId]);

  const handleNextTab = () => {
    const nextTab = tab == ProjectTabs.EndTab ? null : tab + 1;
    if (nextTab === null) return;
    startTransition(() => {
      setTab(nextTab);
    });
  };
  const handleReturnTab = () => {
    const tabToChange = tab == ProjectTabs.Initial ? tab : tab - 1;
    if (tabToChange == tab) return navigate("/home");
    startTransition(() => {
      setTab(tabToChange);
    });
  };

  return (
    <ReturnLayout
      isPending={isPending}
      title="Crear acuerdo de obra"
      returnFunction={handleReturnTab}
    >
      {/* tabs */}
      {tab === ProjectTabs.Initial && (
        <ProjectAgreementTab1
          handleContinue={handleNextTab}
          projectData={projectData}
        />
      )}
      {tab === ProjectTabs.paymentMethod && (
        <ProjectAgreementTab2 handleContinue={handleNextTab} />
      )}
      {tab === ProjectTabs.paymentTerms && (
        <ProjectAgreementTab3 handleContinue={handleNextTab} />
      )}
      {tab === ProjectTabs.EndTab && <ProjectAgreementTab4 />}
    </ReturnLayout>
  );
};
